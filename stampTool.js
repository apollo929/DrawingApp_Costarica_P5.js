
// function stampTool(){
	
// 	this.icon = "assets/stampTool.jpg";
// 	this.name = "stampTool";

// 	var img;
//     var starSizeSlider;
//     var nStarSlider;

//     this.preload = function(){
//         img = loadImage('assets\stampTool.jpg');
//     }

//     this.setup = function(){
//         //createCanvas(800, 800);

//         // starSizeSlider = 5;//createSlider(5, 50, 20);
//         // //starSizeSlider.parent("#sizeOfStarControl");

//         // nStarSlider = 5;//createSlider(1, 20, 5);
//         // //nStarSlider.parent("#numberOfStarsControl");
//     }

//     this.draw = function(){
//         if(mouseIsPressed){
//             // for(var i=0; i<nStarSlider.value(); i++){
//             //     var starSize = starSizeSlider.value();
//                 var starX = mouseX;//random( (mouseX - starSize/2) - 10, (mouseX - starSize/2) + 10 );
//                 var starY = mouseY;//random( (mouseY - starSize/2) - 10, (mouseY - starSize/2) + 10 );
                
//                 image(img, startMou, starY, 50, 50);
//             //}
//         }
//     }  
// }
// //a tool for drawing straight lines to the screen. Allows the user to preview
// //the a line to the current mouse position before drawing the line to the 
// //pixel array.
function stampTool(){
	this.icon = "assets/stampTool.jpg";
	this.name = "stampTool";

    this.preload = function(){
        img = loadImage('assets\stampTool.jpg');
    }


	//draws the line to the screen 
	this.draw = function(){

		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new line
				startMouseX = mouseX;
				startMouseY = mouseY;
			
                image(img, startMouseX, startMouseY, 50, 50);

		}
	}
}
