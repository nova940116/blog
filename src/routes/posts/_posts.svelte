<style>
  @import url('../../prism-duotone-sea.css');
  @import url('../../custom-theme.css');
</style>
<script>
  import { onMount } from 'svelte'
  export let title, date, update

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

<div class="flex flex-col lg:w-2/4 md:w-full">
  <h1 class="text-5xl">{title}</h1>
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
</div>
