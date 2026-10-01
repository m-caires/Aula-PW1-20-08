function cadastrarnome(){
    let nome = document.getElementById('inputName').value
    let idade = document.getElementById('numberIdade').value
    let cidade = document.getElementById('idade').value
    let cpf = document.getElementById('CPF').value
    let mae = document.getElementById('Mae').value
    
    document.getElementById('exibidorTexto').innerHTML = "Seu nome é: " + nome + " e Sua idade é: " + idade + " Você é maior!, Sua cidade é: " + Cidade + " Seu CPF é "  + cpf + "e o nome da sua mãe é " + mae 
    if (idade > 18){
       
    }
    else { 
        document.getElementById('exibidorTexto').innerHTML = "Seu nome é: " + nome + " e Sua idade é: " + idade + " Você é menor!, Sua cidade é: " + Cidade + " Seu CPF é "  + cpf + "e o nome da sua mãe é " + mae 
    }
}
