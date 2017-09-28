function getStyle(ele,attr){
	if(window.getComputedStyle){
		return window.getComputedStyle(ele,null)[attr];
	}
	return ele.currentStyle[attr];
}
function scroll(){
	if(window.pageYOffset !== undefined){
		return{
			"top":window.pageXOffset,
			"left":window.pageYOffset
		};
		
	}else if(document.compatMode ==="CSS1Compat"){
		return{
			"top":document.documentElement.scrolltop,
			"left":document.documentElement.scrollLeft
		};
	}else{
		return{
			"top":document.body.scrollTop,
			"left":document.body.scrollLeft
		};
	}
}
