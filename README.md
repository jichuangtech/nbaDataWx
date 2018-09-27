1.在属性赛程列表中：对球的名字如果溢出，则需要使用 overflow:auto来控制，记得要也设置父元素，以及父元素的兄弟元素的的宽度用 width:20%，百分比来控制，而不能使用 flex:1 这边来控制，因为flex属性会根据元素的内容进行伸缩，导致文本不会漂浮在最上面

2.关于 postion属性：4种属性值的描述：
  (1)https://www.cnblogs.com/520chensiqi/p/6540068.html
  (2)“子绝父相”：相对位置  和 绝对位置 一起使用

3.bindtap事件的 event.currentTarget.dataset.valStr
其中 valStr 在 xx.wxml中的书写方式 必须是小写字母不是驼峰式，比如：teamname，而不能是teamName
https://blog.csdn.net/genius_yym/article/details/52904161?locationNum=2&fps=1

dataset
在组件中可以定义数据，这些数据将会通过事件传递给 SERVICE。 书写方式： 以data-开头，多个单词由连字符-链接，不能有大写(大写会自动转成小写)如data-element-type，最终在 event.currentTarget.dataset 中会将连字符转成驼峰elementType。
参考官方说明：https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html

4.实现 ViewPager + Tab的方式
https://blog.csdn.net/lily2016n/article/details/78414306