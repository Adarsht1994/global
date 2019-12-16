/* 
 * Application : Global
 * ClassName   : sys_script_client
 * Created On  : 2018-08-31 09:02:28
 * Created By  : admin
 * Updated On  : 2019-12-16 09:56:03
 * Updated By  : lghori
 * URL         : /sys_script_client.do?sys_id=5d061805539023004247ddeeff7b12ef
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading) {
		return;
	}

	if (newValue === '' || oldValue != newValue)
		g_form.setValue("assigned_to", "");
}
