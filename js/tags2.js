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

    function renderReceivedTags(tagArray) {
        if (receivedTags.length > 0) {
            receivedTags.forEach(function(tag) {
                $( "#result" ).append("<span class=\"tag-item\">"+tag+"</span> ").show();
            });
        }
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

    if (document.location.search != "") {
        var decodedSearch = decodeURIComponent(document.location.search.substring(1));
        var getParams = decodedSearch.split("&");
        receivedTags = [];
        getParams.forEach(function(param) {
            if (param.indexOf("selected-tags=") === 0) {
                receivedTags = JSON.parse(param.split("=")[1]);
            }
        });
        renderReceivedTags(receivedTags);
    }

  });