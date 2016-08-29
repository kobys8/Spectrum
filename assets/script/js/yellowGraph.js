$(function(){
	var yellowArr = [];
	for(var i = 2; i <= 6; i++) {
		(function (i) {
			yellowArr.push(parseFloat($("#yr1c" + i).text()) * Math.PI);
		}(i));
	}
	$("#yellowChartContainer").CanvasJSChart({
		axisY: {
			minimum: -12,
			maximum: 12
		},
		axisX: {
			minimum: 0,
			//maximum: yellowArr[4] + 1
		},
		data: [
		{
			color: "#DDDD36",
			type: "spline",
			toolTipContent: "x: {x}, y: {y}",
			dataPoints: [
				{x: yellowArr[0], y: 0},
				{x: yellowArr[1], y: 10},
				{x: yellowArr[2], y: 0},
				{x: yellowArr[3], y: -10},
				{x: yellowArr[4], y: 0}
				]
		}
		]
	});
});