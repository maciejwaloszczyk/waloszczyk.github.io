/**
* @package SP Page Builder
* @author JoomShaper http://www.joomshaper.com
* @copyright Copyright (c) 2010 - 2021 JoomShaper
* @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
*/
jQuery((function(e){Joomla.submitbutton=function(a,n,t){var i="",o="";if("page.save"==a?(i=e("#save-group-children-save").length?e("#save-group-children-save"):e("#toolbar-save"),o=i.find("span").attr("class")):"page.save2new"==a?(i=e("#toolbar-save-new"),o=i.find("span").attr("class")):"page.save2copy"==a?(i=e("#toolbar-save-copy"),o=i.find("span").attr("class")):(i=e("#toolbar-apply"),o=i.find("span").attr("class")),""==a)return!1;var r=!0;if("page.cancel"!=a&&"page.close"!=a)for(var s=e("#adminForm.form-validate"),p=0;p<s.length;p++)if(!document.formvalidator.isValid(s[p])){r=!1;break}if(r){if("page.cancel"!=a&&"page.close"!=a){var d=e("#adminForm");d.find('input[name="task"]').val(a),e.ajax({type:"POST",data:d.serialize(),url:pagebuilder_base+"administrator/index.php?option=com_sppagebuilder&task="+a,beforeSend:function(){i.find("span").removeAttr("class").addClass("fas fa-spinner fa-spin")},success:function(n){i.find("span").removeAttr("class").addClass(o);try{var t=e.parseJSON(n),r="success";if(!t.status)r="error";if(t.title&&e("#jform_title").val(t.title),e('<div class="notify-'+r+'">'+t.message+"</div>").css({opacity:0,"margin-top":-15,"margin-bottom":0}).animate({opacity:1,"margin-top":0,"margin-bottom":15},200).prependTo(".sp-pagebuilder-notifications"),void 0!==window.warningAtReload&&1==window.warningAtReload&&(window.warningAtReload=!1),e(".sp-pagebuilder-notifications").find(">div").each((function(){var a=e(this);setTimeout((function(){a.animate({opacity:0,"margin-top":-15,"margin-bottom":0},200,(function(){a.remove()}))}),3e3)})),!t.status)return;window.history.replaceState("","",t.redirect),t.frontend_editor_url&&(0===e("#btn-page-frontend-editor").length?e(".sp-pagebuilder-frontend-actions").append('<a id="btn-page-frontend-editor" target="_blank" href="'+t.frontend_editor_url+'" class="btn btn-primary">'+Joomla.JText._("COM_SPPAGEBUILDER_FRONTEND_EDITOR")+"</a>\n"):e("#btn-page-frontend-editor").attr("href",t.frontend_editor_url)),t.preview_url&&(0===e("#btn-page-preview").length?e(".sp-pagebuilder-frontend-actions").append('<a id="btn-page-preview" target="_blank" href="'+t.preview_url+'" class="btn btn-outline-primary ml-3">'+Joomla.JText._("COM_SPPAGEBUILDER_PREVIEW")+"</a>\n"):e("#btn-page-preview").attr("href",t.preview_url)),"page.save2new"==a&&(window.location.href="index.php?option=com_sppagebuilder&view=page&layout=edit"),"page.save"==a&&(window.location.href="index.php?option=com_sppagebuilder&view=pages"),e("#jform_id").val()||location.reload()}catch(e){window.location.href="index.php?option=com_sppagebuilder&view=pages"}}})}else Joomla.submitform(a,n,t);return!0}return!1};window.onbeforeunload=function(e){if(void 0!==window.warningAtReload&&1==window.warningAtReload){var a="Do you want to lose unsaved data?";return(e=e||window.event)&&(e.returnValue=a),a}return null},e(document).on({mouseenter:function(){var a=e(this).find("img"),n=e(this).find("img").outerHeight()-230;a.css({top:"-"+n+"px"})},mouseleave:function(){e(this).find("img").css({top:0})}},".sp-pagebuilder-page-templates li")}));