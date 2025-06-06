function customRender(reactElement,Container){
    const domElement=document.createElement
    (reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    Container.appendChild(domElement)
}
const reactElement={
    type: 'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'
}
const mainContainer=document.querySelector('#root');

customRender(reactElement,mainContainer)