/*
*    main.js
*    HW1!
*/



var arr =[]; // Empty array, will be use to add the height value from JSON file.


d3.json("data/buildings.json").then(function(data) {  //Finds the file first and then continue 
        data.forEach(function(d)   
	{
	        d.height = +d.height;           // change string to int             
	        arr.push(d.height);  		//Add the int height to array  
		console.log(d.height) 	
        });

var svg= d3.select("#chart-area")   //create the svg 
	.append("svg")
	.attr("width",500)
	.attr("height",500)




d3.select("#chart-area").selectAll("rect")
        .data(arr)
        .enter()
        .append("rect")
        .style("height", function(a) { return a + "px";}); //return the height attribute for rect.

});







