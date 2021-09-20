/**
 * 컨텐츠 자바스크립트
 *
 * @author RWB
 * @since 2021.08.11 Wed 13:31:39
 */

/**
 * 코드 복사 함수
 *
 * @param {DOMElement} dom: HTML DOM
 */
function copyCode(dom)
{
	window.getSelection().selectAllChildren(dom.parentElement.querySelector('pre'));
	document.execCommand('copy');

	const origin = dom.innerHTML;
	dom.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-icon="check" class="i-check"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>';

	setTimeout(() => dom.innerHTML = origin, 1000);
}