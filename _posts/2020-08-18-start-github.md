---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 2. Github와 친해지기"
date:   2020-08-18 00:45:02 +0900
excerpt: "Github Jekyll 블로그 개발기"
categories: "Jekyll"
tag:
- github
- github.io
- jekyll
- jekyll 블로그
comments: true
background: "bg-jekyll"
---

## 개요

이 장에선 Github에 대해 얘기하고자 한다. Jekyll 블로그는 Github를 통해 호스팅한다. 즉, Github에 대해 알고 있어야 내 블로그를 사람들에게 보여줄 수 있는 것이다.
Github의 용도와 역할엔 여러가지가 있지만, 여기서는 오로지 **Jekyll 블로그 호스팅**목적을 기준으로 설명한다.

---
## Github속으로!

Github는 개발자들을 위한 오픈소스 저상소다. 소스코드 형상관리를 위한 Git을 저장하고 관리하는 대표적인 Git 저장소로, 수 많은 오픈 소스코드가 존재한다. Git과 Github는 각각의 내용만으로도 커다란 주제가 나오니, 나중에 기회가 되면 따로 얘기하도록 하고, 우선은 우리의 목표인 호스팅에 집중하자.

<center>
	<a href="https://github.com/" class="btn btn-info" target="_blank">Github 공식 홈페이지</a>
</center>

Github는 위의 버튼을 눌러 접속할 수 있다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90389062-d2512800-e0c3-11ea-8a59-f4980afab7b5.png">
		<img src="https://user-images.githubusercontent.com/50317129/90389062-d2512800-e0c3-11ea-8a59-f4980afab7b5.png" class="w5" />
	</a>
</figure>

Github 페이지에 접속하면 위와 같은 화면을 볼 수 있는데, 상단 우측의 [<span class="color-green">Sign Up</span>] 버튼을 클릭하자. 회원가입을 진행할 수 있다.
혹은 전면의 입력 폼을 통해서도 진행할 수 있다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90411265-777cf800-e0e6-11ea-95d5-372388b32bd2.png">
		<img src="https://user-images.githubusercontent.com/50317129/90411265-777cf800-e0e6-11ea-95d5-372388b32bd2.png" class="w3" />
	</a>
</figure>

아래의 항목을 전부 입력하자.

* username: 닉네임
* Email address: 이메일 주소
* Password: 비밀번호

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90412061-96c85500-e0e7-11ea-9a7b-8f71fa52f776.png">
		<img src="https://user-images.githubusercontent.com/50317129/90412061-96c85500-e0e7-11ea-9a7b-8f71fa52f776.png" class="w3" />
	</a>
</figure>

계정을 생성하면 위와 같은 과정이 나오는데, 직업과 프로그래밍 경험 등을 묻는 사용자 분석용 설문조사이므로, 그냥 넘어가도 무방하다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90412232-d42ce280-e0e7-11ea-92e9-dc637cb2c8a9.png">
		<img src="https://user-images.githubusercontent.com/50317129/90412232-d42ce280-e0e7-11ea-92e9-dc637cb2c8a9.png" class="w5" />
	</a>
</figure>

설문조사가 끝나면 계정이 생성된다. 회원가입 시 <span class="color-blue">작성한 이메일로 인증 코드</span>를 보내니, 이메일을 확인하자.

만약, 이메일이 제대로 오지 않는다면, [<span class="color-green">Resend verification email</span>] 버튼을 클릭하여 재발송할 수 있다. 또한, 실수로 잘못된 이메일을 기입했다면 [<span class="color-green">Change your email settings</span>]를 클릭하여 이메일을 변경한 후 인증을 시도하자.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90412375-fde60980-e0e7-11ea-805b-7d4c58ab0b4d.png">
		<img src="https://user-images.githubusercontent.com/50317129/90412375-fde60980-e0e7-11ea-805b-7d4c58ab0b4d.png" class="w4" />
	</a>
</figure>

인증 이메일을 확인하고, [<span class="color-green">Verify email address</span>]를 클릭하여 인증을 완료하면 계정 생성이 완료된다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90412420-0b9b8f00-e0e8-11ea-80a5-d28ff329a020.png">
		<img src="https://user-images.githubusercontent.com/50317129/90412420-0b9b8f00-e0e8-11ea-80a5-d28ff329a020.png" class="w6" />
	</a>
</figure>

다시 한 번 Github 홈페이지에 접속해서 상단 우측의 [<span class="color-green">Sign In</span>] 버튼을 클릭하여 로그인을 진행하자. 로그인은 회원가입 시 입력한 **username** 혹은 **Email address** 중 아무거나 사용해도 무방하다.

위와 같은 화면이 뜨면 Github 회원가입이 완료된 것이다. 이로써 Jekyll를 보관하고 배포하기 위한 초석이 마련됐다. 다음 편에선 원하는 Jekyll 블로그를 호스팅하기위한 준비과정에 대해 다룬다.