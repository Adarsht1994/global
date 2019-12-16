/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2018-10-08 10:25:06
 * Created By  : bavinash
 * Updated On  : 2019-12-16 06:47:15
 * Updated By  : admsherine
 * URL         : /sys_script.do?sys_id=4555941d0fc9eb001ef9f55be1050e28
 */
(function executeRule(current, previous /*null when async*/) {
	
	var ttype = current.getTableName();
	if(ttype!='chat_queue_entry'){
	var user = new GlideRecord('sys_user');
	user.addActiveQuery();
	user.addQuery('sys_id', gs.getUserID());
	user.query();
	if(user.next()){
		var loggedInUser= gs.getUserID();
		//var loc = user.u_member_firm;
		/*var qc = current.addEncodedQuery('u_member_firmISNOTEMPTY^u_member_firm='+loc+'^ORopened_by'+user+'^ORwatch_listDYNAMIC'+user);*/
		var loc = user.u_member_firm.getDisplayValue();
		var memberFirm=user.u_member_firm;
		
		//var qc = current.addEncodedQuery('u_member_s_firm='+loc);
		
		
			if(!gs.hasRole('x_detc_itsm_global.itil_global_std'))
				{
					if(!gs.hasRole('coe_scrum_team_member'))
						{
				var qc = current.addEncodedQuery('u_member_firmISNOTEMPTY^u_member_s_firm='+loc+'^ORopened_by='+loggedInUser+'^ORwatch_list='+loggedInUser+'^ORu_raised_for_mf='+memberFirm);
						//	gs.addInfoMessage(qc);
						}
					else
						{
							
						}
					
			}
			else
				{
				 var qc = current.addEncodedQuery('u_member_s_firm=COE - Admin');
			}

		}
	
	}
	
})(current, previous);
