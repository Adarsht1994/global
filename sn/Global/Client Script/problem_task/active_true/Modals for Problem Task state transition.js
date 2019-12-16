/* 
 * Application : Global
 * ClassName   : sys_script_client
 * Created On  : 2018-10-08 13:55:29
 * Created By  : admin
 * Updated On  : 2019-12-16 09:56:03
 * Updated By  : lghori
 * URL         : /sys_script_client.do?sys_id=b035c5d5870123000e3dd61e36cb0b81
 */
function onLoad() {

	var isMobile = false;
	var ua = window.navigator.userAgent;
	if( ua.match(/Android/i) ||
		ua.match(/webOS/i) ||
		ua.match(/iPhone/i) ||
		ua.match(/iPad/i) ||
		ua.match(/iPod/i) ||
		ua.match(/BlackBerry/i) ||
		ua.match(/Windows Phone/i))
			isMobile = true;

	var view = g_form.getViewName();
	if(view === "ptask_cancel_dialog_view" || view === "ptask_complete_dialog_view_1" || view === "ptask_complete_dialog_view_2" || view === "ptask_assess_dialog_view") {
 		document.getElementById("page_timing_div").style.display = "none";
		document.getElementById("problem_task.form_scroll").classList.remove("touch_scroll");
		document.getElementById("template-bar-aria-container").style.display = "none";
		var buttonsArray = $j(".form_action_button:not(#sysverb_modal_ok_bottom,#sysverb_modal_cancel_bottom)");
		for(var i = 0; i < buttonsArray.length; i++) {
			buttonsArray[i].style.display = 'none';
		}
		var formActionContainer = document.getElementsByClassName("form_action_button_container")[0];
		formActionContainer.style.paddingTop = "20px";
		formActionContainer.style.paddingLeft = "685px";

		if(view == "ptask_complete_dialog_view_1")
			formActionContainer.style.paddingLeft = "735px";

		if(isMobile)
			formActionContainer.style.paddingLeft = "305px";
		document.getElementsByClassName("related_links")[0].style.display = "none";
		document.getElementsByClassName("related_links_container")[0].style.display = "none";
	}
}
