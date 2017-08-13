$(document).ready(function() {

    $(".nextPage").on("click", function () {
		if ($("input[value=man]:checked").val() === "man") {
			console.log("man")
		}

		else if ($("input[value=woman]:checked").val() === "woman") {
			console.log("click")
		}

  });


	//Switcher function:
	$(".rb-tab").click(function(){
	  //Spot switcher:
	  $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
	  $(this).addClass("rb-tab-active");
	});


});
