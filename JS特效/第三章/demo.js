function scroll(){
	if(window.pageYOffset !==undefined){
		return{
			"top":window.pageYOffset,
			"left":window.pageXOffset
		};
	}else if(document.compatMode==="CSS1Compat"){
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
