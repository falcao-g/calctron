# calctron

Calculadora simples e multiplataforma feita com [electron](https://www.electronjs.org/) :electron:

* Alterne entre a calculadora e padrão de acordo com a sua necessidade
* Faça operações até com números imaginários
* Suporta constantes matemáticas comuns: `π (pi)` e `e`.
* [Suporte para teclado](#suporte-para-teclado).

## Dev

<img src="https://user-images.githubusercontent.com/60127788/181936105-0d64ab4f-642a-4911-b37e-1857027f80f1.png" alt="Screenshot" align="right" width="300"></a>

### Pré-requisitos
* [Node.js](https://nodejs.org/en/)

### Uso
``` bash
# Instalar as dependências

 $ npm install
 
# Rodar o aplicativo

 $ npm start
```



## Suporte para teclado

| Tecla | Descrição |
| ------:| -----------:|
| <kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>, <kbd>4</kbd>, <kbd>5</kbd>, <kbd>6</kbd>, <kbd>7</kbd>, <kbd>8</kbd>, <kbd>9</kbd>, <kbd>0</kbd> | Inserir números |
| <kbd>+</kbd>, <kbd>-</kbd>, <kbd>* or x</kbd>, <kbd>/</kbd>, <kbd>.</kbd>, <kbd>^</kbd>, <kbd>e</kbd>  | Inserir operadores |
| <kbd>Enter</kbd> ou <kbd>Return</kbd> | Resolver a conta |
| <kbd>Delete</kbd> | Limpar a calculadora |
| <kbd>Backspace</kbd> | Excluir o último caractere | 
| <kbd>Alt + c</kbd> | Trocar entre o modo padrão e científico | 

Baseada em: https://github.com/elcalc/elcalc

### License

MIT
