/* 
 * Application : Global
 * ClassName   : sys_script_client
 * Created On  : 2019-12-10 15:08:24
 * Created By  : admsherine
 * Updated On  : 2019-12-16 06:41:11
 * Updated By  : admsherine
 * URL         : /sys_script_client.do?sys_id=51ae1d871b6d4410059a65b82d4bcbcc
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
