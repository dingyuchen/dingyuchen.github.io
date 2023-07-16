import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { escapeSvelte, mdsvex } from 'mdsvex';
import shiki from 'shiki';


/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: "oldschool"
	},
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({
				theme: 'poimandres'
			})
			// const h = highlighter.codeToHtml(code, { lang })
			const h = shiki.renderToHtml(highlighter.codeToThemedTokens(code, lang), {
				elements: {
					pre({ className, style, children }) {
						console.log(className)
						return `<pre class="${className} shadow-xl" tabindex="0">${children}</pre>`
					}
				}
			})
			console.log(h)
			const html = escapeSvelte(h)
			return `{@html \`${html}\`}`
		}
	},
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({}), mdsvex(mdsvexOptions)],

	extensions: ['.svelte', '.mdx', '.md'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
