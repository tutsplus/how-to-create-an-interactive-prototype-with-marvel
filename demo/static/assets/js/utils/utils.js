function ord(string){var str=string+'',code=str.charCodeAt(0);if(0xD800<=code&&code<=0xDBFF){var hi=code;if(str.length===1){return code;}
var low=str.charCodeAt(1);return((hi- 0xD800)*0x400)+(low- 0xDC00)+ 0x10000;}
if(0xDC00<=code&&code<=0xDFFF){return code;}
return code;}
function UrlExists(url)
{var http=new XMLHttpRequest();http.open('HEAD',url,false);http.send();return http.status!=404;}
function showBlockMessage(blockElement)
{$.blockUI({message:$('#'+blockElement)});}
function checkEmail(email){var regex=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;return regex.test(email);}
var STRENGTH_TOO_SHORT=1;var STRENGTH_WEAK=2;var STRENGTH_GOOD=3;var STRENGTH_STRONG=4;function checkStrength(password){var strength=0
if(password.length<6){return STRENGTH_TOO_SHORT;}
if(password.length>7)strength+=1
if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))strength+=1
if(password.match(/([a-zA-Z])/)&&password.match(/([0-9])/))strength+=1
if(password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))strength+=1
if(password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/))strength+=1
if(strength<2){$('#result').removeClass()
$('#result').addClass('weak')
return STRENGTH_WEAK;}else if(strength==2){$('#result').removeClass()
$('#result').addClass('good')
return STRENGTH_GOOD;}else{$('#result').removeClass()
$('#result').addClass('strong')
return STRENGTH_STRONG;}}
function showErrorMessage(message)
{$(".error-message").html(message);$(".error-message").fadeIn(10);};function hideErrorMessage()
{};function hideNotificationMessage()
{$(".notification").addClass('hidden');}
function showNotificationMessage(notify_type,message)
{try
{noty({text:message,layout:'topCenter',type:notify_type,killer:true,animation:{open:{opacity:'toggle'},close:{opacity:'toggle'},easing:'swing',speed:500},timeout:20000,closeWith:['click'],template:'<div class="noty_message"><span class="noty_text"></span><div class="notyClose"></div></div>',});}
catch(e)
{}}
function showMessage(type,message,animate){if(type==null){var notificationClass="default";}else{var notificationClass=type;}
var notificationCount=$(".message-notification").length+ 1;if(animate){var animateClass="";}else{var animateClass="static active";}
$("body").prepend('<div id="message-'+notificationCount+'" class="message-notification '+ notificationClass+' '+animateClass+'">'+message+'<div class="close"></div></div>')
if(animate){setTimeout(function(){$("#message-"+ notificationCount).addClass("active");},5000);}}
Object.size=function(obj){var size=0,key;for(key in obj){if(obj.hasOwnProperty(key))size++;}
return size;};function md5cycle(x,k){var a=x[0],b=x[1],c=x[2],d=x[3];a=ff(a,b,c,d,k[0],7,-680876936);d=ff(d,a,b,c,k[1],12,-389564586);c=ff(c,d,a,b,k[2],17,606105819);b=ff(b,c,d,a,k[3],22,-1044525330);a=ff(a,b,c,d,k[4],7,-176418897);d=ff(d,a,b,c,k[5],12,1200080426);c=ff(c,d,a,b,k[6],17,-1473231341);b=ff(b,c,d,a,k[7],22,-45705983);a=ff(a,b,c,d,k[8],7,1770035416);d=ff(d,a,b,c,k[9],12,-1958414417);c=ff(c,d,a,b,k[10],17,-42063);b=ff(b,c,d,a,k[11],22,-1990404162);a=ff(a,b,c,d,k[12],7,1804603682);d=ff(d,a,b,c,k[13],12,-40341101);c=ff(c,d,a,b,k[14],17,-1502002290);b=ff(b,c,d,a,k[15],22,1236535329);a=gg(a,b,c,d,k[1],5,-165796510);d=gg(d,a,b,c,k[6],9,-1069501632);c=gg(c,d,a,b,k[11],14,643717713);b=gg(b,c,d,a,k[0],20,-373897302);a=gg(a,b,c,d,k[5],5,-701558691);d=gg(d,a,b,c,k[10],9,38016083);c=gg(c,d,a,b,k[15],14,-660478335);b=gg(b,c,d,a,k[4],20,-405537848);a=gg(a,b,c,d,k[9],5,568446438);d=gg(d,a,b,c,k[14],9,-1019803690);c=gg(c,d,a,b,k[3],14,-187363961);b=gg(b,c,d,a,k[8],20,1163531501);a=gg(a,b,c,d,k[13],5,-1444681467);d=gg(d,a,b,c,k[2],9,-51403784);c=gg(c,d,a,b,k[7],14,1735328473);b=gg(b,c,d,a,k[12],20,-1926607734);a=hh(a,b,c,d,k[5],4,-378558);d=hh(d,a,b,c,k[8],11,-2022574463);c=hh(c,d,a,b,k[11],16,1839030562);b=hh(b,c,d,a,k[14],23,-35309556);a=hh(a,b,c,d,k[1],4,-1530992060);d=hh(d,a,b,c,k[4],11,1272893353);c=hh(c,d,a,b,k[7],16,-155497632);b=hh(b,c,d,a,k[10],23,-1094730640);a=hh(a,b,c,d,k[13],4,681279174);d=hh(d,a,b,c,k[0],11,-358537222);c=hh(c,d,a,b,k[3],16,-722521979);b=hh(b,c,d,a,k[6],23,76029189);a=hh(a,b,c,d,k[9],4,-640364487);d=hh(d,a,b,c,k[12],11,-421815835);c=hh(c,d,a,b,k[15],16,530742520);b=hh(b,c,d,a,k[2],23,-995338651);a=ii(a,b,c,d,k[0],6,-198630844);d=ii(d,a,b,c,k[7],10,1126891415);c=ii(c,d,a,b,k[14],15,-1416354905);b=ii(b,c,d,a,k[5],21,-57434055);a=ii(a,b,c,d,k[12],6,1700485571);d=ii(d,a,b,c,k[3],10,-1894986606);c=ii(c,d,a,b,k[10],15,-1051523);b=ii(b,c,d,a,k[1],21,-2054922799);a=ii(a,b,c,d,k[8],6,1873313359);d=ii(d,a,b,c,k[15],10,-30611744);c=ii(c,d,a,b,k[6],15,-1560198380);b=ii(b,c,d,a,k[13],21,1309151649);a=ii(a,b,c,d,k[4],6,-145523070);d=ii(d,a,b,c,k[11],10,-1120210379);c=ii(c,d,a,b,k[2],15,718787259);b=ii(b,c,d,a,k[9],21,-343485551);x[0]=add32(a,x[0]);x[1]=add32(b,x[1]);x[2]=add32(c,x[2]);x[3]=add32(d,x[3]);}
function cmn(q,a,b,x,s,t){a=add32(add32(a,q),add32(x,t));return add32((a<<s)|(a>>>(32- s)),b);}
function ff(a,b,c,d,x,s,t){return cmn((b&c)|((~b)&d),a,b,x,s,t);}
function gg(a,b,c,d,x,s,t){return cmn((b&d)|(c&(~d)),a,b,x,s,t);}
function hh(a,b,c,d,x,s,t){return cmn(b^c^d,a,b,x,s,t);}
function ii(a,b,c,d,x,s,t){return cmn(c^(b|(~d)),a,b,x,s,t);}
function md51(s){txt='';var n=s.length,state=[1732584193,-271733879,-1732584194,271733878],i;for(i=64;i<=s.length;i+=64){md5cycle(state,md5blk(s.substring(i-64,i)));}
s=s.substring(i-64);var tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<s.length;i++)
tail[i>>2]|=s.charCodeAt(i)<<((i%4)<<3);tail[i>>2]|=0x80<<((i%4)<<3);if(i>55){md5cycle(state,tail);for(i=0;i<16;i++)tail[i]=0;}
tail[14]=n*8;md5cycle(state,tail);return state;}
function md5blk(s){var md5blks=[],i;for(i=0;i<64;i+=4){md5blks[i>>2]=s.charCodeAt(i)
+(s.charCodeAt(i+1)<<8)
+(s.charCodeAt(i+2)<<16)
+(s.charCodeAt(i+3)<<24);}
return md5blks;}
var hex_chr='0123456789abcdef'.split('');function rhex(n)
{var s='',j=0;for(;j<4;j++)
s+=hex_chr[(n>>(j*8+ 4))&0x0F]
+ hex_chr[(n>>(j*8))&0x0F];return s;}
function hex(x){for(var i=0;i<x.length;i++)
x[i]=rhex(x[i]);return x.join('');}
function md5(s){return hex(md51(s));}
function add32(a,b){return(a+ b)&0xFFFFFFFF;}
if(md5('hello')!='5d41402abc4b2a76b9719d911017c592'){function add32(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF),msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF);}}
function getElementPosition(param){var x=0,y=0;var obj=(typeof param=="string")?document.getElementById(param):param;if(obj){x=obj.offsetLeft;y=obj.offsetTop;var body=document.getElementsByTagName('body')[0];while(obj.offsetParent&&obj!=body){x+=obj.offsetParent.offsetLeft;y+=obj.offsetParent.offsetTop;obj=obj.offsetParent;}}
return[x,y];}
function sleep(ms)
{var dt=new Date();dt.setTime(dt.getTime()+ ms);while(new Date().getTime()<dt.getTime());}
function getURLParameter(name){var pid=undefined;var pathArray=window.location.pathname.split('/');try{pid=pathArray[pathArray.length-2];if(pid=="project")
{pid=pathArray[2];}}
catch(ex)
{}
if(pid==undefined||pid==""||pid=="project")
{pid=decodeURI((RegExp(name+'='+'(.+?)(&|$)').exec(location.search)||[,null])[1]);}
return pid;}
function copyToClipBoard(s){if(window.clipboardData&&clipboardData.setData)
{clipboardData.setData("Text",s);}
else
{netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');var clip=Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);if(!clip)return;var trans=Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);if(!trans)return;trans.addDataFlavor('text/unicode');var str=new Object();var len=new Object();var str=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);str.data=s;trans.setTransferData("text/unicode",str,str.data.length*2);var clipid=Components.interfaces.nsIClipboard;if(!clip)return false;clip.setData(trans,null,clipid.kGlobalClipboard);}}
function validateEmail(email){var email_test=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;if(email==""||email==" "){$('input[name=email]').focus().before('<div class="error">Empty!</div>');$('input[name=email]').addClass("highlight");return false;}else if(!email_test.test(email)){$('input[name=email]').select().before('<div class="error">Incorrect!</div>');$('input[name=email]').addClass("highlight");return false;}else{return true;}}
function capitalise(string){if(string!=undefined)
{return string.charAt(0).toUpperCase()+ string.slice(1).toLowerCase();}
else
{return"";}}
function strip(html)
{var tmp=document.createElement("DIV");tmp.innerHTML=html;return tmp.textContent||tmp.innerText||"";}
function encodeHTML(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');}
Date.createFromMysql=function(mysql_string)
{if(typeof mysql_string==='string')
{var t=mysql_string.split(/[- :]/);return new Date(t[0],t[1]- 1,t[2],t[3]||0,t[4]||0,t[5]||0);}
return null;}
function get_display_date(date_obj,m_format,is_year)
{var tm_format="M";var year="";if(m_format!=undefined)
{tm_format=m_format;if(is_year==true)
{year="yy";}}
date_obj=date_obj.replace("T"," ");date_obj=date_obj.replace("Z","");var d1=Date.createFromMysql(date_obj);var date_is=parseInt($.datepicker.formatDate('d',d1));var dayFormat="th";if(date_is==1||date_is==21||date_is==31)
{dayFormat="st";}
if(date_is==2||date_is==22)
{dayFormat="nd";}
else if(date_is==3||date_is==23){dayFormat="rd";}
var date_is=$.datepicker.formatDate("dd'"+dayFormat+"' "+tm_format+" "+year,d1);return date_is;}
function getGravatar(email,id){email=typeof email!=='undefined'?email:'murat@marvelapp.com';default_image=typeof default_image!=='undefined'?default_image:'https://secure.gravatar.com/avatar/a1e908deeac1ac1412168b63638be7e5?s=300';var gravatar=("https://secure.gravatar.com/avatar/"+ md5(email.toLowerCase().trim())+"?s=300&default="+ encodeURIComponent(default_image));var randomColour=ord(email+id)%8;switch(randomColour){case 1:var colour="peachpuff";break;case 2:var colour="mediumslateblue";break;case 3:var colour="navajowhite";break;case 4:var colour="thistle";break;case 5:var colour="dodgerblue";break;case 6:var colour="tomato";break;case 7:var colour="mediumspringgreen";break;case 8:var colour="palegreen";break;case 9:var colour="mediumseagreen";break;case 10:var colour="lightblue";break;}
return{url:gravatar,colour:colour};}
function getCookie(name){var cookieValue=null;try{if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+ 1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+ 1));break;}}}}
catch(except)
{}
return cookieValue;}
var csrftoken=getCookie('csrftoken');function csrfSafeMethod(method){return(/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));}
$.ajaxSetup({crossDomain:false,beforeSend:function(xhr,settings){if(!csrfSafeMethod(settings.type)){xhr.setRequestHeader("X-CSRFToken",csrftoken);}}});function encode_utf8(s){return unescape(encodeURIComponent(s));}
function generateUUID(){var d=new Date().getTime();var uuid='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=(d+ Math.random()*16)%16|0;d=Math.floor(d/16);return(c=='x'?r:(r&0x7|0x8)).toString(16);});return uuid;};(function($){$.fn.extend({limiter:function(limit,elem){$(this).on("keyup focus",function(){setCount(this,elem);});function setCount(src,elem){var chars=src.value.length;if(chars>limit){src.value=src.value.substr(0,limit);chars=limit;}
elem.html(limit- chars);}
setCount($(this)[0],elem);}});})(jQuery);