// ==UserScript==
// @name        demo test
// @namespace   my js shortcut
// @include     http://localhost/demo/test/*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==
//$(function(){
//    
//
// var comment = document.getElementsByTagName('a')[0];
// 
//if (document.all) {
// // For IE
//
// comment.click();
//
//} else if (document.createEvent) {
//   //FOR DOM2
//var ev = document.createEvent('MouseEvents');
//
// ev.initEvent('click', false, true);
// comment.dispatchEvent(ev);
//}
//})

console.log(11111);
GM_setValue("foo", "bar");
GM_log(GM_getValue("foo")); 
console.log(GM_getValue("foo"));
GM_log("This is an example of GM_log");
GM_openInTab ('dasda');
console.log(11111);
