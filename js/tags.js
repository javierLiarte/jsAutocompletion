$(document).ready(function () {

	var tags = ['javascript', 'dev', 'development', 'array', 'example', 'hackaton'];

	$("#tag-list").keyup(function (event) {
		var textInput = $(this).val();

		$("#user-input").text(textInput);

		var detectedTags = new Array();
		if (textInput != "") {
			detectedTags = tags.filter(function(currentTag, index, array) {
				if (currentTag.indexOf(textInput) == 0) {
					return currentTag;
				}
			});
		}

		$("#detected-tags").html("");
		$("#auto-completion-list").html("");
		detectedTags.forEach(function(tag, index, array) {
			$("#detected-tags").append(tag+" <a href=\"?delete="+tag+"\">x</a> ");
			$("#auto-completion-list").append("<div class=\"tag-item\">"+tag+"</div>");
		});

		
	});

});
