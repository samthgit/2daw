document.querySelector(".request").addEventListener("click", event => {
    requestActivity();
});

function requestActivity() {
    const url = "https://www.google.es";
    const http = new XMLHttpRequest();

    http.open("GET", url);

    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("peticion realizada");
        }
    }

    http.send();
}