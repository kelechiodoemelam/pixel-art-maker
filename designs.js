	// Select color input
	// Select size input
	var height, width, colour;

	// When size is submitted by the user, call makeGrid()

	$('#sizePicker').submit(function(event) {
	    event.preventDefault();
	    height = $('#inputHeight').val();
	    width = $('#inputWeight').val();

	    makeGrid(height, width);

	    /* console.log('Height: '+height+' and width: '+width);
	    This code was used to test that the size picker submit function was working well
	    and returning the values that the user passed in.
	    */

	})

	function makeGrid(a, b) {
	    $('tr').remove();
	    var i = 1

	    /* A nested loop was required here. Nested loops work in such a way that 
	    the inner loop executes completely first, before an increment or decrement
	    is made to the variable in the outer loop. Variable 'b' corresponds to the
	    width provided by the user. So before another instance of a row 'a' is created,
	    the number of columns for the subsisting row will first be created.
	    */
	    while (i <= a) {
	        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');

	        for (var j = 1; j <= b; j++) {
	            $('#table' + i).append('<td></td>');
	        }
	        i++;
	    }


	    /*Now to add the appropriate colour.
	    We first store the value of the user's chosen colour in a variable
	    we will call colour. In the if statement, we're checking to see if
	    the selected box has already been filled with colour. If it has,
	    we're asking the function to remove that colour. this is to make it
	    possible for the user to clear a previously filled box by clicking 
	    on it again.

	    Next, we're simply setting the background colour of the selected box to 
	    the colour value set by the user.
		*/

	    $('td').click(function addColour() {
	        colour = $('#colorPicker').val();

	        if ($(this).attr('style')) {
	            $(this).removeAttr('style');
	        } else {
	            $(this).attr('style', 'background-color: ' + colour);
	        }
	    })

	}