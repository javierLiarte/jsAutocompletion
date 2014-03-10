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
        return false;
    });

    $( "#tag-completion-form" ).on("submit", function (event) {
        if (selectedTags.length <= 0) return false;
        $( "#selected-tags" ).val(JSON.stringify( selectedTags ));
        //event.preventDefault();
    });

    $( "#result" ).hide();

  });