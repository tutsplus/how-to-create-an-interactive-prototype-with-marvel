projectConstants=new ProjectConstants();projectHotspots={};function ProjectController()
{this.getUser=function(callbackMethod)
{$.getJSON("/api/user/",{},function(data)
{callbackMethod(false,"",data);}).success(function(){}).error(function(e){callbackMethod(true,"",{});try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error retrieving user: there was a problem contacting the server.");}
catch(ex)
{}}).complete(function(){console.log("Completed get user service call");});};this.numUsers=function(callbackMethod)
{$.getJSON("/api/users/count/",{},function(data)
{console.log(data);callbackMethod(false,"",data);}).success(function(){}).error(function(e){callbackMethod(true,"",{});try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error retrieving user: there was a problem contacting the server.");}
catch(ex)
{}}).complete(function(){console.log("Completed get user service call");});};this.numActiveUsers=function(type,callbackMethod)
{$.getJSON("/api/users/count/active/"+type+"/",{},function(data)
{console.log(data);callbackMethod(false,"",data);}).success(function(){}).error(function(e){callbackMethod(true,"",{});try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error retrieving user: there was a problem contacting the server.");}
catch(ex)
{}}).complete(function(){console.log("Completed get user service call");});};this.numContent=function(callbackMethod)
{$.getJSON("/api/content/count/",{},function(data)
{console.log(data);callbackMethod(false,"",data);}).success(function(){}).error(function(e){callbackMethod(true,"",{});try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error retrieving user: there was a problem contacting the server.");}
catch(ex)
{}}).complete(function(){console.log("Completed get user service call");});};this.numProject=function(callbackMethod)
{$.getJSON("/api/project/count/",{},function(data)
{console.log(data);callbackMethod(false,"",data);}).success(function(){}).error(function(e){callbackMethod(true,"",{});try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error retrieving user: there was a problem contacting the server.");}
catch(ex)
{}}).complete(function(){console.log("Completed get user service call");});};this.deleteUser=function(callbackMethod)
{$.ajax({url:"/api/user/",type:'DELETE',success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error retrieving user: there was a problem contacting the server.");}});}
this.editUser=function(userObj,callbackMethod)
{console.log("Editing user ");console.log(userObj);$.ajax({url:"/api/user/",type:'PUT',data:userObj,success:function(data,e){console.log("User returned is ");console.log(data);callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error retrieving user: there was a problem contacting the server.");}
catch(ex)
{}}});}
this.getProject=function(projectId,callbackSetMethod)
{$.getJSON("/api/project/"+projectId+'/',{},function(data)
{callbackSetMethod(false,"",data);}).success(function(){}).error
(function(e){console.log("Error could not retrieve project");console.log(e);callbackSetMethod(true,"Error could not retrieve project",{});try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error retrieving user: there was a problem contacting the server.");}
catch(ex)
{}}).complete(function(){});}
this.getProjectSequence=function(projectId,callbackMethod)
{$.ajax({url:"/api/project/sequence/"+projectId+"/",type:'GET',success:function(data,e){callbackMethod(data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);}});}
this.getPrototypeProject=function(projectId,callbackSetMethod)
{function getParameterByName(name){name=name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var regex=new RegExp("[\\?&]"+ name+"=([^&#]*)"),results=regex.exec(location.search);return results==null?"":decodeURIComponent(results[1].replace(/\+/g," "));}
var xf=getParameterByName("xf");var xf_param="";if(typeof xf!=="undefined")
{xf_param="?xf="+xf;}
$.getJSON("/api/prototype/"+projectId+'/'+xf_param,{},function(data)
{callbackSetMethod(false,"",data);}).success(function(){}).error
(function(e){console.log("Error could not retrieve project");console.log(e);callbackSetMethod(true,"Error could not retrieve project",{});try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error retrieving user: there was a problem contacting the server.");}
catch(ex)
{}}).complete(function(){});}
this.getAllProjects=function(callbackMethod)
{console.log("Calling get project ");$.getJSON("/api/project/all/",{},function(data)
{try{callbackMethod(data);}
catch(err)
{try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error retrieving projects: "+ err);}
catch(ex)
{}}}).success(function(){}).error
(function(e){console.log("Error could not retrieve projects");console.log(e);callbackMethod(true,"Error could not retrieve projects",{},projectConstants.NOTIFY_TYPE_ERROR);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error retrieving projects: there was a problem contacting the server.");}
catch(ex)
{}}).complete(function(){});;}
this.createProject=function(projectName,password,callbackMethod)
{$.ajax({url:"/api/project/create/"+projectName+"/",type:'POST',data:{"password":password},success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error creating project: there was a problem contacting the server.");}
catch(ex)
{}}});}
this.deleteProject=function deleteProject(project_id,callbackMethod)
{$.ajax({url:"/api/project/"+project_id+"/",type:'DELETE',success:function(data,e){callbackMethod(false,"",project_id);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error deleting project: there was a problem contacting the server.");}
catch(ex){}}});};this.duplicateProject=function(project_id,callbackMethod){console.log('Duplicating project: '+ project_id);$.ajax({url:"/api/project/clone/"+ project_id+"/",type:"POST",dataType:"json",success:function(data,e){callbackMethod(false,"Project duplicated",data);}});}
this.editProject=function(project,callback_method)
{console.log("Editing the project");console.log(project);$.ajax({url:"/api/project/"+project.id+"/",type:'PUT',dataType:"json",contentType:"application/json",data:JSON.stringify(project.attributes),success:function(data,e){if(callback_method!=undefined)
{callback_method(project)}},error:function(e,f)
{try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error editing the project: there was a problem contacting the server.");}
catch(ex){}}});}
this.getHotspots=function(imageId,project_id,callbackMethod)
{$.getJSON("/api/hotspot/all/"+project_id+"/"+imageId+"/",{},function(data)
{try{var dataRetrieved=data;var sorted_data={}
$.each(dataRetrieved,function(key,value){sorted_data[value.id]=value;});projectHotspots[imageId]=sorted_data;try{callbackMethod();}
catch(err2)
{}}
catch(err)
{console.log(err);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error getting hotspot");}
catch(ex){}}}).success(function(){}).error(function(e){try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error getting hotspot: there was a problem contacting the server.");}
catch(ex){}}).complete(function(){});}
this.addHotspot=function(hotspotObj,imageObj,projectId)
{hotspotObj["img_owner_fk"]=imageObj.id
$.ajax({url:"/api/hotspot/"+projectId+"/",type:'POST',data:JSON.stringify(hotspotObj),success:function(data,e){var hotspotObj=data;if(typeof projectHotspots[hotspotObj.img_owner_fk]==="undefined")
{projectHotspots[hotspotObj.img_owner_fk]={};}
var existing_hotspot=projectHotspots[hotspotObj.img_owner_fk][hotspotObj["id"]];if(typeof existing_hotspot==="undefined")
{existing_hotspot=projectHotspots[hotspotObj.img_owner_fk][hotspotObj["uuid"]];}
if(typeof existing_hotspot==="undefined")
{existing_hotspot=hotspotObj}
else{existing_hotspot.id=hotspotObj.id;}
delete projectHotspots[hotspotObj.img_owner_fk][hotspotObj["uuid"]];projectHotspots[hotspotObj.img_owner_fk][hotspotObj["id"]]=existing_hotspot;if(typeof highlightedHotspot!="undefined")
{if(highlightedHotspot.uuid==hotspotObj.uuid)
{if(hasHotspotChanged(highlightedHotspot,hotspotObj)==true)
{highlightedHotspot.id=existing_hotspot.id;projectHotspots[hotspotObj.img_owner_fk][hotspotObj["id"]]=highlightedHotspot;}
else
{highlightedHotspot=existing_hotspot}}}
previous_hotspots[hotspotObj.id]=existing_hotspot;MARVELAPP.models.current_project.set("hotspots_delta",hotspotObj.project_hotspot_delta);is_hotspot_saving=false;},error:function(e,f)
{is_hotspot_saving=false;try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error adding the hotspot: there was a problem contacting the server.");}
catch(ex)
{}
jcrop_api.enable();},complete:function(e,f)
{}});}
this.addDuplicateHotspot=function(hotspotObj,imageObj,projectId,callback_method,destImgId)
{hotspotObj["img_owner_fk"]=imageObj.id
is_hotspot_saving=true;$.ajax({url:"/api/hotspot/duplicate/"+projectId+"/",type:'POST',data:JSON.stringify(hotspotObj),success:function(data,e){var hotspotObj=data;MARVELAPP.models.current_project.set("hotspots_delta",hotspotObj.project_hotspot_delta);if(typeof highlightedHotspot!=="undefined"){if(highlightedHotspot.uuid==hotspotObj.uuid)
{highlightedHotspot.id=hotspotObj.id;}}
console.log("updating this");callback_method(hotspotObj);$(".duplicate-button").removeClass("wait-state");$("#duplicate-modal").removeClass("activated");is_hotspot_saving=false;},error:function(e,f)
{$(".duplicate-button").removeClass("wait-state");$("#duplicate-modal").removeClass("activated");is_hotspot_saving=false;try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error adding the hotspot: there was a problem contacting the server.");}
catch(ex)
{}},complete:function(e,f)
{}});}
this.deleteHotspot=function(hotspotObj,projectId,imageObj,setIsDeletingHotspot){console.log("Deleting hotspot ");console.log(hotspotObj);var hotspot_id=hotspotObj.id;$.ajax({url:"/api/hotspot/"+projectId+"/"+hotspotObj.id+"/",type:'DELETE',data:hotspotObj,success:function(data,e){console.log("Returned hotspot object is");delete projectHotspots[hotspotObj.img_owner_fk][hotspotObj.id];$("#hotspot_"+hotspotObj.id).remove();if(typeof imageObj!=="undefined"){refreshHotspotObjects(imageObj);}
if(typeof setIsDeletingHotspot!=="undefined")
{setIsDeletingHotspot(false);}},error:function(e,f)
{setIsDeletingHotspot(false);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error deleting the hotspot: there was a problem contacting the server.");}
catch(ex)
{}}});}
this.deleteDuplicateHotspot=function(hotspotObj,projectId,imageObj,setIsDeletingHotspot,callback_method){if(imageObj!=undefined)
{image_path=imageObj.id+"/";}
else
{image_path="";}
$.ajax({url:"/api/hotspot/duplicate/"+projectId+"/"+hotspotObj.id+"/"+image_path,type:'DELETE',data:hotspotObj,success:function(data,e){setIsDeletingHotspot(false);console.log(data);hotspotObj=data;$("#hotspot_"+hotspotObj.id).remove();callback_method(hotspotObj,imageObj);},error:function(e,f)
{setIsDeletingHotspot(false);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error deleting the hotspot: there was a problem contacting the server.");}
catch(ex)
{}}});}
this.numUploadImagesInQueue=0;this.isNumUploadLocked=false;this.getUploadImagesInQueue=function()
{return this.numUploadImagesInQueue;}
this.addUploadImageToQueue=function()
{if(this.isNumUploadLocked==false)
{this.isNumUploadLocked=true;this.numUploadImagesInQueue=this.numUploadImagesInQueue+1;this.isNumUploadLocked=false;}
else
{this.addUploadImageToQueue();}}
this.removeUploadImageFromQueue=function()
{if(this.isNumUploadLocked==false)
{this.isNumUploadLocked=true;this.numUploadImagesInQueue=this.numUploadImagesInQueue-1;if(this.numUploadImagesInQueue==0)
{}
this.isNumUploadLocked=false;}
else
{this.removeUploadImageFromQueue();}}
this.numDeleteImagesInQueue=0;this.isDeleteImageQueueLocked=false;this.getDeleteImagesInQueue=function()
{return this.numDeleteImagesInQueue;}
this.addDeleteImageToQueue=function()
{if(this.isDeleteImageQueueLocked==false)
{this.isDeleteImageQueueLocked=true;this.numDeleteImagesInQueue=this.numDeleteImagesInQueue+1;this.isDeleteImageQueueLocked=false;}
else
{this.addDeleteImageToQueue();}}
this.removeDeleteImageFromQueue=function()
{if(this.isDeleteImageQueueLocked==false)
{this.isDeleteImageQueueLocked=true;this.numDeleteImagesInQueue=this.numDeleteImagesInQueue-1;if(this.numDeleteImagesInQueue==0)
{}
this.isDeleteImageQueueLocked=false;}
else
{this.removeDeleteImageFromQueue();}}
this.addImageObject=function(projectId,theImage,callbackMethod)
{if(theImage.id=="")
{theImage.id="0"
try{mixpanel.track("Adding new image");}
catch(e)
{}}
else
{mixpanel.track("Updating image");}
$.ajax({url:"/api/content/"+theImage.id+"/"+projectId+"/",type:'POST',data:theImage,success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error adding the image: there was a problem contacting the server.");}
catch(ex)
{}}});}
this.editImageMetaData=function(projectId,theImage,callbackMethod)
{$.ajax({url:"/api/content/meta/"+projectId+"/",type:'POST',data:theImage,success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error adding the image: there was a problem contacting the server.");}
catch(ex)
{}}});}
this.getImageObject=function(projectId,theImage,callbackMethod)
{$.getJSON("/api/content/"+theImage.id+"/"+projectId+"/",{},function(data)
{try
{if(data!=undefined)
{callbackMethod(false,"",data);}}
catch(err)
{console.log(err);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error getting image info, (3) - "+ err);}
catch(ex)
{}
callbackMethod(true,"",theImage);}}).success().error(function(err)
{try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error getting image info: there was a problem contacting the server, retrying.");}
catch(ex)
{}
callbackMethod(true,"",theImage);}).complete();}
this.deleteProjectImage=function(projectId,theImage,callbackMethod)
{projectController=this;$.ajax({url:"/api/content/"+theImage.id+"/"+projectId+"/",type:'DELETE',data:theImage,success:function(data,e){projectController.removeDeleteImageFromQueue();callbackMethod(false,"",theImage);},error:function(e,f)
{projectController.removeDeleteImageFromQueue();callbackMethod(true,"",theImage,projectConstants.NOTIFY_TYPE_ERROR);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error deleting the image: there was a "+"problem contacting the server.");}
catch(ex)
{}}});}
this.deleteProjectImages=function(projectId,images,callbackMethod)
{projectController=this;$.ajax({url:"/api/content/delete/all/"+projectId+"/",type:'DELETE',data:JSON.stringify(images),success:function(data,e){callbackMethod(false,"",images);},error:function(e,f)
{callbackMethod(true,"",theImage,projectConstants.NOTIFY_TYPE_ERROR);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error deleting the images: "+"there was a problem contacting the server.");}
catch(ex)
{}}});}
this.sendProjectEmail=function(projectId,email,project_url,callbackMethod)
{console.log("Sending email for "+projectId+" with  "+email);$.ajax({url:"/api/project/email/"+projectId+"/?email="+email+"",type:'POST',success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{var responseJson=$.parseJSON(e.responseText)
callbackMethod(true,responseJson.message,projectConstants.NOTIFY_TYPE_ERROR);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,responseJson.message+": there was a problem contacting the server.");}
catch(ex)
{}}});}
this.sendProjectSms=function(projectId,msisdn,project_url,callbackMethod)
{console.log("Sending sms for "+projectId+" with  "+msisdn);msisdn=msisdn.replace('+','')
$.ajax({url:"/api/project/sms/"+projectId+"/"+msisdn+"/",type:'POST',success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{var responseJson=$.parseJSON(e.responseText)
callbackMethod(true,responseJson.message,projectConstants.NOTIFY_TYPE_ERROR);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,responseJson.message+": there was a problem contacting the server.");}
catch(ex)
{}}});}
this.editProperty=function(property,callbackMethod)
{$.ajax({url:"/api/properties/",type:'POST',data:property,success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error updating user property: there was a problem contacting the server.");}
catch(ex)
{}}});}
this.editProjectProperty=function(project_id,property,callbackMethod)
{console.log("Adding property object ");console.log(property);$.ajax({url:"/api/project/property/"+project_id+"/",type:'POST',data:property,success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error updating user property: there was a problem contacting the server.");}
catch(ex)
{}}});}
this.subscribeUser=function(subscribe,type,callbackMethod)
{console.log("Adding subscription ");console.log(subscribe);$.ajax({url:"/api/stripe/subscribe/"+type+"/",type:'POST',data:subscribe,success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);}});}
this.verifyPassword=function(password,project_encoding,callbackMethod)
{$.ajax({url:"/api/project/verify/"+project_encoding+"/",type:'POST',data:{"password":password},success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);}});}
this.unsubscribeUser=function(callbackMethod)
{$.ajax({url:"/api/stripe/subscribe/",type:'DELETE',success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);try{showNotificationMessage(projectConstants.NOTIFY_TYPE_ERROR,"Error unsubscribing from Marvel. Please contact support help@marvelapp.com");}
catch(ex)
{}}});}
var is_polling=false;this.pollContent=function(project,callbackMethod)
{if(project!=undefined)
{if(project.id==undefined)
{callbackMethod(true,"",project);return;}}
else
{callbackMethod(true,"",project);return;}
$.ajax({url:"/api/content/poll/"+project.id+"/",type:'POST',data:{"cursor":project.cursor},success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);}});}
this.generatePrototype=function(projectId,callbackMethod)
{$.ajax({url:"/api/prototype/archive/"+projectId+"/",type:'POST',success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);}});}
this.getDownload=function(projectId,archive_id,callbackMethod)
{$.ajax({url:"/api/prototype/archive/"+projectId+"/"+archive_id+"/",type:'GET',success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);}});}
this.getLayerScreens=function(content_id,project_id,callbackMethod)
{$.ajax({url:"/api/content/screens/"+content_id+"/"+project_id+"/",type:'GET',success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);}});}
this.exportLayerScreens=function(content_id,project_id,export_layers,callbackMethod)
{$.ajax({url:"/api/content/screens/"+content_id+"/"+project_id+"/",type:'POST',data:JSON.stringify(export_layers),success:function(data,e){callbackMethod(false,"",data);},error:function(e,f)
{callbackMethod(true,"",{},projectConstants.NOTIFY_TYPE_ERROR);}});}}