---
title: 1. Conceitos
root: "/docs"
parents: ["Apresentação"]
---
<h1 class="page-title">
  Conceitos
</h1>

**Conceitos da Metodologia de Gestão de Projetos (MGP) Cabal Brasil**

*A Metodologia de Gestão de Projetos da Cabal Brasil é uma miscigenação das metodologias de gestão PMBOK, PRINCE2 e Métodos Ágeis, criada para estruturar o planejamento e desenvolvimentos de projetos na organização.
Nossa metodologia foi adaptada para a realidade da Cabal Brasil e, portanto, podem ser encontrados pequenos ajustes nos conceitos e artefatos tradicionais dessas metodologias a fim de promover melhor  entendimento e adequação ao contexto existente na Cabal Brasil.*

### Domínios ou Verticais de Negócio
São as verticais de negócio da Cabal Brasil em que os projetos e demandas são alocados, são elas: Adquirência; Emissor; Bandeira; Programa de Fidelidade; Central de Atendimento e BPO Soluções de Apoio. Os projetos categorizados em um domínio são gerenciados pelo PM responsável.

### Business Case (BC)
É o estudo de viabilidade de um projeto, um documento com as justificativas do ponto de vista de negócio da Cabal, elaborado pelo PM junto ao cliente solicitante, para novos projetos. É enviado ao SubCobal pela Gedec para aprovação, em caso positivo, é alocado em uma Domínio de Negócio e se torna um projeto.

### Termo de Abertura de Projeto (TAP)
É o documento elaborado pela Gedec levado para aprovação junto ao business case, que formaliza a alocação na Domínio de Negócio e a autoridade do PM que será designada para o futuro projeto originado pelo BC. Deve conter quem são as pessoas, papéis, responsabilidades, principais entregas e requisitos iniciais.

### Backlog de Estórias
Ferramenta do padrão “A fazer (Backlog)”; “Fazendo (Doing)” e “Feito (Done)” para acompanhamento das estórias de usuário a serem analisada, em análise e já analisadas pelo Analista de Requisitos. Esse controle se faz necessário uma vez que que as estórias de usuário devem contemplar a visão de negócio, necessidades do cliente e clareza para os times de desenvolvimento, e para obter essas informações o Analista precisa interagir. A partir deste backlog que o PM responsável irá priorizar as estórias e elaborar a proposta de Roadmap Pauta para aprovação trimestral pelo Subcobal.

### Pauta
É o ciclo de 3 meses em que um conjunto de demandas do backlog de cada Domínio de Negócio é priorizado e aprovado pelo sub-cobal direcionando a sua execução. O backlog de estórias são priorizadas pelo PM e repassadas ao scrum master e times de desenvolvimento que irão executá-las em Sprints de 2 semanas. Portanto, em cada Pauta ocorrem 6 Sprints. Ao fim do ciclo é avaliado o que foi executado e os entregáveis da pauta são apresentados na reunião derevisão da Pauta (Pauta Review), com todos os stakeholders. Em seguida, na no evento de retrospectiva da Pauta (Pauta Retrospective), PM, Analista de Requisitos, scrum master e times de desenvolvimento reavaliam o que pode ser melhorado para a próxima Pauta. O sucesso das entregas de uma pauta é de responsabilidade do respectivo PM da Vertical de Negócio evolvida.

### Roadmap Pauta
Documento elaborado pela Gedec na figura do PM, que descreve a relação de dependência entre as demandas e a priorização delas. Esse documento deve conter o planejamento da pauta, quais demandas e sprints serão realizadas por quais times. Mensalmente, o Subcobal analisa os Roadmaps pauta, solicita ajustes e aprova aqueles que serão realizados na próxima pauta.

### Sprints
São os ciclos de 2 semanas que um conjunto de tarefas e demandas é priorizado e executado pelos Times de Desenvolvimento sob orientação do Scrum Master. Cada time realiza seu sprint de forma independente, mas síncrona. As entregas de cada sprint são responsabilidade do respectivo time de desenvolvimento que devem ficar imersos na realização das tarefas nessas duas semanas. Cada Sprint acontece nas seguintes etapas: evento de planejamento da  Sprint (Sprint Planning, duração de até 4h); a execução da Sprint (2 semanas), em que ocorrem as reuniões diárias de time, as Daily Scrum (duração até 15 minutos); ao final da execução, os times se reúnem com os Stakeholders para apresentar o que foi desenvolvido no evento de revisão da Sprint (Sprint Review, de duração até 2h) e em seguida, apenas o time reúne-se para pensar em melhorias para a próxima Sprint no evento de retrospectiva (Sprint Retrospective, que deve dura no máximo 1,5 hora). Essas etapas serão descritas com detalhe na seção 2, processos.

