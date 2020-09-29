---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 13. 검색 엔진에 블로그 등록하기"
date:   2020-09-20 21:47:58 +0900
excerpt: "검색 결과를 찾을 수 없습니다."
categories: "Jekyll"
tag:
- github
- github.io
- jekyll
- jekyll 블로그
- google search console
- naver search advisor
- search engine
- 검색엔진 등록
comments: true
background: "bg-jekyll"
related: jekyll
published: false
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

일반적으로 어떤 사이트에 접근하는 가장 쉽고 보편적인 방법은 **검색엔진**이나 **포털**사이트의 검색을 통해 접근하는 것이다. 검색엔진이나 포털사이트들은 검색결과를 효율적으로 사용자에게 제공하기 위해, 독자적인 크롤링(Crawling) 봇을 통해 사이트 데이터를 크롤링한다. 이렇게 크롤링한 데이터들을 수집하고, 색인화하여 사용자가 요청한 키워드에 따라 연관성을 분석, 적합한 결과를 제공하는 것이다.

하지만 크롤링 봇은 기본적으로 자신이 크롤링하도록 **<span class="color-blue">등록된 도메인만을 대상으로 크롤링</span>**을 진행한다. 이러한 기준이 없다면 수 많은 페이지를 크롤링해야하며, 개중엔 검색엔진에 노출되기를 꺼리는 도메인이 있을 수도 있으므로 법적으로나 도의적으로 문제의 소지가 생긴다. 더군다나 제한없는 크롤링은 크롤링 봇에게 엄청난 작업량을 할당하게 되므로, 자원관리의 측면에서 매우 비효율적이다. 이러한 이유로 등록된 도메인만을 크롤링하는 것이다. Github Pages를 이용해 발행한 블로그는 각자의 고유한 도메인을 가지고 있으므로, 크롤링 봇에 도메인 등록을 해야만 해당 검색엔진에 노출이 된다.

크롤링 봇에 도메인을 등록하기 위해선 공통적으로 아래의 준비물이 필요하며, 봇에 따라 여러 추가 파일을 요구할 수도 있다.

* sitemap.xml
* robots.txt
* feed.xml

이 장에서는 검색엔진 등록에 필요한 준비물들에 대한 설명 및 작성 방법과 함께, 준비한 파일들을 통해 Google, Naver 검색엔진에 등록하는 방법에 대해 다룬다.

---
## sitemap.xml 만들기

**sitemap.xml**이란, 사이트 내에 존재하는 모든 게시물들에 대한 목차라고 생각하면 된다. 크롤링 봇이 크롤링을 진행하면서, 미쳐 확인하지 못한 세부 페이지들이 생길 수 있는데, sitemap.xml에 모든 페이지의 목록이 기록되어 있다면 이를 토대로 <span class="color-red">크롤링 봇이 모든 페이지를 문제없이 확인</span>할 수 있도록 해준다.

sitemap.xml은 확장자를 보면 알 수 있듯이, XML 형식으로 작성하며, 원칙적으로 사이트 내의 모든 페이지가 기술되므로 게시글이 늘어날 때마다 sitemap.xml의 내용도 맞게 반영해야 한다. 물론 Jekyll 기능을 이용하면 자동으로 sitemap.xml에 사이트 내의 모든 게시글이 작성되도록 구현할 수 있다. 루트 폴더에 `sitemap.xml`을 생성하고 아래의 소스를 입력한다.

{% highlight xml %}
{% raw %}
---
layout: null
sitemap:
exclude: 'yes'
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	{% for post in site.posts %}
	{% unless post.published == false %}
	<url>
		<loc>{{ site.url }}{{ post.url }}</loc>
		{% if post.sitemap.lastmod %}
		<lastmod>{{ post.sitemap.lastmod | date: "%Y-%m-%d" }}</lastmod>
		{% elsif post.date %}
		<lastmod>{{ post.date | date_to_xmlschema }}</lastmod>
		{% else %}
		<lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
		{% endif %}

		{% if post.sitemap.changefreq %}
		<changefreq>{{ post.sitemap.changefreq }}</changefreq>
		{% else %}
		<changefreq>monthly</changefreq>
		{% endif %}

		{% if post.sitemap.priority %}
		<priority>{{ post.sitemap.priority }}</priority>
		{% else %}
		<priority>0.5</priority>
		{% endif %}
	</url>
	{% endunless %}
	{% endfor %}
</urlset>
{% endraw %}
{% endhighlight %}

위와 같이 입력하면 Jekyll이 알아서 모든 게시글의 내용을 sitemap.xml에 기록한다. 컴파일된 내용은 `_site/sitemap.xml`에서 확인할 수 있다. 위치는 웹루트에 그대로 두는 것이 좋다. 보통의 크롤링 봇이 sitemap.xml을 확인할 때, **https://{username}.github.io/sitemap.xml** 주소를 통해 호출하기 때문이다. 따라서 sitemap.xml은 웹루트에 지정하는 것이 가장 권장된다.

---
## robots.txt 작성하기

