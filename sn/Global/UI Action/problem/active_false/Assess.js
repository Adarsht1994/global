/* 
 * Application : Global
 * ClassName   : sys_ui_action
 * Created On  : 2018-07-23 09:20:35
 * Created By  : admin
 * Updated On  : 2020-01-23 12:40:24
 * Updated By  : admsherine
 * URL         : /sys_ui_action.do?sys_id=74ed0b50876313000e3dd61e36cb0bbf
 */
function onAssess() {
	if (g_form && g_form.mandatoryCheck()) {
		ScriptLoader.getScripts("ProblemModalUIHelpers.jsdbx", function() {
			ProblemModalUIHelpers.onAssess();
		});
	}
}

