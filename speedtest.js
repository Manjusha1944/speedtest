let speedTypingTestelement = document.getElementById("speedTypingTest");
let timerelement = document.getElementById("timer");
let quoteDisplayelement = document.getElementById("quoteDisplay");
let resultelement = document.getElementById("result");
let quoteInputelement = document.getElementById("quoteInput");
let submitBtnelement = document.getElementById("submitBtn");
let resetBtnelement = document.getElementById("resetBtn");
let spinnerelement = document.getElementById("spinner");

let counter = 0;
let counterstart = '';

function timeintervals() {
    counterstart = setInterval(function() {
        counter = counter + 1;
        timerelement.textContent = counter;
    }, 1000);
}



let options = {
    method: "GET"
};
let url = "https://apis.ccbp.in/random-quote";

function reset() {
    clearInterval(counterstart);
    counter = 0;
    timeintervals();
    spinnerelement.classList.remove("d-none");
    quoteDisplayelement.classList.add("d-none");

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            quoteDisplayelement.classList.remove("d-none");
            spinnerelement.classList.add("d-none");
            let {
                content
            } = jsondata;
            quoteDisplayelement.textContent = content;
        });
    quoteInputelement.value = "";

}

function submit() {
    if (quoteDisplayelement.textContent === quoteInputelement.value) {
        clearInterval(counterstart);
        resultelement.textContent = "You typed in " + counter + " seconds"
    } else {
        resultelement.textContent = "You typed incorrect sentence";
    }

}
reset();