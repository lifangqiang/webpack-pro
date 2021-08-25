import _ from 'lodash'
import printMe from './print.js'
import './styles.css'

function component() {
    const element = document.createElement('div')
    const btn = document.createElement('button')
    element.innerHTML = _.join(['Hello', 'webpack', 'lalalala'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

// document.body.appendChild(component());

// 存储element，以在print.js修改时重新渲染
let element = component()
document.body.appendChild(element)

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element)
        // 重新渲染component，以便更新click事件处理函数
        element = component()
        document.body.appendChild(element)
    })
}