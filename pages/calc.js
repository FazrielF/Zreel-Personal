function showCalculator(type) {
    document.getElementById("kalkulator-sains").style.display = "none";
    document.getElementById("kalkulator-suku").style.display = "none";

    if (type === 'sains') {
        document.getElementById("kalkulator-sains").style.display = "block";
    } else {
        document.getElementById("kalkulator-suku").style.display = "block";
        changeKalkulator();
    }
}

function appendValue(value) {
    document.getElementById("sains-display").value += value;
}

function clearDisplay() {
    document.getElementById("sains-display").value = "";
}

function calculate() {
    try {
        let input = document.getElementById("sains-display").value;
        input = input.replace(/sin\(/g, "Math.sin(")
                     .replace(/cos\(/g, "Math.cos(")
                     .replace(/tan\(/g, "Math.tan(")
                     .replace(/log\(/g, "Math.log10(")
                     .replace(/\^/g, "**");
        document.getElementById("sains-display").value = eval(input);
    } catch (e) {
        alert("Input tidak valid!");
    }
}

function changeKalkulator() {
    document.getElementById("aritmatika").style.display = "none";
    document.getElementById("geometri").style.display = "none";
    document.getElementById("tak-terbatas").style.display = "none";

    const selected = document.getElementById("jenis-kalkulator").value;
    document.getElementById(selected).style.display = "block";
}

function hitungAritmatika() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);
    let hasil = a + (n - 1) * b;
    document.getElementById("hasil-aritmatika").innerText = hasil;
}

function hitungGeometri() {
    let a = parseFloat(document.getElementById("ag").value);
    let r = parseFloat(document.getElementById("r").value);
    let n = parseInt(document.getElementById("ng").value);
    let hasil = a * Math.pow(r, n - 1);
    document.getElementById("hasil-geometri").innerText = hasil;
}

function hitungTakTerbatas() {
    let a = parseFloat(document.getElementById("at").value);
    let r = parseFloat(document.getElementById("rt").value);
    if (Math.abs(r) >= 1) {
        alert("Rasio harus di antara -1 dan 1 agar hasilnya valid!");
        return;
    }
    let hasil = a / (1 - r);
    document.getElementById("hasil-tak-terbatas").innerText = hasil;
}
