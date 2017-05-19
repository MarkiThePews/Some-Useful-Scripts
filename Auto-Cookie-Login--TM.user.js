// ==UserScript==
// @name           Auto-Cookie-Login
// @namespace      http://fb.com/grim.reaper.slave
// @version        pre-release-1.0
// @copyright      2017+ Đặng Quốc Trung (MarkiThePews)
// @description    A auto login script use cookie.
// @include        *
// @homepageURL    http://fb.com/grim.reaper.slave
// @supportURL     http://fb.com/grim.reaper.slave
// @author         Đặng Quốc Trung
// ==/UserScript==
function writeCookie(input){
    var cookies = input;
    var cArray = cookies.split(";");
    for(i=0; i<cArray.length; i++){
        document.cookie = cArray[i]+"; path=/";
    }
}
function getCookie(name)
{
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value !== null) ? unescape(value[1]) : null;
}
function domain(){return location.hostname.replace('www.','');}
//Enter domain without www., m., whatever.
if (domain() == 'domain.com'){
    if (getCookie('COOKIE NAME') != 'COOKIE VALUE'){//Choose a cookie to check whether they logged in with this cookie or not
        writeCookie('COOKIENAME=COOKIEVALUE;COOKIENAME2=COOKIEVALUE2');//Enter Cookies here, seperate with semicolon ";"
        location.reload();}//Refresh page to login with the cookie.
    else {}//scripts to execute if logged in, maybe a script to delete the logout button so the cookie won't be lost ?
}
if (domain() == 'domain2.com'){
    if (getCookie('COOKIE NAME') != 'COOKIE VALUE'){
        writeCookie('COOKIENAME=COOKIEVALUE;COOKIENAME2=COOKIEVALUE2');
    else {}
