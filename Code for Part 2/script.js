function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function cos(form) {
	form.display.value = Math.cos(form.display.value);
}

// For test set 1 (White box testing scenario)
// A function named sin that takes one argument x
function sin(x) // Modified it to pass the test
{
	// Check if the input x is non-numeric (not a number)
    if (typeof x !== 'number') 
	{
		// If x is non-numeric, throw an error with the message 'Invalid input'
        throw new Error('Invalid input');
    }

    // To Handle unexpected values
	// Check if the input x is not a finite number (e.g., Infinity)
    if (!isFinite(x)) 
	{
		// If x is not a finite number, return 0
        return 0; 
    }

	// If x is a finite number, return the sine of x using the built-in Math.sin function
    return Math.sin(x);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

// For test set 2 (Black box testing scenario)
function changeSign(input) // Tested & Not Modified 
{
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value		
}

function compute(form) {
  //if (val !== 0.0) {
   // var percent = form.display.value;  
   // percent = pcent.substring(percent.indexOf("%")+1);
   // form.display.value = parseFloat(percent)/100 * val;
    //val = 0.0;
 // } else 
    form.display.value = eval(form.display.value);
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

// For test set 3 (White box testing scenario)
function checkNum(str) // Modified 1 line to pass the test & removed 1 other line
{
	for (var i = 0; i < str.length; i++) 
	{
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") 
		{
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") 
				{
					// If the character is not one of the given special characters, throw an error
					throw new Error("invalid entry!") // Replaced alert with throw new Error to pass
				}	
			}
		}
		return true
}

module.exports = { sin, changeSign, checkNum }; // For test set 1,2 & 3