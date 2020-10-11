function clear(node){
    while(node.firstChild){
        node.removeChild(node.firstChild);
    }
}

export {clear};