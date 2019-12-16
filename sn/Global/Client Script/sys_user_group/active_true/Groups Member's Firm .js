/* 
 * Application : Global
 * ClassName   : sys_script_client
 * Created On  : 2019-12-16 08:49:31
 * Created By  : admsherine
 * Updated On  : 2019-12-16 08:49:31
 * Updated By  : admsherine
 * URL         : /sys_script_client.do?sys_id=7a410ff01b710450059a65b82d4bcb84
 */
function onLoad() {
    
    if(g_form.isNewRecord())
        {
        
        var mf = new GlideAjax('getUserMemberFirm');
        mf.addParam('sysparm_name', 'userMemberFirm');
        mf.getXML(memberfirm);
        
    }
}
function memberfirm(response) {
            var answer = response.responseXML.documentElement.getAttribute("answer");

            g_form.setValue('u_member_s_firm', answer);
//	alert("Hiii"+answer);
	
        }
