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

<svelte:head>
  <title>노바 블로그</title>
  <meta name="title" content="노바 블로그" />
  <meta name="keywords" content="개발 블로그, 프론트엔드, React, Svelte, Vue" />
  <meta property="og:title" content="노바 블로그" />
  <meta property="og:url" content="https://blog.novauniverse.me" />
  <meta property="og:description" content="개발자의, 개발자에 의한, 개발자를 위한, 프론트엔드 개발자를 위한 웹 지식에 대한 포스트를 게재하는 노바 블로그." />
</svelte:head>

<section class="w-full xl:w-2/4 p-8 xl:p-0">
  {#each posts as post}
    <li class="mb-24 list-none">
      <article class="block lg:grid lg:grid-cols-2 lg:gap-12">
        <a class="w-full" href={post.path}>
          <img class="w-full h-auto" src={post.meta.image} alt={post.meta.image}/>  
        </a>
      
        <div class="mt-4 lg:mt-0">
          <h1>
            <a class="text-2xl font-bold hover:text-slate-400" href={post.path}>{post.meta.title}</a>
          </h1>
          <p class="mt-5">{post.meta.summary}</p>
        </div>
      </article>
    </li>
  {/each}
</section>
