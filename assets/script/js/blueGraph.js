$(function(){
	var blueArr = [];
	for(var i = 2; i <= 6; i++) {
		(function (i) {
			blueArr.push(parseFloat($("#br1c" + i).text()) * Math.PI);
		}(i));
	}
	$("#blueChartContainer").CanvasJSChart({
		axisY: {
			minimum: -12,
			maximum: 12
		},
		axisX: {
			minimum: 0,
			//maximum: blueArr[4] + 1
		},
		data: [
		{
			color: "#0000FF",
			type: "spline",
			toolTipContent: "({x}, {y})",
			dataPoints: [
				{x: blueArr[0], y: 0},
				{x: blueArr[1], y: 10},
				{x: blueArr[2], y: 0},
				{x: blueArr[3], y: -10},
				{x: blueArr[4], y: 0}
				]
		}
		]
	});
});