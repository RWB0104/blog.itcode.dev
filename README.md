# 𝝅번째 알파카의 개발 낙서장 프로젝트

![image](https://user-images.githubusercontent.com/50317129/138726633-1576b0dd-55bd-492c-ac1d-ccfbdc5472dc.png)

**𝝅번째 알파카의 개발 낙서장 프로젝트**










# 📙 Information





## **💬 Language**

* [![TypeScript](http://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoWidth=25&logoColor=FFF)](https://www.typescriptlang.org/)
* [![SCSS](http://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoWidth=25&logoColor=FFF)](https://sass-lang.com/)





## **🧱 Framework**

* [![React](http://img.shields.io/badge/React-333?style=flat-square&logo=react&logoWidth=25&logoColor=61DAFB)](https://ko.reactjs.org/)
* [![NextJS](http://img.shields.io/badge/NextJS-FFF?style=flat-square&logo=next.js&logoWidth=25&logoColor=000)](https://nextjs.org/)





## **📦 Publish**

* [![GitHub](http://img.shields.io/badge/GitHub-000?style=flat-square&logo=github&logoWidth=25&logoColor=FFF)](https://github.com/)





## **📚 NodeJS Dependency**



### dependency

* ![@material-ui/core](https://img.shields.io/badge/@material--ui\/core-^4.12.1-green)
* ![@material-ui/icons](https://img.shields.io/badge/@material--ui\/icons-^4.12.2-green)
* ![katex](https://img.shields.io/badge/katex-^0.13.11-green)
* ![next](https://img.shields.io/badge/next-11.0.1-green)
* ![next-pwa](https://img.shields.io/badge/next--pwa-^5.3.1-green)
* ![prismjs](https://img.shields.io/badge/prismjs-^1.24.1-green)
* ![react](https://img.shields.io/badge/react-17.0.2-green)
* ![react-cookie](https://img.shields.io/badge/react--cookie-^4.0.3-green)
* ![react-dom](https://img.shields.io/badge/react--dom-17.0.2-green)
* ![recoil](https://img.shields.io/badge/recoil-^0.3.1-green)



### devdependency

* ![@types/katex](https://img.shields.io/badge/@types\/katex-^0.11.1-lightgrey)
* ![@types/marked](https://img.shields.io/badge/@types\/marked-^2.0.4-lightgrey)
* ![@types/prismjs](https://img.shields.io/badge/@types\/prismjs-^1.16.6-lightgrey)
* ![@types/react](https://img.shields.io/badge/@types\/react-17.0.14-lightgrey)
* ![@typescript-eslint/eslint-plugin](https://img.shields.io/badge/@typescript--eslint\/eslint--plugin-^4.28.2-lightgrey)
* ![@typescript-eslint/parser](https://img.shields.io/badge/@typescript--eslint\/parser-^4.28.2-lightgrey)
* ![@zeit/next-sass](https://img.shields.io/badge/@zeit\/next--sass-^1.0.1-lightgrey)
* ![babel-plugin-styled-components](https://img.shields.io/badge/babel--plugin--styled--components-^1.13.2-lightgrey)
* ![eslint](https://img.shields.io/badge/eslint-7.30.0-lightgrey)
* ![eslint-config-next](https://img.shields.io/badge/eslint--config--next-^11.0.1-lightgrey)
* ![eslint-plugin-unused-imports](https://img.shields.io/badge/eslint--plugin--unused--imports-^1.1.2-lightgrey)
* ![gray-matter](https://img.shields.io/badge/gray--matter-^4.0.3-lightgrey)
* ![marked](https://img.shields.io/badge/marked-^2.1.3-lightgrey)
* ![node-sass](https://img.shields.io/badge/node--sass-5.0.0-lightgrey)
* ![typescript](https://img.shields.io/badge/typescript-4.3.5-lightgrey)
* ![xml-formatter](https://img.shields.io/badge/xml--formatter-^2.4.0-lightgrey)










# 📋 Contents

어쩌다 독학하게 된 React를 유의미하게 써먹기위해 직접 만든 개발 블로그.

정적 블로그를 위한 NextJS를 활용하여 개발했다. Typescript를 사용하고 있으며, SCSS를 통한 CSS-in-CSS 방식으로 디자인을 렌더링한다.

라즈베리파이를 구매하면서 서버 구축을 위해 같이 구입한 도메인 `itcode.dev`를 적용했다. `blog.itcode.dev`로, 서브도메인 `blog`를 사용했다.

직접 개발한 블로그를 사용함으로써 블로그 운영에 애착을 가질 수 있었고, 직접 개발한 만큼 개발자의 면모를 나름대로 보여줄 수 있어서 좋다.





## 📅 Timeline

* [지금] 당신에게 선보이다..
* [2021.10.08] 기능 개선
  * 스크리너가 비디오일 경우, 첫 비디오로 고정되는 현상 개선
  * 인덱스 페이지의 비동기 데이터량 최적화
* [2021.09.28] 기능 개선
  * Footer에 Hits를 적용하여 블로그 방문자 수 카운팅 기능 추가
  * Posts, Projects 리스트를 렌더링하는데 필요한 최소한의 데이터만을 가지도록 최적화함
  * 리스트 컴포넌트가 전체 데이터를 요구하지 않도록 변경
  * 컨텐츠 아이템, 메타의 기본 이미지 정의
* [2021.09.27] 기능 개선
  * Hits의 URL 표시 방식 변경
  * 컨텐츠 리스트가 최소한의 데이터만 가지도록 데이터 최적화
* [2021.09.25] 기능 개선
  * 스크리너가 이미지, 비디오에 각각 대응할 수 있도록 개선
  * Hits를 활용한 게시글 조회수 수 카운팅 기능 추가
* [2021.09.20] 스크리너 이미지를 동영상 기반으로 변경 (GIF to WEBM)
* [2021.09.18] 디자인 개선
  * 모바일 화면에서 카테고리 타이틀의 위치 오류 수정
  * SEO 스크립트가 `.html` 확장자로 끝나는 게시글에 대한 SEO 파일을 별도로 생성하도록 개선
  * 일부 UI 가독성 개선
* [2021.09.15] 디자인 개선
  * 새 컨텐츠 표시 디자인 변경
  * 카테고리 UI 개선
* [2021.09.14] 디자인 개선
  * 스크리너 텍스트 크기 변경
  * 컨텐츠 아이템 텍스트 크기 축소
  * 카테고리 이미지가 직관적으로 보이도록 적절히 수정
  * 카테고리의 줄 당 아이템 수 증가 (데스크탑, 모바일)
  * 블로그 명칭 𝝅번째 알파카의 개발 낙서장으로 변경
  * 페이지 이동 시 스크리너 이미지 변하지 않는 현상 수정
* [2021.09.06] 기능 개선
  * 로딩 화면 디자인 개선, Fade In/Out으로 출력되도록 변경
  * 테마에 따른 Heading 태그 컬러 변경
  * ServiceWorker 적용
* [2021.09.06] 다크모드 시 헤더 색상 변경
* [2021.09.03] 기능 개선
  * 컨텐츠 제목 UI 개선
  * 카테고리 항목 중 전체를 보여주는 ALL 항목 추가
* [2021.08.30] 기능 개선
  * 커스텀 도메인 `blog.itcode.dev` 적용
  * 프로젝트에 교체한 도메인 일괄 적용
  * 빌드 버전 생성 스크립트 추가
  * 링크 태크 클릭 시 새 창에서 뜨도록 개선
* [2021.08.26] 기능 개선
  * 카테고리 접힙 버그 수정
  * 화질 문제로 인한 WEBP to GIF 롤백
  * 인덱스 페이지 디자인 오류 수정
* [2021.08.24] 스타일 개선
  * Footer SEO 버튼 추가
  * 헤더 컬러 변경
* [2021.08.20] 다음 웹마스터 도구 등록
* [2021.08.19] 용량 최적화
  * 용량 저감을 위한 GIF to WEBP 교체
  * 폰트 용량 저감을 위한 서브셋화
* [2021.08.17] 일주일 이내 게시글 하이라이팅 기능 추가
* [2021.08.13] PrismJS 스타일 개선
  * 코드 디자인 및 색상 개선
  * LaTex 인식 로직 추가
* [2021.08.11] 코드블럭 디자인 개선
  * 전체적인 외관 개선
  * 사용 중인 언어 표시
  * 코드 라인 수 표시
  * 마우스 오버 시 하이라이팅 추가
  * 복사 버튼 추가
* [2021.08.05] UI 갱신
  * 카테고리 높이 변경
  * 모바일 테마 UI 스위치를 Sidebar로 편입
  * 쿠키를 통한 테마 저장 기능 추가
* [2021.07.31] 페이지 이동 시 출력되는 로딩 컴포넌트 추가
* [2021.07.26] 모바일 메뉴 개선
  * 기존의 BottomNavigator에서 Sidebar로 교체
* [2021.07.25] 개편 블로그 배포
  * Typescript 적용
  * SCSS로 리팩토링하여 CSS-in-CSS 방식의 렌더링을 사용하여 FOUC 현상 제거
  * 블로그 디자인 전면 개편
  * 컴포넌트 세분화
  * 파일 구조 정립
* [2021.06.07] Google Analytics 등록
* [2021.05.27] SEO 생성 스크립트 개발
  * JavaScript 기반 생성 스크립트
  * Sitemap, RSS 생성
* [2021.05.20] Utterances 댓글 플러그인 적용
  * 기존에 사용 중이던 Disqus는 광고 이슈로 인해 교체함
* [2021.05.18] 마크다운 CSS 추가
* [2021.05.10] 개발 블로그 개발 시작
  * NextJS, GatsbyJS 테스트 운영 및 배포
  * NextJS 채택
  * JavaScript, Material-UI를 활용한 CSS-in-JS 방식의 렌더링 사용
  * 블로그 컴포넌트 개발
  * 웹/모바일 간의 반응형 지향
* [2020.08.13] 개발 블로그 배포
  * Jekyll 기반 블로그
  * [Moon Theme](http://jekyllthemes.org/themes/moon/) 적용










# 🌐 Page

* [𝝅번째 알파카의 개발 낙서장](https://blog.itcode.dev)










# 📄 관련 문서

* [블로그 개편기 1 외 다수](https://blog.itcode.dev/posts/2021/09/21/nextjs-reorganization-1)
* [Blog Repository](https://github.com/RWB0104/TechBlog)

---

#### 빌드 29815e25018 (2021-10-08 02:31:57)

* Screener 컨텐츠가 비디오일 경우 첫 컨텐츠가 고정되는 버그 수정
* index 페이지의 비동기 데이터량 최적화

#### 빌드 844ef8e9956 (2021-10-14 02:19:47)

* 2021-09-24-nextjs-reorganization-3 내용 추가
* 2021-10-14-oauth2-java-server-1 작성 완료

#### 빌드 9a45ddb35da (2021-10-15 01:56:16)

* 2021-10-14-oauth2-java-server-2 작성 완료

#### 빌드 be28863335a (2021-10-20 01:55:48)

* 2021-10-20-oauth2-java-server-3 작성 완료

#### 빌드 f9f6a260cb1 (2021-10-23 05:14:58)

* 2021-10-22-oauth2-java-server-4 작성 완료
* 2021-10-23-oauth2-java-server-5 작성 완료
* 2021-10-23-oauth2-java-server-6 작성 완료
* 2021-10-23-oauth2-java-server-7 작성 완료

#### 빌드 27b796ab013 (2021-10-26 02:38:13)

* 2021-10-24-oauth2-java-server-8 작성 완료
* 2021-10-25-oauth2-java-server-9 작성 완료
* 2021-10-25-oauth2-java-server-10 작성 완료
* 2021-10-25-oauth2-java-server-11 작성 완료
* 2021-10-25-oauth2-java-server-12 작성 완료
* 2021-10-26-github-react-blog 작성 완료
* 프로젝트 게시물 컨텐츠, 카테고리, 태그 미표출 오류 수정

XD 🦙🐾🐾🐾