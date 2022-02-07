	$(".results").click(function() {
	let response = $(".firstInput").val();
	let response2 = $(".secondInput").val();
	$(".final").append("You chose to be " + response + " a and you are wiling to sacrifice " + response2 + " people to survive.");
});


    