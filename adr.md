## Decisões importantes sobre o projeto

## Sobre

Aqui será centralizado informações que impactam o projeto de alguma forma, para centralizar um histórico para os desenvolvedores.
Deve conter a seguinte estrutura **Data(MM/DD/YYYY)** - **Quem registrou** - **O que impacta**: DESCRIÇÃO do problema.

**Exemplo:**

03/26/2026 - Vítor Marco - **Schema validation do zod, e-mail**: Observamos que a biblioteca do zod está com bug na função
campo.string().**email()**, ocasionando um congelamento do browser ao digitar de forma aleatoria depois do @. **exemplo:** jj@jjaifjhweijfaijf.
Decidimos remover qualquer chamada para essa função e adicionar o **.regex()**, criando uma variável regex (**isValidEmail**) para facilitar o uso.

---

## Histórico

**08/01/2023** - Vítor Marco - **Uso do APP directory**: Observamos que os estilos não são aplicados corretamente quando
utilizamos abordagem de app dir do Next.JS da versão 13. Uma serie de issues estão abertas sobre utilização de CSS-in-JS,
outra maneira para contornar isso, seria utilizar ou uma biblioteca como Tailwind ou CSS modules. Sendo sincero isso iria
contra umas das premissas desse projeto. Então optei por abandonar essa feature do Next.JS 13 enquanto ela estiver
instável com CSS-in-JS.

**08/07/2023** - Vítor Marco - **Dropdown do select**: Utilizei o padrão do select, isso será modificado futuramente.
