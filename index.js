
//variables//

var canC1 = true;

var canC2 = true;

var canC3 = true;

var canC4 = true;

var canC5 = true;

var canC6 = true;

var canC7 = true;

var canC8 = true;

var canC9 = true;

//buttons//

//top left//

$("#c1").click(function () {
    if (canC1 == true) {
        if (event.altKey) {
            $("#c1").append("<p>O</p>");
            canC1 = false;
        }
        else {
            $("#c1").append("<p>X</p>");
            canC1 = false;
        }
    }
});

//top mid//

$("#c2").click(function () {
    if (canC2 == true) {
        if (event.altKey) {
            $("#c2").append("<p>O</p>");
            canC2 = false;
        }
        else {
            $("#c2").append("<p>X</p>");
            canC2 = false;
        }
    }
});

//top right//

$("#c3").click(function () {
    if (canC3 == true) {
        if (event.altKey) {
            $("#c3").append("<p>O</p>");
            canC3 = false;
        }
        else {
            $("#c3").append("<p>X</p>");
            canC3 = false;
        }
    }
});

//mid left//

$("#c4").click(function () {
    if (canC4 == true) {
        if (event.altKey) {
            $("#c4").append("<p>O</p>");
            canC4 = false;
        }
        else {
            $("#c4").append("<p>X</p>");
            canC4 = false;
        }
    }
});

//mid mid//

$("#c5").click(function () {
    if (canC5 == true) {
        if (event.altKey) {
            $("#c5").append("<p>O</p>");
            canC5 = false;
        }
        else {
            $("#c5").append("<p>X</p>");
            canC5 = false;
        }
    }
});

//mid right//

$("#c6").click(function () {
    if (canC6 == true) {
        if (event.altKey) {
            $("#c6").append("<p>O</p>");
            canC6 = false;
        }
        else {
            $("#c6").append("<p>X</p>");
            canC6 = false;
        }
    }
});

//bottom left//

$("#c7").click(function () {
    if (canC7 == true) {
        if (event.altKey) {
            $("#c7").append("<p>O</p>");
            canC7 = false;
        }
        else {
            $("#c7").append("<p>X</p>");
            canC7 = false;
        }
    }
});

//bottom mid//

$("#c8").click(function () {
    if (canC8 == true) {
        if (event.altKey) {
            $("#c8").append("<p>O</p>");
            canC8 = false;
        }
        else {
            $("#c8").append("<p>X</p>");
            canC8 = false;
        }
    }
});

//bottom right//

$("#c9").click(function () {
    if (canC9 == true) {
        if (event.altKey) {
            $("#c9").append("<p>O</p>");
            canC9 = false;
        }
        else {
            $("#c9").append("<p>X</p>");
            canC9 = false;
        }
    }
});