/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2019-12-16 12:44:19
 * Created By  : admsherine
 * Updated On  : 2019-12-16 12:44:19
 * Updated By  : admsherine
 * URL         : /sys_script.do?sys_id=b127737c1b790450059a65b82d4bcbb1
 */
(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here

    var mf = current.u_member_s_firm.getDisplayValue();
    	//gs.addInfoMessage(mf);
    var gr = new GlideRecord("u_member_firm");
    gr.addQuery("u_member_firm", mf);
    gr.query();
    if (gr.next()) {
      //  	gs.addInfoMessage('inside if loop' );
        current.u_member_firm = gr.sys_id;
    }



})(current, previous);
