## Decisões importantes sobre o projeto

## Sobre

 Aqui será centralizado informações que impactam o projeto de alguma forma, para centralizar um histórico para os desenvolvedores. 
 Deve conter a seguinte estrutura **Data** - **Quem registrou** - **O que impacta**: DESCRIÇÃO do problema. 

 **Exemplo:** 

 03/26/2026 - Vítor Marco - **Schema validation do zod, e-mail**: Observamos que a biblioteca do zod está com bug na função 
 campo.string().**email()**, ocasionando um congelamento do browser ao digitar de forma aleatoria depois do @. **exemplo:** jj@jjaifjhweijfaijf.
 Decidimos remover qualquer chamada para essa função e adicionar o **.regex()**, criando uma variável regex (**isValidEmail**) para facilitar o uso.

 ---

 ## Histórico