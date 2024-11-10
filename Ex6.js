let alunos = [];
let rgms = [];
let notasP = [];
let notasExer = [];
let notasProj = [];
let notasReg = [];

function cadastrarAluno() {
    let nome = document.getElementById("nome").value;
    let rgm = document.getElementById("rgm").value;
    let notaP = parseFloat(document.getElementById("notaP").value);
    let notaExer = parseFloat(document.getElementById("notaExer").value);
    let notaProj = parseFloat(document.getElementById("notaProj").value);
    let notaReg = parseFloat(document.getElementById("notaReg").value);

    if (nome && rgm && !isNaN(notaP) && !isNaN(notaExer) && !isNaN(notaProj) && !isNaN(notaReg)) {
        alunos.push(nome);
        rgms.push(rgm);
        notasP.push(notaP);
        notasExer.push(notaExer);
        notasProj.push(notaProj);
        notasReg.push(notaReg);

        document.getElementById("nome").value = '';
        document.getElementById("rgm").value = '';
        document.getElementById("notaP").value = '';
        document.getElementById("notaExer").value = '';
        document.getElementById("notaProj").value = '';
        document.getElementById("notaReg").value = '';
    } else {
        alert("Por favor, preencha todos os campos corretamente!");
    }
}

function calcularNotaFinal(notaP, notaExer, notaProj, notaReg) {
    return notaP + notaExer + notaProj + notaReg;
}

function calcularConceito(notaFinal) {
    if (notaFinal >= 6) {
        return "Aprovado";
    } else if (notaFinal >= 3) {
        return "Avaliação Final";
    } else {
        return "Reprovado";
    }
}

function mostrarAlunos() {
    let tabela = document.getElementById("tabelaAlunos").getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';

    for (let i = 0; i < alunos.length; i++) {
        let notaFinal = calcularNotaFinal(notasP[i], notasExer[i], notasProj[i], notasReg[i]);
        let conceito = calcularConceito(notaFinal);

        let novaLinha = tabela.insertRow();

        novaLinha.insertCell(0).innerText = alunos[i];
        novaLinha.insertCell(1).innerText = rgms[i];
        novaLinha.insertCell(2).innerText = notasP[i];
        novaLinha.insertCell(3).innerText = notasExer[i];
        novaLinha.insertCell(4).innerText = notasProj[i];
        novaLinha.insertCell(5).innerText = notasReg[i];
        novaLinha.insertCell(6).innerText = notaFinal.toFixed(2);
        novaLinha.insertCell(7).innerText = conceito;

        if (conceito === "Aprovado") {
            novaLinha.cells[7].classList.add("conceito-aprovado");
        } else if (conceito === "Reprovado") {
            novaLinha.cells[7].classList.add("conceito-reprovado");
        } else {
            novaLinha.cells[7].classList.add("conceito-avaliacao");
        }
    }
}