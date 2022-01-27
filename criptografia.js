var campoTexto = ''
campoTexto = document.querySelector ('#CampoText')
var butãodescriptografar = document.querySelector('#descriptografar')
var butão = document.querySelector('#butão')
var res = document.querySelector('#imputcopia')
var butãocopia = document.querySelector('#copia-texto')
var span = document.querySelector('.valida-campo')
var parttern = /^[a-z]+$/g;

function criptografar(){
  if(parttern.test(campoTexto.value)){
     var mudandocripto = campoTexto.value
      var troca = mudandocripto
     .replace(/e/g , 'enter')
     .replace(/i/g , 'imes')
     .replace(/a/g , 'ai')
     .replace(/o/g , 'ober')
     .replace(/u/g , 'ufat')
     span.innerHTML = ''
 res.value = troca
}else{
  span.innerHTML = 'Por favor, somente letras menúsculas!!'
}
} 
function descriptografar(){
  
   if( parttern.test(campoTexto.value)){
        span.innerHTML = '' 
        var mudandescripto = campoTexto.value
        var troca = mudandescripto
        .replace(/enter/g , 'e')
        .replace(/imes/g , 'i')
        .replace(/ai/g , 'a')
        .replace(/ober/g , 'o')
        .replace(/ufat/g , 'u')
   res.value = troca
   alert(troca)
   
   campoTexto.focus
   }else{
  span.innerHTML = 'Por favor, somente letras menúsculas!!, e sem numéros.'
   }
   
}

function copy() {
  alert('ok')
res.select();
   document.execCommand("copy");
   res.value = ''
  }
  
  butãocopia.addEventListener("click", copy)


butão.addEventListener('click',criptografar)

butãodescriptografar.addEventListener('click',descriptografar)