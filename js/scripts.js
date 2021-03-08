




function Image(image, title, tags) {
	this.image = image; 
	this.title = title;
	this.tags = tags;                                                                                                                           
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag)
			
		})

		var imgString = "";
		imgString += "<img src=>" + this.image + "</img>";
		//imgString += "<cite>" + this.author + "</cite";

		container.html(imgString)
		$(".Image").prepend(container)
	}

}

var images1 = [
	new Image("<img src=images/2020.png>", "2020", ["revanchist", "social-media"]),
	new Image("<img src=images/blm.png>", "BLM", ["revanchist", "political", "social-media"]),
	new Image("<img src=images/Deathrattle.png>", "Deathrattle", ["revanchist", "artwork"]),
	new Image("<img src=images/drown.png>", "Drown", ["jacy", "artwork"]),
	new Image("<img src=images/goat.jpg>", "Goat", ["revanchist", "artwork"]),
	new Image("<img src=images/Jacy.png>", "Jacy Logo", ["jacy", "logo"]),
	new Image("<img src=images/logo.png>", "Revanchist Logo", ["revanchist", "logo"]),
	new Image("<img src=images/ribcaged.jpg>", "Ribcaged", ["revanchist", "artwork"]),
	new Image("<img src=images/show.png>", "Poster", ["revanchist", "poster"]),
	new Image("<img src=images/wicked.png>", "Wicked", ["revanchist", "artwork"])
]

var taglist = []
images1.forEach(function(image){
	image.display();
	image.tags.forEach(function(tag){

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