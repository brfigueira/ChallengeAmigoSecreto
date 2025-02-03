<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README.md</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        h1, h2, h3 {
            color: #333;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 5px;
            border-radius: 3px;
        }
    </style>
</head>
<body>

<h1>Sorteio de Amigo Secreto Alura</h1>
<p>Explorando a lógica de programação através do desafio de criar um aplicativo para sorteio de amigo secreto.</p>

<h2>🚀 Funcionalidades Principais</h2>
<ul>
    <li><strong>Sorteio de Amigo Secreto</strong>: Ferramenta para realizar sorteios de amigo secreto.</li>
    <li><strong>Verificação de Autossorteio</strong>: Função que garante que uma pessoa não tire o próprio nome.</li>
    <li><strong>Embaralhamento Eficiente</strong>: Algoritmo otimizado para embaralhar a lista de participantes.</li>
</ul>

<h2>🛠 Tecnologias Utilizadas</h2>
<ul>
    <li><strong>JavaScript</strong></li>
    <li><strong>HTML</strong></li>
    <li><strong>CSS</strong></li>
</ul>

<h2>🤝 Autores</h2>
<p>Seus nomes e qualquer outra informação relevante aqui.</p>

<pre>
<code>
/**
 * Função que embaralha os elementos de um array.
 * Utiliza o algoritmo de Fisher-Yates para garantir uma mistura aleatória.
 * 
 * @param {Array} arr - O array a ser embaralhado.
 */
function embaralhaArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/**
 * Função que realiza o sorteio de amigo secreto.
 * Embaralha a lista de amigos e garante que ninguém tire a si mesmo.
 * Atualiza a interface do usuário com os resultados do sorteio.
 */
function sortear() {
  elemListaSorteio.innerHTML = "";

  // Embaralha a lista de amigos.
  embaralhaArray(amigos);

  // Distribui os amigos e garante que o último amigo
  // sorteie o primeiro amigo na lista para fechar o ciclo.
  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      elemListaSorteio.innerHTML += `${amigos[i]} --> ${amigos[0]}<br>`;
    } else {
      elemListaSorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]}<br>`;
    }
  }
}
</code>
</pre>

</body>
</html>
