import $ from "jquery"
import "./app1.css"
//第一步 拿到这四个按钮 与数字
const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $number = $('#number')
const n = localStorage.getItem('n')
$number.text(n || 100)
//绑定事件
//parseInt() 函数可解析一个字符串，并返回一个整数.text() 方法设置或返回被选元素的文本内容。
$button1.on('click', () => {
    let n = parseInt($number.text())
    n += 1
    localStorage.setItem('n', n)//当用户刷新还是原来的n
    $number.text(n)
})

$button2.on('click', () => {
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem('n', n)
    $number.text(n)
})

$button3.on('click', () => {
    let n = parseInt($number.text())
    n *= 2
    localStorage.setItem('n', n)
    $number.text(n)
})

$button4.on('click', () => {
    let n = parseInt($number.text())
    n /= 2
    localStorage.setItem('n', n)
    $number.text(n)
})