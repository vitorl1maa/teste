// 1. Soma de números de 1 até INDICE
console.log("1. Soma de números de 1 até INDICE");

let INDICE = 13,
  SOMA = 0,
  K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log("Valor de SOMA:", SOMA); // Resultado esperado: 91

// -------------------------------

// 2. Verificar se um número pertence à sequência de Fibonacci
console.log("\n2. Verificar se um número pertence à sequência de Fibonacci");

function isFibonacci(num) {
  let a = 0,
    b = 1,
    temp;
  while (b <= num) {
    if (b === num) return true;
    temp = b;
    b = a + b;
    a = temp;
  }
  return false;
}

let numero = 21; // Pode alterar esse valor
if (isFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

// -------------------------------

// 3. Análise de faturamento diário
console.log("\n3. Análise de faturamento diário");

const faturamento = [0, 1000, 500, 0, 0, 800, 1200, 0, 0, 600, 3000, 0, 0]; // Exemplo de dados

let diasComFaturamento = faturamento.filter((valor) => valor > 0);
let menorValor = Math.min(...diasComFaturamento);
let maiorValor = Math.max(...diasComFaturamento);

let soma = diasComFaturamento.reduce((acc, cur) => acc + cur, 0);
let mediaMensal = soma / diasComFaturamento.length;

let diasAcimaMedia = diasComFaturamento.filter(
  (valor) => valor > mediaMensal
).length;

console.log("Menor valor de faturamento:", menorValor);
console.log("Maior valor de faturamento:", maiorValor);
console.log("Dias acima da média mensal:", diasAcimaMedia);

// -------------------------------

// 4. Percentual de representação por estado
console.log("\n4. Percentual de representação por estado");

const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let total = Object.values(faturamentoPorEstado).reduce(
  (acc, cur) => acc + cur,
  0
);

for (let estado in faturamentoPorEstado) {
  let percentual = (faturamentoPorEstado[estado] / total) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

// -------------------------------

// 5. Inverter caracteres de uma string sem usar reverse
console.log("\n5. Inverter caracteres de uma string");

function inverterString(str) {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  return invertida;
}

let texto = "Desenvolvedor Jr"; // Pode alterar esse texto
let textoInvertido = inverterString(texto);
console.log("String invertida:", textoInvertido);
