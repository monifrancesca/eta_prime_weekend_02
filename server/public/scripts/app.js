$(document).ready(function(){

$.ajax({ //get data from the server
	url:'/data/eta.json'
}).done(function(data){

	var index = 0;

	// Create template from script with id of person-template
    var source = $("#person-template").html();

    // Compile the template into something handlebars can use
    var theTemplate = Handlebars.compile(source);

    // Run the data through the template
    var etaMember = theTemplate(data.eta[index]);

    // append the templated data into the class "container"
    $(".container").append(etaMember);

    $('.next').on('click', function() {
    	index += 1;
    	if (index === data.eta.length) {
    		index = 0;
    	}

    	var etaMember = theTemplate(data.eta[index]);
    	$(".container").html(etaMember);
    });

    $('.previous').on('click', function() {
    	index -= 1;
    	if (index === -1) {
    		index = data.eta.length -1;
    	}
    	var etaMember = theTemplate(data.eta[index]);
    	$(".container").html(etaMember);
    });

});






//e.preventDefault();
});