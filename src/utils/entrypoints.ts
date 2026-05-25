import { ExpressiveCodeBlock, type RehypeExpressiveCodeOptions } from 'rehype-expressive-code';
import { toHtml } from 'rehype-expressive-code/hast';
import { createRenderer } from 'rehype-expressive-code';
import { rehypeExpressiveCodeOptions } from '../../ec.config.mjs';
import { getCollection } from 'astro:content';

const codes = [
	{ lang: 'cpp', code: 'int main(int argc, char* argv[])' },
	{ lang: 'java', code: 'public static void main(String[] args)' },
	{ lang: 'rust', code: 'fn main()' },
	{ lang: 'python', code: 'if __name__ == "__main__":' },
	{ lang: 'go', code: 'func main()' },
	{ lang: 'haskell', code: 'main :: IO ()' },
] as const;


const renderer = await createRenderer({
	...rehypeExpressiveCodeOptions as RehypeExpressiveCodeOptions,
	frames: false,
});

const toHtmlx = async (code: string, language: string) => {
	const expBlock = new ExpressiveCodeBlock({
		code,
		language,
	});
	const { renderedGroupAst } = await renderer.ec.render(expBlock);
	const html = toHtml(renderedGroupAst);
	return html.replace(
		/class="expressive-code"/g,
		'class="nav-code"',
	);
};

export const entrypointStyles = renderer.themeStyles;

export const entrypoints = await Promise.all(codes.map(async ({ code, lang }) => ({
	highlighted: await toHtmlx(code, lang),
})));

export const combinedCollection = [...(await getCollection("blog")).filter((post) => !post.data.hidden), ...(await getCollection("til")).filter((til) => !til.data.hidden)];