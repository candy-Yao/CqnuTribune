layui.use('layer', function(){
layer.config({extend:'../../styles/moon/style.css'});
// 引用表情
layer.config({

    skin:'layer-ext-moon',

    extend:'../../styles/moon/style.css'

});
});
function delete_navigation(e){
 
	    $.ajax({  
         type : "post",  
          url : "../backStageBackStage/deleteNavigation.php", 
          dataType:'json',
          data : {
          		navigation_id:e.name
              
                // 传修改的商品名
            },
          async : true,  
          // 是否异步，默认是true
          success : function(data){  
           if(data.state!=0){
            layer.confirm('删除导航成功！', {
            btn: ['确定'], //按钮
            icon: 1
            }, function(){
            top.location.href='../backStageFrontEnd/index.php?iframe=navs.php';
            // 跳转到所有分类界面
            });
            }
            else {
            layer.confirm('删除导航失败！', {
            btn: ['确定'], //按钮
            icon: 5
            }, function(){
            location.reload(true);
            });
            }
          }  
        // 调用成功或者失败后，给用户提醒然后刷新页面
     }); 
}