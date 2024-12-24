import DarkModeSwitch from '@block/collections/DarkModeSwitch';

// ? 컴포넌트 모음집
const Components = () => (
  <div>
    <DarkModeSwitch />
  </div>
)

export default Components;

// 얜 뭐죠
// 앤 왜 .jsx 이
// 얘도 페이지 입죠당
// 엥 뭐야 왜 jsx지
// /compoennts
// 얘는 아까 얘기했던 유틸리티 컴포넌트를 모아놓는 곳이에용
// 여기다 하나하나 개발한 유틸리티 컴포넌트를 보여줄거에유

// 그럼 또 질문!
// 얘는 html필요가 없는건가용?
// 넹!
// React는 index.html 단 하나의 html 파일에서 동작합니당
// 그래서 SPA 즉 Single page Application이라고 불립니당
// src/index.tsx를 작성했고 index.html에서 src/index.tsx를 불렀으니까
// vite는 그걸 인식하고 script를 실행할게 해주고
// react는 내부에서 src/index.tsx를 읽어와 페이지를 ㄹ렌더링합니당
// 라우팅이 되어 있으니 각 라우팅에 맞게 소스코드를 불러와 렌더링해줍니당.
// 헉 그렇군..! 