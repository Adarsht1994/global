/* 
 * Application : Global
 * ClassName   : sys_ui_action
 * Created On  : 2018-07-23 11:29:52
 * Created By  : admin
 * Updated On  : 2020-01-23 12:40:33
 * Updated By  : admsherine
 * URL         : /sys_ui_action.do?sys_id=39d088a487a313000e3dd61e36cb0bc3
 */
function onAcceptingRisk() {
	if (g_form && g_form.mandatoryCheck()) {
		ScriptLoader.getScripts("ProblemModalUIHelpers.jsdbx", function() {
			ProblemModalUIHelpers.onAcceptingRisk();
		});
	}
}
