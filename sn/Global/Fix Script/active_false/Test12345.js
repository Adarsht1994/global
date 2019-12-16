/* 
 * Application : Global
 * ClassName   : sys_script_fix
 * Created On  : 2019-12-16 10:56:14
 * Created By  : admAdarsh
 * Updated On  : 2019-12-16 10:56:22
 * Updated By  : admAdarsh
 * URL         : /sys_script_fix.do?sys_id=848e1b781b39c05000584225bd4bcb5d
 */
//var enc = "u_member_firm.u_member_firmSTARTSWITHus";
var gr3 = new GlideRecord("incident");
//gr3.addEncodedQuery(enc);
gr3.query();
while (gr3.next()) {
    var gr = new GlideRecord("incident_task");
    gr.addQuery("incident", gr3.sys_id);
    gr.query();
    var gr2 = new GlideRecord("incident");
    gr2.addQuery("sys_id", gr3.sys_id);
    gr2.query();
    if (gr2.next()) {
     //   gs.log('Task Row count is ' + gr.getRowCount());
		gr2.setWorkflow(false);
		gr2.autoSysFields(false);
        gr2.u_task_counter = gr.getRowCount();
        gr2.update();
    }
   
}
 gs.log('Incident Row count is ' + gr3.getRowCount());
