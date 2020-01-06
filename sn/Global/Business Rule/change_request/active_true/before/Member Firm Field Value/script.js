/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2019-06-18 06:23:57
 * Created By  : pkhobragade
 * Updated On  : 2020-01-03 09:18:01
 * Updated By  : lghori
 * URL         : /sys_script.do?sys_id=25581eaedb4ab380fb9541a40596198c
 */
(function executeRule(current, previous /*null when async*/) {
	if(current.assignment_group!='423a978f373207004d0e83dcb3990ed7') // COE support group
		{
		current.u_member_firm = current.opened_by.u_member_firm;
		current.u_member_s_firm = current.opened_by.u_member_firm.getDisplayValue();
	}
	else
		{
		current.u_member_firm='0ad5349adb5e63c06d0b18df4b9619f6';
		current.u_member_s_firm='COE - Admin';
	}
})(current, previous);