robots.txt는 자신의 사이트 크롤링에 대한 규약을 기술한 파일이다. robots.txt를 통해 크롤링을 원치 않는 경로를 지정하거나, User-Agent 제한을 통해 특정 크롤링 봇의 접근을 제한할 수 있다. 그러나 한 가지 알아야 할 점으로, **<span class="color-purered">robots.txt는 법적으로 협의된 규약이 아닌, 권고 사항 정도의 개념이다.</span>** 즉, robots.txt을 위반한다고 해서 법적으로 처벌할만한 근거가 되지 못하며, 이 때문에 robots.txt를 젼혀 신경쓰지 않는 **일부 악성 크롤링 봇들은 사이트 소유자가 노출하기를 원치 않는 게시글까지 크롤링**하기도 하니 주의할 것.

robots.txt의 가장 기본적인 형식은 아래와 같다. 마찬가지로 루트 폴더에 `robots.txt` 파일을 생성하여 아래의 소스를 작성한다.

{% highlight xml %}
{% raw %}
User-agent: *
Allow: /
{% endraw %}
{% endhighlight %}

robots.txt의 주요 요소를 설명하면 아래와 같다.

* **User-Agent**: 접근 가능한 크롤링 봇의 이름을 지정하는 것으로, 모든 봇의 접근을 허용한다면 '*'를 입력한다. 반대로 특정 크롤링 봇만 접근을 허용하려면 해당 봇의 이름을 입력한다.
* **Allow**: 엑세스 가능한 컨텐츠의 URL 경로를 지정하는 것으로, 모든 경로의 접근을 허용한다면 '/'을 입력하거나 생략한다.
* **Disallow**: 엑세스 불가능한 컨텐츠의 URL 경로를 지정하는 것으로, 일부 경로의 접근을 허용할 수 있다.

| User-Agent | 소유자 |
|:--------|:--------|
| Googlebot | Google |
|----
| Yeti | NAVER |
|----
| Bingbot | Bing |
|----
| Slurp | Yahoo |
|----
{: class="jekyll-element" rules="groups"}

위 소스는 모든 크롤링 봇의 접근을 허용하며, 모든 사이트 컨텐츠에 대한 크롤링을 허용하는 규약이다. sitemap.xml과 마찬가지로 웹루트에 두는 것을 권장한다. 마찬가지로 **https://{username}.github.io/robots.txt** 주소를 통해 호출하기 때문이다. 또한, **해당 위치에 robots.txt가 없을 경우 위 소스와 마찬가지로 모든 봇에 모든 페이지의 크롤링을 허용한다는 뜻**이니 참고할 것.

---
## feed.xml 작성하기

feed.xml을 RSS를 위한 파일이다. sitemap.xml과 비슷하게 사이트 내의 모든 게시글에 대한 정보가 기록되어 있는데, RSS용이다보니 게시글 내용이나 카테고리 등 더욱 자세한 내용들이 기록되어있다. feed.xml 역시 게시글을 생성할 때마다 직접 반영해야 하는데, Jekyll을 이용하면 간편하게 반영시킬 수 있다. 웹루트 폴더에서 `feed.xml` 파일을 생성하고 아래의 소스를 입력한다.

{% highlight xml %}
{% raw %}
---
layout: null
---
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{{ site.title | xml_escape }}</title>
    <description>{{ site.description | xml_escape }}</description>
    <link>{{ site.url }}{{ site.baseurl }}/</link>
    <atom:link href="{{ "/feed.xml" | prepend: site.baseurl | prepend: site.url }}" rel="self" type="application/rss+xml"/>
    <pubDate>{{ site.time | date_to_rfc822 }}</pubDate>
    <lastBuildDate>{{ site.time | date_to_rfc822 }}</lastBuildDate>
    <generator>Jekyll v{{ jekyll.version }}</generator>
    {% for post in site.posts limit:30 %}
      <item>
        <title>{{ post.title | xml_escape }}</title>
        <description>{{ post.content | xml_escape }}</description>
        <pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
        <link>{{ post.url | prepend: site.baseurl | prepend: site.url }}</link>
        <guid isPermaLink="true">{{ post.url | prepend: site.baseurl | prepend: site.url }}</guid>
        {% for tag in post.tags %}
        <category>{{ tag | xml_escape }}</category>
        {% endfor %}
        {% for cat in post.categories %}
        <category>{{ cat | xml_escape }}</category>
        {% endfor %}
      </item>
    {% endfor %}
  </channel>
</rss>
{% endraw %}
{% endhighlight %}

마찬가지로 웹루트에 두는 것을 권장한다. 호출 URL은 https://{username}.github.io/feed.xml이다.

## Google Search Console 등록하기

구글 크롤링 봇에 등록하기 위해선 Google Search Console에 도메인 정보를 기록해야 한다. 반드시 구글 계정이 필요하니 유의할 것.

<center>
	<a href="https://search.google.com/search-console/about" class="btn" target="_blank">Google Search Console</a>
</center>

접속하면 아래와 같은 홈페이지가 뜨는데, 가운데 [<span class="color-blue">시작하기</span>] 버튼을 클릭한다. 로그인을 하지 않을 경우, 로그인 프로세스가 진행된다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/93715487-830b8500-fba4-11ea-85ed-58ce1cb9c2c6.png">
		<img src="https://user-images.githubusercontent.com/50317129/93715487-830b8500-fba4-11ea-85ed-58ce1cb9c2c6.png" class="w7" />
	</a>
</figure>
