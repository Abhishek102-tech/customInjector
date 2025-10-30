function customRender(mainContainer,NewEle){
    const ele = document.createElement(NewEle.type);
    ele.innerText = NewEle.children;
    for(const prop in NewEle.props){
        ele.setAttribute(prop,NewEle.props[prop]);
    }
    mainContainer.appendChild(ele);
}

const NewEle = {
    type:'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank',
        class: 'custom-link',
        style : 'text-decoration:none; color:white; font-size:1.5rem; padding:10px; border-radius:5px; display:inline-block;'
    },
    children : 'Click me to visit google'
}

const Ele2 ={
    type:'button',
    props : {
        onclick : "alert('Button Clicked')",
        style : 'padding:10px; font-size:1rem; cursor:pointer;'
    },
    children : 'Click Me'
}

const mainContainer = document.getElementById('root');

customRender(mainContainer,NewEle);
customRender(mainContainer,Ele2);