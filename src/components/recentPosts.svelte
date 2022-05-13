<script>
  export let posts
  import MediaQuery from "../components/mediaQuery.svelte"
  let categories = []
  posts.map(v => categories.push(...v.meta.categories))
  categories = [...new Set(categories)]
</script>


<MediaQuery query="(min-width: 1281px)" let:matches>
  {#if matches}
  <section class="w-80">
    <p class="inline-block border-b-2 dark:border-slate-600 border-dark mb-2 font-semibold">RECENT BLOG POSTS</p>
    <ul>
      {#each posts as post}
        <li>
          <p>
            <a href={post.path}>
              {post.meta.title}
            </a>
          </p>
        </li>
      {/each}
    </ul>
  </section>

  <section class="w-80">
    <p class="inline-block border-b-2 mb-2 mt-8 dark:border-slate-600 border-dark font-semibold">CATEGORIES</p>
    {#if categories.length}
    <aside>
      <ul class="flex flex-wrap">
        {#each categories as category}
          <li class=" dark:bg-slate-700 bg-slate-300  px-3 py-2 mr-1.5 mt-1.5 font-semibold text-xs dark:text-white text-black">
            <a href="/posts/categories/{category}">
              {category}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
    {/if} 
  </section>
  {/if}
</MediaQuery>