// !preview r2d3 data=list(women_republican = 23, women_democrat = 108 , men_republican = 229, men_democrat = 175)
//
// r2d3: https://rstudio.github.io/r2d3
//

var total_men = data.men_republican + data.men_democrat;
var total_women = data.women_republican + data.women_democrat;
var total_people = total_men + total_women;
var width = 300;
var height = 300;
var start_x = 100;
var start_y = 50;
var width_women = width * total_women / (total_people);
var width_men = width * total_men /(total_people);
var height_wrep = height * data.women_republican / total_women; 
var height_wdem = height * data.women_democrat / total_women;
var height_mrep = height * data.men_republican / total_men;
var height_mdem = height * data.men_democrat / total_men;

svg
  .attr('x',500)
  .attr('y',400);

svg.append('rect')
  .attr('x',start_x)
  .attr('y',start_y)
  .attr('width',width_women)
  .attr('height', height_wrep)
  .attr('fill','lightblue');
  
svg.append('rect')
  .attr('x',start_x)
  .attr('y',start_y + height_wrep)
  .attr('width',width_women)
  .attr('height', height_wdem)
  .attr('fill','lightpink');
  
svg.append('rect')
  .attr('x',start_x+width_women)
  .attr('y',start_y)
  .attr('width',width_men)
  .attr('height', height_mrep)
  .attr('fill','lightblue');

svg.append('rect')
  .attr('x',start_x+width_women)
  .attr('y',start_y+height_mrep)
  .attr('width',width_men)
  .attr('height', height_mdem)
  .attr('fill','lightpink');
 
svg.append('text')
  .text("Composition of U.S. House of Reps, 2019")
  .style("font-size", "18px")
  .attr('x',start_x - 80)
  .attr('y',start_y - 20);
  
svg.append('text')
  .text("Republican")
  .style("font-size", "12px")
  .attr('x',start_x - 70)
  .attr('y',height_wrep/2+start_y);
  
svg.append('text')
  .text("Democrat")
  .style("font-size", "12px")
  .attr('x',start_x - 70)
  .attr('y',height_wdem/2+start_y+height_wrep); 

svg.append('text')
  .text("Party")
  .style("font-size", "18px")
  .style("font-weight","bold")
  .attr('x',start_x - 90)
  .attr('y',height/2+ start_y); 
  
svg.append('text')
  .text("Women")
  .style("font-size", "12px")
  .attr('x',width_women/2+ start_x-20 )
  .attr('y',height+start_y + 15); 
  
svg.append('text')
  .text("Men")
  .style("font-size", "12px")
  .attr('x',width_women+ start_x+ width_men/2 -20 )
  .attr('y',height+start_y + 15);   
  
svg.append('text')
  .text("Gender")
  .style("font-size", "18px")
  .style("font-weight","bold")
  .attr('x',start_x+ width_women )
  .attr('y',height+start_y + 40); 