function Evento() {
  var entrada = document.getElementById("entrada").value;
  var maiuscula = entrada.toUpperCase();
  var vetor_numero_criptografrado = [];
  //LOOP PARA PEGAR O NUMERO DA LETRA
  for (let i = 0; i < maiuscula.length; i++) {
    if (maiuscula[i] != " ")
      vetor_numero_criptografrado[i] = maiuscula.charCodeAt(i);
    else vetor_numero_criptografrado[i] = " ";
  }
  //console.log(vetor_numero_criptografrado);
  var descriptografada = "";
  //LOOP PARA PEGAR O NUMERO E TRANSFORMAR EM LETRA
  for (let i = 0; i < entrada.length; i++) {
    let numero = vetor_numero_criptografrado[i];
    if (vetor_numero_criptografrado[i] != " ")
      descriptografada += String.fromCharCode(numero - 4);
    else {
      descriptografada += " ";
    }
  }
  document.querySelector("#saida").innerHTML =
    "<br>" + descriptografada.toLowerCase();
}
