const textareaMensaje = document.querySelector("#mensajeUsuario");
const textareaResultado = document.querySelector("#resultadoMensajeUsuario");

const btnEncriptar = document.querySelector("#btnEncriptarMensaje");
const btnDesencriptar = document.querySelector("#btnDesencriptarMensaje");
const btnCopiar = document.querySelector("#btnCopiarTexto");


function encriptar() {
  var mensaje = textareaMensaje.value.toLowerCase();
  var mensajeEncriptado = mensaje
  .replaceAll("e","enter")
  .replaceAll("i","imes")
  .replaceAll("a","ai")
  .replaceAll("o","ober")
  .replaceAll("u","ufat");

  textareaResultado.value = mensajeEncriptado;
  textareaMensaje.value = "";  // limpia el texto de la caja textareaMensaje
}


function desencriptar() {
  var mensajeEncriptado = textareaMensaje.value.toLowerCase();
  var mensaje = mensajeEncriptado
  .replaceAll("enter","e")
  .replaceAll("imes","i")
  .replaceAll("ai","a")
  .replaceAll("ober","o")
  .replaceAll("ufat","u");

  textareaResultado.value = mensaje;
}


function copiar() {
  var mensajeEncriptado = textareaResultado.value;
  navigator.clipboard.writeText(mensajeEncriptado);
  textareaResultado.value = "";  // limpia el texto de la caja textareaResultado
}


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
