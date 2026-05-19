function criar_card() {

    let texto = document.getElementById("nome").value;

    if(texto == ""){
        return;
    }

    let prioridade = document.getElementById("prioridade").value;

    let bloco = document.createElement("div");

    let titulo = document.createElement("h3");
    titulo.innerText = texto;

    bloco.appendChild(titulo);

    bloco.classList.add("border");
    bloco.classList.add("bege");
    bloco.classList.add("border-5");
    bloco.classList.add("rounded");
    bloco.classList.add("p-2");

    if(nivel == "Baixa"){
        bloco.classList.add("border-success");
    }
    else if(nivel == "Media"){
        bloco.classList.add("border-warning");
    }
    else{
        bloco.classList.add("border-danger");
    }

    let card = bloco;

    let main = document.getElementById("main");

    let diario = document.createElement("div");
    diario.appendChild(card);
    diario.classList.add("col-4");

    main.appendChild(diario);

    document.getElementById("nome").value = "";
}