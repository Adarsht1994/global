/* 
 * Application : Global
 * ClassName   : sys_script_client
 * Created On  : 2019-12-16 14:36:40
 * Created By  : admsherine
 * Updated On  : 2019-12-16 14:36:40
 * Updated By  : admsherine
 * URL         : /sys_script_client.do?sys_id=60d0dc0d1b7d0450059a65b82d4bcbc2
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
