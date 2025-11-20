// Pequeño parser matemático con Function()
function evaluar(expr, x) {
    return Function("x", "return " + expr)(x);
}

function calcularArea() {
    let f = document.getElementById("f").value;
    let g = document.getElementById("g").value;
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    if (!f || !g || isNaN(a) || isNaN(b)) {
        document.getElementById("resultadoArea").innerHTML = "Completa todos los campos.";
        return;
    }

    // Integración numérica rápido (Método del trapecio)
    let N = 1000;
    let h = (b - a) / N;
    let area = 0;

    for (let i = 0; i < N; i++) {
        let x1 = a + i * h;
        let x2 = a + (i + 1) * h;
        let y1 = Math.abs(evaluar(f, x1) - evaluar(g, x1));
        let y2 = Math.abs(evaluar(f, x2) - evaluar(g, x2));
        area += (y1 + y2) * h / 2;
    }

    document.getElementById("resultadoArea").innerHTML =
        "Área aproximada: <b>" + area.toFixed(4) + "</b>";
}
