---
layout: post
title:  "Github를 이용해 나만의 블로그 만들기 - 3. 나만의 Jekyll 찾아보기"
date:   2020-08-19 00:45:02 +0900
excerpt: "Github Jekyll 블로그 개발기"
categories: "Jekyll"
tag:
- jekyll
comments: true
background: "bg-jekyll"
---

## 개요

이 장에선 마음에 드는 Jekyll 테마를 선택하고, Git을 통해 Github에 올리는 방법에 대해 얘기하고자 한다. Jekyll 블로그는 리포지토리의 파일을 기준으로 블로그를 호스팅하며, 이러한 요소들을 수정하고 반영하기 위해선 Git의 사용이 필연적이다. Git은 소스코드를 관리할 수 있는 매우 강력한 툴로, 형상관리를 위한 여러 기능이 있지만 역시나 파일 반영을 위한 기초적인 내용만을 다룰 예정이다.

---
## Github Repository 만들기

Jekyll 테마를 선택하고 적용하는 방법엔 여러가지가 있는데, 이 글에선 원하는 테마를 다운로드하고, Repository 하나를 생성하여 Git을 통해 Repository에 반영하는 방식으로 설명하고자 한다.

이 방법 외에도 원하는 테마의 Repository를 fork하는 방법도 있으니, 궁금하면 한 번 찾아보길 바란다.

<center>
	<a href="https://github.com/" class="btn btn-info" target="_blank">Github 공식 홈페이지</a>
</center>

우선 Github 공식 홈페이지로 접속하여 전 편에서 생성한 계정으로 로그인을 진행하자.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90412420-0b9b8f00-e0e8-11ea-80a5-d28ff329a020.png">
		<img src="https://user-images.githubusercontent.com/50317129/90412420-0b9b8f00-e0e8-11ea-80a5-d28ff329a020.png" class="w6" />
	</a>
</figure>

계정 생성 후 아직 별도의 활동을 하지 않았다면, 위 그림과 같이 페이지가 나타날 것이다. [Create Repository] 버튼을 눌러 새로운 Repository 하나를 생성하자.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90422505-eada3600-e0f5-11ea-92f1-695a58f7f783.png">
		<img src="https://user-images.githubusercontent.com/50317129/90422505-eada3600-e0f5-11ea-92f1-695a58f7f783.png" class="w6" />
	</a>
</figure>

이 때 주의할 점이 있는데, <span class="color-red">Repository의 이름은 반드시 {username}.github.io로 생성</span>해야 한다.

예를 들어, 회원가입 시 지정한 username이 test라면, 블로그를 호스팅하기위한 Repository의 이름은 test.github.io로 작성해야한다. 이러한 규칙에 맞지 않으면 호스팅이 되지 않으니 주의할 것.

한 계정에 동일한 이름의 Repository를 생성할 수 없으므로, **계정 당 하나의 호스팅** 기능이 주어지는 셈이다. 물론 이러한 제한은 계정을 여러개 만들어 적용하면 일정부분 해소가 가능하다.

* Owner: 소유주. 본인으로 지정한다.
* Repository name: **{username}.github.io**로 지정한다.
* Public / Private: Repository의 공개, 비공개 여부. 호스팅 Repository는 반드시 **Public**으로 지정해야한다.

나머지 옵션은 호스팅 과정에 아무런 영향을 주지 않으므로 건드리지 않고 넘어가도 무방하다.

입력이 완료되면 [Create Repository]를 클릭하여 생성한다.