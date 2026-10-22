
const dataInicio = new Date(2023, 6, 14, 0, 0, 0);

function atualizarContador() {
  const agora = new Date();
  let diferenca = agora.getTime() - dataInicio.getTime();

  if (diferenca < 0) {
    diferenca = 0;
  }

  const segundosTotais = Math.floor(diferenca / 1000);
  const dias = Math.floor(segundosTotais / 86400);
  const horas = Math.floor((segundosTotais % 86400) / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = String(horas).padStart(2, "0");
  document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
  document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);
