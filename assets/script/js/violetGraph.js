$(function(){
	var violetArr = [];
	for(var i = 2; i <= 6; i++) {
		(function (i) {
			violetArr.push(parseFloat($("#vr1c" + i).text()) * Math.PI);
		}(i));
	}
	$("#violetChartContainer").CanvasJSChart({
		axisY: {
			minimum: -12,
			maximum: 12
		},
		axisX: {
			minimum: 0,
			//maximum: violetArr[4] + 1
		},
		data: [
		{
			color: "#7F00FF",
			type: "spline",
			toolTipContent: "({x}, {y})",
			dataPoints: [
				{x: violetArr[0], y: 0},
				{x: violetArr[1], y: 10},
				{x: violetArr[2], y: 0},
				{x: violetArr[3], y: -10},
				{x: violetArr[4], y: 0}
				]
		}
		]
	});
});