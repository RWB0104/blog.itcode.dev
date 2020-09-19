---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 12. 추천 게시물(Recommended Posts) 출력하기"
date:   2020-09-20 01:47:58 +0900
excerpt: "관계가 있을 수도, 없을 수도 있습니다."
categories: "Jekyll"
tag:
- github
- github.io
- jekyll
- jekyll 블로그
comments: true
background: "bg-jekyll"
related: jekyll
---

## 개요

게시글을 읽다 보면 내용이 끝나는 하단에 **추천 게시물**, **최근 게시물**과 같이 블로그에 기재된 다른 여러 컨텐츠를 랜덤으로 노출시키기도 한다. 이러한 구조는 [이전 게시글]({{ page.previous.url }})의 페이지 이동 버튼과 더불어 사용자에게 컨텐츠에 대한 흥미를 유발하고, 한 번의 접속으로 여러 컨텐츠를 노출시키는 효과가 있다. 이 장에서는 블로그의 게시글 중 랜덤으로 몇 가지를 추천 게시글로 보여주는 기능을 구성한다.

---
## 게시물 리스트 가져오기

게시글을 출력하기 위해서 우선 게시글의 목록을 가져올 필요가 있다. 게시글의 목록은 Liquid 언어를 통해 가져올 수 있으며, HTML 코드에서 아래와 같이 입력하면 된다.

{% highlight markdown %}
{% raw %}
{% assign posts = site.posts %}
{% endraw %}
{% endhighlight %}

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/93671980-2e073a80-fae2-11ea-871b-46106d9a33ea.png">
		<img src="https://user-images.githubusercontent.com/50317129/93671980-2e073a80-fae2-11ea-871b-46106d9a33ea.png" class="w6" />
	</a>
</figure>

위의 코드를 이용하면 전체 게시글 리스트가 담긴 배열을 얻을 수 있다. **site.posts**는 해당 블로그의 모든 게시글을 최신순으로 저장된 배열이다. 이 배열의 각 요소가 하나의 게시글이 된다. for문 같은 반복문을 통해 각각의 게시물 데이터에 접근할 수 있다. **assign** 명령어는 변수를 선언하는 것으로, 위 구문은 posts라는 변수에 게시글 객체를 할당한다는 뜻이다. 해당 선언문 아래로는 **posts**로 **site.posts**를 대체할 수 있다. 이해를 위해 아래의 구문을 입력해보자.

{% highlight html %}
{% raw %}
<!-- 게시글 목록 객체를 posts라는 변수에 할당 -->
{% assign posts = site.posts %}
<!-- posts의 요소인 각 게시물을 post로 지정하는 foreach문 -->
{% for post in posts %}
	<!-- 게시글 제목 -->
	<p>{{ post.title }}</p>
{% endfor %}
{% endraw %}
{% endhighlight %}

위 소스를 HTML에 입력하면, 현재 자신이 작성한 모든 게시글의 제목이 출력될 것이다. 이를 이용하여, 이들 중 일부를 랜덤으로 표시하여 추천 게시물을 표시할 것이다.

## 랜덤으로 일부 게시글 가져오기

추천 게시물을 표시하기 위해선, 게시글 중 일부만을 랜덤으로 가져와야 한다. 코딩은 각자가 구현하기 나름이므로 여러 방식이 존재한다. Liquid에 익숙하거나 경험이 많지 않다면, 랜덤한 숫자를 선정하여 해당하는 인덱스의 게시글을 정할 수도 있지만, Liquid는 필터를 통해 배열과 같은 객체에서 랜덤한 요소들을 가져올 수 있다.

{% highlight markdown %}
{% raw %}
{% assign posts = site.posts | sample: 7 %}
{% endraw %}
{% endhighlight %}

Liquid의 필터는 [이 곳](https://jekyllrb-ko.github.io/docs/liquid/filters/)에서 확인할 수 있다. 필터는 <kbd>Shift</kbd> + <kbd>\</kbd>를 입력하여 사용할 수 있으며, **sample**은 배열의 요소 중 정해진 갯수만큼 랜덤으로 지정하는 필터다.

예를 들어, `site.posts`가 10개의 페이지 리스트를 포함한다고 가정하면, `assign posts = site.posts | sample: 7`는 전체 페이지 배열 중 7개의 랜덤한 페이지만을 포함한 배열을 **posts**에 할당한다.
{: .notice}

{% highlight html %}
{% raw %}
<!-- 게시글 목록 객체 중 랜덤한 7개의 페이지 배열을 posts라는 변수에 할당 -->
{% assign posts = site.posts | sample: 7 %}
<!-- posts의 요소인 각 게시물을 post로 지정하는 foreach문 -->
{% for post in posts %}
	<!-- 게시글 제목 -->
	<p>{{ post.title }}: {{ post.url }}</p>
{% endfor %}
{% endraw %}
{% endhighlight %}

역시 이해를 돕기 위해 위의 소스를 HTML에 입력해보자, 아까와 달리 랜덤한 7개의 타이틀과 해당하는 URL이 표시될 것이다. 위 방법을 응용하여 디자인을 잘 설계하면 자신만의 추천 게시글 리스트를 보여줄 수 있다.

또한, 이를 조금만 응용하면 완전히 랜덤한 게시물이 아닌, 현재 읽고 있는 주제와 연관성이 있는 게시글을 출력 할 수도 있다. 보통은 정확하고 능동적인 연관성을 확보하기 위해 게시글의 주요 키워드나 카테고리, 내용 등을 종합적으로 분석한다. 분석한 결과를 토대로 연관성이 높은 다른 게시글들을 표시한다. 하지만 Jekyll 구조나 환경 상 복잡한 분석 알고리즘을 붙이긴 너무 어렵고, 필자는 간단하게 Jekyll 헤더에 연관성을 판단하는 변수를 지정하여, 현재 읽고있는 게시글의 변수와 전체 게시글의 변수를 비교하여 일치하는 게시글만을 보여주고 있다.

여러분들도 글의 내용을 토대로 자신만의 디자인을 입혀 추천 게시글이나 연관 게시글을 출력해보길 바란다.