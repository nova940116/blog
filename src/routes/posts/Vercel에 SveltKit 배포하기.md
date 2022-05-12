---
title: Vercel에 SveltKit 배포하기
date: '2022-05-12'
update: ''
image: '../posts/sveltekit-deploy-vercel-themenail.png'
summary: '일반적인 웹앱의 경우 배포할때 `npm run build` 와 같은 빌드 명령어를 통해 정적파일을 생성하고, 이를 서버에 두는 방식입니다.
SvelteKit이 이와 다른점은 `Adapter` 를 통해 배포할 Target을 미리 지정한 후에 빌드 한다는 것 인데요,
대표적인 정적 컨텐츠 호스팅 서비스중 하나인 `Vercel` 에 SvelteKit을 손쉽게 배포하는 방법을 알아보겠습니다.'
categories:
  - 'SVELTE'
  - 'JAVASCRIPT'
---

## 들어가기

---

일반적인 웹앱의 경우 배포할때 `npm run build` 와 같은 빌드 명령어를 통해 정적파일을 생성하고, 이를 서버에 두는 방식입니다.
SvelteKit이 이와 다른점은 `Adapter` 를 통해 배포할 Target을 미리 지정한 후에 빌드 한다는 것 인데요,
대표적인 정적 컨텐츠 호스팅 서비스중 하나인 `Vercel` 에 SvelteKit을 손쉽게 배포하는 방법을 알아보겠습니다.
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

추가 한 후에 `npm run build` 명령어(혹은 `svelte-kit build`)를 실행시키면 `.vercel_build_output` 라는 이름으로 정적파일이 생성 됩니다.

## Vercel에 배포하기

---

Vercel 사이트에 들어가서 현재의 SvelteKit Repository를 선택한 후에, OUTPUT DIRECTORY 부분을 보면 기본값이 public으로 되어있습니다.
이를 `.vercel_build_output` 으로 바꿔준 후에 배포하면 완료입니다 :)

![sveltekit-deploy-vercel](../posts/sveltekit-deploy-vercel.png)
