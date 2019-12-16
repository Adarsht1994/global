/* 
 * Application : Global
 * ClassName   : sp_widget
 * Created On  : 2019-12-16 08:56:10
 * Created By  : lghori
 * Updated On  : 2019-12-16 08:56:47
 * Updated By  : lghori
 * URL         : /sp_widget.do?sys_id=52130ff41b710450059a65b82d4bcbe4
 */
function($scope, $rootScope, spUtil) {
	var c = this;
	c.expanded = !spUtil.isMobile();
	c.expand = function() {
		c.expanded = true;
	};

	var deregister = $rootScope.$on("sp.update.breadcrumbs", function(e, list) {
		c.breadcrumbs = list;
	});

	$scope.$on('$destroy', function(){
		deregister();
	});

}
