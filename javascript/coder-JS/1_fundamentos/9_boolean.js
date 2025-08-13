/**
 * let cria uma variável que pode ter seu valor alterado.
 * isAtivo é o nome da variável. false é um valor booleano (falso).
 * Neste momento, isAtivo armazena o valor false.
 */
let isAtivo = false;
//Exibindo o valor no console
console.log(isAtivo);

/**
 * Agora isAtivo recebe o valor 1.
 * No JavaScript, 1 não é só um número: ele também é interpretado como truthy
 * (valor que é considerado verdadeiro em contextos booleanos).
 */
isAtivo = 1;
/**
 * Um ! (exclamação) inverte o valor lógico:
 * !true → false
 * !false → true
 * 
 * Dois !! invertem duas vezes, ou seja, 
 * servem para converter qualquer valor para um booleano real:
 * !!1 → true
 * !!0 → false
 * !!"texto" → true
 * !!null → false
 * 
 * No caso:
 * isAtivo = 1
 * !!1 = true
 * Portanto, o console exibirá: true
 */
console.log(!!isAtivo);

console.log("Os verdadeiros");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!("isAtivo =true"));

console.log("Os falsos");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Para finalizar");
console.log(!! ("" || null || 0 || " "));

let nome = ""
console.log(nome || "Desconhecido");
