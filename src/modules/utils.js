/**
 * Remove all the childNode from DOM of passed node in paramaters.
 * @param {Object} node - The DOM element 
 */
function clear(node){
    while(node.firstChild){
        node.removeChild(node.firstChild);
    }
}

export {clear};