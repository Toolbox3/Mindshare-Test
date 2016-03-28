  $(document).ready(function () {
			// Load JSON Using AJAX //
    $.ajax({
        dataType: "json",
        url: 'http://toolboxwebdesign.com/wp-content/plugins/Mindshare_Test/mindshare.json', 
        success: function(result){ 
       		var json = JSON.stringify(result); 
        	json = JSON.parse(json);
									// Pull Data using Item Tags in JSON File //
          var div = ("<div #item");
          for (var i = 0; i < json.length; i++) {
            tr = $('<div class="item">' + '<div/>');
            tr.append('<h1 class="title">' + json[i].title + '</h1>');
            tr.append('<div class="content">' + json[i].content + '</div>');
            tr.append("<div" + json[i].taxonomy + "</div>");
            $('.mindshare').append(tr);
          }
        }
    });      
  });