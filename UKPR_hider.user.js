// ==UserScript==
// @name        UKPR hider
// @namespace   dogularity.org.uk
// @description Hide unwanted commenters on UK Polling Report
// @include     http://ukpollingreport.co.uk/*
// @version     1
// @grant       none
// ==/UserScript==


var ignore_list = 'user1,user2,user3,user4';
var ignores = ignore_list.split(',')

var comment_metas = document.getElementsByClassName('commentmetadata');
for (var i = 0; i < comment_metas.length; i++) {
  var comment_meta = comment_metas[i];
  var username_tags = comment_meta.getElementsByTagName('strong');
  var username = username_tags[0].firstChild.textContent.toLowerCase();
  var comments = comment_meta.parentNode.getElementsByClassName('commenttext');
  var comment_text = comments[0].textContent.toLowerCase();
  for (var j = 0; j < ignores.length; j++) {
    var ignore = ignores[j];
	if (ignore == username || comment_text.indexOf(ignore) > -1) {
      // hide comment!
      comment_meta.parentNode.style.display = 'none';
    }
  }
}
