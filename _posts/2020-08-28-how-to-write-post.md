---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 7. post 작성하기"
date:   2020-08-28 23:30:56 +0900
excerpt: "Github Jekyll 블로그 개발기"
categories: "Jekyll"
tag:
- github
- github.io
- jekyll
comments: true
background: "bg-jekyll"
---

## 개요

이번 장에서는 블로그의 핵심인 컨텐츠. 즉, 게시글을 쓰는 방법에 대해 알아보자. 게시글은 `_posts` 폴더의 아래에 보관되며, `YYYY-MM-DD-{title}.md`의 이름으로 저장한다. Jekyll 컴파일 시 이름의 날짜 정보를 토대로 분류하여 컴파일을 진행하여 HTML 파일로 변환한다. 포스트 파일은 마크다운으로 작성하며, 포스트의 시작엔 항상 Jekyll 헤더가 선언되어야한다. Jekyll 헤더에 관한 설명은 <a href="/posts/2020/08/about-jekyll/">여기</a> 혹은 <a href="http://jekyllrb-ko.github.io/docs/front-matter/">공식 홈페이지</a>를 확인하자.

---
## 문법

포스트는 마크다운으로 작성하기 때문에, 마크다운 문법을 통해 작성한다. 마크다운은 마크다운 고유 문법과 HTML 태그를 병행하여 작성할 수 있으며, 각각의 마크다운 문법들은 모두 HTML 문법과 동일하기 때문에, HTML로 대체하여 작성할 수 있다. 만약 태그 내에 style을 지정하고 싶을 경우, 반드시 HTML 태그로 작성해야 태그별 style을 지정할 수 있다.

#### 1. 헤더

헤더 문법은 HTML의 h1과 같은 태그와 동일하며, 아래와 같이 사용한다.

# h1 태그
## h2 태그
### h3 태그
#### h4 태그

{% highlight markdown %}
# h1 태그
## h2 태그
### h3 태그
#### h4 태그
{% endhighlight %}

#### 2. 내용

내용 문법은 HTML의 p 태그와 동일하며, 가장 범용적으로 사용된다. 별도의 문법 없이 그냥 작성하면 된다. 또한 일반적인 텍스트 말고도 굵기, 기울임, 취소선을 표시할 수도 있으며, 여러 효과를 동시에 줄 수도 있다. 굵기는 b태그, 기울임꼴은 i, em태그, 취소선은 del태그와 동일하다.

Lorem ipsum.

**Lorem ipsum.**

*Lorem ipsum.*

~~Lorem ipsum.~~

**_~~Lorem ipsum.~~_**

{% highlight markdown %}
Lorem ipsum.
**Lorem ipsum.**
*Lorem ipsum.*
~~Lorem ipsum.~~
**_~~Lorem ipsum.~~_**
{% endhighlight %}

#### 3. 인용문

인용문을 표시하기 위한 구문이며, blockquote 태그와 동일하다.

>> 이런식으로 표시하면 아무말이나 쳐도 있어보인다.

{% highlight markdown %}
>> 이런식으로 표시하면 아무말이나 쳐도 있어보인다.
{% endhighlight %}

#### 4. 리스트

리스트를 표시하기 위한 구문이며, 리스트 내부에 또다른 리스트를 표시할 수도 있다. 리스트의 종류는 숫자가 표시되는 정렬 리스트와 숫자가 표시되지 않는 비정렬 리스트 두 가지가 있다. 각각의 리스트는 ul과 ol 및 하위 태그인 li에 대응한다.

#### 정렬 리스트

1. 정렬 리스트 1
	1. 리스트 속 리스트
	2. 리스트 속의 리스트
		1. 한 번더
	3. 리스트 안 리스트
2. 정렬 리스트 2
	1. 리스트 하나

#### 비정렬 리스트

* 비정렬 리스트 1
	* 가는덴 순서 없어
	* 이거 왜이래
* 비정렬 리스트 2
	* 정렬할 수 없습니다.
		* 정렬에 실패했습니다.

{% highlight markdown %}
1. 정렬 리스트 1
	1. 리스트 속 리스트
	2. 리스트 속의 리스트
		1. 한 번더
	3. 리스트 안 리스트
2. 정렬 리스트 2
	1. 리스트 하나

* 비정렬 리스트 1
	* 가는덴 순서 없어
	* 이거 왜이래
* 비정렬 리스트 2
	* 정렬할 수 없습니다.
		* 정렬에 실패했습니다.
{% endhighlight %}

#### 5. 테이블

테이블을 표시하기 위한 구문이며, table 및 하위 요소인 tr, th, td 태그에 대응한다.

