import {h, init} from 'snabbdom'

// 2、div中防止子元素 h1,p
let patch = init([])

let vnode = h('div#container', [
    h('h1', 'hello snabbdom'),
    h('p', '这是一个p标签')
])

let app = document.querySelector('#app')
let oldVnode = patch(app, vnode) 
