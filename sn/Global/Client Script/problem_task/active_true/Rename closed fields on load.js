/* 
 * Application : Global
 * ClassName   : sys_script_client
 * Created On  : 2018-08-21 18:31:53
 * Created By  : admin
 * Updated On  : 2019-12-16 09:56:03
 * Updated By  : lghori
 * URL         : /sys_script_client.do?sys_id=2f38b631538823004247ddeeff7b1226
 */
function onLoad() {
	// checking support of setLabel api for workspace
	var changeLabel = g_form.setLabel;
	if (!changeLabel) 
		changeLabel = g_form.setLabelOf.bind(g_form);
	else
		changeLabel = g_form.setLabel.bind(g_form);
	
	if (g_form.getValue('close_code') === 'canceled') {
		if (g_form.hasField('closed_at'))
			changeLabel('closed_at', getMessage("Canceled"));				
		if (g_form.hasField('closed_by'))
			changeLabel('closed_by', getMessage("Canceled by"));
		if (g_form.hasField('close_notes'))
			changeLabel('close_notes', getMessage("Canceled reason"));
	}
		
	if (g_form.getValue('close_code') === 'completed') {
		if (g_form.hasField('closed_at'))
			changeLabel('closed_at', getMessage("Completed"));
		if (g_form.hasField('closed_by'))
			changeLabel('closed_by', getMessage("Completed by"));
	}
}
