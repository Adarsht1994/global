/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2019-09-24 11:03:27
 * Created By  : admsherine
 * Updated On  : 2019-12-16 12:02:26
 * Updated By  : admsherine
 * URL         : /sys_script.do?sys_id=53a300521b4c0010059a65b82d4bcb4f
 */
(function executeRule(current, previous /*null when async*/) {

	//current.u_member_s_firm = current.opened_by.u_member_firm;
		current.u_member_s_firm = current.opened_by.u_member_firm.getDisplayValue();

})(current, previous);
