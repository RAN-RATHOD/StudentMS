console.log("External script executed");

var cookies = document.cookie;

var message = "Issue 1 - Script Execution Success.";
if (cookies) {
    message += " Issue 2 - Cookies were Accessed by external script (Cookies - " + cookies + ")";
} else {
    message += " Issue 2 - No cookies were accessed by external script.";
}

// Display the popup
alert(message);
