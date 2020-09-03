---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 8. 카테고리 만들기"
date:   2020-09-04 00:04:02 +0900
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

테마에 따라 차이가 있지만, 테마를 기본적으로 지원하지 않는 테마들이 꽤 된다. 이 경우, 테마의 소스를 커스터마이징해서 Jekyll가 카테고리를 인식하고 분류할 수 있도록 만들어야 한다. 소스는 만들기 나름이므로, 여러가지 방법으로 구현할 수 있겠지만, Liquid 언어가 익숙치 않다면 이 또한 마냥 쉬운 일은 아니다. 이 장에서는 카테고리 추가 작업을 구현하고, 이를 테마의 컨셉에 녹여내는 과정에 대해 기술하고자 한다.

---
## 카테고리 관리하기

각 게시글은 Jekyll 헤더의 categories 변수를 통해 게시글의 카테고리를 지정해줄 수 있다. 이 카테고리 변수는 작성자가 임의로 지정할 수 있으며, 배열을 통해 여러개의 카테고리를 지정할 수도 있다. 카테고리를 관리하기 위해선 각 게시물마다 적합한 카테고리를 부여할 필요가 있다.

#### 단일 카테고리

{% highlight markdown %}
---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 7. post 작성하기"
date:   2020-08-27 16:45:51 +0900
categories: "Jekyll"
---
{% endhighlight %}

#### 복수 카테고리

{% highlight markdown %}
---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 7. post 작성하기"
date:   2020-08-27 16:45:51 +0900
categories: [ "Jekyll", "Github.io", "블로그" ]
---
{% endhighlight %}

위와 같이 각 게시글의 Jekyll 헤더에 필요한 카테고리를 추가한다.

---
## 카테고리 코드 만들기

각 게시물 별로 카테고리를 지정했다고 해서 모든게 자동으로 이루어지진 않는다. 거의 대부분의 모든 게시판은 카테고리를 통해 수 많은 게시글들을 세분화해서 관리하고, 어떤 카테고리가 있는지 보여주거나 선택한 카테고리에 해당하는 게시물만을 보여주는 동작을 수행한다. 카테고리를 만들었으니, 이 블로그에 어떤 카테고리들이 존재하는지 나타내보자.

{% highlight html %}
{% raw %}
<div>
	{% for node in site.pages %}
	{% if node.layout == "category" %}
	<div>
		<a href="{{ site.url }}{{ node.url }}"> - {{ node.title }}</a>
	</div>
	{% endif %}
	{% endfor %}
</div>
{% endraw %}
{% endhighlight %}

위 소스는 블로그의 카테고리 목록을 a태그로 전부 출력하는 소스다.

* **for node in site.pages**: 블로그에 저장된 모든 페이지의 목록 중 각 페이지를 임시변수 node로 지정하고 반복문 수행 (foreach문과 동일)
* **if node.layout == "category"**: 각 페이지의 layout 변수가 **category**일 경우 수행
* **site.url**: _config.yml의 URL
* **node.url**: 해당 페이지의 URL
* **node.title**: 해당 페이지의 타이틀

위 코드조각을 `_includes`의 **category.html**로 저장하자. `_includes` 폴더에 저장했으므로 Liquid 사용 시 `include` 명령어로 접근이 가능하다. 해당 코드를 삽입하면, 현재 블로그의 모든 카테고리를 출력한다.

### 예시

<div>
	{% for node in site.pages %}
	{% if node.layout == "category" %}
	<div>
		<a href="{{ site.baseurl }}{{ node.url }}"> - {{ node.title }}</a>
	</div>
	{% endif %}
	{% endfor %}
</div>

위 예시는 실제 코드를 직접 사용하여 표현한 것이다. 위처럼 a태그로 블로그 내의 카테고리를 전부 출력한다.

---
## 카테고리별 리스트 페이지 만들기

위 문단의 예시에서 각 카테고리의 항목을 클릭해보자. 각 카테고리에 해당하는 게시물들의 목록이 출력되는 페이지로 연결된다. 이처럼 카테고리를 구분했다면, 해당하는 카테고리를 가진 게시물들을 출력하는 페이지를 작성해야 한다.

보통 카테고리별 리스트 페이지는 각 테마의 게시글 리스트 페이지(해당 테마의 경우 post-list.html)를 이용한다. 테마마다 차이는 있지만, 보통 전체 리스트의 코드는 아래와 같다.

#### 게시글 전체 리스트 코드

{% highlight html %}
{% raw %}
<div class="post-list">
	{% for post in site.posts %}
	<ul>
		<li>
			<a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
		</li>
	</ul>
	{% endfor %}
</div>
{% endraw %}
{% endhighlight %}

