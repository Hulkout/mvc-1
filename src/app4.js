import './app4.css'
import $ from "jquery"

const $circle = $('#app4 .circle')

$circle.on('mouseenter', () => {
    $circle.addClass('active')//如果鼠标移上去
}).on('mouseleave', () => {
    $circle.removeClass('active')
})