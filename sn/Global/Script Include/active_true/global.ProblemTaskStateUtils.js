/* 
 * Application : Global
 * ClassName   : sys_script_include
 * Created On  : 2018-07-18 16:48:40
 * Created By  : admin
 * Updated On  : 2019-12-16 10:28:11
 * Updated By  : lghori
 * URL         : /sys_script_include.do?sys_id=d36a573e535b13004247ddeeff7b12db
 */
var ProblemTaskStateUtils = Class.create();

ProblemTaskStateUtils.prototype = Object.extendsObject(ProblemTaskStateUtilsSNC, {
    initialize: function(argument) {
		ProblemTaskStateUtilsSNC.prototype.initialize.call(this, argument);
    },

    type: 'ProblemTaskStateUtils'
});
