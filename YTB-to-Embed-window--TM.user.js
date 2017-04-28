// ==UserScript==
// @name           YTB to Embed window
// @namespace      http://fb.com/grim.reaper.slave
// @version        0.3
// @copyright      2017+ Đặng Quốc Trung (MarkiThePews)
// @description    A personal script for meh, but someone might need it!
// @include        *.youtube.com/watch*
// @include        *.youtube.com/embed*
// @homepageURL    http://fb.com/grim.reaper.slave
// @author         Đặng Quốc Trung
// ==/UserScript==

// Last updated on 2017-03-30 (YYYY-MM-DD)
var ytplayer;
var kiemtra = window.location.href;
    substring = "watch";
    var ketqua = kiemtra.includes(substring);
    if (ketqua) ytplayer = document.getElementById("movie_player"); else {var temp = document.getElementById("player").firstChild.id; ytplayer = document.getElementById(temp);}
function tohopphim(e) {
      var evtohop = window.event? event : e;
      if (evtohop.keyCode == 88 && evtohop.ctrlKey) changeitman();
}

document.onkeydown = tohopphim;

function changeitman() {
    var kiemtra = window.location.href;
    substring = "watch";
    var ctime = Math.floor(ytplayer.getCurrentTime());
    var ketqua = kiemtra.includes(substring);
    if (ketqua) changetoembed(ctime); else changetonm(ctime);
}
function changetoembed(time) {
var s = window.location.href;
substring = "&";
var ketqua = s.includes(substring);
if (ketqua) s = s.substr(0, s.indexOf('&'));
s = s.replace("watch?v=", "embed/") + "?autoplay=1" + "&start=" + time;
window.location.replace(s);
}
function changetonm(time) {
var s = window.location.href;
s = s.substr(0, s.indexOf('?'));
s = s.replace("embed/", "watch?v=") + "&t=" + time;
window.location.replace(s);
}
