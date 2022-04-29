<script>
  import MediaQuery from "../components/mediaQuery.svelte"
  export let posts
  const categorys = []
  posts.map(v => categorys.push(...v.meta.categorys))
</script>


<MediaQuery query="(min-width: 1281px)" let:matches>
  {#if matches}
  <section class="w-80">
    <h2 class="inline-block border-b-2 mb-2">RECENT BLOG POSTS</h2>
    <ul>
      {#each posts as post}
        <li>
          <h2>
            <a href={post.path}>
              {post.meta.title}
            </a>
          </h2>
        </li>
      {/each}
    </ul>
  </section>
  <section>
    <h2 class="inline-block border-b-2 mb-2 mt-8">CATEGORYS</h2>
    <ul class="flex">
      {#each categorys as category}
        <li class="bg-slate-700 px-3 py-2 mr-2 font-semibold text-xs">
          <h2>
            <a href={category}>
              {category}
            </a>
          </h2>
        </li>
      {/each}
    </ul>    
  </section>
  {/if}
</MediaQuery>