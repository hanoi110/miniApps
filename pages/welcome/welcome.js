/*
* @Author: Marte
* @Date:   2018-03-06 20:37:41
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-07 11:46:58
*/
Page({
    onTap:function(){
        // 跳转功能，可返回
        // navigateTo父页面被隐藏，会触发onHide事件
        // wx.navigateTo({
        //     url:"../posts/posts"
        // });
        // 不可返回的跳转
        // redirectTo父页面被关闭，会触发onUnload事件
        wx.redirectTo({
            url:"../posts/posts"
        });
    },
})