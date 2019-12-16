/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2019-12-16 11:57:09
 * Created By  : admsherine
 * Updated On  : 2019-12-16 12:24:36
 * Updated By  : admsherine
 * URL         : /sys_script.do?sys_id=191c2f341b390450059a65b82d4bcb1c
 */
(function executeRule(current, previous /*null when async*/) {
	
	if(!gs.hasRole('coe_scrum_team_member')){
		
		var g_sys = gs.getUser().getRecord().getValue('u_member_firm'); 
	var a_sys = gs.getUser().getRecord().getDisplayValue('u_member_firm'); 
	// Add your code here

	current.u_member_firm = g_sys;
		current.u_member_s_firm = a_sys;  
	//	gs.addInfoMessage("Hiii"+current.u_member_firm);
	} 
	

	

})(current, previous);
