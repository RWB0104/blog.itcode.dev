---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 3. Jekyll 맞이할 준비하기"
date:   2020-08-19 00:45:02 +0900
excerpt: "Github Jekyll 블로그 개발기"
categories: "Jekyll"
tag:
- jekyll
- github.io
comments: true
background: "bg-jekyll"
---

## 개요

이 장에선 Jekyll 테마를 선택하고, 이를 관리하기 위한 방법에 대해 얘기한다. Github를 통해 Jekyll 블로그 소스를 관리할 저장소를 만들고, 이를 Git을 통해 관리한다.
<br />
물론 Github 페이지 자체에서 파일 생성 및 수정, 삭제가 가능하다. 이 경우 Git을 설치하는 과정은 굳이 필요하지 않으나, 보통 파일 관리는 시스템 상에서 이루어지는 게 여러모로 편리하므로 이와 같은 방법을 많이 사용한다.
<br />
Git도 Github도 많이 생소하여 처음 시작하는 분들껜 당혹스러울 수 있다. 정 이해가 안 된다면 그냥 그림보고 따라만 해도 좋다.

---
## Github Repository 만들기

Jekyll 테마를 선택하고 적용하는 방법엔 여러가지가 있는데, 이 글에선 원하는 테마를 다운로드하고, Repository 하나를 생성하여 Git을 통해 Repository에 반영하는 방식으로 설명하고자 한다.
<br />
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

예를 들어, 회원가입 시 지정한 **username이 test**라면, 블로그를 호스팅하기위한 **Repository의 이름은 test.github.io**로 작성해야한다. 이러한 규칙에 맞지 않으면 호스팅이 되지 않으니 주의할 것.
{: .notice}

한 계정에 동일한 이름의 Repository를 생성할 수 없으므로, **계정 당 하나의 호스팅** 기능이 주어지는 셈이다. 물론 이러한 제한은 계정을 여러개 만들어 적용하면 일정부분 해소가 가능하다.

* Owner: 소유주. 본인으로 지정한다.
* Repository name: **{username}.github.io**로 지정한다.
* Public / Private: Repository의 공개, 비공개 여부. Jekyll 호스팅용 Repository는 반드시 **Public**으로 지정해야한다.

나머지 옵션은 호스팅 과정에 아무런 영향을 주지 않으므로 건드리지 않고 넘어가도 무방하다.

입력이 완료되면 [<span class="color-green">Create Repository</span>]를 클릭하여 생성한다. 생성이 끝나면 Repository 목록에 추가된 것을 확인할 수 있다. 이 과정을 통해 Jekyll 블로그 소스를 보관하고 관리할 저장소를 생성했다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90917728-6bfb3b00-e41e-11ea-8313-0251fba0659f.png">
		<img src="https://user-images.githubusercontent.com/50317129/90917728-6bfb3b00-e41e-11ea-8313-0251fba0659f.png" class="w6" />
	</a>
</figure>

생성된 저장소를 확인하면 위와 같은 화면이 나온다. 위 내용은 Git 명령어를 이용하여 로컬 환경에 저장소를 생성하고 이를 원격 저장소와 연결하여 소스관리를 하는 방법을 안내해주는 창으로, Repository를 처음 생성 시 출력되는 화면이다.

---
## Git 설치하기

이제 Git이란 걸 설치해보자. Git은 소스코드를 효율적으로 관리할 수 있는 강력한 형상관리 툴로, 리눅스의 아버지인 리누스 토르발스가 개발했다. 넓은 의미에서 우리가 흔히 하는 백업 혹은 복사와 동일하지만, Git은 단순한 백업 이상으로 강력하다.

* 명령어 입력만으로 소스코드 백업이 가능하다.
* Git 저장소와 통신이 가능한 환경이면 어디서나 저장된 소스코드를 받아오거나, 수정하고 반영할 수 있다.
* 일정 시점으로의 롤백이 필요할 경우, 얼마든지 과거의 특정 커밋 시점으로 돌아갈 수 있다.
* 커밋별로 소스코드의 변경점을 비교할 수 있다.

Jekyll 블로그의 소스코드는 Github를 통해 관리하므로, 소스코드를 수정하고 반영하기 위해선 Git의 사용이 필수적이다.

