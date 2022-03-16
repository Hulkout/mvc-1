import './app3.css'
import $ from "jquery"

const $square = $('#app3 .square')

$square.on('click', () => {
    $square.toggleClass('active')//如果又class就删除，没有就加上
})