<script>
  import MediaQuery from "../components/mediaQuery.svelte"
  export let posts
</script>


<MediaQuery query="(min-width: 1281px)" let:matches>
  {#if matches}
  <section class="pr-4">
    <p class="border-b-2">RECENT BLOG POSTS</p>
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
  {/if}
</MediaQuery>