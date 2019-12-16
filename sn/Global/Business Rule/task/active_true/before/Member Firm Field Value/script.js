/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2019-09-25 14:34:39
 * Created By  : admsherine
 * Updated On  : 2019-12-16 14:32:56
 * Updated By  : admsherine
 * URL         : /sys_script.do?sys_id=b43e7d261bc4c010059a65b82d4bcbae
 */
(function executeRule(current, previous /*null when async*/) {

	//var gf = current.addEncodedQuery('sys_class_name!=rm_defect^sys_class_name!=rm_epic^sys_class_name!=rm_sprint');
	// Add your code here
	//if(gf)
	
if(current.assignment_group!='423a978f373207004d0e83dcb3990ed7') // COE support group
	{
	current.u_member_firm = current.opened_by.u_member_firm;
		current.u_member_s_firm = current.opened_by.u_member_firm.getDisplayValue();
	//gs.addInfoMessage('inside');
	}
	
	else
		{
			current.u_member_firm='0ad5349adb5e63c06d0b18df4b9619f6';
			current.u_member_s_firm='COE - Admin';
		}

})(current, previous);
