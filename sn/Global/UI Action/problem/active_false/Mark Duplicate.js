/* 
 * Application : Global
 * ClassName   : sys_ui_action
 * Created On  : 2018-07-23 10:40:44
 * Created By  : admin
 * Updated On  : 2020-01-23 12:40:43
 * Updated By  : admsherine
 * URL         : /sys_ui_action.do?sys_id=36b5b71487a313000e3dd61e36cb0bd3
 */
function onMarkDuplicate() {
	if (g_form && g_form.mandatoryCheck()) {
		ScriptLoader.getScripts("ProblemModalUIHelpers.jsdbx", function() {
			ProblemModalUIHelpers.onMarkDuplicate();
		});
	}
}