물론 별도의 Git 사용없이 Github 홈페이지 내부에서 글을 작성하듯이 파일을 추가하거나, 수정, 삭제할 수 있다. 그러나 이런 방법은 실서버에 즉시 배포되므로, 실수가 발생할 경우 그대로 노출되기 쉽다. 또한 오류가 발생했을 경우 컴파일 에러 트레이스를 확인할 수 없어 디버깅에도 문제가 생기므로, 능동적인 대처가 어렵다. 본인이 정말 Jekyll 배포 및 Markdown 작성 경험이 풍부한 것이 아니라면, Git을 통해 직접 로컬에서 수정하여 반영하는 방식을 취하기 바란다.

<center>
	<a href="https://git-scm.com/" class="btn btn-info" target="_blank">Git 공식 홈페이지</a>
</center>

Git은 위의 홈페이지에서 설치할 수 있다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90918409-90a3e280-e41f-11ea-846f-68332ffecdbe.png">
		<img src="https://user-images.githubusercontent.com/50317129/90918409-90a3e280-e41f-11ea-846f-68332ffecdbe.png" class="w6" />
	</a>
</figure>

Git 홈페이지는 위와 같이 구성되어있다. 홈페이지에서 자체적으로 **접속한 OS의 정보를 확인하고 가장 적합한 Git 버전을 추천**한다. 페이지 좌측 상단의 모니터 오브젝트에서 현재 OS에 가장 적합한 Git 버전을 받아 설치한다.

#### 1. 라이센스 동의

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90949816-b0222600-e486-11ea-95d7-7ee7150d4f4f.png">
		<img src="https://user-images.githubusercontent.com/50317129/90949816-b0222600-e486-11ea-95d7-7ee7150d4f4f.png" class="w4" />
	</a>
</figure>

라이센스 동의 과정으로 [<span class="color-green">Next</span>] 버튼을 눌러 넘어간다.

#### 2. 설치경로 선택

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90949836-f6778500-e486-11ea-8568-94fd7e13f358.png">
		<img src="https://user-images.githubusercontent.com/50317129/90949836-f6778500-e486-11ea-8568-94fd7e13f358.png" class="w4" />
	</a>
</figure>

설치경로를 선택한다. 기본으로 지정하고 [<span class="color-green">Next</span>] 버튼을 누른다.

#### 3. 설치옵션 선택

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90949847-1e66e880-e487-11ea-82f3-18ede0e8660a.png">
		<img src="https://user-images.githubusercontent.com/50317129/90949847-1e66e880-e487-11ea-82f3-18ede0e8660a.png" class="w4" />
	</a>
</figure>

설치 시 지정할 옵션을 선택한다. 각 옵션의 내용은 아래와 같다.

* On the Desktop: 바탕화면 바로가기 만들기
* **<span class="color-blue">Git Bash Here</span>**: 바탕화면에서 오른쪽 마우스 클릭 시 Git Bash 실행 컨텍스트 추가
* **<span class="color-blue">Git GUI Here</span>**: 바탕화면에서 오른쪽 마우스 클릭 시 Git GUI 실행 컨텍스트 추가
* Git LFS: 대용량 파일 지원
* Associate .git* configuration files with the default text editor: git 설정파일을 기본 텍스트 편집기와 연결
* Associate .sh files to be run with Bash: [.sh] 파일을 Bash로 실행함.
* Use a TrueType font in console windows: 콘솔창의 폰트를 TrueType으로 사용
* Check daily for Git for Windows updates: 매일 Git 업데이트 확인

원하거나, 원하지 않는 옵션을 확인하고 [<span class="color-green">Next</span>] 버튼을 누른다. 단, 파란색으로 하이라이팅 된 두 옵션 중 하나 이상은 활성화되어있는 것이 사용하기 편하다.

#### 4. 시작메뉴 경로선택

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90952465-b6240100-e49e-11ea-9784-cb5a1695ffeb.png">
		<img src="https://user-images.githubusercontent.com/50317129/90952465-b6240100-e49e-11ea-9784-cb5a1695ffeb.png" class="w4" />
	</a>
</figure>

시작 메뉴에 지정할 경로를 선택한다.

* Don't create a Start Menu folder: 시작 메뉴를 생성하지 않는다.

원하거나, 원하지 않는 옵션을 확인하고 [<span class="color-green">Next</span>] 버튼을 누른다.

#### 5. Git 편집기 선택 (Choosing the default editor used by Git)

<center>
	<h2 class="color-red">※ 처음 설치하시는 분은 5 ~ 12까지의 과정은 전부 기본값으로 지정하고 설치하시길 권장합니다.</h2>
