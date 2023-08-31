document.addEventListener("DOMContentLoaded", function() {
    const embedButton = document.getElementById("embedButton");

    embedButton.addEventListener("click", function() {
        const websiteInput = document.getElementById("websiteInput").value;
        openEmbeddedWebsite(websiteInput);
    });
});

function openEmbeddedWebsite(url) {
    const newWindow = window.open('about:blank', '_blank');
    
    if (newWindow) {
        newWindow.document.write('<iframe src="' + url + '" frameborder="0" style="width: 100%; height: 100vh;"></iframe>');
        newWindow.document.close();
    } else {
        alert('Pop-up blocked. Please allow pop-ups to view the embedded website.');
    }
}
