  
layui.define(function(e) {
	var i = (layui.$, layui.layer, layui.laytpl, layui.setter, layui.view, layui.admin);
	var d=layui.daoke;
	var c = layui.setter;
	i.events.logout = function() {
		d.Ajax('post', c.api.logout, {}, function(e) {
			i.exit();
		})
	}, e("common", {})
});
