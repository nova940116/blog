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
  export let posts
</script>

<section>
  <ul>
    {#each posts as post}
      <li>
        <p>
          <a href={post.path}>
            {post.meta.title}
          </a>
        </p>
        {post.meta.date}
      </li>
    {/each}
  </ul>
</section>
