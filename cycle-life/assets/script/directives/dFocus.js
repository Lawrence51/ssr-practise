function dFoucs(el,binding,vnode){
    console.log('全局指令1',el,binding,vnode)
    // el.value = '213123';
    el.focus();
}

export default {
    bind(el,binding,vnode){
        dFoucs(el,binding,vnode)
    }
}