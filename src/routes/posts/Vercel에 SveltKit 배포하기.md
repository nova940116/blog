---
title: Vercel에 SveltKit 배포하기
date: '2022-05-12'
update: ''
image: '../posts/vue-virtual-keyboard-themenail.png'
summary: '키오스크에서 회원가입을 받거나 할 때는 터치스크린을 이용해야 하기 때문에
가상키보드가 필요합니다. 특히 한글을 지원해야 한다면 자음, 모음에 대한 처리가 필요합니다. Vue를 이용해서 가상키보드를 컴포넌트화 하여,
필요한 부분마다 호출하여 사용 할 수 있도록 해봅시다.'
categories:
  - 'SVELTE'
  - 'JAVASCRIPT'
---

## 들어가기

---

일반적인 웹앱의 경우 배포할때 `npm run build` 와 같은 빌드 명령어를 통해 정적파일을 생성하고, 이를 서버에 두는 방식입니다.
SvelteKit이 이와 다른점은 `Adapter` 를 통해 배포할 Target을 미리 지정한 후에 빌드 한다는 것 인데요,
SvelteKit을 대표적인 정적 컨텐츠 호스팅 서비스중 하나인 `Vercel` 에 손쉽게 배포하는 방법을 알아보겠습니다.
Sveltekit App은 이미 설치되어 있다고 가정하겠습니다.

## 배포를 위한 Adapter 설정하기

---

먼저 `svelte.config.js` 파일에서 배포와 관련된 구성을 추가해주어야 합니다.

```js
import vercel from '@sveltejs/adapter-vercel'

const config = {
  ...
  kit: {
    adapter: vercel()
  }
}
```
