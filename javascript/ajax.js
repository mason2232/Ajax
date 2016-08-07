$(document).ready(function(){

	var actors =['Adam Sandler','David Spade','Chris Farley','Rob Schneider'];


	function createButton(){
		$("#actorButtonList").empty();

		for (var i = 0; i < actors.length; i++) {


			var a = $("<button>");
			a.addClass("items");
			a.attr("data-name", actors[i]);
			a.text(actors[i]);
			$("#actorButtonList").append(a);
			}
		}


		$('#submit').on('click', function(){


			var items = $('#actor-input').val().trim();
			actors.push(items);

			createButton();

			return false;

		});


		function displayActorInfo(){

			var singleActor = $(this).attr("data-name");
			var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + singleActor + "&api_key=dc6zaTOxFJmzC&limit=10";

			console.log(this);
			console.log(queryUrl);
			console.log(singleActor);

			$.ajax({url:queryUrl,method:'Get'})
			.done(function(response){
				console.log(response);
			//empty list dont show previous giphs
				$("#actors").empty();

				var results = response.data;
				if(results == ""){
					alert("no giphs for that search.");}

					for (var i = 0; i<results.length; i++){
						var giphDiv = $("<image>");
						giphDiv.addClass("giphDiv");
						//div for  giphs
						var giphRating = $("<p>").text("Rating: " + results[i].rating);
						giphDiv.append(giphRating);

						var giphImage = $("<img>");

						giphImage.attr("src", results[i].images.fixed_height_small_still.url);
						giphImage.attr("data-still",results[i].images.fixed_height_small_still.url);
						giphImage.attr("data-animate",results[i].images.fixed_height_small.url);
						giphImage.attr("data-state", "still");  //set image state
						giphImage.addClass("images");
						giphDiv.append(giphImage);

						$("#actors").prepend(giphDiv);
						$("#giphDiv").empty();
					}

						});
							}
								createButton();
								displayActorInfo();

							$(document).on("click",".items",displayActorInfo);
							$(document).on("click",".images",function(){

								var state = $(this).attr('data-state');

								if (state == 'still'){
									$(this).attr('src', $(this).data('animate'));
									$(this).attr('data-state', 'animate');}

									else{

										$(this).attr('src', $(this).data('still'));
										$(this).attr('data-state','still');
									}
									});
							        });
								




								



							


				
		







					

				



		
			











