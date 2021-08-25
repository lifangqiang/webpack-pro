
import _ from 'lodash'

function component() {
    const element = document.createElement('div')
    const button = document.createElement('button');
    const br = document.createElement('br')

    element.innerHTML = _.join(['Hello', 'webpack', '透过字体给读者更多关爱'], ' ');
    button.innerHTML = 'Click me and look at the console!';
    element.appendChild(br);
    element.appendChild(button);

    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default;

        print();
    });

    return element;
}

document.body.appendChild(component());

// async function getComponent() {
//     const element = document.createElement('div')
//     const { default: _ } = await import('lodash')
//     // return import('lodash').then(({ default: _ }) => {
//     //     const element = document.createElement('div')
//         element.innerHTML = _.join(['Hello', 'webpack'], '')

//         return element
//     // }).catch((error) => 'An error occurred while loading the component')
// }

// getComponent().then((component) => {
//     document.body.appendChild(component)
// })