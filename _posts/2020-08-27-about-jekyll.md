---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 6. Jekyll 파헤치기"
date:   2020-08-27 00:15:11 +0900
excerpt: "Github Jekyll 블로그 개발기"
categories: "Jekyll"
tag:
- github
- github.io
- jekyll
comments: true
background: "bg-jekyll"
---

<style>
	.jekyll-element > thead > tr {
		background: midnightblue;
		color: white;
	}

	.jekyll-element th {
		text-align: center !important;
	}

	.jekyll-element td {
		padding: 10px;
	}

	.jekyll-element th:nth-child(1),
	.jekyll-element td:nth-child(1) {
		width: 20%;
	}
</style>

## 개요

기본적으로 HTML은 프로그래밍보단 문서 작성에 더 가깝다. 이러한 특성 때문에 여러 HTML에 동일한 값을 넣거나 변경하기가 귀찮다. 예를 들어, 50개의 HTML 페이지에 특정 경로가 동일하게 들어갈 경우, 해당 경로가 바뀌면 50개의 파일 내용 전부를 일일히 바꿔줘야 한다. 이 경우, 일반적인 언어라면 변수의 선언 및 할당을 통해 변수의 값을 변경함으로써 일괄적으로 값을 변경할 수 있지만, HTML 자체적으로는 이러한 기능을 구현할 수 없다.

Jekyll은 이러한 메타데이터를 일괄적으로 관리하고 사용자가 변수를 통해 해당 값에 접근할 수 있게 도와준다. 뿐만 아니라 페이지 별 지역변수도 지원한다. 이러한 변수들은 컴파일 시 자동으로 해당하는 값으로 치환되어 최종 결과물로 나오기 때문에, 일괄적인 문서 작성을 용이하게 해준다. 때문에 테마를 커스터마이징하려면 이러한 Jekyll의 구조나 동작에 대해 어느정도 이해할 필요가 있다.

## Jekyll 폴더 구조

Jekyll 테마를 처음 접하면 다소 지저분한 형태의 폴더들을 마주하게 된다. 이는 디자이너가 임의로 작성한 것이 아닌, Jekyll 메타 데이터를 위한 일종의 규약이다. 해당 구조를 잘 이해하고 있어야 메뉴, 항목을 추가할 때 기존의 동작에 맞물려 설계할 수 있다. 이러한 구조에 맞춰서 설계하면 파일이나 HTML 삽입 시 자바스크립트를 통해서가 아닌, Liquid를 통해 Jekyll 컴파일 시 간편하게 삽입이 가능하다.

폴더의 구조는 아래와 같다. 언더바(_)로 시작하는 파일이나 폴더는 Jekyll 엔진과 연관된 요소라고 생각하면 된다.

| 요소 | 내용 |
|:--------|:--------|
| _data | 사이트에서 사용할 데이터들을 보관하는 폴더. Jekyll 엔진은 해당 폴더 내부의 모든 파일을 감지하여 Liquid의 **site.data** 변수와 링크한다. <br /><br />예를 들어, members.yml이라는 파일이 있을 경우, **site.data.members**로 해당 파일을 사용할 수 있다. |
|----
| _drafts | 작성 중인 게시글을 보관하는 폴더.  파일명은 {파일이름}.md로 지정한다. |
|----
| _includes | 재사용을 위한 HTML 코드 조각을 보관하는 폴더. HTML 작성 시 자주 사용하는 부분의 코드 조각을 해당 폴더에서 관리하면 Liquid를 통해 쉽게 삽입이 가능하다. <br /><br />{% raw %}예를 들어, file.html이라는 HTML이 있을 경우, HTML 파일에 **{% include file.html %}**를 입력하면 컴파일 시 file.html이 변수 위치에 삽입된다.{% endraw %} |
|----
| _layouts | {% raw %}하나의 페이지를 위한 템플릿을 보관하는 폴더. Jekyll 헤더를 통해 해당 HTML이 사용할 템플릿을 지정할 수 있으며, 그 때 지정할 수 있는 템플릿들이 **_layouts**에서 보관된다. 템플릿에 **{{ content }}**를 템플릿을 사용하는 HTML의 코드가 해당 위치에 삽입된다.{% endraw %} |
|----
| _posts | 블로그의 핵심인 컨텐츠를 보관하는 폴더. 반드시 **YYYY-MM-DD-{파일이름}.md**와 같이 지정해야 한다. 띄어쓰기는 보통 하이픈(-)으로 구분한다. |
|----
| _sass | main.scss에 삽입되는 Sass 코드 조각을 보관하는 폴더. Sass를 구분하여 작성하면, Jekyll 컴파일 시 해당 Sass 파일들이 main.css로 한꺼번에 병합된다. |
|----
| _site | Jekyll의 컴파일 결과물을 보관하는 폴더. 컴파일을 새로 할 때마다 해당 폴더의 내용은 그에 맞게 변경된다. _site 폴더는 컴파일을 할 때마다 내용이 변경되므로 **_site 아래의 파일들은 건드리지 않는 것이 원칙이다.** |
|----
| .jekyll-metadata | Jekyll 컴파일 시 해당 폴더의 내용을 바탕으로 컴파일을 진행한다. 특별한 이유가 없다면 건드리지 말자. |
|----
| index.md or index.html | 메인 페이지 |
|----
{: class="jekyll-element" rules="groups"}

