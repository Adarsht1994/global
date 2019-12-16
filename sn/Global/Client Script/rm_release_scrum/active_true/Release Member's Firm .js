/* 
 * Application : Global
 * ClassName   : sys_script_client
 * Created On  : 2019-12-11 13:28:35
 * Created By  : admsherine
 * Updated On  : 2019-12-12 06:34:32
 * Updated By  : admsherine
 * URL         : /sys_script_client.do?sys_id=a111961b1b210810059a65b82d4bcbbf
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
