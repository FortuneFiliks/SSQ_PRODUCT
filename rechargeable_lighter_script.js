let slide_Index = 1;
show_Slides(slide_Index);

function plus_Slides(n){
	show_Slides(slide_Index += n);
}


function current_Slides(n){
	show_Slides(slide_Index = n);
}


function show_Slides(n){
	let get_Image_Slides = document.getElementsByClassName("product_image");
	let i;
	
	if(n > get_Image_Slides.length){
		slide_Index = 1;
	}
	
	if(n < 1){
		slide_Index = get_Image_Slides.length;
	}
	
	for(i = 0; i < get_Image_Slides.length; i++){
		get_Image_Slides[i].style.display = "none";
	}

    get_Image_Slides[slide_Index - 1].style.display = "inline-block";    
	
}


let get_Qty_Value = document.querySelector(".qtn_value");
let get_Plus_Btn = document.querySelector(".plus_btn");
let get_Minus_Btn = document.querySelector(".minus_btn");

let value = parseInt(get_Qty_Value.innerText);

function value_Change(j){
	get_Qty_Value.innerText = value+=j;
	
	if(value >= 5){
		get_Plus_Btn.setAttribute("disabled", true);
		$(".plus_btn").addClass("btn_disabled");
	}
	if(value < 5){
		get_Plus_Btn.removeAttribute("disabled");
		$(".plus_btn").removeClass("btn_disabled");
	}
	
	if(value < 2){
		get_Minus_Btn.setAttribute("disabled", true);
		$(".minus_btn").addClass("btn_disabled");
		
	}
	if(value > 1){
		get_Minus_Btn.removeAttribute("disabled");
		$(".minus_btn").removeClass("btn_disabled");
		
	}	
}


