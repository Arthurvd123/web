function criar_card() {

    let texto = document.getElementById("nome").value;

    if(texto == ""){
        return;
    }

    let prioridade = document.getElementById("prioridade").value;

    let bloco = document.createElement("div");

    bloco.classList.add("card");

    if(prioridade == "Alta"){
        bloco.classList.add("alta");
    }
    else if(prioridade == "Media"){
        bloco.classList.add("media");
    }
    else{
        bloco.classList.add("baixa");
    }

    bloco.innerHTML = `
        <h3>${texto}</h3>
        <p>Prioridade: ${prioridade}</p>
    `;

    let main = document.getElementById("main");

    let diario = document.createElement("div");

    diario.classList.add("col-md-4");
    diario.classList.add("mb-3");

    diario.appendChild(bloco);

    main.appendChild(diario);

    document.getElementById("nome").value = "";
}