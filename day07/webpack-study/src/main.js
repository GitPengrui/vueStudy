// 导入jquery类库
import $ from 'jquery'

// 设置偶数行背景色，索引从0开始，0是偶数
$(function () {
    $('li:even').css('backgroundColor', 'lightblue');
    // 设置奇数行背景色
    $('li:odd').css('backgroundColor', 'pink');
})