---
title: SvelteKit으로 Blog 만들기
date: '2022-04-18'
update: ''
categories:
  - 'SVELTE'
  - 'JAVASCRIPT'
---

![sveltekit-themenail](../post/sveltekit-themenail.png)

## 들어가기

---

이 글 과 블로그는 [Let's learn SvelteKit by building a static Markdown blog from scratch]  
포스트를 바탕으로 작성 & 제작 되었습니다.
[Let's learn SvelteKit by building a static Markdown blog from scratch]: https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog

## Svelte와 Sveltekit 이란

---

Svelte는 여러모로 훌륭한 자바스크립트 프레임워크 입니다.  
적은 코딩량은 물론이고, 가상 DOM을 쓰지 않아 빠르고, 상태관리와 Transition등의 자체 라이브러리 지원도 좋습니다.

SvelteKit은 라우팅, 레이아웃, SSR, Hydrate, SEO등을 지원하는 Svelte Framework 입니다.
React와 Next.js의 관계를 생각하면 쉽습니다.

이 블로그도 Sveltekit을 이용해 만들어졌는데, 뛰어난 개발경험과 빠른 개발속도를 체감 할 수 있었습니다.

## Sveltekit App 생성하기

새 SvelteKit Project를 생성하기 위해서 아래의 명령어를 터미널에 실행시켜 줍시다.

```bash
npm init svelte@next my-app
```

명령어를 실행시켰을 경우 몇가지 선택지가 나오게 됩니다. 아래의 이미지와 같이 "Skeleton Project"를 선택해줍시다.

![sveltekit-terminal-1](../post/sveltekit-terminal-1.png)

그 이후의 선택지에 저는 Typescript, ESlint, Prettier를 선택했으나 원하는대로 선택하시면 됩니다.  
프로젝트 세팅이 완료된 후에 해당 폴더로 이동해서 아래의 명령어를 실행시킵니다.

```bash
npm install
npm run dev -- --open
```

브라우저에서 다음과 같은 화면이 보인다면 최초 세팅이 완료되었습니다.

![welcome-to-sveltekit](../post/welcome-to-sveltekit.png)

앞서 스켈레톤 옵션을 선택했기때문에 말 그대로 골격만 잡혀있는 상태 입니다. 이제 살을 붙여 봅시다.

## Routing

Sveltekit은 디렉토리 기반으로 라우팅 합니다. 라우팅 되는 페이지들은 `src/routes` 경로안에 위치 되어야 합니다.

- `index.svelte` 파일이 메인페이지 입니다.(`/`)
- 파일 명을 `about.svelte` 라고 짓는다면 `/about` 페이지가 됩니다.
- `blog/index.svelte` 파일은 `/blog` 경로의 루트 페이지(`/`)가 됩니다.

## Page 추가하기

`src/routes` 경로에 페이지 몇개를 추가해보겠습니다. `about.svelte` 와 `contact.svelte` 파일을 만들고 다음과 같이 간단히 내용을 적어 주겠습니다.

```svelte
<!--  about.svelte -->
<h1>안녕하세요! Nova 입니다</h1>

<p>이곳은 제 소개 페이지 입니다</p>
```

<br>

```svelte
<!-- contact.svelte -->
<h1>아래의 텍스트를 클릭하세요</h1>

<p><a href="mailto:test@my.id">이메일 주소</a></p>
```

현재 프로젝트의 폴더 구조는 이렇습니다.

```fs
📂 src
┗ 📂 routes
  ┣ 📂 blog
  ┃ ┗ 📜 index.svelte
  ┣ 📜 about.svelte
  ┣ 📜 contact.svelte
  ┗ 📜 index.svelte
```

주소창에서 주소뒤에 `/about` 이나 `/contact` 를 입력하여 들어가면 각 페이지가 보일 것 입니다. `routes` 폴더 안에 페이지가 존재하여 자동으로 라우팅이 되었습니다.

## Layout 추가하기

Header와 Footer 같은 경우 일반적으로 모든 페이지에 쓰이게 되는데, 레이아웃 페이지를 만들면 공통적으로 사용 할 수 있습니다.
`src/routes` 경로에 `__layout.svelte` 라는 이름의 파일을 만들어 줍시다.

```svelte
<!-- __layout.svelte -->
<header>Hi, I'm a header</header>

<main>
	<slot />
</main>

<footer>Hello, I'm the footer.</footer>
```

이제 어느 페이지로 이동하든 헤더와 푸터가 보일 것 입니다.

## Component 만들기

헤더를 컴포넌트로 분리해봅시다. `src` 경로 안에 `lib` 폴더를 만들고, 다시 `components` 폴더를 하나더 만든뒤에 `Header.svelte` 파일을 만들어 줍시다.
현재 경로는 이렇게 되어있습니다.

```fs
📂 src
┣ 📁 routes
┗ 📂 lib
  ┗ 📂 components
    ┗ 📜 Header.svelte
```

`Header.svelte` 파일에 다음 과 같이 내비게이션을 추가합니다.

```svelte
<!-- Header.svelte -->
<header>
	<a href="/">Home</a>

	<nav>
		<ul>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		padding: 1rem;
		background: lightskyblue;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
```

`__layout.svelte` 파일에서 `Header` 컴포넌트를 호출하여 사용합시다. 경로를 보면 `$lib` 이라는 별칭을 확인 할 수 있습니다. 이는 SvelteKit에서 제공하는 기능으로, 상대경로를 입력하지 않아도 되게끔 해줍니다.

```svelte
<!-- __layout.svelte -->
<script>
	import Header from '$lib/components/Header.svelte'
</script>

<Header />
```

<div class="side-note">
`$lib` 은 SvelteKit의 기본 alias 입니다. (상대경로를 입력하지 않아도 되는) 다른이름의 alias를 추가하고 싶다면 `svelte.config.js` 에 추가해야 합니다 
</div>

간단한 Header 스타일링까지 추가된 모습 입니다.

![welcome-to-sveltekit-2](../post/welcome-to-sveltekit-2.png)

## mdsvex를 이용하여 Markdown 추가하기

---

mdsvex란 Svelte 문법을 markdown과 함께 사용하게 해주는 라이브러리 입니다.  
이를 사용하여 Markdown 파일을 HTML로 변환해봅시다.

먼저, 설치를 합니다.

```bash
npm i -D mdsvex
```

다음으로 `svelte.config.js` 파일에 설정을 추가해줍니다.
