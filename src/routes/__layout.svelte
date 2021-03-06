<script context="module">
	export const load = async ({ fetch, url }) => {
		const currentRoute = url.pathname
		const posts = await fetch('/api/posts.json')
		const recentPosts = await posts.json()

		return {
			props: {
				posts: recentPosts,
				currentRoute
			}
		}
	}
</script>

<script>
	import { onMount } from 'svelte'
	import RecentPosts from '../components/recentPosts.svelte'
	import '../app.css'

	export let currentRoute, posts
	let mode

	onMount(() => {
		mode = localStorage.getItem('mode') || 'dark'
	})

	const changeMode = () => {
		mode = mode === 'dark' ? 'white' : 'dark'
		const message = {
			type: 'set-theme',
			theme: mode === 'dark' ? 'github-dark' : 'github-light'
		}

		const utterances = document.querySelector('iframe')
		if (utterances) utterances.contentWindow.postMessage(message, 'https://utteranc.es')

		localStorage.setItem('mode', mode)
		document.documentElement.classList.toggle('dark')
	}
</script>

<svelte:head>
	<script>
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (localStorage.getItem('mode') === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	</script>
</svelte:head>
<div class="w-screen max-w-full bg-white dark:bg-dark text-dark dark:text-white flex flex-col">
	<header class="h-12 flex flex-row justify-between p-4 items-center">
		<div>
			<a href="/" class="text-lg font-bold">Nova Blog</a>
		</div>
		<button on:click={changeMode} aria-label="change view mode">
			{#if mode !== 'dark'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
				<p class="hidden">dark</p>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
				<p class="hidden">light</p>
			{/if}
		</button>
	</header>
	<section class="h-5 dark:bg-slate-700 bg-dark" />

	{#key currentRoute}
		<main class="xl:p-20 flex flex-row min-h-screen">
			<section>
				<RecentPosts {posts} />
			</section>
			<slot />
		</main>
	{/key}

	<section class="h-5 dark:bg-slate-700 bg-dark" />
	<footer class="h-auto flex flex-col sm:flex-row p-4 sm:p-12 sm:justify-between">
		<nav class="">
			<ul>
				<p class="font-bold">LINKS</p>
				<li class="underline"><a href="https://github.com/nova940116" target="_blank" rel="noopener">GITHUB</a></li>
				<li class="underline"><a href="mailto:nova940116@gmail.com">EMAIL</a></li>
				<!-- <li class="underline"><a href="https://www.facebook.com/junghyun.yoon.35912/" target="_blank" rel="noopener">FACEBOOK</a></li> -->
			</ul>
		</nav>
		<section class="mt-6 md:mt-0">
			<p class="italic">2022 Nova(Jeonghyun Yoon)</p>
			<p class="italic">
				Made With
				<a class="underline" href="https://kit.svelte.dev/">SvelteKit</a>; hosted on
				<a class="underline" href="https://vercel.com/">Vercel</a>
			</p>
		</section>
	</footer>
</div>
