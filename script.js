function generateNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);

  if (min >= max) {
    alert("O valor mínimo deve ser menor que o máximo.");
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  // Exibe o resultado no input de resultado
  document.querySelector(".input-result").value = result;
}
