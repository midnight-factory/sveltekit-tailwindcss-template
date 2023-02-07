import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
    	})
	],
	kit: {
		adapter: vercel({
			runtime: 'edge'
		}),
		alias:{
			$src: 'src',
		}
	}
};

export default config;
