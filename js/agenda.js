function cargarAgenda() {
	
	$.getJSON("data/imagenes.js", function(data) {
		$each(data, function(key, val) {
			var fecha = val["fecha"].join(" ");
			var post = $("<div></div>");
			var postTitle = $("<div></div>");
			var postDate = $("<div></div>");
			var p = S("p");
			var img = $("img");
			
			post.attr('class','post');
			postTitle.attr('class','postTitle col-xs-6 col-sm-4 col-md-3');
			postDate.attr('class','postDate');
			img.attr('src','img/imgDate.jpg');
			amg.attr('class','hidden-img');
			
			p.text(fecha);
			postDate.append()
		}
	}
}



window.load = function() {
	cargarAgenda();
}