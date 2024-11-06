/**
 * Validação da maioridade
 * @author Luiz Fernando
 */

//função para vlidação de maioridade
function validar(event){
    //a linha a baixo desabilita o comportamento padrão de envio do formulário
    event.preventDefault()
   // alert("teste de envio")
   const nome = document.getElementById('nome').value
   //alert(nome)
   //console.log(nome)
   let idade = document.getElementById('idade').value
   
   //saída
   document.getElementById('aluno').value = `Aluno: ${nome}`

   if (idade < 18){
    document.getElementById('status').value = "Menor de idade"
   } else {
    document.getElementById('status').value = "Maior de idade"
   }
}
