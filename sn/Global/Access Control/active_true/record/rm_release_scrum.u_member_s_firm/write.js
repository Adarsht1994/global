/* 
 * Application : Global
 * ClassName   : sys_security_acl
 * Created On  : 2019-12-16 08:22:36
 * Created By  : admsherine
 * Updated On  : 2019-12-16 08:22:36
 * Updated By  : admsherine
 * URL         : /sys_security_acl.do?sys_id=14fabe701b310450059a65b82d4bcb6b
 */
if((gs.hasRole("coe_scrum_team_member"))){
	answer=true;
}
else{
	answer=false;
}
