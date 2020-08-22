function NodeClass() {
    var prevNode = null;
    var nextNode = null;
    var nodevalue = null;
}

function Initiate(l_Array) {
    l_Array = new NodeClass();
    return l_Array;
}

function Length(l_Array) {
    var returnValue = 0;
    var currentNode = l_Array;
    while(currentNode != null) {
        returnValue++;
        currentNode = currentNode.nextNode;
    }
    return returnValue;
}

function Get(l_Array,i) {
    var returnValue = null;
    var currentNode = l_Array;
    var currentIndex = 0;
    while(currentNode != 0 && currentIndex <= i){
        if(currentIndex == i)
        returnValue = currentNode.nodevalue;
        currentIndex++;
        currentNode = currentNode.nextNode;
    }
    return returnValue;
}

function insert(l_Array,i,b) {
    var returnValue = l_Array;
    var currentNode = l_Array;
    var currentIndex = 0;
    while(currentNode != null){
        if(currentIndex == i){
            var tempNode = new NodeClass();
            if(currentNode.prevNode == null){
                tempNode.nextNode = currentNode;
                currentNode.prevNode = tempNode;
                l_Array = tempNode;
            }
            else{
                tempNode.prevNode = currentNode.prevNode;
                tempNode.nextNode = currentNode;
                currentNode.prevNode.nextNode = tempNode;
                currentNode.prevNode = tempNode;
            }
            tempNode.nodevalue = b;
            break;
        }
        currentIndex++;
        currentNode = currentNode.nextNode;
    }
    return l_Array;
}