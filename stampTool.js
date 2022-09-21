function stampTool(){
	
	this.icon = "assets/stampTool.jpg";
	this.name = "stampTool";

	var startMouseX1 = -1;
	var startMouseY1 = -1;
	var startMouseX2 = -1;
	var startMouseY2 = -1;
	var startMouseX3 = -1;
	var startMouseY3 = -1;

	var drawing = false;
	var btncount = 0;
    var getArea;
	
	//draws the line to the screen 
	this.draw = function(){

		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new line
			if(btncount == 0){
				if(startMouseX1 == -1){
					startMouseX1 = mouseX;
					startMouseY1 = mouseY;
					console.log('1=> ' + startMouseX1 + ' ' + startMouseY1);
					drawing = true;
					loadPixels();
				}
				else{
					updatePixels();
			
				}
			}
			if(btncount == 1){
				if(startMouseX2 == -1){
					startMouseX2 = mouseX;
					startMouseY2 = mouseY;
					console.log('3=> ' + startMouseX2 + ' ' + startMouseY2);
					drawing = true;
					loadPixels();
				}
				else{
					updatePixels();
					startMouseX3 = mouseX;
					startMouseY3 = mouseY;
					console.log('4=> ' + startMouseX3 + ' ' + startMouseY3);
					getArea = get((startMouseX1 + startMouseX3 - startMouseX2 - 4), (startMouseY1 + startMouseY3 - startMouseY2 - 4), 8, 8);
					
					set(startMouseX3 - 4, startMouseY3 - 4, getArea);
				}
			}
		}

		else if(drawing){
			if(btncount == 0){
				loadPixels();
				startMouseX1 = mouseX;
				startMouseY1 = mouseY;
				console.log('2=> ' + startMouseX1 + ' ' + startMouseY1);
				drawing = false;
			}	
			if(btncount == 1){
		 		loadPixels();				
				drawing = false;
			}	
			btncount++;
			if(btncount == 2){
				startMouseX1 = -1;
				startMouseX2 = -1;
				btncount = 0;
				drawing = false;
			}
		}
	};
}
