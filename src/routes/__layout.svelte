<script context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch('/api/posts.json')
    const allPosts = await posts.json()
    return {
      props: {
        posts: allPosts
      }
    }
  }
</script>

<script>
  import { onMount } from 'svelte'
  import RecentPosts from '../components/recentPosts.svelte'
  import "../app.css"
  
  export let posts
  let mode

  onMount(() => { 
    mode = window.localStorage.getItem('mode') || 'dark'
    screen = window.matchMedia("(max-width: 1200px)")
    if(mode === 'dark') window.document.body.classList.add('dark')
    else window.document.body.classList.remove('dark')
  })

  const changeMode = () => {
    mode = mode === 'dark' ? 'white' : 'dark'
    window.localStorage.setItem('mode', mode)
	  window.document.body.classList.toggle('dark')
  }
</script>

<div class="w-screen bg-white dark:bg-dark text-dark dark:text-white flex flex-col">
  <header class="h-12 flex flex-row justify-between p-4 items-center">
    <div>
      <a href="/">노바유니버스 - 블로그</a>
    </div>
    <button on:click={changeMode}>
      {#if mode !== 'dark'}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
      {:else}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      {/if}
    </button>
  </header>
  <section class="h-5 bg-slate-700" />
  
  <main class="p-20 flex flex-row">
    <section>
      <RecentPosts posts={posts} />  
    </section>
    <slot />
  </main>
  
  <footer class="h-12 flex flex-row justify-between p-4 items-center">Hello, I'm the footer.</footer>
</div>