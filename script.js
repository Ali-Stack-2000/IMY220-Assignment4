$(()=>{
	$("div.details").prepend(
		$("<input>",{
			html: "",
			class: "",
			type: ""
		})
	);
	$("div.details input").hide();
	$("div.details input").each(function(){
		if( $(this).siblings("b").text()  == "Email:"){
			$(this).attr("type","email");
		}else if($(this).siblings("b").text()  == "Birth date:"){
			$(this).attr("type","date");
		}else{
			$(this).attr("type","text");
		}
	});

	
	

	$("div.details button").on("click",function(){
		$(this).siblings().toggle();
		let inputtext = $(this).siblings("span").html();
		if($(this).text() == "Edit"){
			$(this).text("Update");
			
			if($(this).siblings("input").attr("type") == "date"){
				const d = new Date($(this).siblings("span").html());
				//console.log(d);
				let day = d.getDate();
				if(day < 10){
					day = "0"+day;
				}
				let month = d.getMonth();
				//console.log(month);
				if(month < 10){
					month ="0"+month;
				}
				//console.log(month);
				let year = d.getFullYear();
				let date = year +"-"+ month+"-"+ day
				//console.log(date);
				$(this).siblings("input").val( date );
			}else{
				$(this).siblings("input").val( inputtext );
			}
		}else{
			$(this).text("Edit")
			let spantext = $(this).siblings("input").val();
			$(this).siblings("span").html( spantext );
		}
		
	});


});