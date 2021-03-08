




function Quote(quoteText, author, tags, color) {
	this.quote = quoteText; 
	this.author = author;
	this.tags = tags;
	this.color = color;                                                                                                                            
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag)
			
		})
		container.css("background", this.color)

		var quoteString = "";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite";

		container.html(quoteString)
		$(".quotes").prepend(container)
	}

}

var quotes = [
	new Quote('"We don\'t make mistakes, just happy little accidents."', "Bob Ross", ["painting", "mistakes"], "#0a3410"),
	new Quote('"Creativity takes courage"', "Henry Matisse", ["painting", "creativity"] , "lightblue")
]

var taglist = []
quotes.forEach(function(quote){
	quote.display();
	quote.tags.forEach(function(tag){

		if(!taglist.includes(tag)){

			taglist.push(tag);
		$(".buttons").prepend("<button class='filter' id='"  + tag + " '>" + tag + "</button>")
		}	
	})
})

console.log(taglist)

$(".filter").on("click", function() {
	var tag = $(this).text()
	$("." + tag).fadeIn();
	$("div > div").not("." + tag).hide();
	$(".filter").removeClass("active")
	
	$(this).addClass("active")
})