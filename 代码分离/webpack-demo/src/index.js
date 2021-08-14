
import _ from 'lodash'

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', '透过字体给读者更多关爱'], ' ');

    return element;
}

document.body.appendChild(component());