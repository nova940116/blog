<script context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch('/api/posts.json')
    const allPosts = await posts.json()
    console.log(allPosts, '@allp')
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

<section class="w-full xl:w-2/4 p-8 xl:p-0">
  <ul>
    {#each posts as post}
      <li>
        <article class="block lg:grid lg:grid-cols-2 lg:gap-12">
          <a class="w-full" href={post.path}>
            <img src={post.meta.image} alt={post.meta.image}/>  
          </a>
        
          <div class="mt-4 lg:mt-0">
            <a class="text-2xl font-bold hover:text-slate-400" href={post.path}>
              {post.meta.title}
            </a>
            <p class="mt-5">{post.meta.summary}</p>
          </div>
        </article>
      </li>
    {/each}
  </ul>
</section>
