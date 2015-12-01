$(document).ready(function(){
	var dateobj = new Date();
	var date = dateobj.getDate();
	var day = dateobj.getDay();
	var month = dateobj.getMonth();
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	var weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	var printtable = $('#input').click(function(month) {
		tempmonth = month;
		var table = $("<table border = 1></table>");
		var row = $("<tr></tr>");
		var td1 = $("<td id = premonth><</td>");
		var td2 = $("<td>" + months[tempmonth] + "</td>");
		var td3 = $("<td id = nextmonth>></td>");
		var tdspace = $("<td></td>");
		var td4 = $("<td id = preyear><</td>");
		var td5 = $("<td>year</td>");
		var td6 = $("<td id = nextyear>></td>");
		row.append(td1);
		row.append(td2);
		row.append(td3);
		row.append(tdspace);
		row.append(td4);
		row.append(td5);
		row.append(td6);
		table.append(row);
		var row1 = $("<tr></tr>");
		for( var i = 0; i < weeks.length; i++) {
			var td7 = $("<td>" + weeks[i] + "</td>");
		row1.append(td7);
		}
		table.append(row1);

		$('#mydiv').append(table);

	// function for previous month
	var premonth = $('#premonth').click(function(){
		if (month <= 11) {
			month--;
		}
	}); printtable(10);
	// function for Next month
	$('#nextmonth').click(function(){
		alert('nextmonth');
	});

	// function for Pre month
	$('#preyear').click(function(){
		alert('preyear');
	});
	// function for Next month
	$('#nextyear').click(function(){
		alert('nextyear');
	});
});
});