### Sincronismo
Para o MGP funcionar, é vital que os times respeitem a duração (timebox) de 2 semanas de cada Sprint, todos devem começar (Sprint Planning) e terminar (Sprint Retrospective) no mesmo dia. Caso contrário, os times trabalham em ritmos diferentes, impossibilitando o planejamento e acompanhamento das pautas. Portanto, mesmo que haja tarefas planejadas a serem realizadas ao fim das duas semanas, o time deve adiá-las ao próxima Sprint e finalizar a Sprint em sincronia com os demais times. Nesses casos, devem levantar correções em seu processo na Sprint Retrospective.

### Kanban
Ferramenta de gestão que consiste em um quadro com cartões de todas as tarefas a serem realizadas por um time, dispostos em 3 colunas: “Backlog” com os cartões de tarefas ainda não iniciadas; “Fazendo” e “Feito” onde devem estar as tarefas conforme situação. Na MGP há o kanban Pauta Backlog para as demandas de uma pauta em andamento sob responsabilidade do PM; a Sprint Backlog e o Backlog de Impedimentos para as tarefas e impedimentos de um sprint de um time de desenvolvimento, sob responsabilidade do Scrum Master. Seu objetivo é ter o controle e promover a transparência sobre o que precisa ser feito na pauta, por isso deve estar alocado em um local acessível a todos os envolvidos na pauta ou sprint.

### Quadro Burndown
Ferramenta elaborada pelo Scrum Master a cada Sprint Planning, para monitorar a velocidade de trabalho da equipe. Consiste em um gráfico com o eixo vertical contendo o total de esforço estimado (método “story points” ou horas de trabalho) das tarefas escolhidas para a Sprint e no eixo horizontal, o tempo (14 dias de sprint). A cada dia um novo ponto é desenhado no gráfico com a quantidade de esforço restante após a subtração do trabalho feito no dia. Sugestão: o time pode aproveitar o Daily Scrum para atualizar e validar o quadro.

### Estória de Usuário
É a forma de descrever o valor a ser entregue ao cliente (interno ou externo) em cada projeto. Cada Domínio de Negócio tem um backlog de estórias elaboradas pelo Analista de Requisitos e gerenciadas pelo PM. Essas estórias devem ter 6 características (INVEST):

- #### **I** ndependent *(Independente)*
Uma estória não deve depender de outra, deve ser possível executá-la sem que outra precise ser terminada antes.

- #### **N** egotiable *(Negociável)*
Podendo ser debatida entre Analista de Requisitos, PM e o Time de Desenvolvimento, deve ser um ponto de partida para uma discussão

- #### **V** aluable *(Valiosa)*
Deve representar algo que entregue valor ao usuário

- #### **E** stimable *(Estimável)*
Deve ser detalhada o suficiente para o PM conseguir priorizar e o Time de desenvolvimento estimar o esforço necessário

- #### **S** mall *(Pequena)*
Pequena o suficiente para que seja desenvolvida em um Sprint

- #### **T** estable *(Testável)*
Deve ser possível testar a estória e não haver dúvidas se deu certo ou não. Deve-se evitar usar termos subjetivos como “que carregue rápido”, mas parâmetros concretos, como “no máximo em 3 segundos”, por exemplo.

Devem ser escritas do ponto de vista do cliente e por isso devem sempre ser ouvidos pelo PO. Exemplo de Estórias de Usuário: “Como consumidor quero poder adicionar produtos a uma cesta para pagar tudo de uma vez quando terminar.”

### Demandas
São as ações de realizar o pedido de criar, evoluir, corrigir ou manter alguma funcionalidade das aplicações da Cabal Brasil. As demandas somente tratam desejo diretamente relacionados à área de tecnologia da Cabal Brasil. Ela é composta de informações necessárias à adequação/criação das funcionalidades das aplicações e tem o objetivo de atender, adequadamente, as necessidades de negócio. As demandas devem ser priorizadas para o Analista de Requisitos cumprir um cronograma de análise das demandas em Estórias.

### Tarefas
São os desdobramentos das estórias pelo Time de Desenvolvimento nas funcionalidades e integrações necessárias, que possam ser realizadas em um ou dois dias de execução. Cada time tem seu backlog de tarefas em que a cada Sprint Planning priorizam, alinhado aos objetivos da pauta em andamento, um conjunto delas possíveis de serem executadas nas próximas 2 semanas.
