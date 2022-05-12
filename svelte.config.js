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
    adapter: vercel()
  },
	extensions: ['.svelte', '.md'],
}

export default config;
