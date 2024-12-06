// Operador ternário

var num1 = prompt("Insira um número");
var num2 = prompt("Insira o segundo número");
var operacao = prompt("Qual operação será feita? ");
num1 = Number(num1);
num2 = Number(num2);
switch (operacao) {
  case "+":
    document.write(num1 + num2);
    break;
  case "-":
    document.write(num1 - num2);
    break;
    case "*":
    document.write(num1 * num2);
    break;
    case "/":
    document.write(num1 / num2);
    break;
    default:
        document.write("Operação inválida!")

}
