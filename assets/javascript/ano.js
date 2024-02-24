function displayAno() {
  let atualData = new Date();

  let atualAno = atualData.getFullYear();

  let ano = (document.getElementById("ano").innerHTML = atualAno);
}

displayAno();
