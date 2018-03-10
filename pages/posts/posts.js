/*
* @Author: Marte
* @Date:   2018-03-06 22:24:49
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-07 19:23:35
*/
var postsData = require('../../data/posts-data.js');
Page({
    data:{
// 小程序总是会读取data对象来做数据绑定，这个动作我们称为动作a
// 而这个动作a的执行是在onLoad事件执行之后发生的
    },
    onLoad: function (options) {
        // 页面初始化options为页面跳转所带来的参数
        // this.data.postList = postsData.postList;
        // setData()相当于把变量放入date中
        this.setData({
            posts_key:postsData.postList
        });
    },
    //点击跳转到新闻详情页
    onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    // console.log("on post id is" + postId);
    wx.navigateTo({
      url: "./posts-detail/posts-detail?id=" + postId
    });
  }
})