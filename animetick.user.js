// ==UserScript==
// @name           Animetick Site Link
// @namespace      https://twitter.com/sytkm
// @description    this javascript makes link to the official website in animetick
// @include        http://animetick.net/anime/*
// @version        "1.2"
// ==/UserScript==

(function() {
	var linkElem = document.createElement('a');
	var tagElem = document.createElement('a');
	var linkBody = document.getElementsByClassName("anime-info-bottom")[0];
	var tagBody = document.getElementsByClassName("hashtag")[0];
	var hashtag = tagBody.innerHTML;
	linkElem.innerHTML = linkBody.children[0].innerHTML;
	linkElem.href = "http://www.google.com/search?btnI=I%27m+Feeling+Lucky&lr=lang_ja&ie=UTF-8&oe=UTF-8&q=" + linkBody.children[0].innerHTML;
	linkElem.style.textDecoration = "none";
	linkElem.style.color = "black";
	linkElem.target = "_blank";
	tagElem.innerHTML = hashtag;
	tagElem.href = "https://twitter.com/hashtag/"+ hashtag.trim().slice(1);
	tagElem.style.textDecoration = "none";
	tagElem.style.color = "black";

	tagElem.target = "_blank";

	linkBody.children[0].replaceChild(linkElem,linkBody.children[0].firstChild);
	tagBody.replaceChild(tagElem,tagBody.firstChild);

})();
