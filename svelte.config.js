import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import vercel from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(), 
		mdsvex({ 
			extensions: ['.md'],
			layout: {
				posts: 'src/routes/posts/_posts.svelte'
			},	
		})
	],
  kit: {
    floc: true, // interest-cohort warning 제거(floc)
    adapter: vercel({
      // if true, will deploy the app using edge functions
      // (https://vercel.com/docs/concepts/functions/edge-functions)
      // rather than serverless functions
      edge: false,

      // an array of dependencies that esbuild should treat
      // as external when bundling functions
      external: [],

      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app
      split: false
    })
  },
	extensions: ['.svelte', '.md'],
}

export default config;