그 외 구조에 포함되지 않는 다른 폴더 및 파일들은, 컴파일 시 그대로 포함되어 들어간다. **_config.yml**에서 컴파일 시 제외할 폴더, 파일들을 지정할 수 있다.

테마마다 _config.yml의 내용이 조금씩 다르다. Jekyll에 이미 명시된 설정을 변경하는 것 외에도, 임의의 값을 지정하고 이를 전역 변수로써 활용하기도 한다. 즉, 테마의 구조에 따라 설정파일의 내용은 천차만별로 달라질 수 있다는 뜻이다. 물론 Jekyll에서 기본적으로 명시하는 설정값도 있다. 해당 설정값의 예시는 아래의 링크에서 확인할 수 있다.

<center>
	<a href="http://jekyllrb-ko.github.io/docs/configuration/default/" class="btn" target="_blank">Jekyll 기본 설정값</a>
</center>

위 링크의 내용들은 Jekyll에서 명시하는 기본적인 설정값들에 대해 기술하고 있으며, 설정파일에 명시되지 않은 옵션들은 URL에 해당하는 기본값으로 자동 지정된다.

필수적으로 작성해야할 구성은 아래와 같다.

| 요소 | 내용 |
|:--------|:--------|
| title | 페이지 타이틀 (HTML의 title 태그) |
|----
| name | 블로그 이름 |
|----
| description | 블로그 설명 |
|----
| url | 블로그 URL (username.github.io) |
|----
| baseurl | 서브 url |
|----
{: class="jekyll-element" rules="groups"}

위 설정값은 어떤 테마에서든 중요하게 사용되는 설정값이다. 이렇게 **_config.yml**에 지정된 값은 `site.{설정이름}`의 변수로 접근할 수 있다. 본인이 임의로 설정값을 만들어 값을 지정해도 접근이 가능하다. 이러한 특성을 이용해 자신만의 설정값을 만들고 개발 시 유용하게 사용할 수 있다.

{% raw %}
예를 들어, 설정파일의 url을 `https://test.github.io`라 지정했다고 가정하자. 이후 HTML에서 <"**{{ site.url }}**/posts/">라고 입력하면 Jekyll 컴파일 후 결과물엔 설정파일에 입력된 url의 값인 <"**https://test.github.io**/posts/">로 지정된다.
{: .notice}
{% endraw %}

특히 <span class="color-red">url의 경우 기본값을 변경하지 않으면, 엉뚱한 주소로 리다이렉트</span>(ex. 테마 데모 페이지) 되니 반드시 자신의 Jekyll 블로그 주소를 입력해야 함에 유의하자.

간혹 이러한 설정파일의 존재를 인지하지 못 하거나, 장황하고 용도를 알 수 없는 텍스트의 향연에 겁을 먹어 포기하는 경우가 더러 있다. 당황하지말고, **위의 5개 설정값만 변경해줘도 당장 구동에 큰 문제는 없다.** 또한 사이트의 요소 및 텍스트와 설정파일의 값을 비교해보면 해당 설정값이 어디에 쓰이는지를 간략하게 파악할 수 있으니 차차 파악해가면 된다. 눈썰미가 좋거나 센스있는 사람은 어렵지 않게 그 연관성을 파악할 수 있을 것이다.

다음 장에서는 실제로 게시글을 작성하는 방법에 대해 다뤄본다.