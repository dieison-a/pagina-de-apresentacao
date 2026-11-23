document.querySelector("#alternar").addEventListener("click",
e => {
  const dica = document.querySelector("#dica");
  dica.hidden = !dica.hidden;
  dica.textContent = "Uma página clara começa com uma hierarquia de conteúdo bem definida.";
  e.currentTarget.textContent = dica.hidden?"Mostrar uma dica":"Ocultar dica"
})



