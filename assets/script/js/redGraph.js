$(function(){
	var redArr = [];
	for(var i = 2; i <= 6; i++) {
		(function (i) {
			redArr.push(parseFloat($("#rr1c" + i).text()) * Math.PI);
		}(i));
	}
	$("#redChartContainer").CanvasJSChart({
		axisY: {
			minimum: -12,
			maximum: 12
		},
		axisX: {
			minimum: 0,
			//maximum: redArr[4] + 1
		},
		data: [
		{
			color: "#FF0000",
			type: "spline",
			toolTipContent: "({x}, {y})",
			dataPoints: [
				{x: redArr[0], y: 0},
				{x: redArr[1], y: 10},
				{x: redArr[2], y: 0},
				{x: redArr[3], y: -10},
				{x: redArr[4], y: 0}
				]
		}
		]
	});
});