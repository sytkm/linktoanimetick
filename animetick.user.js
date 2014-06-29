// ==UserScript==
// @name           Animetick Site Link
// @namespace      https://twitter.com/sytkm
// @description    link to official site in animetick
// @include        http://animetick.net/anime/*
// @version        "1.1"
// ==/UserScript==

(function() {
    var element = document.createElement('a');
    var objBody = document.getElementsByClassName("anime-info-bottom")[0];
    element.style.backgroundColor = "#FF3307";
    element.style.textDecoration = "none";
    element.style.borderRadius = "5px";
    element.style.color = "#FFFFFF";
    element.target="_blank";
    element.innerHTML = "Official Site";
    element.href = "http://www.google.com/search?btnI=I%27m+Feeling+Lucky&lr=lang_ja&ie=UTF-8&oe=UTF-8&q=" + objBody.children[0].innerHTML;
    objBody.children[1].appendChild(element);
})();