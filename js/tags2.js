$(function() {
	function showDetectedTags() {
		$("#detected-tags").html("");
		selectedTags.forEach(function(tag) {
			$("#detected-tags").append("<span class=\"tag-item\">"+tag+" <a class=\"tag-deletion\" id=\""+tag+"\" href=\"\">x</a></span> ");
		});
        $( ".tag-deletion" ).click(removeTag);
	}

	function removeTag() {
    	var deleteTag=$(this).attr("id");

    	selectedTags = selectedTags.filter(function(currentTag, index, array) {
				if (currentTag != deleteTag) {
					return currentTag;
				}
			});
    	showDetectedTags();
    	return false;
    }

    var availableTags = ['javascript', 'dev', 'development', 'array', 'example', 'hackaton'];
    var selectedTags = new Array();

    $( "#tags" ).autocomplete({
      source: availableTags
    });

    $( "#tags" ).on( "autocompleteselect", function( event, ui ) {
    	selectedTags.push(ui.item.label);
    	showDetectedTags();
    	$("#tags").val('');
    });	

  });