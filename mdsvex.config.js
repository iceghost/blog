const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],

	layout: {
		simple: 'src/lib/layouts/Simple.svelte'
	}
};

export default config;
