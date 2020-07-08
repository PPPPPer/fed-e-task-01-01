import {h,  init} from 'snabbdom'

// 参数：数组，模块
// 返回值：对比两个vnode的差异并更新在真实dom
let patch = init([])
// 第一个参数：标签+选择器
// 第二个参数，如果是textNode就是内容
let vnode = h('div#container.cls', 'hello word')

let app = document.querySelector('#app')

// 第一个参数：可以是DOM元素，内部会把DOM元素转换成VNode
// 第二个参数：Vnode
// 返回值：Vnode
let oldVnode = patch(app, vnode)