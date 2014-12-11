project_id=window.location.pathname.replace("r/","");var project_id=project_id.replace("/","");var project_object=undefined;var current_page=undefined;var project_constants=new ProjectConstants();var alertFallback=false;if(typeof console==="undefined"||typeof console.log==="undefined"){console={};if(alertFallback){console.log=function(msg){alert(msg);};}else{console.log=function(){};}}
function add_alert(text_object)
{$("#alert-box").remove();var alert_div="<div id='alert-box' style='top:200px; position:fixed; padding-top: 20px; margin-top:-100px; z-index: 10000000;"+"width: 200px; height: 200px; left: 50%; margin-left: -100px; text-align: center; background-color: rgba(255,0,0,0.5);'>"+""+ text_object+""+"</div>";$('body').append(alert_div);$("#alert-box").click(function(){$(this).remove();});return null;}
function hideURLbar()
{if(is_touch_device()){window.scrollTo(0,0);}}
function is_mobile_device()
{var check=false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check=true})(navigator.userAgent||navigator.vendor||window.opera);return check;}
function is_touch_device(){return!!('ontouchstart'in window)||!!('onmsgesturechange'in window);};function update_image_obj(is_error,message,data)
{if(is_error==false)
{var image_obj=data;if(image_obj.status!=project_constants.QUEUE_IMG_STATUS_UPLOAD_FINISHED&&image_obj.status>-1)
{$("#image_update").show();setTimeout(function(){get_image_obj(update_image_obj,project_id,image_obj);},2000);}
else if(image_obj.status<=0)
{$("#sync_message_"+image_obj.id).html("<div class='error-message'>Sync failed, please login to your project and preview your prototype again.</div>");$("#circle_syncing_"+image_obj.id).remove();}
else
{var header=get_hotspot_type(image_obj,project_constants.TYPE_FIXED_HORIZONTAL,project_constants.TYPE_POSITION_TOP);var footer=get_hotspot_type(image_obj,project_constants.TYPE_FIXED_HORIZONTAL,project_constants.TYPE_POSITION_BOTTOM);if(header!=undefined)
{var header_url=header.url
if(header_url!=undefined||header_url!="")
{var image=new Image()
image.onload=function()
{$("#fixed-header-"+image_obj.id).css('background-image','url('+ header_url+')');if($("#img-header-"+image_obj.id).length)
{$("#img-header-"+image_obj.id).attr("src",header_url);}
else
{$("#fixed-header-"+image_obj.id).css('background-image','url('+ image_obj.url+')');}}
image.src=header_url;}
else
{$("#fixed-header-"+image_obj.id).css('background-image','url('+ image_obj.url+')');}}
if(footer!=undefined)
{var footer_url=footer.url
if(footer_url!=undefined||footer_url!="")
{var image=new Image()
image.onload=function()
{$("#fixed-footer-"+image_obj.id).css('background-image','url('+ footer_url+')');if($("#img-footer-"+image_obj.id).length)
{$("#img-footer-"+image_obj.id).attr("src",footer_url);}
else
{$("#fixed-header-"+image_obj.id).css('background-image','url('+ image_obj.url+')');}}
image.src=footer_url;}
else
{$("#fixed-footer-"+image_obj.id).css('background-image','url('+ image_obj.url+')');}}
img=new Image();img.src=image_obj.url+"?"+ escape(new Date());$(img).load(function(){$("#img_"+image_obj.id).attr("src",image_obj.url+"?"+escape(new Date()));$("#dpage_refresh_"+image_obj.id).fadeOut(200);setTimeout(function(){$("#dpage_refresh_"+image_obj.id).hide();},200);$("#img_"+image_obj.id).show();$("#image_update").hide();var active_id=$.mobile.activePage.attr("data");if(active_id==image_obj.id)
{set_image_for_id(image_obj);setup_fixed_areas(image_obj.id);}}).error(function(){});}}}
function get_hotspot_type(image_obj,type,location)
{for(idx in image_obj.hotspots)
{var hotspot=image_obj.hotspots[idx];if(hotspot.type==type&&hotspot.location==location)
{return hotspot;}}}
function get_image_obj(callbackMethod,projectId,theImage)
{$.getJSON("/api/prototype/"+projectId+"/"+theImage.id+"/",{},function(data)
{try{callbackMethod(false,"",data);}
catch(err)
{console.log(err);console.log("Error code");}}).success().error(callbackMethod(true,"problem getting image",null)).complete();}
function toggleOverlay()
{if(is_showing==false)
{is_showing=true;$.mobile.activePage.find(".overlay").fadeTo(300,0.6,function(){});setTimeout(function(){$.mobile.activePage.find(".overlay").fadeTo(300,0.0,function(){is_showing=false;});},100);}}
var is_showing=false;$(".ui-link").click(function(event){$('.overlay').css("opacity","0.0");event.preventDefault();event.stopPropagation();});function get_next(sequence,image_array){var count=1;var size_of=Object.size(image_array);var is_next=false;var first=1;var next=undefined;for(var img_id in image_array)
{next=img_id;if(is_next==true)
{return image_array[next]}
if(count==1)
{first=img_id;}
if(sequence==img_id)
{is_next=true;if(count==size_of)
{return image_array[first];}}
count=count+1;}}
function get_previous(sequence,image_array)
{var count=1;var size_of=Object.size(image_array)
for(var img_id in image_array)
{if(sequence==1||sequence==0)
{return image_array[size_of];}
else
{if(sequence==img_id)
{return previous}}
previous=img_id;count=count+1;}}
var image_sequence_map={};var full_download_length=0;var amount_downloaded=0;$.fn.preload=function(fn){var len=this.length,i=0;return this.each(function(){var tmp=new Image,self=this;if(fn)tmp.onload=function(e){fn.call(self,100*++i/len,i===len,len);};if(fn)tmp.onerror=function(e)
{fn.call(self,100,-1,len);};tmp.src=this.src;});};function getSequenceForImageId(image_id)
{for(var image_seq in project_object.images)
{var image_obj=project_object.images[image_seq];if(image_obj.id==image_id)
{return image_seq;}}}
function getImageForId(image_id)
{for(var image_seq in project_object.images)
{var image_obj=project_object.images[image_seq];if(image_obj.id==image_id||md5(image_obj.name)==image_id)
{return image_obj;}}}
function set_image_for_id(change_image_obj)
{for(var image_seq in project_object.images)
{var image_obj=project_object.images[image_seq];if(image_obj.id==change_image_obj.id||md5(change_image_obj.name)==md5(change_image_obj.name))
{project_object.images[image_seq]=change_image_obj;return;}}}
function setup_fixed_areas_for_images()
{for(var image_seq in project_object.images)
{var image_obj=project_object.images[image_seq];setup_fixed_areas(image_obj.id);}}
function setup_fixed_areas(image_id)
{try
{var image_object=undefined;try{image_object=getImageForId(image_id);}
catch(e)
{}
var fixed_perc=fixed_percentages[image_object.id];var footer_yperc=fixed_perc["bottom"];var header_yperc=fixed_perc["top"];var is_status=fixed_perc["status"];var standalone_status=fixed_perc["standalone_status"];var status_size=0;if(is_status)
{status_size=20;}
if(standalone_status)
{status_size==20;}
if(footer_yperc==undefined)
{footer_yperc=0;}
if(header_yperc==undefined)
{header_yperc=0;}
if(header_yperc>0||footer_yperc>0)
{var img_height=$("#img_"+image_object.id).height();var img_width=$("#img_"+image_object.id).width();var window_width=$(window).width();if(window_width<img_width)
{var ratio=img_width/window_width;img_height=img_height/ratio;}
if(img_height!=0)
{var footer_height=(img_height/100)*footer_yperc;var header_height=(img_height/100)*header_yperc;console.log("The header perc "+header_yperc+" "+footer_yperc)
$("#fixed-header-"+image_object.id).css("height",header_height+"px");$("#image_header_"+image_object.id).css("margin-top",-status_size+"px");if(!iOS)
{$("#page_wrap_"+image_object.id).css({"position":"absolute"});}
$("#page_wrap_"+image_object.id).css({"top":(header_height-status_size)+"px","left":0});var subtract_height=footer_height+(header_height);$("#page_wrap_"+image_object.id+" img").css("margin-top",-(header_height)+"px");$("#image_wrap_"+image_object.id).height(img_height-(subtract_height+status_size));$("#fixed-footer-"+image_object.id).css("height",footer_height+"px");call_anti_scroll(image_object.id,subtract_height-status_size);}
else
{call_anti_scroll(image_object.id,0);}}
else
{call_anti_scroll(image_object.id,0);}}
catch(e)
{console.log("Exception occured");console.log(e);call_anti_scroll(undefined,0);}}
function checkBlockScrolling(image_id){unblockScrolling();var status_bar_height=0;if(remove_status)
{status_bar_height==22;}
if(($('#page_wrap_'+image_id).find('img').height()<=$(window).height()-status_bar_height)&&iOS==true&&is_standalone==true){blockScrolling();}}
function call_anti_scroll(image_id,subtract_height)
{try{if(subtract_height==undefined)
{subtract_height=0;}
if(is_app_build==true)
{iOS=true;}
if(image_id!=undefined)
{if(!iOS){if(is_non_responsive==0)
{$("#page_wrap_"+image_id+" .box, #page_wrap_"+image_id+" .antiscroll-inner").width($(window).width());}
else
{$(".box, .antiscroll-inner").width($(window).width());}
$("#page_wrap_"+image_id+" .box, #page_wrap_"+image_id+" .antiscroll-inner").height($(window).height()-(subtract_height-2));}else if(iOS&&subtract_height>0&&is_app_build==false){if(is_non_responsive==0)
{$("#page_wrap_"+image_id+" .box, #page_wrap_"+image_id+" .antiscroll-inner").width($(window).width());}
else
{$(".box, .antiscroll-inner").width($(window).width());}
$("#page_wrap_"+image_id+" .box, #page_wrap_"+image_id+" .antiscroll-inner").height($(window).height()-(subtract_height-2));$("#page_wrap_"+image_id+" .box, #page_wrap_"+image_id+" .antiscroll-inner").css("-webkit-overflow-scrolling","touch");}else if(iOS&&subtract_height==0){}}
else
{if(!iOS){if(is_non_responsive==0)
{$(".box, .antiscroll-inner").width($(window).width());}
$(".box, .antiscroll-inner").height($(window).height()-(subtract_height-2));}else if(iOS&&subtract_height>0){if(is_non_responsive==0)
{$(".box, .antiscroll-inner").width($(window).width());}
$(".box, .antiscroll-inner").height($(window).height()-(subtract_height-2));}else if(iOS&&subtract_height==0){}}}
catch(e)
{console.log(e);}
if(iOS==false)
{try{scroller=$('#page_wrap_'+image_id).antiscroll().data('antiscroll');scroller.refresh();}
catch(e)
{console.log(e);}}
else
{if(subtract_height>0){$(".antiscroll-inner").unbind('touchstart');$(".antiscroll-inner").bind('touchstart',function(event){startTopScroll=$(this).scrollTop();scrollHeight=$(this).prop('scrollHeight')- $(this).height();if(startTopScroll==0){$(this).scrollTop(1);}
if(startTopScroll==scrollHeight){$(this).scrollTop(scrollHeight-1);}});}}
if(is_app_build==true)
{iOS=false;}}
function track_percent_download(){if(NProgress.status!=null){$(".sync-perc .inner").css("width",parseInt(NProgress.status*100)+"%");setTimeout(function(){track_percent_download()},100);};}
function run_preload_for_image(image_obj,show_progress,wait_load)
{setTimeout(function(){if(wait_load==true){if(getSequenceForImageId(image_obj.id)<next_batch)
{run_preload_for_image(image_obj,show_progress,wait_load);}}
if(typeof show_progress==="undefined"){show_progress=true;}
$("#img_"+ image_obj.id).preload(function(perc,done,len){var image_obj=getImageForId($(this).attr("data"));amount_downloaded=amount_downloaded+ len;if(full_download_length==1){if(amount_downloaded==1){$('#page-loader .inner').css("width","100%");setTimeout(function(){$("#page-loader").fadeOut(100);},1000)}}
else if(full_download_length==2){if(amount_downloaded==1){$('#page-loader .inner').css("width","50%");}
else if(amount_downloaded==2){$('#page-loader .inner').css("width","100%");setTimeout(function(){$("#page-loader").fadeOut(100);},1000);}}
else if(full_download_length==3)
{if(amount_downloaded==1){$('#page-loader .inner').css("width","30%");}
else if(amount_downloaded==2)
{$('#page-loader .inner').css("width","60%");}
else if(amount_downloaded==3)
{$('#page-loader .inner').css("width","100%");setTimeout(function(){$("#page-loader").fadeOut(100);},1000);}}
else if(full_download_length==4)
{if(amount_downloaded==1){$('#page-loader .inner').css("width","25%");}
else if(amount_downloaded==2)
{$('#page-loader .inner').css("width","50%");}
else if(amount_downloaded==3)
{$('#page-loader .inner').css("width","75%");}
else if(amount_downloaded==4)
{$('#page-loader .inner').css("width","100%");setTimeout(function(){$("#page-loader").fadeOut(100);},1000);}}
else
{if(amount_downloaded==1){$('#page-loader .inner').css("width","20%");}
else if(amount_downloaded==2)
{$('#page-loader .inner').css("width","40%");}
else if(amount_downloaded==3)
{$('#page-loader .inner').css("width","60%");}
else if(amount_downloaded==4)
{$('#page-loader .inner').css("width","80%");}
else if(amount_downloaded==5)
{$('#page-loader .inner').css("width","100%");setTimeout(function(){$("#page-loader").fadeOut(100);},1000);}}
if(done==true){var all_perc=((amount_downloaded*100)/full_download_length)/100;if(all_perc<0.1)
{all_perc=0.1;}
console.log(amount_downloaded,full_download_length,all_perc);if(all_perc>1)
{all_perc==1;}
if(show_progress==true){NProgress.set(all_perc);}
$("#img_"+ image_obj.id).show();$("#dpage_refresh_"+ image_obj.id).fadeOut(100);var active_id=$.mobile.activePage.attr("data");if(active_id==image_obj.id){checkBlockScrolling(image_obj.id);setup_fixed_areas(image_obj.id);}}
else if(done==-1){console.log(image_obj);amount_downloaded=amount_downloaded+ len;$("#loading_"+ image_obj.id).css("opacity","0");$("#sync_message_unknown_"+ image_obj.id).html("<div class='error-message'>There was a problem "+"downloading the prototype image. '"+ image_obj.name+"'</div>");}
if(amount_downloaded>=full_download_length){NProgress.done();}
if(amount_downloaded==next_batch){console.log("Setting next batch");next_batch+=batches;}});},1);}
function call_go_to_right(all_actions)
{if(isAndroid)
{$.event.special.swipe.scrollSupressionThreshold=15;$(".hotspot_action_"+all_actions.hotspot_id).on("swiperight dragright",function(){if(all_actions.type==project_constants.TYPE_URL)
{window.location.href=all_actions.external_url;}
else if(all_actions.type==project_constants.TYPE_BACK||all_actions.transition=="back")
{$.mobile.back();}
else if(all_actions.type==project_constants.TYPE_ANCHOR)
{$('body').scrollTo(all_actions.anchor_y_pos);}
else
{var is_slide_right=false;var atransition=all_actions.transition;if(atransition=="slide-left")
{is_slide_right=true;atransition="slide"}
$.mobile.changePage($("#"+all_actions.dest_img_fk),{transition:atransition,reverse:is_slide_right});}});}
else
{$$(".hotspot_action_"+all_actions.hotspot_id).swipeRight(function(){if(all_actions.type==project_constants.TYPE_URL)
{window.location.href=all_actions.external_url;}
else if(all_actions.type==project_constants.TYPE_BACK||all_actions.transition=="back")
{$.mobile.back();}
else if(all_actions.type==project_constants.TYPE_ANCHOR)
{$('body').scrollTo(all_actions.anchor_y_pos);}
else
{var is_slide_right=false;var atransition=all_actions.transition;if(atransition=="slide-left")
{is_slide_right=true;atransition="slide"}
$.mobile.changePage($("#"+all_actions.dest_img_fk),{transition:atransition,reverse:is_slide_right});}});}}
function call_go_to_left(all_actions)
{console.log("Calling go to left");console.log(all_actions);if(isAndroid)
{$.event.special.swipe.scrollSupressionThreshold=15;$(".hotspot_action_"+all_actions.hotspot_id).on("swipeleft dragleft",function(){if(all_actions.type==project_constants.TYPE_URL)
{window.location.href=all_actions.external_url;}
else if(all_actions.type==project_constants.TYPE_BACK||all_actions.transition=="back")
{$.mobile.back();}
else if(all_actions.type==project_constants.TYPE_ANCHOR)
{$('body').scrollTo(all_actions.anchor_y_pos);}
else
{var is_slide_right=false;var atransition=all_actions.transition;if(atransition=="slide-left")
{is_slide_right=true;atransition="slide"}
$.mobile.changePage($("#"+all_actions.dest_img_fk),{transition:atransition,reverse:is_slide_right});}});}
else
{$$(".hotspot_action_"+all_actions.hotspot_id).swipeLeft(function(){if(all_actions.type==project_constants.TYPE_URL)
{window.location.href=all_actions.external_url;}
else if(all_actions.type==project_constants.TYPE_BACK||all_actions.transition=="back")
{$.mobile.back();}
else if(all_actions.type==project_constants.TYPE_ANCHOR)
{$('body').scrollTo(all_actions.anchor_y_pos);}
else
{var is_slide_right=false;var atransition=all_actions.transition;if(atransition=="slide-left")
{is_slide_right=true;atransition="slide"}
$.mobile.changePage($("#"+all_actions.dest_img_fk),{transition:atransition,reverse:is_slide_right});}});}}
function call_go_to_up(all_actions)
{$(".hotspot_action_"+all_actions.hotspot_id).bind("touchstart",function(event){blockScrolling();});$(".hotspot_action_"+all_actions.hotspot_id).bind("touchend",function(event){unblockScrolling();});$$(".hotspot_action_"+all_actions.hotspot_id).swipeUp(function(){blockScrolling();if(all_actions.type==project_constants.TYPE_URL)
{window.location.href=all_actions.external_url;}
else if(all_actions.type==project_constants.TYPE_BACK||all_actions.transition=="back")
{$.mobile.back();}
else if(all_actions.type==project_constants.TYPE_ANCHOR)
{$('body').scrollTo(all_actions.anchor_y_pos);}
else
{var is_slide_right=false;var atransition=all_actions.transition;if(atransition=="slide-left")
{is_slide_right=true;atransition="slide"}
$.mobile.changePage($("#"+all_actions.dest_img_fk),{transition:atransition,reverse:is_slide_right});}});}
function call_go_to_down(all_actions)
{$(".hotspot_action_"+all_actions.hotspot_id).bind("touchstart",function(event){blockScrolling();});$(".hotspot_action_"+all_actions.hotspot_id).bind("touchend",function(event){unblockScrolling();});$$(".hotspot_action_"+all_actions.hotspot_id).swipeDown(function(){blockScrolling();if(all_actions.type==project_constants.TYPE_URL)
{window.location.href=all_actions.external_url;}
else if(all_actions.type==project_constants.TYPE_BACK||all_actions.transition=="back")
{$.mobile.back();}
else if(all_actions.type==project_constants.TYPE_ANCHOR)
{$('body').scrollTo(all_actions.anchor_y_pos);}
else
{var is_slide_right=false;var atransition=all_actions.transition;if(atransition=="slide-left")
{is_slide_right=true;atransition="slide"}
$.mobile.changePage($("#"+all_actions.dest_img_fk),{transition:atransition,reverse:is_slide_right});}});}
function call_go_to_pinch(all_actions)
{$$(".hotspot_action_"+all_actions.hotspot_id).pinchIn(function(){if(all_actions.type==project_constants.TYPE_URL)
{window.location.href=all_actions.external_url;}
else if(all_actions.type==project_constants.TYPE_BACK||all_actions.transition=="back")
{$.mobile.back();}
else if(all_actions.type==project_constants.TYPE_ANCHOR)
{$('body').scrollTo(all_actions.anchor_y_pos);}
else
{var is_slide_right=false;var atransition=all_actions.transition;if(atransition=="slide-left")
{is_slide_right=true;atransition="slide"}
$.mobile.changePage($("#"+all_actions.dest_img_fk),{transition:atransition,reverse:is_slide_right});}});}
function call_go_to_pinch_out(all_actions)
{$$(".hotspot_action_"+all_actions.hotspot_id).pinchOut(function(){if(all_actions.type==project_constants.TYPE_URL)
{window.location.href=all_actions.external_url;}
else if(all_actions.type==project_constants.TYPE_BACK||all_actions.transition=="back")
{$.mobile.back();}
else if(all_actions.type==project_constants.TYPE_ANCHOR)
{$('body').scrollTo(all_actions.anchor_y_pos);}
else
{var is_slide_right=false;var atransition=all_actions.transition;if(atransition=="slide-left")
{is_slide_right=true;atransition="slide"}
$.mobile.changePage($("#"+all_actions.dest_img_fk),{transition:atransition,reverse:is_slide_right});}});}
function call_go_to_doubletap(all_actions)
{$$(".hotspot_action_"+all_actions.hotspot_id).doubleTap(function(){if(all_actions.type==project_constants.TYPE_URL)
{window.location.href=all_actions.external_url;}
else if(all_actions.type==project_constants.TYPE_BACK||all_actions.transition=="back")
{$.mobile.back();}
else if(all_actions.type==project_constants.TYPE_ANCHOR)
{$('body').scrollTo(all_actions.anchor_y_pos);}
else
{var is_slide_right=false;var atransition=all_actions.transition;if(atransition=="slide-left")
{is_slide_right=true;atransition="slide"}
$.mobile.changePage($("#"+all_actions.dest_img_fk),{transition:atransition,reverse:is_slide_right});}});}
function getProjectPropertyForName(selectedProjectObject,name)
{for(id in selectedProjectObject.properties)
{var property=selectedProjectObject.properties[id];if(name==property.name)
{return property;}}}
var fixed_percentages={};var remove_status=false;var batches=5;var images_queued=1;var next_batch=batches;function createPrototype(is_error,message,returned_project_object)
{$.extend($.mobile,{defaultPageTransition:"fade"});track_percent_download();if(is_error==true)
{}
else
{project_object=returned_project_object;}
console.log(project_object);var images_array=project_object.images;var is_swipe=true;var center_image=false;var is_hotspot=true;remove_status=false;var trim_status=false;var status_bar="none";var status_trim="";var status_style=getProjectPropertyForName(project_object,project_constants.PROJECT_PROP_STATUS_BAR);var prop_disable_swipe=getProjectPropertyForName(project_object,project_constants.PROJECT_PROP_DISABLE_SWIPE);if(prop_disable_swipe.value=="1")
{is_swipe=false;}
var prop_disable_swipe=getProjectPropertyForName(project_object,project_constants.PROJECT_PROP_SHOW_HINTS);if(prop_disable_swipe.value=="1")
{is_hotspot=false;}
var prop_center_image=getProjectPropertyForName(project_object,project_constants.PROJECT_PROP_CENTER_IMAGE);if(prop_center_image.value=="1")
{center_image=true;}
if(iOS==true)
{var prop_remove_status=getProjectPropertyForName(project_object,project_constants.PROJECT_PROP_REMOVE_STATUS);if(prop_remove_status.value=="1")
{if(is_standalone==true&&(status_style.value!=project_constants.PROP_STATUS_BLACK))
{remove_status=true;status_bar="block";}
else
{trim_status=true;status_trim="margin-top: -20px;";}}}
var previous_element=get_previous(1,images_array);var i=0;var first_image=undefined;var first_page="";var project_hotspots={};for(var img_seq in images_array)
{var image_object=images_array[img_seq];if(typeof project_hotspots[image_object.id]==="undefined")
{project_hotspots[image_object.id]={};}
for(var hdx in image_object.hotspots)
{var hotspot=image_object.hotspots[hdx];if(typeof hotspot.images!=="undefined")
{if(hotspot.images.length!=0)
{for(var idx in hotspot.images)
{try{var image_id=hotspot.images[idx];if(typeof project_hotspots[image_id]==="undefined")
{project_hotspots[image_id]={};}
project_hotspots[image_id][hotspot.id]=hotspot;}
catch(ex)
{}}}
else{project_hotspots[image_object.id][hotspot.id]=hotspot;}}
else
{project_hotspots[image_object.id][hotspot.id]=hotspot;}}}
for(var img_seq in images_array)
{var image_object=images_array[img_seq];var next_element=get_next(img_seq,images_array);var hotspots=undefined;try{hotspots=project_hotspots[image_object.id];}
catch(ex)
{console.log(ex);}
bottom_footer="-8px";if(i==0)
{first_image=image_object;bottom_footer="0px";current_page=$("#dpage_"+image_object.id);first_page="#dpage_"+image_object.id;}
i=i+1;image_sequence_map["#dpage_"+image_object.id]=i;var image_url=image_object.url;var page='<div data-role="page" id="dpage_'+image_object.id+'" class="" data-theme="a" data-prev="dpage_'+image_object.id+'" data-next="dpage_'+image_object.id+'"></div>';if(!$("#dpage_"+image_object.id).text())
{$("body").append(page);}
try{$("#dpage_"+image_object.id).attr("data-prev","dpage_"+previous_element.id)
$("#dpage_"+image_object.id).attr("data-next","dpage_"+next_element.id)}
catch(ex)
{}
var non_responsive="";if(is_non_responsive!=undefined)
{if(is_non_responsive==1)
{non_responsive="max-width: inherit !important;"}}
var fixed_header_html="";var fixed_footer_html="";var header_yperc=0;var footer_yperc=0;var hotspot_hammer_map={};fixed_percentages[image_object.id]={"status":trim_status,"standalone_status":remove_status};var page_html='';if(iOS==true)
{page_html=''+'<div class="topBg" style="background: rgba('+image_object.top_pixel_colour+');"></div>'+'<div class="bottomBg" style="background: rgba('+image_object.bottom_pixel_colour+');"></div>';}
var image_sizes='max-width:'+image_object.width+'px; max-height: '+image_object.height+'px;';if(is_non_responsive==1)
{image_sizes='width:'+image_object.width+'px; height: '+image_object.height+'px;';}
var margin_pos="margin: 0 auto;";if(is_non_responsive==1)
{margin_pos="";}
var center_image_pos="margin-left: auto; margin-right:auto;";if(center_image){var center_image_pos="left: 50%; margin-left: -"+ image_object.width/2;non_responsive="max-width: inherit !important;";}
if(image_url.indexOf(".gif")>-1)
{var image=new Image();image.src=image_url+"?x=2";image_url=image_url+"?x=1";gif_flag_map[image_object.id]=1;}
page_html=page_html+'<div class="box">'+'<div class="antiscroll-inner">'+'<div class="box-inner">'+'<div id="image_wrap_'+image_object.id+'" style="position:relative; '+ margin_pos+
image_sizes+' overflow: hidden; '+center_image_pos+'">'+'<img id="img_'+image_object.id+'" data="'+image_object.id+'" style="'+status_trim+' '+non_responsive+' margin-left: auto; margin-right:auto;" '+'               class="proto_image" src="'+image_url+'" width="'+image_object.width+'" height="'+image_object.height+'"/>';if(hotspots!=null||hotspots!=undefined)
{var fixed_header_y2=0;var fixed_footer_y=0;var header_hotspot={id:"-1"};var footer_hotspot={id:"-1"};for(id in hotspots)
{var hotspot=hotspots[id];var image_height=parseInt(image_object.height);var y=parseInt(hotspot.y);var hotspot_url=image_url;var show_header_img="";if(offline)
{show_header_img="display: none;"}
hotspot_url=hotspot.url
if(hotspot.type==project_constants.TYPE_FIXED_HORIZONTAL)
{header_yperc=(y*100)/image_height;if(hotspot.location==project_constants.TYPE_POSITION_TOP)
{fixed_header_y2=y;var image_header_width='max-width:'+image_object.width+'px;';var marg_pos="";if(is_non_responsive==true)
{image_header_width='width:'+image_object.width+'px;';marg_pos="-webkit-transform: translateX(0%); -o-transform: translateX(0%); -ms-transform: translateX(0%); transform: translateX(0%); left: 0%;";}
fixed_header_html='<div id="fixed-header-'+image_object.id+'" class="fixed-header" style="top: 0px; '+marg_pos+' '+image_header_width+''+status_trim+' background-image: url('+image_object.url+')"> '+'<img id="img-header-'+image_object.id+'" data="'+image_object.id+'" style=" width:100%; '+show_header_img+' height: auto; max-width:'+image_object.width+'px;"'+' src="'+hotspot_url+'" width="'+image_object.width+'" height="'+hotspot.y+'"/>'+'</div>'
fixed_percentages[image_object.id]["top"]=header_yperc;header_hotspot=hotspot;}
else
{var height=image_height- y;fixed_footer_y=y;footer_yperc=(height*100)/image_height;var image_footer_width='max-width:'+image_object.width+'px;';var marg_pos="";if(is_non_responsive)
{image_footer_width='width:'+image_object.width+'px; left: 0%;';marg_pos="-webkit-transform: translateX(0%); -o-transform: translateX(0%); -ms-transform: translateX(0%); transform: translateX(0%); left: 0%;";}
fixed_footer_html='<div id="fixed-footer-'+image_object.id+'" '+'class="fixed-footer" style="'+image_footer_width+' '+marg_pos+' '+'background-image: url('+image_object.url+')">'+'<img id="img-footer-'+image_object.id+'" data="'+image_object.id+'" '+'style="width: 100%; '+show_header_img+' height: auto; max-width:'+image_object.width+'px;"'+' src="'+hotspot_url+'" width="'+image_object.width+'" height="'+height+'"/>'+'</div>'
fixed_percentages[image_object.id]["bottom"]=footer_yperc;footer_hotspot=hotspot;}}}
$("#dpage_"+image_object.id).append(fixed_header_html);$("#dpage_"+image_object.id).append(fixed_footer_html);for(id in hotspots)
{var hotspot=hotspots[id];if(header_hotspot.id!=hotspot.id||footer_hotspot.id!=hotspot.id)
{var image_height=Math.round(image_object.height);var image_width=Math.round(image_object.width);var y=Math.round(hotspot.y);var x=Math.round(hotspot.x);var y=Math.round(hotspot.y);var x2=Math.round(hotspot.x2);var y2=Math.round(hotspot.y2);var is_within_fixed_header=false;var is_within_fixed_footer=false;var spot_height=y2- y;if(trim_status&&(fixed_header_y2==0||fixed_footer_y==0))
{if(image_width>=320&&image_width<640)
{image_height=image_height-20;}
else if(image_width>=640)
{image_height=image_height-40;}}
if(y<fixed_header_y2)
{is_within_fixed_header=true;image_height=fixed_header_y2;spot_height=y2-y;}
else if(y2>fixed_footer_y&&fixed_footer_y!=0)
{is_within_fixed_footer=true;spot_height=y2- y;y=image_height- y;image_height=image_height- fixed_footer_y;y=image_height- y;}
if((fixed_header_y2>0&&(is_within_fixed_header==false&&is_within_fixed_footer==false))||(fixed_footer_y>0&&(is_within_fixed_footer==false&&is_within_fixed_header==false)))
{var addition=image_height-fixed_footer_y;if(fixed_footer_y==0)
{addition=0;}
var fixed_area_sizes=fixed_header_y2+addition
var image_size=image_height-fixed_area_sizes;y=y- fixed_header_y2;y2=y2- fixed_header_y2;xperc=(x*100)/image_width;yperc=(y*100)/image_size;spot_height=y2-y;spot_width=x2-x;spot_width=(spot_width*100)/image_width;spot_height=(spot_height*100)/image_size;}
else
{xperc=(x*100)/image_width;yperc=(y*100)/image_height;spot_width=x2-x;spot_width=(spot_width*100)/image_width;spot_height=(spot_height*100)/image_height;}
if(spot_width>100)
{spot_width=100;}
if(hotspot.type==project_constants.TYPE_URL)
{data_transition='href="'+hotspot.external_url+'" rel="external" data-ajax="false" target="external"';}
else if(hotspot.type==project_constants.TYPE_ANCHOR)
{data_transition="";}
else if(hotspot.transition=="slide-left")
{data_transition='data-transition="slide" data-direction="reverse" href="#dpage_'+hotspot.dest_img_fk+'"';}
else if(hotspot.transition=="back")
{data_transition='data-rel="back"';}
else if(hotspot.transition=="none"){data_transition='data-transition="zero" href="#dpage_'+hotspot.dest_img_fk+'"';}
else
{data_transition='data-transition="'+hotspot.transition+'" href="#dpage_'+hotspot.dest_img_fk+'"';}
if(hotspot.action!="click"&&(is_mobile_device()))
{data_transition="";}
if(is_non_responsive==1)
{var sub_header=fixed_header_y2;if(is_within_fixed_header)
{sub_header=0;}
else if(is_within_fixed_footer)
{console.log("Is this within the fixed footer?");sub_header=(fixed_footer_y);console.log}
var yhotspot=Math.round(hotspot.y)- sub_header;xperc=hotspot.x+"px";yperc=yhotspot+"px";spot_width=Math.round(hotspot.x2- hotspot.x)+"px";spot_height=Math.round(hotspot.y2- hotspot.y)+"px";}
else
{xperc=xperc+"%";yperc=yperc+"%";spot_width=spot_width+"%";spot_height=spot_height+"%";}
var hotspot_trim=status_trim;if(fixed_header_y2>0||fixed_footer_y>0)
{hotspot_trim="";}
var click_through='<a class="hotspot_action_'+hotspot.id+'"'+' style="'+'display:block;" '+
data_transition+'>'+'<div id="hotspot_'+hotspot.id+'" style="display:block; '+hotspot_trim+' top:'+yperc+'; left:'+xperc+'; '+'       background-color: rgba(154, 220, 255, 0.6);'+'box-shadow: rgb(0, 126, 193) 0px 0px 0px 2px inset;'+'opacity: 0.0; width:'+spot_width+'; '+'       height:'+spot_height+'; position:absolute; cursor: pointer;"'+'class="overlay">'+'</div>'+'</a>';hotspot_hammer_map[hotspot.id]={"transition":hotspot.transition,"action":hotspot.action,"hotspot_id":hotspot.id,"anchor_y_pos":hotspot.anchor_y_pos,"external_url":hotspot.external_url,"type":hotspot.type,"dest_img_fk":"dpage_"+hotspot.dest_img_fk,"img_owner_fk":hotspot.img_owner_fk}
if(is_within_fixed_header)
{$("#fixed-header-"+image_object.id).append(click_through);}
else if(is_within_fixed_footer)
{$("#fixed-footer-"+image_object.id).append(click_through);}
else
{page_html=page_html+click_through;}}}}
page_html=page_html+'</div></div>'+'<div id="footer" class="footer" style="'+'    bottom: '+bottom_footer+' !important;'+'    height: 20px !important;'+'    position: fixed !important;'+'"   data-role="footer" data-position="fixed" data-fullscreen="true" data-id="ftr" data-tap-toggle="false">'+'            <div data-role="controlgroup" class="control ui-btn-left" data-type="horizontal" data-mini="true">'+'                <div id="slider" class="sp-slider-wrapper">'+'                    <nav>'+'                        <a id="left" data="prev'+image_object.id+'" class="sp-prev prev"></a>'+'                        <a id="right" data="next'+image_object.id+'" class="sp-next next"></a>'+'                    </nav>'+'                </div>'+'        </div>'+'    </div>';$("#page_wrap_"+image_object.id).html(page_html);for(hotspot_id in hotspot_hammer_map)
{var actions=hotspot_hammer_map[hotspot_id];if(actions.action=="swiperight")
{call_go_to_right(actions);}
else if(actions.action=="swipeleft")
{call_go_to_left(actions);}
else if(actions.action=="swipeup")
{call_go_to_up(actions);}
else if(actions.action=="swipedown")
{call_go_to_down(actions);}
else if(actions.action=="pinch")
{call_go_to_pinch(actions);}
else if(actions.action=="pinchout")
{call_go_to_pinch_out(actions);}
else if(actions.action=="doubletap")
{call_go_to_doubletap(actions);}
else if(actions.action=="click")
{if(actions.type==project_constants.TYPE_ANCHOR)
{function do_anchor(hottyspotty)
{$("#hotspot_"+hottyspotty.hotspot_id).click(function(){var sized_image_height=$("#img_"+hottyspotty.img_owner_fk).height();console.log("sized image height "+sized_image_height);var original_image=getImageForId(hottyspotty.img_owner_fk);console.log("Original image height "+original_image.height);console.log("y pos "+actions.anchor_y_pos);var perc=((hottyspotty.anchor_y_pos*100)/original_image.height);console.log("percentage "+perc);var one_perc=sized_image_height/100;console.log("one_perc "+one_perc);var go_to_pos=Math.round(one_perc*perc);var header_height=$("#fixed-header-"+hottyspotty.img_owner_fk).height();console.log("THe header height is ",header_height);go_to_pos=go_to_pos- header_height;$('.antiscroll-inner').scrollTop(go_to_pos);console.log(hottyspotty);});}
do_anchor(actions);}}}
var status_html_bar='<div class="statusBg" style="background: rgba('+image_object.status_pixel_colour+'); display: '+status_bar+';"></div>';if(remove_status)
{if(header_yperc>0)
{$("#fixed-header-"+image_object.id).append(status_html_bar);}
else
{$("#page_wrap_"+image_object.id).prepend(status_html_bar);}}
previous_element=image_object;load_swipeable_page($("#dpage_"+image_object.id),is_swipe);if(is_touch_device()&&!iOS)
{$(".antiscroll-inner").css("-webkit-overflow-scrolling","touch");}}
full_download_length=Object.size(project_object.images);$('#page-loader .inner').css("width","10%");for(var image in project_object.images){if(white){var spinnerColour="#FFF";}else{var spinnerColour="#000";}
var image_obj=project_object.images[image];var opts={lines:11,length:8,width:2,radius:8,corners:1,rotate:0,direction:1,color:spinnerColour,speed:1,trail:60,shadow:false,hwaccel:false,className:'spinner',zIndex:2e9,top:'50%',left:'50%'};var target=document.getElementById('spinner_'+ image_obj.id);var spinner=new Spinner(opts).spin(target);if(image_obj.status!=project_constants.QUEUE_IMG_STATUS_UPLOAD_FINISHED)
{get_image_obj(update_image_obj,project_id,image_obj);setup_fixed_areas(image_obj.id);}
else if(offline==true)
{$("#dpage_refresh_"+image_obj.id).hide();$("#img_"+image_obj.id).show();var active_id=$.mobile.activePage.attr("data");if(active_id==image_obj.id)
{checkBlockScrolling(image_obj.id);setup_fixed_areas(image_obj.id);}}
if(images_queued<next_batch){run_preload_for_image(image_obj,true,false);images_queued+=1;}
else{run_preload_for_image(image_obj,true,true);}
num_images=num_images+1;};$.mobile.initializePage();$("img").error(function(){console.log("Trying to hide image");$(this).hide();});if(iOS==true)
{$.event.special.swipe.horizontalDistanceThreshold=120;var home_screen=$.cookie("homescreen");var iPad=(navigator.userAgent.match(/(iPad)/g)?true:false);if(iPad){$(".addToHomescreen").addClass("ipad");}
if(home_screen=="1")
{$(".addToHomescreen").hide();}
else
{if(is_standalone)
{$(".addToHomescreen").hide();}
else
{$(".addToHomescreen").show();}}
$(".close_wrapper").click(function()
{close_homescreen();});}
if(is_hotspot==true)
{$(document).click(function(event){if(event.target.id=="close_wrapper")
{close_homescreen();}
else if(event.target.nodeName=="IMG")
{toggleOverlay();}
else
{$('.overlay').css("opacity","0.0");}});}
Mousetrap.bind('left',function(e){$.mobile.activePage.find(".prev").click();});Mousetrap.bind('right',function(e){$.mobile.activePage.find(".next").click();});hideURLbar();$(".ui-page-active").css("background-image","");$("body").css("background-image","");if(offline==false){Pusher.log=function(message){console.log(message);};var pusher=new Pusher('70744d379f87a37df68a',{authEndpoint:'/api/pusher/auth/',auth:{params:{CSRFToken:window.csrftoken,},headers:{'X-CSRFToken':window.csrftoken,}}});var prototype_channel=pusher.subscribe("prototype_"+ project_object.id);prototype_channel.bind("event_image",function(data){console.log("Received image")
console.log(data);var content=data.content.object;update_image_obj(false,"",content);});}
if(is_project_polling==false){if(offline==false){pollProjectContent();projectController.getUser(function(is_error,message,data){});}
setTimeout(function(){$("#page-loader").fadeOut(100);},1000);}}
function blockScrolling(){$(document).bind('touchmove',function(e){e.preventDefault();});}
function unblockScrolling(){$(document).unbind('touchmove');}
function getImageForId(image_id)
{for(var image_seq in project_object.images)
{var image_obj=project_object.images[image_seq];if(image_obj.id==image_id||md5(image_obj.name)==image_id)
{return image_obj;}}}
function update_polled_content(is_error,message,data)
{if(is_error==false)
{var images=data["content"];var backoff=data["backoff"];var cursor=data["cursor"];project_object.cursor=cursor;for(id in images)
{var image_id=images[id];var image_object=getImageForId(image_id);if(image_object!=undefined)
{get_image_obj(update_image_obj,project_object.id,image_object);}}
setTimeout(function(){pollProjectContent()},backoff*15000);}
else
{setTimeout(function(){pollProjectContent()},15000);}}
var is_project_polling=false;function pollProjectContent()
{try{if(offline==false){is_project_polling=true;projectController.pollContent(project_object,update_polled_content);}}
catch(e){console.log(e);}}
function close_homescreen()
{var cookie_path=window.location.pathname;$(".addToHomescreen").hide();$.cookie("homescreen","1",{path:''+cookie_path});}
var num_images=0;var sequence=0;var projectController=new ProjectController();var iOS=(navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?true:false);var is_uiwebview=navigator.userAgent.match(/Safari/i)==null;var is_standalone=false;offline=false;var gif_flag_map={};var white=false;$(document).ready(function(){var colour=$('body').attr("data-colour");var rgb=parseInt(colour,16);var r=(rgb>>16)&0xff;var g=(rgb>>8)&0xff;var b=(rgb>>0)&0xff;var luma=0.213*(r/255)+ 0.715*(g/255)+ 0.072*(b/255);if(luma<0.5){$(".overlay_full").addClass("white");white=true;}
var is_chrome=navigator.userAgent.toLowerCase().indexOf('chrome')>-1;if(is_chrome==true&&offline==true)
{$(".controls").hide();}
if(navigator.standalone==true||is_uiwebview==true||window.navigator.standalone==true)
{is_standalone=true;}
var url=location.href;if(iOS&&embed){$("#play-prototype").removeClass("hidden");$("#play-prototype a").attr("href",url.split("?")[0]);}else{FastClick.attach(document.body);NProgress.configure({showSpinner:false});if(offline){createPrototype(false,"",prototype_data);}else{NProgress.start();projectController.getPrototypeProject(project_id,createPrototype);}
$("div").on("pageshow",function(event,ui){$('.overlay').css("opacity","0.0");var image_id=$(this).attr("data");setup_fixed_areas(image_id);checkBlockScrolling(image_id);is_showing=false;is_swiping=false;});$("div").on("pagehide",function(event,ui){var image_id=$(this).attr("data");var source=$("#img_"+image_id).attr("src");if(source.indexOf(".gif")>-1){var gif_flag=gif_flag_map[image_id];console.log("Found gif flag "+gif_flag);if(typeof gif_flag==="undefined")
{gif_flag=2;}
if(gif_flag==1)
{gif_flag=2}
else
{gif_flag=1;}
console.log("changing image location");var image_obj=getImageForId(image_id);$("#img_"+image_id).attr("src",image_obj.url+"?x="+ gif_flag);run_preload_for_image(image_obj,false)
gif_flag_map[image_id]=gif_flag;}});$(window).resize(function(){var image_id=$.mobile.activePage.attr("data");if(image_id!=undefined)
{setup_fixed_areas(image_id);}
else
{setup_fixed_areas_for_images();}});}});if(typeof is_clear!=='undefined')
{if(is_clear==1)
{if(navigator.standalone==true){console.log("Removing status bar");$("meta[name='apple-mobile-web-app-status-bar-style']").remove();}}}
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});