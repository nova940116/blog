---
title: SvelteKit으로 Blog 만들기
date: '2022-04-18'
update: ''
categories:
  - 'SVELTE'
  - 'JAVASCRIPT'
---

![svelte-themenail](../svelte-themenail.png)

## 1장. 깨끗한 코드

### 보이스카우트 규칙

- 코드는 잘 짜기만 했을 때 끝나는 것이 아닌, 시간이 지나도 언제나 깨끗하게 유지해야 한다.
- 보이스카우트 규칙
  `캠프장은 처음 왔을 때 보다 더 깨끗하게 해놓고 떠나라`

```js
const a = 'hi'
console.log(a)
```

```svelte
<script>
	import { prefetch, prefetchRoutes } from '$app/navigation'

	prefetch('/blog') // Loads the blog page in the background

	prefetchRoutes() // Loads ALL routes in the background
</script>
```
