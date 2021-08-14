
import _ from 'lodash'

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button')

    element.innerHTML = _.join(['Hello', 'webpack', '透过字体给读者更dsfsd多关爱', 'sdflsdsdfsdff'], ' ');
    return element;
}

document.body.appendChild(component());