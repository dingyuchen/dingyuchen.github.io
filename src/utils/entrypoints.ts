import { createHighlighter } from 'shiki';

const highlighter = await createHighlighter({
	themes: ['catppuccin-latte', 'catppuccin-macchiato'],
	langs: ['cpp', 'java', 'rust', 'python', 'go', 'kotlin'],
});

const toHtml = (code: string, lang: string) => {
	const html = highlighter.codeToHtml(code, { lang, themes: { light: 'catppuccin-latte', dark: 'catppuccin-macchiato' } });
	return html.replace(/^<pre[^>]*><code[^>]*>/, '').replace(/<\/code><\/pre>$/, '');
};

export const entrypoints = [
	{ highlighted: toHtml('int main(int argc, char* argv[])', 'cpp') },
	{ highlighted: toHtml('public static void main(String[] args)', 'java') },
	{ highlighted: toHtml('fn main()', 'rust') },
	{ highlighted: toHtml('if name == "__main__":', 'python') },
	{ highlighted: toHtml('func main()', 'go') },
];
