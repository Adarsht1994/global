/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2020-05-03 13:32:26
 * Created By  : admVinay
 * Updated On  : 2020-07-13 06:28:12
 * Updated By  : admvinay
 * URL         : /sys_script.do?sys_id=76e5bf2ddbac94103187b062f39619c5
 */
(function executeRule(current, previous /*null when async*/ ) {
    //(!gs.hasRole('admin')|| !gs.hasRole('coe genesis'))||(!gs.getUser().isMemberOf('Catalog Quality Dashboard Global Viewers'))
   
        var user = new GlideRecord('sys_user');
        user.addActiveQuery();
        user.addQuery('sys_id', gs.getUserID());
        user.query();
        if (user.next()) {

            var loc = user.u_member_firm.getDisplayValue();
            var emf = "";
            if (user.u_mf_exceptions != "") {
                emf = user.u_mf_exceptions.getValue().toString();
            }

            var table = current.getTableName();

            var smf = new UserSharedData();
            var tb = smf.getUserACL(loc, emf, table);
            //var qc = current.addEncodedQuery(tb);

        }


        var str = [];
        var glidecat = new GlideRecord("sc_catalog");
        glidecat.addEncodedQuery("u_member_firmIN" + tb + '^ORsys_id=5cd61225db6adf0005d2147a3a961971^ORsys_id=e0d08b13c3330100c8b837659bba8fb4^ORsys_id=d28e504fdb24dc18a49284a214961985');
        //glidecat.addQuery("active", true);
        glidecat.query();
        // gs.addInfoMessage('Vinay Total '+glidecat.getRowCount() + "MF "+tb);
        while (glidecat.next()) {
            str.push(glidecat.sys_id.toString());
        }
        //str.push(glidecat.sys_id);
        //gs.addInfoMessage(str.toString())
        current.addEncodedQuery("sc_catalogsIN" + str + "^active=true");
    
})(current, previous);
