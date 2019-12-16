/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2019-09-24 13:00:42
 * Created By  : admsherine
 * Updated On  : 2019-12-16 12:42:24
 * Updated By  : admsherine
 * URL         : /sys_script.do?sys_id=f61f50961bcc0010059a65b82d4bcb67
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
