/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2018-07-23 09:39:53
 * Created By  : admin
 * Updated On  : 2018-11-01 10:45:39
 * Updated By  : admin
 * URL         : /sys_script.do?sys_id=7778af18536b13004247ddeeff7b12dd
 */
(function executeRule(current, previous /*null when async*/) {
	
	g_scratchpad.PRBTASK_STATES = new ProblemTaskState().getProblemTaskState();

	g_scratchpad.originalState = current.state;
	g_scratchpad.originalCloseCode = current.close_code;
})(current, previous);
