var img=document.getElementsByClassName("img");
ie4 = document.all
var paso=1;
var playing=false;
var funct="f1()";
function inicio(){
	mouse=cursor.style;
	mouse.top="0px";
	mouse.left="0px";
	mouse.visibility="hidden";
		for(i=0;i<3;i++){
			img[i].style.visibility = "hidden";
		}
		img[0].style.visibility = "visible";
}
function play(){
			for(i=0;i<3;i++){
			img[i].style.visibility = "hidden";
		}
		img[0].style.visibility = "visible";
		funct="f1()";
	if(!playing){
		mouse.visibility="visible";
		playing=true;
		f1();	
	}
	
}

function f1(){
	if(parseInt(mouse.left)!=674||parseInt(mouse.top)!=29){
		if(parseInt(mouse.top)>29){
			mouse.top=parseInt(mouse.top)-1+'px';
		}
		else if(parseInt(mouse.top)<29){
			mouse.top=parseInt(mouse.top)+1+'px';
		}
		
		if(parseInt(mouse.left)<674){
			mouse.left=parseInt(mouse.left)+2+'px';
		}
		else if(parseInt(mouse.left)>674){
			mouse.left=parseInt(mouse.left)-2+'px';	
		}
	}
	if(inRange(parseInt(mouse.left),673,675)==true&&inRange(parseInt(mouse.top),28,30)==true){
		funct="f2()";
		img[0].style.visibility="hidden";
		img[1].style.visibility="visible";
		
	}
	setTimeout(funct,1);
}

function f2(){
	if(parseInt(mouse.left)<775 || parseInt(mouse.top)<169){
		if(parseInt(mouse.left)<775){
			mouse.left=parseInt(mouse.left)+1+'px';
		}
		if(parseInt(mouse.top)<169){
		mouse.top=parseInt(mouse.top)+1+'px';
		}
	}
	if(inRange(parseInt(mouse.left),774,776)==true&&inRange(parseInt(mouse.top),168,170)==true){
		
		img[1].style.visibility="hidden";
		img[2].style.visibility="visible";
                playing=false;

	}
	setTimeout(funct,1);
}



function inRange(valor,min,max){//devuelve true si el valor esta dentro del rango
	var isIn=false;
	if (valor>=min&&valor<=max){
		isIn=true;
	}
	return isIn;
}
