---
title: SvelteKit으로 Blog 만들기
date: '2022-04-18'
update: ''
categories:
  - 'SVELTE'
  - 'JAVASCRIPT'
---

![sveltekit-themenail](../post/sveltekit-themenail.png)

## Svelte와 Sveltekit 이란

---

Svelte는 여러모로 훌륭한 자바스크립트 프레임워크 입니다.  
적은 코딩량은 물론이고, 가상 DOM을 쓰지 않아 빠르고, 상태관리와 Transition등의 자체 라이브러리 지원도 좋습니다.

SvelteKit은 라우팅, 레이아웃, SSR, hydrate, SEO등을 지원하는 Svelte Framework 입니다.
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

## Layout 추가하기

Header와 Footer 같은 경우 일반적으로 모든 페이지에 쓰이게 되는데, 레이아웃 페이지를 만들면 공통적으로 사용 할 수 있습니다.
`src/routes` 경로에 `__layout.svelte` 라는 이름의 파일을 만들어 줍시다.

<p class="text-2xl py-0">참고자료</p>

[Let's learn SvelteKit by building a static Markdown blog from scratch]
[Let's learn SvelteKit by building a static Markdown blog from scratch]: https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
