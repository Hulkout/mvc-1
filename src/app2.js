import $ from "jquery"
import "./app2.css"
const $tabBar = $('#app2 .tab-bar')  //最好写上app2里面的 不然app1里面也可能有
const $tabContent = $('#app2 .tab-content')
//tabBar是ol jquery有一个方法监听子元素事件，当你点击tabBar的li,事件委托
$tabBar.on('click', 'li', (e) => {
    //但是要知道它是第几个元素啊，遍历他的兄弟 看谁跟他一样，
    //jquery内置了 e.targer就是拿到用户点的元素,但是如果li里面还有span 那e.target就是span,那就用 currentTarget，反正这俩一个不行用另一个
    const $li = $(e.currentTarget);
    const index = $li.index();//jquery加.index就可以获取排行老几
    //children 那两个儿子  eu就是等于第几个  然后找到他的兄弟
    $tabContent.children()//永远不要使用.css .show .hide所有直接操作CSS相关的永远不要用 
        .eq(index).addClass('active')  //意思就是JS不用管CSS怎么写CSS自己管                //.css({ display: 'block' })
        .siblings().removeClass('active')                       // .css({ display: 'none' })
    //背景色切换
    $li.addClass('selected')
        .siblings().removeClass('selected')
})

//找到第0个儿子  自己点一下  出发click 事件
$tabBar.children().eq(0).trigger('click')

