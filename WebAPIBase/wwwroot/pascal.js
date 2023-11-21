var fakt = (n) => {
    if (n === 1 || n === 0) {
        return 1
    } else {
        return n * fakt(n - 1)
    }
}

var pascalFv = (sor, oszlop) => {
    return fakt(sor) / (fakt(oszlop) * fakt(sor - oszlop))
}


window.onload = function () {
    var newDiv = document.createElement('div')
    newDiv.classList.add("sor");
    newDiv.innerText = ""
    for (var sor = 0; sor < 10; sor++) {
        var newDiv = document.createElement('div')
        newDiv.innerText = ""
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            newDiv.innerText += pascalFv(sor, oszlop) + " "
        }
        document.getElementById("pascal").appendChild(newDiv)
    }
};