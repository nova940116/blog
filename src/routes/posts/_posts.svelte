<style>
  @import url('../../prism-a11y-dark.css');
  @import url('../../custom-theme.css');
</style>
<script>
  import { onMount } from 'svelte'
  import Toc from 'svelte-toc'
  export let title, date, update, categories, image, summary, mode
  onMount(async () => { mode = window.localStorage.getItem('mode') || 'dark' })
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="keywords" content={categories} />
  <meta property="og:title" content={title} />
  <meta property="og:url" content="https://blog.novauniverse.me" />
  <meta property="og:image" content={image} />
  <meta property="og:description" content={summary} />
</svelte:head>

<div class="flex flex-row w-screen">
  <div class="flex flex-col items-center w-screen xl:w-3/4">
    <section class="p-4 lg:p-12 xl:p-0">
      <p class="lg:text-4xl text-2xl font-bold">{title}</p>
      <div class="pt-8 w-40 border-b-2" />
      <div class="pt-3">
        <p>작성일: {date}</p>
        {#if update}
        <p>수정일: {update}</p>
        {/if}
      </div>
      <div class="mt-20">
        <article class="prose prose-lg dark:prose-invert">
          <img class="mb-16" src={image} alt={image}/>  
          <slot />
        </article>
      </div>
    
      <section class="mt-14">
        <hr class="h-px border-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500" />
        <div class="flex sm:flex-row flex-col sm:items-center my-11">
          <div class="flex justify-center">
            <img class="w-32 h-32 mb-10 sm:mb-0 rounded-full flex" src="/my-profile.jpg" alt="my profile" />
          </div>
          <div class="sm:ml-8">
            <p class="pb-4 italic">프론트엔드 개발자 윤정현 입니다. <br />개발자 경험을 향상시키기 위해 노력합니다 :)</p>
            <ul>
              <li>
                <p class="font-bold">📧 EMAIL</p>
                <p>nova940116@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <hr class="h-px border-0 bg-gradient-to-r from-fuchsia-500 to-cyan-500" />
      </section>
    
    
      {#if categories.length}
      <aside class="mt-12">
        <p class="text-xl font-semibold pb-3">🏷 태그</p>
        <ul class="flex">
          {#each categories as category}
          <li class="dark:bg-slate-700 bg-slate-200  px-3 py-2 mr-2 font-semibold text-xs dark:text-white text-black">
              <a href="/blog/categories/{category}">
                {category}
              </a>
            </li>
          {/each}
        </ul>
      </aside>
      {/if}  
      <!-- comment -->
      <div class="mt-8">
        <script src="https://utteranc.es/client.js"
          repo="nova940116/blog"
          issue-term="pathname"
          theme={mode === 'dark' ? "github-dark" : "github-light"}
          crossorigin="anonymous"
          async>
        </script>
      </div>

    </section>
  </div>

  <Toc title='' breakpoint="1431" />  
</div>
