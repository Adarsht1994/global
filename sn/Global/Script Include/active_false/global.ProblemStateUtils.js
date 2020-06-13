/* 
 * Application : Global
 * ClassName   : sys_script_include
 * Created On  : 2018-07-23 06:14:15
 * Created By  : admin
 * Updated On  : 2019-12-16 10:34:38
 * Updated By  : lghori
 * URL         : /sys_script_include.do?sys_id=5428ba14872313000e3dd61e36cb0b72
 */
var ProblemStateUtils = Class.create();
ProblemStateUtils.prototype = Object.extendsObject(ProblemStateUtilsSNC, {
    initialize: function(argument) {
		ProblemStateUtilsSNC.prototype.initialize.call(this, argument);
    },

    type: 'ProblemStateUtils'
});
