<style>
  @import url('../../prism-duotone-sea.css');
  @import url('../../custom-theme.css');
</style>
<script>
  import { onMount } from 'svelte'
  import MediaQuery from "../../components/mediaQuery.svelte"
  export let title, date, update, categories, indexs

  onMount(() => {
    const highlights = document.querySelectorAll("pre[class*='language-']")

    const copyToClipboard = str => {
      const el = document.createElement("textarea") 
      el.value = str 
      el.setAttribute("readonly", "")
      el.style.position = "absolute"
      el.style.left = "-9999px" 
      document.body.appendChild(el) 
      const selected =
        document.getSelection().rangeCount > 0 
          ? document.getSelection().getRangeAt(0) 
          : false 
      el.select() 
      document.execCommand("copy") 
      document.body.removeChild(el) 
      if (selected) {
        document.getSelection().removeAllRanges() 
        document.getSelection().addRange(selected)
      }
    }    

    const handleCopyClick = (evt) => {
      const { children } = evt.target.parentElement
      const { innerText } = Array.from(children)[0]
      copyToClipboard(innerText)
    }
    
    highlights.forEach(div => {
      const copy = document.createElement("button")
      copy.classList.add("copy-button")
      copy.innerHTML = "Copy"
      copy.addEventListener("click", handleCopyClick)
      div.append(copy)
    })
  })
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
</svelte:head>

<div class="flex flex-row w-full">
  <section class="w-3/4">
    <h1 class="lg:text-5xl text-2xl">{title}</h1>
    <div class="pt-8 w-40 border-b-2" />
    <div class="pt-3">
      <p>작성일: {date}</p>
      {#if update}
      <p>수정일: {update}</p>
      {/if}
    </div>
    <div class="mt-20">
      <slot />
    </div>
  
    <section class="mt-14">
      <hr class="h-px border-0 bg-gradient-to-r from-cyan-500 to-blue-500" />
      <div class="flex sm:flex-row flex-col items-center my-11">
        <img class="w-28 h-28 mb-10 sm:mb-0 rounded-full flex" src="/my-profile.jpg" alt="my profile" />
        <div class="ml-8">
          <p class="pb-4">프론트엔드 개발자 윤정현 입니다. <br />개발자 경험을 향상시키기 위해 노력합니다 :)</p>
          <ul>
            <li>
              <p class="font-bold">EMAIL</p>
              <p>nova940116@gmail.com</p>
            </li>
            <li>
              <p class="font-bold">GITHUB</p>
              <a href="https://github.com/nova940116">https://github.com/nova940116</a>
            </li>
            <li>
              <p class="font-bold">INSTAGRAM</p>
              <a href="https://www.instagram.com/nova_940116">https://www.instagram.com/nova_940116</a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="h-px border-0 bg-gradient-to-r from-cyan-500 to-blue-500" />
    </section>
  
  
    {#if categories.length}
    <aside class="mt-12">
      <h2 class="text-2xl pb-3">TAG:</h2>
      <ul class="flex">
        {#each categories as category}
        <li class="bg-slate-700 px-3 py-2 mr-2 font-semibold text-xs text-white">
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
    {#if matches}
    <section>
      <ul class="fixed">
        {#each indexs as index}
        <li class="pl-10 py-2 mr-2 text-lg text-white">
          {index}
        </li>
        {/each}
      </ul>
    </section>
    {/if}
  </MediaQuery>
</div>
