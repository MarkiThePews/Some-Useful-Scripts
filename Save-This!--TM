// ==UserScript==
// @name           Save This!
// @namespace      http://fb.com/grim.reaper.slave
// @version        2.1
// @copyright      2017+ Đặng Quốc Trung (MarkiThePews)
// @description    Quick save a string to view it later (like promocodes, coupons, or nsfw(JAV) codes ( ͡° ͜ʖ ͡°))
// @include        *
// @homepageURL    http://fb.com/grim.reaper.slave
// @supportURL     http://fb.com/grim.reaper.slave
// @author         Đặng Quốc Trung
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_deleteValue
// ==/UserScript==
// Các lệnh có thể dùng:
// delete.XXX xóa từ khóa mà có từ trùng với những từ sau dấu chấm
// deleteid.XXX xóa từ khóa đếm theo thứ tự
// deleteall. xóa tất cả từ khóa
// copyid.XXX copy từ khóa theo thứ tự
var displaydata = '';
var i;
var substring;
var data;
var action = "";
window.onkeypress = function(event) {
 if (event.keyCode == 16) {
      promptit();
   }
};
function promptit(){
data = JSON.parse(GM_getValue('data', '[\"!!!KHÔNG CÓ DỮ LIỆU\"]'));
displaydata = "\n";
for (i = 0; i < data.length; i++) {
displaydata += data[i] + ', ';
}
if (data.length == 0) displaydata += "!!!KHÔNG CÓ DỮ LIỆU, ";
action = prompt('Các từ khóa đã lưu: '+displaydata.slice(0, -2)+'.\n Nhập từ khóa bất kỳ vào khung dưới để lưu?');
if (data.length !== 0){
var isittrue = data[0].includes("KHÔNG CÓ DỮ LIỆU");
if (isittrue) {data.splice(0,1); savedata();}}
if (action == null || action == ""){console.log('null or blank');} else{
substring = "delete.";
isittrue = action.includes(substring);
if (isittrue){action = action.substr(action.indexOf('.')+1);
for (i = 0; i < data.length; i++) {
    isittrue = data[i].includes(action);
if (isittrue) {data.splice(i,1); savedata(); break;}
}
}
  else{substring = "deleteid."; var isittrue = action.includes(substring);
    if (isittrue){action = action.substr(action.indexOf('.')+1); data.splice(action-1,1); savedata();} else{substring = "deleteall."; var isittrue = action.includes(substring);
    if (isittrue){GM_deleteValue('data');} else{substring = "copyid."; var isittrue = action.includes(substring);
    if (isittrue){action = action.substr(action.indexOf('.')+1); copyToClipboard(data[action-1]);} else{
data.push(action); savedata();}
}}}}}
function savedata() {GM_setValue('data',JSON.stringify(data));}
var dummy = document.createElement("input");
document.body.appendChild(dummy);
dummy.setAttribute('style','opacity:0;');
dummy.setAttribute("id", "dummy_id");
function copyToClipboard(val){
      document.getElementById("dummy_id").value=val;
      dummy.select();
      document.execCommand("copy");
    }
