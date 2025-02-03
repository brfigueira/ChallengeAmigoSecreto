let elemAmigo = document.getElementById("amigo"); //input
let elemListaAmigos = document.getElementById("listaAmigos"); // lista
let elemListaSorteio = document.getElementById("resultado"); // lista

let amigos = [];

function adicionarAmigo() {
  const amigo = elemAmigo.value;
  if (amigo && !amigos.includes(amigo.toUpperCase())) {
    amigos.push(amigo.toUpperCase());
    atualizarListaAmigos();
    elemAmigo.value = "";
  }
}

function atualizarListaAmigos() {
  elemListaAmigos.innerHTML = "";
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    elemListaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  elemListaSorteio.innerHTML = "";
  embaralhaArray(amigos);
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    if (i === amigos.length - 1) {
      li.textContent = `${amigos[i]} --> ${amigos[0]}`;
    } else {
      li.textContent = `${amigos[i]} --> ${amigos[i + 1]}`;
    }
    elemListaSorteio.appendChild(li);
  }
}

function embaralhaArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function reiniciar() {
  amigos.length = 0;
  elemListaSorteio.innerHTML = "";
  elemAmigo.value = "";
  atualizarListaAmigos();
}
