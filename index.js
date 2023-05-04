let string = document.querySelector("#string");
let botao = document.querySelector("#botao");
let display = document.querySelector("#display")


botao.addEventListener("click",function(event){
    FirstReverse(string.value);

})



function FirstReverse(str) { 

  // code goes here  
  
  let lista = [];
  lista.push(str);
  

  let reverte = lista.map.call(str, function(x){
    return x;
  }).reverse().join('');
 
  alert(reverte)
 //Aqui foi feito um array para receber o parametro string. Daí criada uma nova variável utilizando map
 //que retorna um novo array, foram utilizados os métodos reverse e o método join.
 //O método join() junta todos os elementos de um array em uma string.

  
  return reverte ;

}
   
// keep this function call here 
