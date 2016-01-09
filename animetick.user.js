// ==UserScript==
// @name           Animetick Site Link
// @namespace      https://twitter.com/sytkm
// @description    this javascript makes link to the official website in animetick
// @include        http://animetick.net/anime/*
// @version        "1.2"
// ==/UserScript==

(function() {
	var element = document.createElement('a');
	var tagElem = document.createElement('a');
	var objBody = document.getElementsByClassName("anime-info-bottom")[0];
	var tagBody = document.getElementsByClassName("hashtag")[0];
	var hashtag = tagBody.innerHTML;
	element.innerHTML = objBody.children[0].innerHTML;
	element.href = "http://www.google.com/search?btnI=I%27m+Feeling+Lucky&lr=lang_ja&ie=UTF-8&oe=UTF-8&q=" + objBody.children[0].innerHTML;
	element.style.textDecoration = "none";
	element.style.color = "black";
	tagElem.innerHTML = hashtag;
	tagElem.href = "https://twitter.com/hashtag/"+ hashtag.trim().slice(1);
	tagElem.style.textDecoration = "none";
	tagElem.style.color = "black";

	objBody.children[0].replaceChild(element,objBody.children[0].firstChild);
	tagBody.replaceChild(tagElem,tagBody.firstChild);

})();
