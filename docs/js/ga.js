/**
 * Google Analytics 자바스크립트
 *
 * @author RWB
 * @since 2021.08.13 Fri 21:50:32
 */

/**
 * GA 동작 함수
 */
function gtag()
{
	dataLayer.push(arguments);
}

window.dataLayer = window.dataLayer || [];

gtag('js', new Date());
gtag('config', 'G-X2THE3XLX1');