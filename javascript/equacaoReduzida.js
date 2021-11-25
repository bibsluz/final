function limpar(){
    document.getElementById("X").value = ""
    document.getElementById("Y").value = ""
    document.getElementById("C").value = ""
    document.getElementById("display").value = ""
}

function equacaoReduzida(){
    var m = Number(document.getElementById("C").value);
    var pAx = Number(document.getElementById("X").value);
    var pAy = Number(document.getElementById("Y").value);
    var n = pAx - (m * pAy);
    var y = n > 0 ? `+${n}` : n;

    document.getElementById("display").value = `Y = ${m}x ${y}`
}