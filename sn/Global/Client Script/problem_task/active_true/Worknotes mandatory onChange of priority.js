/* 
 * Application : Global
 * ClassName   : sys_script_client
 * Created On  : 2018-08-22 11:58:48
 * Created By  : admin
 * Updated On  : 2019-12-16 09:56:03
 * Updated By  : lghori
 * URL         : /sys_script_client.do?sys_id=3787eeca534823004247ddeeff7b1221
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue === '' || g_form.isNewRecord())
		return;
	else if (newValue == oldValue)
		g_form.setMandatory("work_notes", false);
	else
		g_form.setMandatory("work_notes", true);
}
