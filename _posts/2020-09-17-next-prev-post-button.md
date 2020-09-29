---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 11. 이전, 다음 게시글 버튼 만들기"
date:   2020-09-17 22:53:02 +0900
excerpt: "네 다음 게시물^^"
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

대부분의 게시물들은 다음 혹은 이전 게시글로 바로 이동할 수 있도록 설계함으로써 방문자의 체류 시간을 늘리고, 게시글의 탐색을 용이하게 도와준다. 이 장에서는 이전 게시물, 다음 게시물로 이동하는 버튼을 설계함으로써 컨텐츠의 접근성을 확보하고자 한다.

---
## 이전 버튼 만들기

다음 및 이전 버튼을 만들기 위해선 현재 포스트를 기준으로, 이전에 작성된 포스트와 이후에 작성된 포스트의 URL을 확보해야만 한다. Liquid는 다행히 이러한 값을 변수로 간단하게 접근할 수 있도록 도와준다.

{% highlight markdown %}
{% raw %}
{{ page.previous.url }}
{% endraw %}
{% endhighlight %}

위 Liquid 변수를 이용하면 이전 게시글의 URL을 쉽게 얻을 수 있다. 뿐만 아니라 url 대신 title을 입력하면 이전 게시글의 제목도 얻을 수 있으며, 이를 응용하여 이전 게시글과 연관되는 여러 변수를 확인할 수 있다.

---
## 다음 버튼 만들기

다음 버튼은 previous 대신 next를 입력하면 된다.

{% highlight markdown %}
{% raw %}
{{ page.next.url }}
{% endraw %}
{% endhighlight %}

마찬가지로, url 대신 title을 입력하면 다음 게시글의 제목을 얻을 수 있다. 또한 **이전 게시글이나 다음 게시글이 없을 경우, 아무것도 반환하지 않는다.**

## 테마에 적용하기

일반적인 하이퍼링크를 통해 게시글 이동 버튼을 구현해도 되지만, Moon Theme는 a 태그를 통해 하이퍼링크를 버튼의 형태로 표현할 수 있다. 이를 활용하여 이전, 다음 게시글 이동 버튼을 만들고자 한다.

<a href="#" class="btn">버튼</a>
<a href="#" class="btn btn-success">버튼</a>
<a href="#" class="btn btn-warning">버튼</a>
<a href="#" class="btn btn-danger">버튼</a>
<a href="#" class="btn btn-info">버튼</a>

div를 하나 만들어서 이동 버튼을 위한 영역을 만들고, 이를 기준으로 CSS를 적용하여 표시한다.

{% highlight html %}
{% raw %}
<div class="page-control">
	<div>
		{% if page.previous.url %}
		<a id="prev" class="btn" href="{{ page.previous.url }}">&laquo; {{ page.previous.title }}</a>
		{% endif %}
	</div>

	<div>
		{% if page.next.url %}
		<a id="next" class="btn" href="{{ page.next.url }}">{{ page.next.title }} &raquo;</a>
		{% endif %}
	</div>
</div>
{% endraw %}
{% endhighlight %}

div 안에 각각 이전, 다음 버튼이 들어갈 div를 넣어준다. 상위 div의 CSS 속성을 아래와 같이 지정하면 하위 div가 양 끝으로 배치된다.

{% highlight css %}
.page-control {
  display: flex;
  justify-content: space-between;
}
{% endhighlight %}

이후 나눠진 각각의 div 내부에 이동 버튼을 배치하면 페이지 이동 버튼이 생성된다. 이후 하위 div가 중앙을 넘어가지 않도록 최대 width를 50%로 제한했다.

{% highlight css %}
.page-control > div {
  max-width: 50%;
}
{% endhighlight %}

이후 기타 적절한 CSS 처리를 통해 버튼을 만들었다. 각 테마의 CSS 특성과 적절히 융합하여 버튼을 설계하면 이동 버튼을 테마에 적절히 녹여낼 수 있다. 주 핵심은 **page.next.url**과 **page.next.url** 변수를 통해 얻어낼 수 있는 URL을 활용하는 것이다.