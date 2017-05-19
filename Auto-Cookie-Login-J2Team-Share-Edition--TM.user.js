// ==UserScript==
// @name           Multi-Login
// @namespace      http://fb.com/grim.reaper.slave
// @version        Pre-release-1.2
// @copyright      2017+ Đặng Quốc Trung (MarkiThePews)
// @description    Như tên thôi =))
// @include        *
// @homepageURL    http://fb.com/grim.reaper.slave
// @supportURL     http://fb.com/grim.reaper.slave
// @updateURL      https://github.com/MarkiThePews/Some-Useful-Scripts/raw/master/Auto-Cookie-Login-J2Team-Share-Edition--TM.user.js
// @author         Đặng Quốc Trung
// ==/UserScript==
var webs = ['Linksvip','http://linksvip.net','Porn','http://members2.mofosnetwork.com/access/login/'];
function writeCookie(input){
    var cookies = input;
    var cArray = cookies.split(";");
    for(i=0; i<cArray.length; i++){
        document.cookie = cArray[i]+"; path=/";
    }
}
function getCookie(name){
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value !== null) ? unescape(value[1]) : null;
}
function domain(whitelisted){
    if (whitelisted) return location.href;
    else return location.hostname.replace('www.','');}
function listed(){
    var temp = "";
    for (i = 0; i < webs.length; i++){temp += '=>'+webs[i]+'\n';i++;}
    return temp;
}
//Linksvip
if (domain() == 'linksvip.net'){
    if (getCookie('user') != 'linksvip@shareaccvip.com'){
        writeCookie('user=linksvip%40shareaccvip.com;pass=f2624b8019e511e8dedabd065c3f5dba');
        location.reload();}
    else document.getElementsByClassName('portlet-content')[2].getElementsByTagName('div')[4].remove();
}
//Pỏn
if (domain('yes') == 'http://members2.mofosnetwork.com/access/login/'){
    document.getElementById('username').value='\x74\x6f\x6d\x6d\x79\x6d\x33\x35\x38\x39';document.getElementById('username').style.display='none';document.getElementsByClassName('input_label_username')[0].style.display='none';
    document.getElementById('password').value='\x62\x65\x6b\x79\x38\x36\x65\x72';document.getElementById('password').style.display='none';document.getElementsByClassName('input-label-password')[0].style.display='none';
    var check=document.getElementById('recaptcha_widget');
    if(check)alert('Phát hiện captcha, nhập captcha rồi ấn Login.');else document.getElementsByClassName('btn-blue')[0].click();
}
window.onkeypress = function(event) {
    if (event.keyCode == 71) {
        promptit();
    }
};
function promptit(){
    var redirectbox = prompt("Hiện đang có:\n"+listed()+"Điền vào nơi muốn chuyển hướng");
    switch(redirectbox) {
        case webs[0]:
            location.replace(webs[1]);
            break;
        case webs[2]:
            location.replace(webs[3]);
            break;
        case webs[4]:
            location.replace(webs[5]);
            break;
        case webs[6]:
            location.replace(webs[7]);
            break;
        case webs[8]:
            location.replace(webs[9]);
            break;
        case webs[10]:
            location.replace(webs[11]);
            break;
        default:
            alert('Không tìm thấy....');
            break;
    }
}
