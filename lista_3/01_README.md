# Lista de exercícios: Objetos

Esta lista é um pouco diferente. Os exercícios vão ser adicionados aqui como tópicos, e deverão ser resolvidos criando um ou mais objetos nesta pasta.

Os testes não funcionarão como nos outros exercícios já que a idéia é poder permitir dar autonomia para a pessoa a resolver os exercícios.

## Requisitos

Para cada atividade, será fornecido um conjunto de requisitos que devem ser atendidos e critérios de aceitação. Estes termos são subjetivos em como serão resolvidos, mas o resultado final deve estar na forma como explicitam os requisitos.

> Exemplo:
>
> Se um requisito informa para retornar o valor da idade, o resultado deve ser um número. Retornar **"18 anos"** quando o valor da variável é **18** é considerado um erro.
>
> Exemplo 2:
>
> Se o retorno esperado é um objeto, retorne o objeto inteiro e não apenas a parte que vai ser usada. O mesmo vale para quando se espera uma lista, ou Array, mesmo que esta lista seja unitária, contenha apenas um elemento, ou vazia, não contenha nada

## Lidando com erros

Nos exercícios é esperado que, quando um comportamento não desejado seja detectado, que se dispare erros. Erros são disparados em javascript com o comando abaixo:

```js
throw new Error("[Mensagem a ser disparada]");
```

Quando descrito no requisito para disparar um erro, ou exibir um erro, é desta sintaxe que estamos falando.

## Escopo

O cliente é uma escola e ela quer fazer uma ferramenta para gerenciar alunos, professores, equipe auxiliar, disciplinas e horários. Cada um destes elementos será feito de maneira incremental (serão alterados em sua estrutura conforme o projeto for avançando). 

Tente ater seus esforços a resolver o problema atual, sem antecipar comportamentos, pois esses podem ser estipulados no futuro.

## Tarefas

### 03/09/2024

1 - Crie um servidor usando express.js em um novo projeto criado nesta pasta com o nome escola_organizada

2 - Crie um modelo de dados para aluno, contendo "nome_completo": texto livre, "data_nascimento": texto DD/MM/AAAA, "disciplinas": lista de disciplina

3 - Crie um modelo de dados para disciplina, contendo "nome": texto livre, "carga_horaria": numero.

4 - Crie um método em aluno para adicionar ou remover uma disciplina pelo nome.