function textChange1() {
	alert("function called");
var elem = document.getElementById("p1");   
// create variables
var r = 200;
var g = 56;
var b = 17;
var repetitions = 0;
var rr= 200;
var rg=70;
var rb=4;
var w = 1;
var id = setInterval(setColor, 500); 
  function setColor() {
	   

	  if (repetitions < 20){  
		
		elem.style.color = 'rgb(' +r+','+g+','+b+')' ;
		elem.style.borderColor = 'rgb(' +rr+','+rg+','+rb+')' ;
		repetitions += 1;
		r=r+14;
        b= b + 10; 
		g = g+6
		rr = rr+ 5;
		rg = rg+16;
		rb = rb+50;
		w=w+0.5;
		
	  		     }

	  else {
		 alert("setColor cleared");
		clearInterval(id);
	  	} 
			}     
    }
	function textChange2() {
		alert("function called");
	var elem = document.getElementById("p2");   
	// create variables
	var r = 100;
	var g = 60;
	var b = 14;
	var repetitions = 0;
	var rr= 11;
	var rg=220;
	var rb=10;
	var w = 1;
	var id = setInterval(setColor, 500); 
	  function setColor() {
		   
	
		  if (repetitions < 20){  
			
			elem.style.color = 'rgb(' +r+','+g+','+b+')' ;
			elem.style.borderColor = 'rgb(' +rr+','+rg+','+rb+')' ;
			elem.style.fontSize= w+"cm";
			repetitions += 1;
			r=r+14;
			b= b + 10; 
			g = g+6
			rr = rr+ 5;
			rg = rg+16;
			rb = rb+50;
			w=w+0.5;
			
					   }
	
		  else {
			 alert("setColor cleared");
			clearInterval(id);
			  } 
				}     
		}
		function textChange4() {
			alert("function called");
		var elem = document.getElementById("p4");   
		// create variables
		var r = 66;
		var g = 77;
		var b = 180;
		var repetitions = 0;
		var rr= 11;
		var rg=220;
		var rb=10;
		var w = 1;
		var id = setInterval(setColor, 500); 
		  function setColor() {
			   
		
			  if (repetitions < 20){  
				
				elem.style.backgroundColor = 'rgb(' +r+','+g+','+b+')' ;
				//elem.style.borderColor = 'rgb(' +rr+','+rg+','+rb+')' ;
				//elem.style.padding= padding + 'px';
				//elem.style.fontSize= w+"cm";
				repetitions += 1;
				//padding = padding-20;
				r=r+14;
				b= b + 10; 
				g = g+5;
				rr = rr+ 5;
				rg = rg+16;
				rb = rb+50;
				w=w+0.5;
				
						   }
		
			  else {
				 alert("setColor cleared");
				clearInterval(id);
				  } 
					} }
					function textChange3() {
						alert("function called");
					var elem = document.getElementById("p3");   
					// create variables
					var r = 100;
					var g = 60;
					var b = 14;
					var repetitions = 0;
					var rr= 11;
					var rg=220;
					var rb=10;
					var w = 1;
					var padding=300;
					var id = setInterval(setColor, 500); 
					  function setColor() {
						   
					
						  if (repetitions < 20){  
							
							elem.style.color = 'rgb(' +r+','+g+','+b+')' ;
							elem.style.borderColor = 'rgb(' +rr+','+rg+','+rb+')' ;
							elem.style.padding= padding + 'px';
							//elem.style.fontSize= w+"cm";
							repetitions += 1;
							padding = padding-20;
							r=r+14;
							b= b + 10; 
							g = g+6
							rr = rr+ 5;
							rg = rg+16;
							rb = rb+50;
							w=w+0.5;
							
									   }
					
						  else {
							 alert("setColor cleared");
							clearInterval(id);
							  } 
								} }
					