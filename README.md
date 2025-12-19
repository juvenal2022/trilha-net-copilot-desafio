# trilha-net-copilot-desafio

Este projeto contém uma função JavaScript para validação de números de cartões de crédito e identificação da bandeira (brand) do cartão.

## Funcionalidades

- **Validação de Número de Cartão**: Utiliza o algoritmo de Luhn para verificar se o número do cartão é válido.
- **Identificação da Bandeira**: Detecta a bandeira do cartão com base nos prefixos BIN (Bank Identification Number).
- **Suporte a Múltiplas Bandeiras**: Inclui suporte para Visa, Mastercard, American Express, Diners Club, Discover, JCB, Elo, Hipercard, EnRoute, Voyager e Aura.

## Estrutura do Projeto

```
trilha-net-copilot-desafio/
├── README.md
├── assets/
│   └── Base.png  # Imagem base do cartão de crédito
└── src/
    └── index.js  # Arquivo principal com a função de validação
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd trilha-net-copilot-desafio
   ```

2. Certifique-se de ter o Node.js instalado (versão 14 ou superior).

## Uso

### Função `validateCreditCard(cardNumber)`

Valida um número de cartão de crédito e retorna um objeto com o status de validade e a bandeira identificada.

#### Parâmetros

- `cardNumber` (string): O número do cartão de crédito. Pode incluir espaços ou traços, que serão removidos automaticamente.

#### Retorno

Um objeto com as seguintes propriedades:
- `valid` (boolean): `true` se o número for válido, `false` caso contrário.
- `bandeira` (string ou null): O nome da bandeira do cartão, ou `null` se não for possível identificar.

#### Exemplo

```javascript
const validateCreditCard = require('./src/index');

// Exemplos de uso
console.log(validateCreditCard('4111111111111111')); // { valid: true, bandeira: 'Visa' }
console.log(validateCreditCard('5500000000000004')); // { valid: true, bandeira: 'Mastercard' }
console.log(validateCreditCard('3415 918665 02780')); // { valid: true, bandeira: 'American Express' }
console.log(validateCreditCard('4011 918665 02780')); // { valid: true, bandeira: 'Elo' }
console.log(validateCreditCard('6062 8205 3422 8922')); // { valid: true, bandeira: 'Hipercard' }
console.log(validateCreditCard('2014 2012996 3853')); // { valid: true, bandeira: 'EnRoute' }
console.log(validateCreditCard('86999 0179 75557 6')); // { valid: true, bandeira: 'Voyager' }
console.log(validateCreditCard('5072 8979 6045 9601')); // { valid: true, bandeira: 'Aura' }
```

## Bandeiras Suportadas

- **Visa**: Começa com 4
- **Aura**: Começa com 50
- **EnRoute**: Começa com 2014 ou 2149
- **Mastercard**: Começa com 5 (exceto 50) ou 2
- **JCB**: Começa com 35
- **American Express**: Começa com 34 ou 37
- **Diners Club**: Começa com 3 (exceto 34, 35 e 37)
- **Hipercard**: Começa com 6062
- **Discover**: Começa com 6
- **Voyager**: Começa com 8699

## Algoritmo de Validação

A validação utiliza o **Algoritmo de Luhn** (também conhecido como "mod 10"):

1. Remove espaços e traços do número.
2. Verifica se o número contém apenas dígitos e tem entre 13 e 19 caracteres.
3. Inverte o número.
4. Dobra cada segundo dígito (começando da direita).
5. Se o resultado da dobra for maior que 9, subtrai 9.
6. Soma todos os dígitos.
7. Se a soma for divisível por 10, o número é válido.

## Execução

Para executar o código de exemplo:

```bash
node src/index.js
```

Isso executará os exemplos de validação e imprimirá os resultados no console.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou adição de suporte a novas bandeiras. Abra uma issue ou envie um pull request.

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
