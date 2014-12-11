var is_swiping=false;function load_swipeable_page(page_obj,is_swipe)
{var page="#"+page_obj.attr("id"),next=page_obj.jqmData("next"),prev=page_obj.jqmData("prev");if(next){if(is_swipe==true&&is_touch_device())
{if(iOS==false)
{$.event.special.swipe.scrollSupressionThreshold=15;$(document).on("swipeleft dragleft",page,function(){if(is_swiping==true)return;is_swiping=true;blockScrolling();$.mobile.changePage($("#"+next),{transition:"slide"});current_page=$("#"+next);});}
else
{$(document).on("swipeleft",page,function(){if(is_swiping==true)return;is_swiping=true;blockScrolling();$.mobile.changePage($("#"+next),{transition:"slide"});current_page=$("#"+next);});}}
$(".control .next",page).on("click",function(){$.mobile.changePage($("#"+next),{transition:"none"});current_page=$("#"+next);});}
else{$(".control .next",page).addClass("ui-disabled");}
if(prev){if(is_swipe==true&&is_touch_device())
{if(iOS==false)
{$.event.special.swipe.scrollSupressionThreshold=15;$(document).on("swiperight dragright",page,function(){if(is_swiping==true)return;is_swiping=true;blockScrolling();$.mobile.changePage($("#"+prev),{transition:"slide",reverse:true});current_page=$("#"+next);});}
else
{$(document).on("swiperight",page,function(){if(is_swiping==true)return;is_swiping=true;blockScrolling();$.mobile.changePage($("#"+prev),{transition:"slide",reverse:true});current_page=$("#"+next);});}}
$(".control .prev",page).on("click",function(){$.mobile.changePage($("#"+prev),{transition:"none",reverse:true});current_page=$("#"+prev);});}
else{$(".control .prev",page).addClass("ui-disabled");}};