</center>

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90952499-f97e6f80-e49e-11ea-95a0-818471fd3417.png">
		<img src="https://user-images.githubusercontent.com/50317129/90952499-f97e6f80-e49e-11ea-95a0-818471fd3417.png" class="w4" />
	</a>
</figure>

Git을 사용하기 위한 기본 편집기를 선택한다. 기본 권장옵션은 Vim이며, 콤보박스를 통해 원하는 편집기를 선택할 수도 있다. 지원하는 편집기는 아래와 같다.

* Nano Editor
* **Vim**
* Notepad++
* Visual Studio Code
* Visual Studio Code Insider
* Sublime
* Atom
* other

편집기를 선택하고 [<span class="color-green">Next</span>] 버튼을 누른다. 처음이라면 기본값으로 두자.

#### 6. 환경변수 지정 (Adjusting your PATH environment)

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90952606-f6d04a00-e49f-11ea-85d0-204d305f8f9b.png">
		<img src="https://user-images.githubusercontent.com/50317129/90952606-f6d04a00-e49f-11ea-85d0-204d305f8f9b.png" class="w4" />
	</a>
</figure>

환경변수를 지정하는 옵션을 선택한다. 라디오버튼을 통해 원하는 옵션을 선택할 수 있다.

* Use Git from Git Bash Only: Bash 환경에서만 Git 사용 가능 (환경변수 미변경)
* **Use Git from Windows Command Prompt**: 윈도우 프롬프트에서 Git 사용 가능
* Use Git abnd optional Unix tools from the Windows Command Prompt: 윈도우 프롬프트에 Git 및 Linux 명령어 사용 가능

환경변수 지정방법을 선택하고 [<span class="color-green">Next</span>] 버튼을 누른다. 처음이라면 기본값으로 두자.

#### 7. HTTPS 전송 방법 지정 (Choosing HTTPS tranport backend)

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90952734-0e5c0280-e4a1-11ea-8a9f-08a164f05b5e.png">
		<img src="https://user-images.githubusercontent.com/50317129/90952734-0e5c0280-e4a1-11ea-8a9f-08a164f05b5e.png" class="w4" />
	</a>
</figure>

Git 사용 시 HTTPS 전송 방법을 선택한다.

* **Use The OpenSSH library**: OpenSSH 라이브러리 사용
* Use The native Windows Secure Channel library: Windows 인증서 저장소 사용

HTTPS 전송 방법을 선택하고 [<span class="color-green">Next</span>] 버튼을 누른다. 처음이라면 기본값으로 두자.

#### 8. 개행문자 처리방식 지정 (Configuring the line ending conversions)

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90953593-a4932700-e4a7-11ea-95dd-5c6cb50662ea.png">
		<img src="https://user-images.githubusercontent.com/50317129/90953593-a4932700-e4a7-11ea-95dd-5c6cb50662ea.png" class="w4" />
	</a>
</figure>

Checkout, commit 시 개행문자 처리 방식을 선택한다.

* **Checkout Windows-style, commit Unix-style line endings**: Checkout 시엔 Windows방식(CRLF), commit 시엔 Unix방식(LF)로 지정
* Checkout as-is, commit Unix-style line endings: Checkout 시엔 변환 없음, commit시엔 Unix방식(LF)로 지정
* Checkout as-is, commit as-is: Checkout, commit 둘 다 변환 없음

개행문자 처리 방식을 선택하고 [<span class="color-green">Next</span>] 버튼을 누른다. 처음이라면 기본값으로 두자.

#### 9. Git Bash 선택 (Configuring the terminal emulator to use with Git Bash)

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90953681-ba551c00-e4a8-11ea-9fc4-fe1c43e2ef28.png">
		<img src="https://user-images.githubusercontent.com/50317129/90953681-ba551c00-e4a8-11ea-9fc4-fe1c43e2ef28.png" class="w4" />
	</a>
</figure>

Git Bash 실행 시 사용할 터미널을 선택한다.

* **Use MinTTY**: MinTTY 터미널 사용
* Use Windows default console window: Windows 기본 터미널 사용

터미널을 선택하고 [<span class="color-green">Next</span>] 버튼을 누른다. 처음이라면 기본값으로 두자.

#### 10. pull 기본동작 지정 (Choose the default behavior of 'git pull')

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90953682-bc1edf80-e4a8-11ea-9d0c-d9c0d71afbaf.png">
		<img src="https://user-images.githubusercontent.com/50317129/90953682-bc1edf80-e4a8-11ea-9d0c-d9c0d71afbaf.png" class="w4" />
	</a>
