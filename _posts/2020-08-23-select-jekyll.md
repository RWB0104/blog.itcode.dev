---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 4. 나만의 Jekyll 찾아보기"
date:   2020-08-23 19:05:42 +0900
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

이 장에선 Jekyll 블로그 테마를 직접 선택하고, 이를 저번 장에서 만든 Repository에 commit하는 과정에 대해 다룬다. Jekyll 블로그 테마를 자신의 Repository에 저장하는 방법에는 여러가지가 있지만, 여기선 Jekyll 테마의 소스를 직접 다운로드하고, 이를 로컬에서 commit하여 Repository에 관리하는 방식을 이용한다. 다른 방식으로는 Jekyll 원본 테마 Repository를 **fork**하는 방법이 있다.

---
## Jekyll 쇼핑

Jekyll 프레임워크의 도움 없이 본인이 스스로 HTML, CSS, JavaScript 등을 이용하여 호스팅을 할 수 있다. 하지만 이 경우 자신이 직접 모든 페이지를 디자인해야하고, 이는 코딩 이전에 깊은 심미적 감각이 동반되어야 가능하다. 상황에 따라 미려한 디자인 구현은 개발보다도 더욱 고난이도의 지식과 정교한 작업을 요구한다. Jekyll를 이용하면 이미 다른 사람들이 개발한 여러 테마를 사용할 수 있다.

아래의 사이트 중 원하는 사이트에서 Jekyll 테마를 다운로드 받거나, 해당 테마가 적용된 데모 페이지를 확인할 수 있다. 기본적으로 무료이며, 일부 테마는 비용을 지불하면 더욱 화려하거나 다채로운 기능이 포함된 테마로 업그레이드할 수 있다.

<center>
	<a href="http://jekyllthemes.org/" class="btn btn-info" target="_blank">http://jekyllthemes.org/</a>
	<a href="https://jekyllthemes.io/free" class="btn btn-info" target="_blank">https://jekyllthemes.io/free</a>
	<a href="http://themes.jekyllrc.org/" class="btn btn-info" target="_blank">http://themes.jekyllrc.org/</a>
	<a href="https://github.com/topics/jekyll-theme" class="btn btn-info" target="_blank">https://github.com/topics/jekyll-theme</a>
</center>

위의 4가지 사이트 중 원하는 사이트에 접속해서 테마를 확인해보자. 이 장에서는 <a href="http://jekyllthemes.org/" target="_blank">http://jekyllthemes.org/</a>를 기준으로 설명한다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90974202-ec778400-e563-11ea-83c6-b3456a678e27.png">
		<img src="https://user-images.githubusercontent.com/50317129/90974202-ec778400-e563-11ea-83c6-b3456a678e27.png" class="w6" />
	</a>
</figure>

이처럼 수많은 테마가 올라온 것을 확인할 수 있다. 테마를 선택할 땐, 내가 생각한 페이지의 용도와 잘 맞는 테마인지 확인하길 바란다. 오로지 디자이너 개인의 의도와 가치관이 담겨있기 때문에, 테마마다 적합한 용도가 존재한다. 어떤 테마는 블로그에 적합할 수도, 어떤 테마는 포트폴리오에 적합할 수도 있다. 이러한 테마들의 주 용도를 잘 확인하고 적용하길 바란다.

현재 이 블로그의 Theme는 Taylan Tatli의 Moon Theme다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90974222-0f099d00-e564-11ea-8a87-beabec297376.png">
		<img src="https://user-images.githubusercontent.com/50317129/90974222-0f099d00-e564-11ea-8a87-beabec297376.png" class="w6" />
	</a>
</figure>

<center>
	<a href="http://taylantatli.github.io/Moon/" class="btn btn-primary" target="_blank">Moon Theme 데모 페이지</a>
</center>

깔끔하면서도 모던한 느낌이 특징인 블로그 최적화 테마다. 실제 테마와 해당 블로그의 디자인이 조금 다른데, 내 의도에 맞게 디자인을 조금 수정했다. 기초적인 웹 지식만 있어도 이렇게 본인이 필요한대로 테마를 일부 개선할 수 있다. 위의 버튼을 눌러 데모 페이지를 통해 직접 체험해볼 수 있다.

보통 모든 테마들은 테마 소스가 올려진 Repository의 주소를 제공한다. 해당 소스를 받아서 자신의 Repository에 올리면 해당 소스의 내용을 기반으로 호스팅이 시작된다. 원하는 테마를 선택했다면, clone을 진행하자. clone이란 다른 사람이 공개한 소스를 로컬로 복사하는 작업이다. clone을 위해선 대상 Repository의 URL을 알아야한다. URL은 아래와 같이 확인할 수 있다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90974184-b4704100-e563-11ea-8463-54495387cd70.png">
		<img src="https://user-images.githubusercontent.com/50317129/90974184-b4704100-e563-11ea-8463-54495387cd70.png" class="w6" />
	</a>
</figure>

Repository 메인에서 주소창에 나오는 URL 혹은 [Code] 버튼을 클릭하면 제공하는 URL 둘 중 어떤 것을 써도 상관없다. 프로젝트를 복사할 폴더에서 오른쪽 마우스를 클릭하고 [Git Bash Here]을 선택하자. 실행되는 Console에 아래의 명령어를 입력한다.

git clone **{Theme URL}** **{username}**.github.io
{: .notice}

<span class="color-red">※ {username}엔 자신의 Github username을 입력합니다.</span>

위 명령어는 {Theme URL} Repository의 소스를 대상 경로의 {username}.github.io 폴더로 복사하는 명령어다. 정상적으로 명령어가 실행됬다면, 폴더에 [{username}.github.io] 폴더가 생성되고, 폴더 내부에는 Theme 소스가 있는 것을 확인할 수 있다. 해당 프로젝트를 자신의 호스팅용 Repository로 연동해야한다.

우선 프로젝트 폴더로 이동한다.

cd **{username}**.github.io
{: .notice}

프로젝트 폴더 내부에서 명령어를 입력해야한다. 아래의 명령어를 입력하여 내 Repository로 연결한다.

git remote set-url origin git@github.com:**{username}**/**{username}**.github.io.git
{: .notice}

자신의 Repsitory URL을 입력하여 로컬의 프로젝트 소스를 연결한다.

git push
{: .notice}

연결한 내용을 Repository에 반영한다. 이 과정을 끝마치고 Repository를 확인하면, 비어있던 전과 다르게 내가 선택했던 Theme의 소스가 있는 것을 확인할 수 있다.

약 1분 뒤 주소창에 https://{username}.github.io를 치고 접속하면 내가 올렸던 테마의 블로그가 접속됨을 확인할 수 있다. 물론 아직 어떠한 커스터마이징도 이루어지지 않았으므로, 테마의 데모와 동일하다. 이 소스를 기준으로 커스터미이징을 진행하고, 게시글을 작성하는 것이다.

이로써 기본적인 초기 테마의 적용이 완료됐다. 다음 장에선 이 블로그 소스를 본격적으로 관리하고 테스트하기위한 개발환경 구축방법에 대해 다루고자 한다.