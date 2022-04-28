<script>
  export let title
  export let date
</script>

<div class="flex flex-col">
  <h1>{title}</h1>
  <p>{date}</p>
  <slot />
</div>
