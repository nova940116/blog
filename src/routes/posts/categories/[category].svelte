<script context="module">
  export const load = async ({ params, fetch }) => {
    const currentCategory = params.category
    const response = await fetch('/api/posts.json')
    const posts = await response.json()

    const matchingPosts = posts.filter(post => post.meta.categories.includes(currentCategory))

    return {
      props: {
        posts: matchingPosts
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