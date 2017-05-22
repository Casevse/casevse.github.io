"use strict";

document.onreadystatechange = function() {
    if (document.readyState == "interactive") {
        onReady();
    }
};

function onReady() {
    // Clean the body.
    document.body.innerHTML = "";

    var title = document.createElement("h1");
    title.innerHTML = "Casevse";
    document.body.appendChild(title);

    var intro = document.createElement("p");
    intro.innerHTML = "Thinking what to post";
    document.body.appendChild(intro);

    var loading = document.createElement("p");
    document.body.appendChild(loading);
    refresh(loading, 1000);
}

function refresh(loading, time) {
    var date = new Date();

    loading.innerHTML = "";
    var points = date.getSeconds() % 5;
    for (var i = -1; i < points; i++) {
        loading.innerHTML += ".";
    }

    setTimeout(function() {
        refresh(loading, time);
    }, time);
}
