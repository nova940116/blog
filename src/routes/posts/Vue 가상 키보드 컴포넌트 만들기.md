---
title: Vue 한글 가상 키보드 컴포넌트 만들기
date: '2022-05-10'
update: ''
categories:
  - 'VUE'
  - 'JAVASCRIPT'
  - 'TYPESCRIPT'
---

![vue-virtual-keyboard-themenail](../posts/vue-virtual-keyboard-themenail.png)

## 들어가기

---

전 직장에서 키오스크에 들어가는 웹앱을 개발했던적이 있습니다. 키오스크에서 회원가입을 받거나 할 때는 터치스크린을 이용해야 하기 때문에
가상키보드가 필요합니다. 특히 한글을 지원해야 한다면 자음, 모음에 대한 처리가 필요합니다. Vue를 이용해서 가상키보드를 컴포넌트화 하여,
필요한 부분마다 호출하여 사용 할 수 있도록 해봅시다.

## Vue App 만들기

---

Vue 공식 웹사이트의 [Quick Start] 페이지를 참고하여 Vue App을 만들어주세요. 옵션은 편하신대로 선택하시면 됩니다.
저는 다음과 같은 옵션을 선택했습니다.

- Typescript
- ESLint
- Prettier
- Vue Router

[quick start]: https://vuejs.org/guide/quick-start.html#with-build-tools

App.vue의 불필요한 코드를 지우고 다음과 같이 작성합니다.

```html
<!-- App.vue -->
<script setup lang="ts">
	import { RouterView } from 'vue-router'
</script>
<template></template>
<template>
	<RouterView />
</template>
```

<br />

`router/index.ts` 에서(혹은 index.js) rootPath(`/`)에 보일 페이지를 설정해줍니다. `App.view`의 RouterView를 통해 보이게 됩니다.

```js
/* router/index.ts */
import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'main',
			component: Main
		}
	]
})

export default router
```

아직 `views` 경로에 `Main.vue` 파일이 존재하지 않아 실행되지 않습니다. 본격적으로 가상키보드 컴포넌트를 만들어 보겠습니다.

## 가상키보드 컴포넌트 만들기

---

먼저 `src/components` 경로에 `VirtualKeyboard.vue` 파일을 만들고 다음과 같이 적겠습니다.

```HTML
<!-- VirtualKeyboard.vue -->
<template>
  <table class="keyboard" @click="sendChar">
    <tr>
      <td>ㅂ</td>
      <td>ㅈ</td>
      <td>ㄷ</td>
      <td>ㄱ</td>
      <td>ㅅ</td>
      <td>ㅛ</td>
      <td>ㅕ</td>
      <td>ㅑ</td>
      <td>ㅐ</td>
      <td>ㅔ</td>
      <td>ㅖ</td>
      <td>ㅒ</td>
    </tr>
    <tr>
      <td>ㅁ</td>
      <td>ㄴ</td>
      <td>ㅇ</td>
      <td>ㄹ</td>
      <td>ㅎ</td>
      <td>ㅗ</td>
      <td>ㅓ</td>
      <td>ㅏ</td>
      <td>ㅣ</td>
    </tr>
    <tr>
      <td>ㅋ</td>
      <td>ㅌ</td>
      <td>ㅊ</td>
      <td>ㅍ</td>
      <td>ㅠ</td>
      <td>ㅜ</td>
      <td>ㅡ</td>
      <td>X</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import Hangul from 'hangul-js'

const emit = defineEmits(['sendChar'])
let charStore: string[] = []

const sendChar = (event: any) => {
  event.target.innerText === 'X'
  ? charStore.splice(charStore.length-1, charStore.length)
  : charStore.push(event.target.innerText)
  emit('sendChar', Hangul.assemble(charStore))
}
</script>

<style>
.keyboard {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #dbdbdb;
  padding: 20px;
  font-size: 40px;
  font-weight: 800;
  background-color: #fff;
}
tr {
  display: flex;
  height: 130px;
}
td {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  user-select: none;
}
td:active {
  background-color: #dbdbdb;
}
</style>
```

Table 태그로 키보드 배열을 그려준뒤, Click 이벤트가 발생했을 때 `sendChar` 메서드가 실행됩니다. `sendChar` 메서드에서는 `emit` 을 통해
Click된 값을 부모에게 전달 합니다. 여기까지가 간단한 동작 원리이고, 좀 더 자세히 살펴보면, 2가지 포인트가 있습니다.

1. 이벤트 위임을 통해 최상위 부모 요소에만 Click 이벤트를 주고, 하위 요소의 값을 받고 있습니다.
2. 한글의 경우 첫 클릭이 자음 이고 이후에 모음을 클릭한다면, 두개의 단어가 합쳐져야 합니다. `charStore` 라는 배열이 있을 때, 'ㅇ' 다음 'ㅇ' 를 클릭하면 배열에는 ['ㅇ', 'ㅇ'] 가 되어야 하지만, 'ㅇ' 다음 'ㅏ'를 클릭하면 ['아'] 가 되어야 합니다. 이 복잡한 조건을 `hangul-js` 라는 라이브러리가 손쉽게 해결해줍니다.

`Hangul.assemble(charStore)` 부분이 분리되어있는 자음, 모음을 합쳐주는 역할을 합니다. 반대로 완전한 문장을 자음, 모음으로 분리하는 `disassemble` 기능도 있습니다.

'X' 표시가 된 텍스트를 클릭했을때는 이전에 클릭했던 문자를 지워줍니다.

<div class="side-note">
키보드 배열에 쌍자음이 빠져있는 상태이나, 필요하다면 추가 할 수 있습니다. 숫자 키패드의 경우 한글 처리가 필요없으므로 더 쉽습니다.
</div>

이제 가상키보드 컴포넌트가 전달해주는 값을 부모가 받아와야 합니다. `views/Main.vue` 파일을 만들고 다음과 같이 입력하겠습니다.

```html
<!-- Main.vue -->
<script setup lang="ts">
	import { ref } from 'vue'
	import VirtualKeyboard from '../components/VirtualKeyboard.vue'

	let text = ref<string>('')

	const receiveChar = (char: string) => {
		text.value = char
	}
</script>

<template>
	<input v-model="text" type="text" />
	<VirtualKeyboard @send-char="receiveChar" />
</template>
```

`VirtualKeyboard.vue` 파일에서 `sendChar` 라는 이름으로 부모에게 값을 전달했고, `Main.vue` 파일에서 `@send-char` 바인딩을 통해
`receiveChar` 함수를 호출했고, `receiveChar` 의 매개변수 `char` 에 전달받은 값이 존재하게 됩니다.
(Vue2에서는 부모가 받아올때도 @sendChar 와 같이 이름을 동일하게 적어야 했는데, Vue3부터는 선언규칙이 바뀐 것 같습니다.)

현재 디렉토리 구조는 이렇습니다.

```fs
📂 src
┗ 📂 components
  ┗ 📜 VirtualKeyboard.vue
┗ 📂 views
  ┗ 📜 Main.vue
```

## 결과 확인하기

---

키배열에 있는 글자들을 클릭하면 위의 `input` 창에 한글이 표시됩니다.

<video autoplay loop muted playsinline>
  <source src="../videos/virtual-keyboard.webm" type="video/webm">
</video>
