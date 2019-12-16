/* 
 * Application : Global
 * ClassName   : sys_security_acl
 * Created On  : 2019-12-16 12:41:12
 * Created By  : admsherine
 * Updated On  : 2019-12-16 14:39:31
 * Updated By  : admsherine
 * URL         : /sys_security_acl.do?sys_id=be46b3341b790450059a65b82d4bcb63
 */
if((gs.hasRole("coe_scrum_team_member"))){
	answer=true;
}
else{
	answer=false;
}