</figure>

`git pull` 명령어 실행 시 수행할 동작을 지정한다.

* **Default (fast-forward or merge)**: fast-forward 혹은 merge를 이용한 병합
* Rebase: rebase를 이용항 병합
* Only ever fast-forward: fast-forward를 이용한 병합

기본동작을 선택하고 [<span class="color-green">Next</span>] 버튼을 누른다. 처음이라면 기본값으로 두자.

#### 11. Credential helper 지정 (Choose a credential helper)

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90954457-53873100-e4af-11ea-9a98-ef5131c4ab1a.png">
		<img src="https://user-images.githubusercontent.com/50317129/90954457-53873100-e4af-11ea-9a98-ef5131c4ab1a.png" class="w4" />
	</a>
</figure>

Credential helper를 지정한다.

Credential은 데이터 통신에 HTTP 프로토콜을 사용 시, 매번 입력해야하는 인증정보를 저장하고 자동으로 입력해주는 시스템을 제공한다.
{: .notice}

* None: 사용하지 않음
* **Git Credential Manager**: Windows 전용 Credential Manager 사용
* Git Credential Manager Core: Cross-Platform을 지원하는 Credential Manager 사용

Credential helper를 선택하고 [<span class="color-green">Next</span>] 버튼을 누른다. 처음이라면 기본값으로 두자.

#### 12. 실험 옵션 지정 (Configuring experimental options)

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90954553-225b3080-e4b0-11ea-8930-6b461f966b4c.png">
		<img src="https://user-images.githubusercontent.com/50317129/90954553-225b3080-e4b0-11ea-8930-6b461f966b4c.png" class="w4" />
	</a>
</figure>

Git에서 제공하는 실험적인 옵션을 선택한다. 해당 옵션은 버전에 따라 지원되거나, 지원되지 않을 수 있다. 차후 사용자들의 반응에 따라 기본 제공 설정으로 지정되거나, 삭제될 수 있다.

* Enable experimental support for pseudo consoles: 가상 터미널 지원

원하거나, 원하지 않는 옵션을 확인하고 [<span class="color-green">Install</span>] 버튼을 눌러 설치를 진행한다.

#### 13. 설치 완료

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90957778-03b66300-e4cb-11ea-9927-a0efbfc1e921.png">
		<img src="https://user-images.githubusercontent.com/50317129/90957778-03b66300-e4cb-11ea-9927-a0efbfc1e921.png" class="w4" />
	</a>
</figure>

설치과정은 컴퓨터의 사양에 따라 약간의 시간이 소요될 수 있다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90957782-0618bd00-e4cb-11ea-9972-7bd3fe1aa45b.png">
		<img src="https://user-images.githubusercontent.com/50317129/90957782-0618bd00-e4cb-11ea-9972-7bd3fe1aa45b.png" class="w4" />
	</a>
</figure>

설치가 완료되면 [<span class="color-green">Next</span>]를 누르자. [<span class="color-green">Launch Git Bash</span>]를 체크하고 진행하면 Git Bash가 즉시 실행된다.

#### 14. 설치 확인

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90957788-0913ad80-e4cb-11ea-8627-6ceba19d58b4.png">
		<img src="https://user-images.githubusercontent.com/50317129/90957788-0913ad80-e4cb-11ea-8627-6ceba19d58b4.png" class="w4" />
	</a>
</figure>

설치 후 바탕화면 혹은 폴더에서 오른쪽 마우스를 클릭하면 [Git Bash Here] 혹은 [Git GUI Here]를 확인할 수 있다. 해당 컨텍스트를 클릭하면 Git 콘솔 혹은 GUI 프로그램이 실행된다.

위 그림은 Git Bash를 실행한 것이며, GUI는 우리가 흔히 아는 유저 인터페이스가 있는 일반적인 프로그램이다. Bash는 명령어를 입력하여 Git를 관리하고, GUI는 버튼과 같은 메뉴를 마우스로 조작하여 Git을 관리한다.

이로써 Jekyll 블로그를 호스팅할 Repository, 이를 로컬에서 관리할 Git의 설치를 완료했다. 다음 장에선 실제로 내가 원하는 Jekyll 테마를 선택하고, 이를 생성한 Repository에 적용한 뒤 직접 접속해보는 방법에 대해 알아본다.