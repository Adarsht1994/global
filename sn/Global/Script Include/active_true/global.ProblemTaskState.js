/* 
 * Application : Global
 * ClassName   : sys_script_include
 * Created On  : 2018-07-20 09:24:59
 * Created By  : admin
 * Updated On  : 2019-12-16 10:30:01
 * Updated By  : lghori
 * URL         : /sys_script_include.do?sys_id=b16748eb535b13004247ddeeff7b12c5
 */
var ProblemTaskState = Class.create();
gs.addInfoMessage('test');

ProblemTaskState.States = {
							NEW: ProblemTaskStateSNC.NEW,
							ASSESS: ProblemTaskStateSNC.ASSESS,
							WORK_IN_PROGRESS: ProblemTaskStateSNC.WORK_IN_PROGRESS,
							CLOSED: ProblemTaskStateSNC.CLOSED
						  };

ProblemTaskState.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

	getProblemTaskState: function() {
		return ProblemTaskState.States;
	},
	
    type: 'ProblemTaskState'
});
