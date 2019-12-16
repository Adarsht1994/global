/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2019-02-21 11:23:19
 * Created By  : admritwij
 * Updated On  : 2019-12-16 06:53:54
 * Updated By  : admsherine
 * URL         : /sys_script.do?sys_id=980b3809dbb3e70005d2147a3a961919
 */
(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	current.u_member_firm = current.opened_by.u_member_firm;
	current.u_member_s_firm = current.opened_by.u_member_firm.getDisplayValue();

})(current, previous);
