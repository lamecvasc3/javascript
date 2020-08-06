const nome = 'lamec'; //string
const nome1 = "lamec"; //string
const nome2 = `Lamec`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; // undefined => não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo => não aponta para local nenhum na memória
const boolean = false; // Boolean = true, false (lógico)

const a = [1,2];
const b = a;

console.log(a, b)

b.push(3);

console.log(a,b)