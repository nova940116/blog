---
title: Vue 가상 키보드 컴포넌트 만들기
date: '2022-05-10'
update: ''
categories:
  - 'VUE'
  - 'JAVASCRIPT'
  - 'TYPESCRIPT'
---

![vue-virtual-keyboard-themenail](../post/vue-virtual-keyboard-themenail.png)

## 들어가기

---

전 직장에서 키오스크에 들어가는 웹앱을 개발했던적이 있습니다. 키오스크에서 회원가입을 받거나 할 때는 터치스크린을 이용해야 하기 때문에
가상키보드가 필요합니다. Vue를 이용해서 가상키보드를 컴포넌트화 하여, 필요한 부분마다 호출하여 사용 할 수 있도록 해봅시다.

## Vue App 만들기

---

Vue 공식 웹사이트의 [Quick Start] 페이지를 참고하여 Vue App을 만들어주세요. 옵션은 편하신대로 선택하시면 됩니다.
저는 다음과 같은 옵션을 선택했습니다.

- Typescript
- ESLint
- Prettier
- Vue Router

[quick start]: https://vuejs.org/guide/quick-start.html#with-build-tools

App.vue의 불필요한 코드를 걷어내고 다음과 같이 작성해주겠습니다.

```html
<script setup lang="ts">
	import { RouterView } from 'vue-router'
</script>
<template></template>
<template>
	<RouterView />
</template>
```

<br />

```fs
📂 src
┗ 📂 components
  ┗ 📜 VirtualKeyboard.vue
┗ 📂 views
  ┗ 📜 Main.vue
```
