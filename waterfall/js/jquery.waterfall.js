(function($){ // 立即执行函数
    // 1.0 定义一个插件
    $.fn.extend({
        // 2.0 瀑布流插件
        waterfall:function(){ //函数作用域
            // console.log($(this)) // API调用者
            //3. 定义变量记录数据
            // 图片宽度
            var width = 232;
            // 列数
            // var count = ($(this).width() -  (space * 4) ) / width;
            var count = 5;
            // 间距
            var space = 10;
            // 数组 记录5个高度
            var arrHeight = [];
            // 4.0 循环页面所有的li标签
            $(this).find('.item').each(function(index , dom){
                // console.log(index ,'index')
                // console.log(dom ,'dom')
                // 5.0 获取每个li标签的高度
                var h = dom.offsetHeight;
                // var h = dom.scrollHeight;
                // console.log('height:',h)
                // 6.0 判断
                if(index < 5){
                    // 7.0 选择前5个li标签的高度 存放数组中
                    arrHeight.push(h);
                    // 8.0 设置前5个li标签的位置
                    $(dom).css({
                        top:0,
                        left:index * (width + space)
                    })
                }else {

                    // 找数组中的最小值
                    // 9.0 假设数组中第一个元素 值最小
                    var min = arrHeight[0];
                    var minIndex = 0 ;
                    // 10.0循环
                    $.each(arrHeight, function(index , val){
                        // 11.判断 假设是否大于数组中的其他元素的值
                        if(min > val){
                            //12.把真实最小值赋值给min
                            min = val;
                            //13.把最小值的索引值赋给minIndex
                            minIndex = index;
                        }
                        
                    })
                    //14.设置下一个li标签位置
                    $(dom).css({
                        top:min + space,
                        left:minIndex * (width + space)
                    })
                    //15.更新数组的高度
                    arrHeight[minIndex]+= space +  h;
                }
            })
            console.log(arrHeight)
        }
    })

})(jQuery)