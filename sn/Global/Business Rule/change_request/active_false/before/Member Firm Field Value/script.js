/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2018-09-10 11:14:04
 * Created By  : bavinash
 * Updated On  : 2020-01-03 08:47:14
 * Updated By  : lghori
 * URL         : /sys_script.do?sys_id=9ea1145437642700f3ac83dcb3990e92
 */
(function executeRule(current, previous /*null when async*/) {
	
	gs.addInfoMessage('hello');
	var assgnGroup=current.assignment_group;
	if(assgnGroup!='423a978f373207004d0e83dcb3990ed7')
	current.u_member_firm = current.requested_by.u_member_firm;
	else
		current.u_member_firm='0ad5349adb5e63c06d0b18df4b9619f6';
})(current, previous);
	
	
