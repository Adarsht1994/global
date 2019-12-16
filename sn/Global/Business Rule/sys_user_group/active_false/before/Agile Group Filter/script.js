/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2019-10-23 10:20:31
 * Created By  : admsherine
 * Updated On  : 2019-12-16 14:04:38
 * Updated By  : admsherine
 * URL         : /sys_script.do?sys_id=b52dcd2b1b20481000584225bd4bcbdb
 */
(function executeRule(current, previous /*null when async*/) {
//    gs.log("Hii"+gs.getUser().getMyGroups(),'89');
// 	//current.addQuery("group",gs.getUser().getMyGroups());
// 	var sys_
// 	//[51f79d6f1b60481000584225bd4bcbfd, f15ffb4d37a11f8082e483dcb3990ed2, e2cc57de1bee770000584225bd4bcb8d]
// 	var qc =
// 	current.addEncodedQuery("sys_idIN51f79d6f1b60481000584225bd4bcbfd, f15ffb4d37a11f8082e483dcb3990ed2, e2cc57de1bee770000584225bd4bcb8d");
// 	gs.addInfoMessage("Hello AB");	


// // //return gs.getUser().getMyGroups();
// 	var arr='';
// 	var grp = new GlideRecord('sys_user_grmember');
// 	grp.addEncodedQuery('user='+gs.getUserID());
// 	grp.query();
// 	while(grp.next()){
// 		//var groupTypes = grp.type;
// 		//if(groupTypes.indexOf("Agile")!=-1){
// 			arr+=grp.group+',';//}
		
// 	}
	//var qc = current.addEncodedQuery('sys_idIN'+arr);
	
	
	
	
	//var grp_type = '1bff3b1493030200ea933007f67ffb6d';
	
	var qc = '';
	var arr='';
	var grp = new GlideRecord('sys_user_grmember');
	grp.addEncodedQuery('group.typeLIKE1bff3b1493030200ea933007f67ffb6d^user='+gs.getUserID());
	//grp.addEncodedQuery('group.typeLIKE'+grp_type);
	grp.query();
	while(grp.next()){
		//gs.addInfoMessage(arr);		
		arr+=grp.group+',';
	}
	if(grp.getRowCount() >0){	
		
		if(!gs.hasRole('coe_scrum_team_member')){
			//gs.addInfoMessage("IN loop");
		qc = current.addEncodedQuery('sys_idIN'+arr);
		}
		else{
			
		}
	}	
	else{
		//gs.addInfoMessage("Out side loop");
		qc = current.addEncodedQuery('nameISNOTEMPTY');
	}
})
(current, previous);
