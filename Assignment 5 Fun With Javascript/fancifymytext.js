function showAlert() {
    alert("Hello, world!");
}

function makeTextBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function handleButtonClick() {
    showAlert();
    makeTextBigger();
}

function applyStyle() {
    var textArea = document.getElementById("textArea");
    var fancyRadio = document.getElementById("fancy");
    var boringRadio = document.getElementById("boring");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
        alert("FancyShmancy selected!");
    } else if (boringRadio.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
        alert("BoringBetty selected!");
    }
}

function mooifyText() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value.toUpperCase(); // Uppercase the text

    var sentences = text.split("."); // Split the text into sentences
    for (var i = 0; i < sentences.length - 1; i++) { // Process each sentence except the last empty one after the last period
        var words = sentences[i].trim().split(" "); // Split the sentence into words
        if (words.length > 0) {
            words[words.length - 1] += "-MOO"; // Add "-Moo" to the last word
        }
        sentences[i] = words.join(" "); // Rejoin the words into a sentence
    }

    textArea.value = sentences.join(". "); // Rejoin the sentences into the final text
}