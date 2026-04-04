
  var botao = document.getElementById("meuBotao");
  botao.addEventListener("click", function() {
    var Nome = prompt('Digite seu nome: ');
        if (Nome === null || Nome.trim() === '') {
            alert('Nome não inserido, favor colocar um nome válido.');
            return;
        }
    var Sobrenome = prompt('Digite seu sobrenome: ');
        if (Sobrenome === null || Sobrenome.trim() === '') {
            alert('Sobrenome não inserido, favor colocar um sobrenome válido.');
            return;
        }
    var Email = prompt('Digite seu email: ');
        if (Email === null || Email.trim() === '') {
            alert('Email não inserido, favor colocar um email válido.');
            return;
        } else if (!Email.includes('@') || !Email.includes('.')) {
            alert('Email inválido, favor colocar um email válido.');
            return;
        } else {
            alert("Cadastro realizado com sucesso! Bem-vindo," + Nome + "! Se quiser ver mais detalhes entre no console do navegador.");
        }
    console.log("Nome: " + Nome);
    console.log("Sobrenome: " + Sobrenome);
    console.log("Email: " + Email);
  });




