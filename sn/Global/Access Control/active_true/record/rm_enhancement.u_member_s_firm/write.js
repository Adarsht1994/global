/* 
 * Application : Global
 * ClassName   : sys_security_acl
 * Created On  : 2019-12-16 14:40:07
 * Created By  : admsherine
 * Updated On  : 2019-12-16 14:40:07
 * Updated By  : admsherine
 * URL         : /sys_security_acl.do?sys_id=be91984d1b7d0450059a65b82d4bcb6f
 */
if((gs.hasRole("coe_scrum_team_member"))){
	answer=true;
}
else{
	answer=false;
}
