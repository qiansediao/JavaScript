function getEle(id){
	return document.getElementById(id);
}


//给元素查找第一个子元素，并返回
function getFirstNode(ele){
	var node = ele.firstElementChild || ele.firstChild;
}


//给元素查找最后一个子元素。并返回
function getLastNode(ele){
	return ele.lastElementChild || ele.lastChild;
}


//给元素查找他的下一个元素节点，并返回
function getNextNode(ele){
	return ele.nextElementSibling || ele.nextSibling;
}

//给元素查找他的上一个元素节点，并返回
function getPrevNode(ele){
	return ele.previousElementSibling || ele.previousSibling;

}

//给元素查找指定索引值的兄弟的元素节点元素，并返回
function getEleOfindex(ele,index){
	return ele.parentNode.children(index);
}


//给定元素查找他的所有兄弟元素，并返回数组
function getAllSibling(ele){
	var newArr = [];
	var arr = ele.parentNode.children;
	for(var i=0; i<arr.length; i++){
		if(arr[i] !== ele){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
