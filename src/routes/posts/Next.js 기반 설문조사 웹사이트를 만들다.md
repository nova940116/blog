---
title: Next.js 기반 설문조사 웹사이트를 만들다
date: '2022-05-13'
update: ''
image: '../posts/survey-themenail.png'
summary: '문득 치킨에 대해 궁금한 점이 생겼습니다. 사람들이 후라이드를 제일 좋아하는지, 아니면 양념 또는 뿌링클과 같은 다른 치킨을 더 좋아하는지가 궁금해졌습니다.
이에 대한 설문조사를 실시해서 결과를 확인해보면 어떨까라는 생각에 `Next.js` 를 사용하여 설문조사 웹사이트를 개발하여 배포해봤습니다.'
categories:
  - 'REACT'
  - 'JAVASCRIPT'
  - 'NEXT.JS'
---

## 들어가기

---

문득 치킨에 대해 궁금한 점이 생겼습니다. 사람들이 후라이드를 제일 좋아하는지, 아니면 양념 또는 뿌링클과 같은 다른 치킨을 더 좋아하는지가 궁금해졌습니다.
이에 대한 설문조사를 실시해서 결과를 확인해보면 어떨까라는 생각에 `Next.js` 를 사용하여 설문조사 웹사이트를 개발하여 배포해봤습니다.

링크 | [https://survey.novauniverse.me/chicken]

[https://survey.novauniverse.me/chicken]: https://survey.novauniverse.me/chicken

## 설문 항목 작성 페이지

---

일회성 설문조사로 끝내는게 아닌, 다른 설문지 또한 작성 할 수있도록 개발을 했고, 이를 위해 항목 작성 페이지가 필요했습니다.
항목 작성 페이지에서는 질문과 항목을 원하는 만큼 추가해서 작성하게끔 개발했는데, 버튼을 동적으로 생성해야했고, 또 그 동적버튼에
click event를 줘서 handling하는 과정이 생각보다 어려웠습니다.

```tsx
/* 설문 항목 작성 페이지 */
const [survey, setSurvey] = useState<any>([{ question: '', options: ['', '']}])

const addQuestion = () => {
  setSurvey(survey.concat([{ question: '', options: ['', '']}]))
}

const addItem = (qi: number) => {
  const newArr = [...survey]
  newArr[qi].options = newArr[qi].options.concat([''])
  setSurvey(newArr)
}

const handleChange = (event: any, type: string, qi: number, oi?: any) => {
  const newArr = [...survey]
  type === 'QUESTION' ? newArr[qi].question = event.target.value : newArr[qi].options[oi] = event.target.value
  setSurvey(newArr)
}
```
`React` 의 경우 state를 직접 접근해서 값을 변경 할 수 없도록 되어있어서 질문이나 항목을 추가하기 위해서 다음의 과정을 거쳐야 했습니다.

1. `survey` state의 값을 임의의 변수에 복사한다.
2. 임의 변수에 질문 혹은 항목을 인덱스에 맞게끔 추가한다.
3. 질문 내용이나 항목의 값이 입력되는 경우에도 임의 변수에 입력값을 바인딩한다. 
4. `setSurvey` 메서드로 임의 변수의 값을 다시 `survey` 에 할당해준다. 

<video autoplay loop muted playsinline>
  <source src="../videos/survey-create.webm" type="video/webm">
</video>

해당 과정을 거쳐 `JSX` 렌더링 까지 처리하고 난 후 모습입니다. 원하는 만큼 질문과 항목을 추가 할 수 있게되었습니다.

## 설문 전 로그인 받기

---

한 사람이 중복 설문 하는 것을 방지하기 위해 인증과정이 필요했습니다. Soical Login을 이용해서 간단한 인증 후에 설문을 시작 할 수 있도록
처리 했습니다. `Next.js` 에는 `NextAuth` 라는 훌륭한 Social Login 지원 라이브러리가 있었기에 수월하다면 수월하게
구현 할 수 있었습니다.

![설문조사 웹사이트 메인화면](../posts/survey-main.png)

<div class="side-note">
Nextauth를 사용 할 때, 배포 환경에서는 secret키가 필요합니다. [...nextauth].js 파일에 꼭 추가해주세요(한참 헤맸음)
</div>

## 설문 항목 선택 및 결과 보기

---

![설문조사 웹사이트 설문지 작성화면](../posts/survey-question.png)
설문지에 나열된 항목 중 하나씩을 선택하고, 제출을 하게되었을때는 곧바로 현재까지의 설문조사 결과를 확인 할 수있도록 했습니다.
설문 작성을 하는 사람들도 결과를 알 수 있어야 호기심으로라도 설문을 작성해 줄 것 같았습니다.

![설문조사 웹사이트 설문결과화면](../posts/survey-result.png)
결과 페이지에서는 그래프로 한눈에 설문 결과를 볼 수 있습니다. 그래프는 [ApexCharts]를 이용해 그렸습니다. 해당 이미지는 예전에 캡쳐해놓은거라
참여자가 5명인데, 지금은 더 늘긴했습니다. 궁금하시면 참여후에 확인해보시길 :)

[ApexCharts]: https://apexcharts.com/

## 얻은점

---

1. 표본이 많지는 않지만, 설문 결과가 예상했던것과 비슷하다.
2. `Next.js` 와 `CSR`, `SSR` 에 대해 좀 더 이해 할 수 있는 좋은 프로젝트 였다.
3. `React` 를 쓰면 `JavaScript` 실력이 향상된다. 코드가 길어지기 때문에.