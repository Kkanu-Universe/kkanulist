import React from 'react';

import Index from '@page/index';
import Components from '@page/components';
import User from '@page/user';

// 페이지 생성하는 법: 2. 여기다 라우터를 작성합니당

// 질문! index.tsx에 html 화면이 있는데 그거는 어디에서 이어지는 거죵?
// 답변: 따라오세요!

type Router = {
  path: string; // 실제 주소 경로
  comp: React.FC; // 컴포넌트(넣는 컴포넌트 값은 대문자로 해줘야 함)
  key: string; // routers/index에서 라우트 페이지마다 식별할 수 있는 고유의 key이 있는데 그것을 위해 작성
  childs?: { // 자식 라우터. 쓰는건 동일함 ex) /path/childPath
    path: string;
    comp: React.FC;
    key: string;
  }[];
};

const routers: Router[] = [
  {
    path: '/',
    comp: Index,
    key: 'index',
  },
  {
    path: '/components',
    comp: Components,
    key: 'components',
  },
  {
    path: '/user',
    comp: User,
    key: 'user',
  },
];

export default routers;
