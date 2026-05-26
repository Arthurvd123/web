async function buscarSerieFilme(){

    let pesquisa = document.getElementById("pesquisa").value;

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if(pesquisa == ""){
        resultado.innerHTML = "<p>Digite o nome de uma série ou filme.</p>";
        return;
    }

    try{

        let resposta = await fetch(`https://api.tvmaze.com/search/shows?q=${pesquisa}`);

        let dados = await resposta.json();

        if(dados.length == 0){
            resultado.innerHTML = "<p>Nenhuma série ou filme encontrado.</p>";
            return;
        }

        dados.forEach(item => {

            let serie = item.show;

            let card = document.createElement("div");
            card.classList.add("card");

            let imagem = serie.image
                ? serie.image.medium
                : "https://via.placeholder.com/210x295?text=Sem+Imagem";

            card.innerHTML = `
                <img src="${imagem}">
                <h3>${serie.name}</h3>
                <p>Nota: ${serie.rating.average || "Sem nota"}</p>
            `;

            resultado.appendChild(card);

        });

    }catch(error){

        resultado.innerHTML = "<p>Erro ao buscar a série ou o filme.</p>";

        console.log(error);
    }
}