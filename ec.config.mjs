import { defineEcConfig } from 'astro-expressive-code';

export const rehypeExpressiveCodeOptions = {
	themes: ['catppuccin-latte', 'catppuccin-macchiato'],
	customizeTheme: (theme) => { theme.name = theme.type },
	useDarkModeMediaQuery: false,
};
export default defineEcConfig(rehypeExpressiveCodeOptions);
