
function properties() {
    document.write("<ul>");

    document.write("<li>Math.PI is " + Math.PI + "<br></li>");
    document.write("<li>Math.E is " + Math.E + "<br>");
    document.write("<li>Math.LN10 is " + Math.LN10 + "<br>");
    document.write("<li>Math.SQRT2 is " + Math.SQRT2 + "<br></li>");

    document.write("</ul>");
}

function round() {
    document.write("If we apply Math.round() to 2.2 the result is: ");
    document.write(Math.round(2.2) + "<br>");
    
    document.write("If we apply Math.round() to 2.7 the result is: ");
    document.write(Math.round(2.7) + "<br><br>");

    document.write("If we apply Math.ceil() to 2.2 the result is: ");
    document.write(Math.ceil(2.2) + "<br>");
    
    document.write("If we apply Math.floor() to 2.7 the result is: ");
    document.write(Math.floor(2.7));
}


function randAbsPow() {
    document.write("This number is a random number between 0 and 99: ");
    document.write(Math.floor(Math.random() * 100) + "<br><br>");

    document.write("The absolute value of -2 is: ");
    document.write(Math.abs(-2) + "<br><br>");

    document.write("3 to the fourth power is: ");
    document.write(Math.pow(3, 4));
}