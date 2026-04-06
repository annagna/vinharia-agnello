// 1. Primeiro declaramos o botão que está no HTML
const botao = document.getElementById("meuBotao");


// Selecionamos as páginas para trocar as telas
const pagina1 = document.getElementById("pagina1"); //cadastro
//adicionei as duas paginas depois do cadastro
const paginaPrompt = document.getElementById("paginaPrompt"); //propt
const pagina2 = document.getElementById("pagina2"); //ultima pagina

// 2. Adicionamos um único evento de clique
botao.addEventListener("click", function () {
    
    // ETAPA 1: Pegar os dados do formulário HTML
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validações básicas do formulário
    if (!nome || !sobrenome || !email) {
        alert("Preencha todos os campos do formulário!");
        return; // Para o código aqui se faltar algo
    }

    if (!email.includes("@")) {
        alert("E-mail inválido!");
        return; // Para o código aqui se o e-mail estiver errado
    }

    // Alerta de boas-vindas
    alert("Cadastro realizado com sucesso! Bem-vindo, " + nome + "!");

    //esconde a primeira pagina
    pagina1.style.display = "none";
    // coloquei a pagina antes do prompt para ela aparecer antes das perguntas do prompt
    paginaPrompt.style.display = "block";
    


    // ETAPA 2: Solicitar as informações do produto via prompt
    // Usamos setTimeout para garantir que a tela mude antes do prompt travar
    setTimeout(function() {
    const nomeProduto = prompt("Digite o nome do vinho:");
    const tipoProduto = prompt("Digite o tipo do vinho:");
    const safraOuAno = prompt("Digite a safra ou ano de fabricação:");
    const quantidade = prompt("Digite a quantidade em estoque:");

    // Validação dos prompts: impede que continue se algum campo estiver vazio
    if (!nomeProduto || !tipoProduto || !safraOuAno || !quantidade) {
        alert("Todos os campos do produto são obrigatórios! Tente novamente.");
        // Se falhar, volta para a página 1
        paginaPrompt.style.display = "none";
        pagina1.style.display = "block";
        return;
    }

    // Alerta antes de exibir no console
    alert("A seguir, veja os detalhes do vinho no console.");


    // a pagina troca: esconde a pagina de prompt e mostra a ultima pagina
        paginaPrompt.style.display = "none";
        pagina2.style.display = "block";


    // ETAPA 3: Exibindo tudo no console de forma organizada
    console.log("==============================");
    console.log("      DADOS DO USUÁRIO        ");
    console.log("==============================");
    console.log(`👤 Nome Completo: ${nome} ${sobrenome}`);
    console.log(`📧 E-mail:        ${email}`);
    
    console.log("==============================");
    console.log("    DETALHES DO PRODUTO       ");
    console.log("==============================");
    console.log(`📋 Nome:        ${nomeProduto}`);
    console.log(`🎨 Tipo:        ${tipoProduto}`);
    console.log(`📅 Ano/Safra:   ${safraOuAno}`);
    console.log(`📦 Estoque:     ${quantidade} unidade(s)`);
    console.log("==============================");
}, 100); // Pequeno atraso de 100ms para a tela atualizar visualmente
});