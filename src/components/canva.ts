import * as d3 from 'd3';

export function initCanva() {

var circle;
var circleID;

var width = 200;
var height = 200;
var radius = 30;

var drag = d3.drag<SVGCircleElement, unknown, unknown>()
            .on("start", dragstart)
            .on("end", dragend)
            .on("drag", dragmove);

var svgContainer = d3.select("#svg-container");

var svg = svgContainer.append("svg")
  .style("width", "100%") 
  .style("height", "90vh") 
  .style("border", "5px solid red");

d3.select("body").append("div").attr("id", "circle_id").text("Circle ID: ");
d3.select("body").append("div").attr("id", "x_var").text("x: ");
d3.select("body").append("div").attr("id", "y_var").text("y: ");

d3.select("circle_id").append("span").attr("id", "circle_id_text").text("Circle ID: ");
d3.select("x_var").append("span").attr("id", "x_var").text("x_coord");
d3.select("y_var").append("span").attr("id", "y_var").text("y_coord");

svg.selectAll("circle")
    .data([{x: 50, y:50}, {x: 150, y: 150}])
    .enter()
    .append("circle")
    .attr("r", radius)
    .attr("cx", function(d){ return d.x; })
    .attr("cy", function(d){ return d.y; })
    .attr("id", function(i){ return "circle_" + i; })
    .call(drag);


function dragstart(d) {
    circle = d3.select(this);
}

function dragend(d) {
    console.log("fin de moviento");
}

function dragmove(d) {
    // circle = d3.select(this);
    circleID = circle.attr("id");

    d.x = Math.max(radius, Math.min(width - radius, d3.event.x));
    d.y = Math.max(radius, Math.min(height - radius, d3.event.y));

    circle.attr("cx", d.x).attr("cy", d.y);

}


}
