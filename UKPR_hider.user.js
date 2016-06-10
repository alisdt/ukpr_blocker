// ==UserScript==
// @name        UKPR hider
// @namespace   dogularity.org.uk
// @description Hide unwanted commenters on UK Polling Report
// @include     http://ukpollingreport.co.uk/*
// @version     1
// @grant       none
// ==/UserScript==


// This list is an example! Change it before you use the script.
// Names are sensitive to punctuation and spacing, use all lower case.
var ignore_list = 'alisdair,oldnat,anthony wells';
var ignore = ignore_list.split(',')

var comment_metas = document.getElementsByClassName('commentmetadata');
for (var i = 0; i < comment_metas.length; i++) {
  var comment_meta = comment_metas[i];
  var username_tags = comment_meta.getElementsByTagName('strong');
  var username = username_tags[0].firstChild.textContent;
  if (ignore.indexOf(username.toLowerCase()) > -1) {
    // hide comment!
    comment_meta.parentNode.style.display = 'none';
  }
}
