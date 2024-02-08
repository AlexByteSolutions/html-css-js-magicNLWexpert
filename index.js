const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      resposta:[
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array?",
      resposta:[
        "push()",
        "unshift()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses operadores é usado para comparar valores e tipos?",
      resposta:[
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'map()' faz em JavaScript?",
      resposta:[
        "Aplica uma função a cada elemento de um array e retorna um novo array com os resultados",
        "Remove o último elemento de um array",
        "Concatena dois arrays",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para escrever um comentário de uma linha em JavaScript?",
      resposta:[
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      resposta:[
        "Realiza uma operação de soma",
        "Realiza uma operação de concatenação de strings",
        "Realiza uma operação de AND lógico",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      resposta:[
        "pop()",
        "shift()",
        "remove()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      resposta:[
        "Remove um evento de um elemento HTML",
        "Adiciona um evento a um elemento HTML",
        "Atualiza o conteúdo de um elemento HTML",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de escrever uma função em JavaScript?",
      resposta:[
        "função minhaFuncao() {}",
        "function = minhaFuncao() {}",
        "def minhaFuncao() {}",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'filter()' faz em JavaScript?",
      resposta:[
        "Remove elementos duplicados de um array",
        "Filtra elementos de um array com base em uma condição fornecida em uma função de retorno de chamada",
        "Inverte a ordem dos elementos em um array",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDeperguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDeperguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.resposta) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.resposta.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreto = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreto) {
        corretas.add(item)
      }
      
      mostrarTotal.textContent = corretas.size + 'de' + totalDeperguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }