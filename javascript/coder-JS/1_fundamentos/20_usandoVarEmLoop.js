

console.log("contando");
for(var i = 0; i < 10; i++){
 console.log(i);
}
console.log("Terminei de contar!")

/**
 * Var tem scopo de global quando não está dentro de uma function,
 * isso torna o {i} visivel em todo o código, mostrando o valor 
 * que fez a varivel sair do bloco for.
 */
console.log(`var i fora do bloco for = ${i}`);//mostra i = 10
