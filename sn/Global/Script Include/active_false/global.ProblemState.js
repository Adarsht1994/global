/* 
 * Application : Global
 * ClassName   : sys_script_include
 * Created On  : 2018-07-20 08:11:13
 * Created By  : admin
 * Updated On  : 2019-12-16 10:34:31
 * Updated By  : lghori
 * URL         : /sys_script_include.do?sys_id=91d5739b875b13000e3dd61e36cb0b7f
 */
var ProblemState = Class.create();

ProblemState.STATES = {
	NEW : ProblemStateSNC.NEW,
	ASSESS : ProblemStateSNC.ASSESS,
	ROOT_CAUSE_ANALYSIS : ProblemStateSNC.ROOT_CAUSE_ANALYSIS,
	FIX_IN_PROGRESS : ProblemStateSNC.FIX_IN_PROGRESS,
	RESOLVED : ProblemStateSNC.RESOLVED,
	CLOSED : ProblemStateSNC.CLOSED
};

ProblemState.RESOLUTION_CODES = ProblemStateSNC.RESOLUTION_CODES;

ProblemState.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

	getProblemState: function() {
		return ProblemState.STATES;
	},

	getResolutionCodes: function() {
		return ProblemState.RESOLUTION_CODES;
	},

    type: 'ProblemState'
});
