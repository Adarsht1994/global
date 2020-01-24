/* 
 * Application : Global
 * ClassName   : sys_ui_action
 * Created On  : 2018-07-17 04:55:14
 * Created By  : admin
 * Updated On  : 2020-01-23 12:40:38
 * Updated By  : admsherine
 * URL         : /sys_ui_action.do?sys_id=ce8d6796871313000e3dd61e36cb0bba
 */
function onFix() {
	if (g_form && g_form.mandatoryCheck()) {
		ScriptLoader.getScripts("ProblemModalUIHelpers.jsdbx", function() {
			ProblemModalUIHelpers.onFix();
		});
	}
}