| 왼쪽정렬 | 가운데 정렬 | 오른쪽 정렬 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|----
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=====
| Foot1   | Foot2   | Foot3
{: rules="groups"}

{% highlight markdown %}
| 왼쪽정렬 | 가운데 정렬 | 오른쪽 정렬 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|----
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=====
| Foot1   | Foot2   | Foot3
{% endhighlight %}

그 밖에도 Jekyll 테마별로 지원하는 여러 문법이나 커스터마이징 스타일이 있으니, 실제로 마크다운을 작성할 땐 테마의 문법을 확인하자. 보통 테마의 데모 페이지에서 사용자들을 위해 문법 사용 예시를 제공한다. 같은 태그라도 테마의 스타일에 따라 다른 형태로 표시될 수 있으니, 어디까지나 문법만 참고하길 바란다.

#### 6. 이미지 삽입

이미지를 표시하기 위한 구문이며, img 태그에 대응한다. 아래처럼 마크다운 문법을 통해 이미지를 삽입해도 되지만, 개인적으로는 HTML 태그를 더욱 추천한다. 그 이유는 스타일링에 있는데, 기본적으로 <span class="color-red">마크다운 문법 사용 시 태그 스타일을 주기가 어렵다.</span> 예를 들어, 아래의 사진은 마크다운 문법을 통해 삽입한 사진이다. 만약 해당 사진을 가운데로 정렬하려면 매우 난감하다. 그 이유는, img 태그 자체로는 가운데 정렬을 할 수 없기 때문에, div, p 혹은 center 태그로 감싸줘야 하는데, **마크다운 문법을 HTML 태그로 감싸면 제대로 동작하지 않는다.**

![example-images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdtz5vu%2FbtqHoWcyHxe%2Fj4KQWBNJOC0FcilcabppKk%2Fimg.gif)

{% highlight markdown %}
![example-images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdtz5vu%2FbtqHoWcyHxe%2Fj4KQWBNJOC0FcilcabppKk%2Fimg.gif)
{% endhighlight %}

이미지에 HTML 방식으로 스타일링을 하려면 반드시 HTML 태그를 사용해야 함에 유의하자.

#### 7. 동영상 삽입

순수 마크다운은 기본적으로 동영상에 대한 문법은 따로 존재하지 않는다. 따라서 동영상을 삽입하기 위해선 iframe을 주로 사용하는 편이다.
<div class="w5" style="margin: 0px auto;">
	<center>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/csvh47pJhu0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
	</center>
</div>
<br />

{% highlight markdown %}
<iframe width="560" height="315" src="https://www.youtube.com/embed/csvh47pJhu0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
{% endhighlight %}

실제 위 태그를 그대로 쓴 건 아니고, 중앙정렬이나 크기조절은 별도의 CSS 및 HTML 태그를 감싼 결과이니 참고할 것.

---
## 예시

{% highlight markdown %}
---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 7. post 작성하기"
date:   2020-08-27 16:45:51 +0900
categories: "Jekyll"
tag:
- github
- github.io
- jekyll
---

[여기에 텍스트 입력]
{% endhighlight %}

위는 이 게시글의 jekyll 헤더 일부이다. 쉬운 이해를 위해 사용자 헤더값은 제외했다.

1. layout: post
	* 페이지 템플릿을 `_layouts`에 위치한 post.html 템플릿을 사용하도록 지정한다. 컴파일 시 해당 헤더를 인식하고 지정한 템플릿을 사용하여 작성한다.
2. title: "{제목}"
	* 게시글의 제목을 지정한다. HTML의 title 태그를 생각하면 쉽다.
3. date: 2020-08-27 16:45:51 +0900
	* 해당 날짜에 작성되었음을 지정한다. 한국은 GMT 기준 9시가 빠르므로, GMT 기준 +9임을 표시한다. 지정된 시간 이전에는 게시글이 보이지 않는다.
4. categories: "Jekyll"
	* Jekyll 카테고리에 속함을 나타내는 태그, 테마의 구조에 따라 여러 카테고리를 지정할 수도 있다. 내 블로그의 경우 복수의 카테고리도 문제없으나, 하나의 카테고리만 가지는 것을 원칙으로 한다.
5. tag
	* 태그 이름들. 공백으로 띄어서 표기해도 되고, 위 처럼 하나씩 하이픈으로 표시해도 상관 없다. 위 방식은 <a href="https://en.wikipedia.org/wiki/YAML#Basic_components">YAML 객체</a>의 한 방식이다.

해당 헤더 밑으로 마크다운 문법에 기초하여 원하는 내용을 작성하면 된다.