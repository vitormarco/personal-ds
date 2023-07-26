## Bem vindo ao projeto Desing Systems


- [Bem vindo ao projeto Desing Systems](#bem-vindo-ao-projeto-desing-systems)
- [Introdução](#introdução)
- [Arquitetura do projeto](#arquitetura-do-projeto)
- [Branch e commit](#branch-e-commit)
  - [Commit](#commit)


## Introdução

Seja bem vindo ao projeto de Design System pessoal, nesse arquivo você terá as diretrizes principais ao projeto que você
deverá seguir para manter o padrão de desenvolvimento.

---

## Arquitetura do projeto

O projeto usa o framework NextJS + typescript, com automatização de padrões de código Hysky, eslint, prettier e lint-staged.

---

## Branch e commit

Para criar uma nova branch importante seguir um pattern, que seria (type-branch)/(nome-da-alteração ou id)

- type branch:
  - feat     A new feature.
  - fix      A bug fix.
  - docs     Documentation only changes.
  - style    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
  - refactor A code change that neither fixes a bug nor adds a feature.
  - test     Adding missing tests or correcting existing ones.
  - chore    Changes to the build process or auxiliary tools and libraries such as documentation generation.
  - perf     A code change that improves performance.
  - ci       Changes to your CI configuration files and scripts.
  - build    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
  - temp     Temporary commit that won't be included in your CHANGELOG.

Exemplo: feat/create-button-component ou feat/#1234 <- id de algum task/us azure, por exemplo.

### Commit
  O commit deve conter o que está sendo comitado e no minimo 10 caracteres. (type): descricao-minimo-10-caracteres. <br />
  **Exemplo** feat: create button style