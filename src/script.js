const nameCandidato = document.getElementById("name-candidato");


const apiResponse = async ()=>{

  const response = await fetch("https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json");
  const data = await response.json();
  return data;

}

const dataRetrive  = async () =>{

  let data = await apiResponse();

  for(let candidato of data['cand']){
    nameCandidato.innerHTML += `${candidato.nm} - Porcentagem : ${candidato.pvap}%<br>`;



  }

}

dataRetrive();