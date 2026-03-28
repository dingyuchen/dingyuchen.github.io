import { createHighlighter, type BundledTheme } from 'shiki';
import { shikiThemes } from '../../astro.config.mjs';

const codes = [
	{ lang: 'cpp', code: 'int main(int argc, char* argv[])' },
	{ lang: 'java', code: 'public static void main(String[] args)' },
	{ lang: 'rust', code: 'fn main()' },
	{ lang: 'python', code: 'if __name__ == "__main__":' },
	{ lang: 'go', code: 'func main()' },
	{ lang: 'haskell', code: 'main :: IO ()' },
	{ lang: 'ocaml', code: 'let () =' },
] as const;

const themes = Object.values(shikiThemes) as BundledTheme[];

const highlighter = await createHighlighter({
	themes,
	langs: codes.map(c => c.lang),
});

const toHtml = (code: string, lang: string) => {
	const html = highlighter.codeToHtml(code, { lang, themes: shikiThemes });
	return html.replace(/^<pre[^>]*><code[^>]*>/, '').replace(/<\/code><\/pre>$/, '');
};

export const entrypoints = codes.map(({ code, lang }) => ({
	highlighted: toHtml(code, lang),
}));
