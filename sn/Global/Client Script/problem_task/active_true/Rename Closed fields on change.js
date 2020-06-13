/* 
 * Application : Global
 * ClassName   : sys_script_client
 * Created On  : 2018-08-21 18:40:01
 * Created By  : admin
 * Updated On  : 2019-12-16 09:56:03
 * Updated By  : lghori
 * URL         : /sys_script_client.do?sys_id=132aba71538823004247ddeeff7b1201
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading) {
		return;
	}
	// checking support of setLabel api for workspace
	var changeLabel = g_form.setLabel;
	if (!changeLabel) 
		changeLabel = g_form.setLabelOf.bind(g_form);
	else
		changeLabel = g_form.setLabel.bind(g_form);
	
	if (g_form.getValue('close_code') === '') {
		if (g_form.hasField('closed_at')) 
			changeLabel('closed_at', getMessage("Closed"));
		if (g_form.hasField('closed_by'))
			changeLabel('closed_by', getMessage("Closed by"));
		if (g_form.hasField('close_notes'))
			changeLabel('close_notes', getMessage("Close notes"));
	}	
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
	
	if (g_form.getValue('problem_task_type') == 'rca' && g_form.getValue('state') == g_scratchpad.PRBTASK_STATES.CLOSED && g_form.getValue('close_code') == 'canceled')
		g_form.setDisplay('close_notes', true);
}
