// ==UserScript==
// @name           Animetick Site Link
// @namespace      https://twitter.com/sytkm
// @description    this javascript makes link to the official website in animetick
// @include        http://animetick.net/anime/*
// @version        "1.2"
// ==/UserScript==

(function() {
	var element = document.createElement('a');
	var objBody = document.getElementsByClassName("anime-info-bottom")[0];
	var tagBody = document.getElementsByClassName("hashtag")[0];
	var tagElem = document.createElement('a');
	var hashtag = tagBody.innerHTML;
	element.style.backgroundColor = "#FF3307";
	element.style.textDecoration = "none";
	element.style.borderRadius = "5px";
	element.style.color = "#FFFFFF";
	element.target="_blank";
	element.innerHTML = "Official Site";
	element.href = "http://www.google.com/search?btnI=I%27m+Feeling+Lucky&lr=lang_ja&ie=UTF-8&oe=UTF-8&q=" + objBody.children[0].innerHTML;
	tagElem.innerHTML = hashtag;
	console.log(hashtag);
	tagElem.href = "https://twitter.com/hashtag/"+ hashtag.trim().slice(1);
	objBody.children[1].appendChild(element);
	tagBody.replaceChild(tagElem,tagBody.firstChild);

})();
