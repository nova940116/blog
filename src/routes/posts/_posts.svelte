<style>
  @import url('../../prism-a11y-dark.css');
  @import url('../../custom-theme.css');
</style>
<script>
  import Toc from 'svelte-toc'
  import { onMount } from 'svelte'
  import MediaQuery from "../../components/mediaQuery.svelte"
  export let title, date, update, categories

  onMount(() => {
    const hTag = document.querySelectorAll('h')
    console.log(hTag, '@hTag')
  })
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
</svelte:head>

<div class="flex flex-row w-full">
  <section class="w-3/4">
    <p class="lg:text-5xl text-2xl">{title}</p>
    <div class="pt-8 w-40 border-b-2" />
    <div class="pt-3">
      <p>작성일: {date}</p>
      {#if update}
      <p>수정일: {update}</p>
      {/if}
    </div>
    <div class="mt-20">
      <article class="prose prose-lg dark:prose-invert">
        <slot />
      </article>
    </div>
  
    <section class="mt-14">
      <hr class="h-px border-0 bg-gradient-to-r from-cyan-500 to-blue-500" />
      <div class="flex sm:flex-row flex-col items-center my-11">
        <img class="w-28 h-28 mb-10 sm:mb-0 rounded-full flex" src="/my-profile.jpg" alt="my profile" />
        <div class="ml-8">
          <p class="pb-4">프론트엔드 개발자 윤정현 입니다. <br />개발자 경험을 향상시키기 위해 노력합니다 :)</p>
          <ul>
            <li>
              <p class="font-bold">📧 EMAIL</p>
              <p>nova940116@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <hr class="h-px border-0 bg-gradient-to-r from-cyan-500 to-blue-500" />
    </section>
  
  
    {#if categories.length}
    <aside class="mt-12">
      <p class="text-2xl font-semibold pb-3">CATEGORIES -</p>
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
  </section>

  <MediaQuery query="(min-width: 1281px)" let:matches>
    <Toc title='' />
  </MediaQuery>
</div>
