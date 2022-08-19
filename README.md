# calctron

Calculadora simples e multiplataforma feita com [electron](https://www.electronjs.org/) :electron:

* Alterne entre a calculadora e padrão de acordo com a sua necessidade
* Faça operações até com números imaginários
* Suporta constantes matemáticas comuns: `π (pi)` e `e`.
* [Suporte para teclado](#suporte-para-teclado).

## Dev

### Pré-requisitos
* [Node.js](https://nodejs.org/en/)

## Uso
``` bash
# Instalar as dependências

 $ npm install
 
# Rodar o aplicativo

 $ npm start
```

## Imagens
Padrão:

<img src="https://user-images.githubusercontent.com/60127788/185712863-43aec3ec-8c7a-405d-8cdb-a672d6190e5d.png" alt="Screenshot" width="300">

Científica:

<img src="https://user-images.githubusercontent.com/60127788/185713082-51806a0d-bb61-4d76-9786-48e2de718683.png" alt="Screenshot" width="300">


## Suporte para teclado

| Tecla | Descrição |
| ------:| -----------:|
| <kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>, <kbd>4</kbd>, <kbd>5</kbd>, <kbd>6</kbd>, <kbd>7</kbd>, <kbd>8</kbd>, <kbd>9</kbd>, <kbd>0</kbd> | Inserir números |
| <kbd>+</kbd>, <kbd>-</kbd>, <kbd>*</kbd>, <kbd>/</kbd>, <kbd>.</kbd>, <kbd>^</kbd>, <kbd>!</kbd>, <kbd>(</kbd>, <kbd>)</kbd>  | Inserir operadores |
| <kbd>Shift + 2</kbd>| √x |
| <kbd>r</kbd>| 1/x |
| <kbd>s</kbd>| sin() |
| <kbd>c</kbd>| cos() |
| <kbd>t</kbd>| tan() |
| <kbd>l</kbd>| ln() |
| <kbd>a</kbd>| abs() |
| <kbd>x</kbd>| 10^x |
| <kbd>k</kbd>| exp() |
| <kbd>Alt Gr + 2</kbd>| x^2 |
| <kbd>p</kbd>, <kbd>e</kbd>, <kbd>i</kbd>| Constantes |
| <kbd>Enter</kbd> ou <kbd>Return</kbd> | Resolver a conta |
| <kbd>Delete</kbd> | Limpar a calculadora |
| <kbd>Backspace</kbd> | Excluir o último caractere | 
| <kbd>Alt + 1</kbd> | Entra no modo padrão | 
| <kbd>Alt + 2</kbd> | Entra no modo científico |

## Créditos
* Baseada em: https://github.com/elcalc/elcalc

### License

MIT
