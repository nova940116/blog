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
  import RecentPosts from '../components/recentPosts.svelte'
  export let posts
</script>

<section class="p-4 flex flex-row">
  <RecentPosts posts={posts} />  
  <ul>
    {#each posts as post}
      <li>
        <h2>
          <a href={post.path}>
            {post.meta.title}
          </a>
        </h2>
        {post.meta.date}
      </li>
    {/each}
  </ul>
</section>
