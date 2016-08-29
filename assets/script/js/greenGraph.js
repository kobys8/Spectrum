$(function(){
	var greenArr = [];
	for(var i = 2; i <= 6; i++) {
		(function (i) {
			greenArr.push(parseFloat($("#gr1c" + i).text()) * Math.PI);
		}(i));
	}
	$("#greenChartContainer").CanvasJSChart({
		axisY: {
			minimum: -12,
			maximum: 12
		},
		axisX: {
			minimum: 0,
			//maximum: greenArr[4] + 1
		},
		data: [
		{
			color: "#008000",
			type: "spline",
			toolTipContent: "({x}, {y})",
			dataPoints: [
				{x: greenArr[0], y: 0},
				{x: greenArr[1], y: 10},
				{x: greenArr[2], y: 0},
				{x: greenArr[3], y: -10},
				{x: greenArr[4], y: 0}
				]
		}
		]
	});
});