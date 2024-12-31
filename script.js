

let string = "";
let buttons = document.querySelectorAll('.button');


Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string); // Perform the calculation
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = 'Error'; // Handle invalid expression
                string = "";
            }
        } else if (e.target.innerHTML == 'C') {
            string = ""; // Clear the string
            document.querySelector('input').value = string;
        } else {
            string = string + e.target.innerHTML; // Append clicked button value
            document.querySelector('input').value = string;
        }
    });
});
