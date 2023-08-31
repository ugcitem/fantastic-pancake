document.addEventListener("DOMContentLoaded", function() {
    const embedButton = document.getElementById("embedButton");
    const embeddedIframe = document.getElementById("embeddedIframe");

    embedButton.addEventListener("click", function() {
        const websiteInput = document.getElementById("websiteInput").value;
        embeddedIframe.src = websiteInput;
    });
});
