/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2020-05-20 07:21:13
 * Created By  : admGanapati
 * Updated On  : 2020-07-08 06:56:05
 * Updated By  : lghori
 * URL         : /sys_script.do?sys_id=cc6582cbdbbc5c10a7822c53059619b0
 */
(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    var usrID = gs.getUserID();
    var mf;
    var gr = new GlideRecord('sys_user');
    gr.addQuery('sys_id', usrID);
    gr.query();
    if (gr.next()) {
        mf = gr.u_member_firm;
    }
    var qc = current.addEncodedQuery('sys_idSTARTSWITHe87ea60987a013000e3dd61e36cb0bbe^ORu_member_firm=' + mf);


})(current, previous);
