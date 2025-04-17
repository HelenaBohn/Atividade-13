console.log("hello world")

function print(msg) {
    console.log(msg)
}

document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const campos = [
      "titulo", "idioma_original", "país_origem", "ano_lançamento", "diretor", "roteiro", "produtora", "elenco", "duração", "genero", "sinopse"];
  
    for (let id of campos) {
      const campo = document.getElementById(id);
      if (!campo.value.trim()) {
        alert("O campo \"" + campo.previousElementSibling.textContent + "\" é obrigatório.");
        campo.focus();
        return;
      }
    }
  
    alert("certo!");
  });
