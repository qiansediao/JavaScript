//获取节点元素的封装


//把fn变成$符号就是jquery的封装了
function fn(ele){
	var str = ele.charAt(0)
	if(str === "#"){
		return document.getElementById(ele.slice(1));
		
	}
	else if(str ==="."){
		return document.getElementsByClassName(ele.slice(1));
	}else{
		return document.getElementsByTagName(ele);
	}
}