* **site.posts**: 전체 게시글 목록 (시간 내림차순)
* **for post in site.posts**: 전체 게시글의 목록 중 각 게시글을 post로 지정하고 반복문 수행 (foreach문과 동일)
* **site.url**: _config.yml의 URL
* **post.url**: 해당 게시글의 URL

대부분의 테마들이 위와 같은 형태의 소스로 전체 게시글을 출력한다. 여기서 눈여겨 볼 점은 **site.posts** 변수이다. 해당 변수를 지정한 카테고리만 바라보도록 변경해야한다. 각 카테고리별로 리스트를 출력하는 코드는 아래와 같다.

#### 카테고리별 게시글 리스트 코드

{% highlight html %}
{% raw %}
<div class="post-list">
	{% assign category = page.title %}
	{% for post in site.categories[category] %}
	<ul>
		<li>
			<a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
		</li>
	</ul>
	{% endfor %}
</div>
{% endraw %}
{% endhighlight %}

기존의 전체 리스트 코드와 크게 달라지진 않지만, 중간의 Liquid 언어 일부가 다르다.

* **assign category = page.title**: 해당 페이지의 타이틀을 category라는 임시 변수에 저장
* **for post in site.categories[category]**: 게시글의 카테고리가 page.title인 각 게시글들을 post로 지정하고 반복문 수행 (foreach문과 동일)

`_layouts/category.html` 파일을 생성하여 게시글 전체 리스트 코드를 그대로 복사하고, 위 부분만 알맞게 수정한다. 이제 Jekyll 헤더의 `layout`을 **category**로 지정하면 위 템플릿을 사용할 수 있다.

## 카테고리 템플릿 적용하기

위에서 카테고리별 게시글을 출력하는 템플릿을 만들었으므로, 실제로 적용해보자. 예를 들어, **name1**이라는 카테고리가 있다고 가정해보자. `https://{username}.github.io/category/name1`에 접속하면 name1 카테고리에 해당하는 게시글을 전부 출력하도록 구성할 것이다.

루트 폴더에서 `category` 폴더를 생성한다. 해당 폴더에서 카테고리를 관리할 것이다. 폴더 내부에서 마크다운 파일을 생성하고 이름은 원하는 카테고리의 이름으로 지정한다. 여기서는 예시로 `name1.md`로 생성한다. 파일 내용은 아래와 같이 작성한다.

{% highlight md %}
{% raw %}
---
layout: category
title: name1
---
{% endraw %}
{% endhighlight %}

* **layout: category**: _layouts/category.html 템플릿을 사용한다.
* **title: name1**: 페이지 타이틀을 지정한다. 해당 값에는 카테고리의 이름을 입력한다.

이를 서버에 적용하고 `https://{username}.github.io/category/name1`의 경로로 들어가보자. name1이라는 카테고리를 가진 게시글들만 표시될 것이다. 만약, 해당하는 게시물이 없다면 리스트에 아무것도 출력되지 않으니 참고할 것. 404 에러 없이 정상적으로 적용되면 된다. 앞으로 카테고리를 추가할 땐, 이와 같은 방식으로 추가하면 된다.

## 게시글에 카테고리 지정하기

카테고리를 구분하는 모든 준비가 끝났다. 앞으로 생성할 게시글과 기존에 작성된 게시글에 카테고리를 지정하여 관리하면 된다. 카테고리는 Jekyll 헤더에서 지정 가능하며, 다수의 카테고리 지정도 가능하다.

{% highlight md %}
{% raw %}
{% highlight markdown %}
---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 7. post 작성하기"
date:   2020-08-27 16:45:51 +0900
categories: name1
---
{% endhighlight %}
{% endraw %}
{% endhighlight %}

위와 같이 **categories**의 값에 카테고리를 지정하면 된다. 해당 게시글을 작성하고 `https://{username}.github.io/category/name1`로 접속하면 게시글 하나가 추가된 것을 확인할 수 있다.

이는 어디까지나 참고용으로, 사이트 설계의 주체가 자기자신이기 때문에 능력이 된다면 사용자의 의도에 따라 원하는 방식으로 표현이 가능하다. 본인의 경우, 게시글 리스트에 따로 div를 추가할만한 공간이 없다고 판단되어 카테고리 리스트를 select 태그로 지정했다. 또한 전체 게시글도 확인하기 쉽게 관련 항목을 추가했다.

처음엔 따라하는 것도 벅차지만, 조금만 익숙해지면 그리 어렵지 않은 작업이다. 소스의 구조를 파악하고 HTML과 Liquid에 익숙해지면 생각보다 간단하게 해낼 수 있으니 후에 원하는 방식으로 변형하여 테마에 좀 더 잘 녹여내는 것도 좋은 방법이다.