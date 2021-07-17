const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maxRate = "Muito";
const minRate = "Pouco";

export const surveyJSON = {
  elements: [1],
  title: "Avaliação",
  showTitle: true,
  innerIndent: 1,
  ignoreValidation: true,
  progressBarType: "buttons",
  showProgressBar: "top",
  showQuestionNumbers: "off",
  pages: [
    {
      navigationTitle: "Desempenho",
      //title: "Eficácia",
      questions: [
        {
          type: "rating",
          name: "eficaz",
          title: "1. Quão eficaz é seu funcionário em suas tarefas?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional1",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        //title: "Eficiencia",
        {
          type: "rating",
          name: "desempenho2",
          title: "2. Quão eficiente é seu funcionário?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional2",
          title: "Comentários adicionais:",
          isRequired: false,
        },
      ],
    },
    {
      navigationTitle: "Comportamento",
      questions: [
        //postura
        {
          type: "rating",
          name: "disponibilidade",
          title: "3. Seu funcionário tem disponibilidade quando solicitado?",
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional3",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        {
          type: "rating",
          name: "assiduidade",
          title: "4. Quão assíduo é seu funcionário?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional4",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        //resiliencia
        {
          type: "rating",
          name: "expressao",
          title: "5. Quão bem seu funcionário se expressa no ambiente de trabalho?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional5",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        {
          type: "rating",
          name: "prazo",
          title: "6. Quão bem seu funcionário lida com prazos inflexíveis?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional6",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        {
          type: "rating",
          name: "tensao",
          title:
            "7. Durante desentendimentos, quão tranquilo seu funcionário se mantém?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional7",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        //desafiii Alek
        {
          type: "rating",
          name: "cotidiano",
          title:
            "8. Quão propenso a engajar em atividades fora do cotidiano é seu funcionário?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional8",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        {
          type: "rating",
          name: "aprendizado",
          title:
            "9. Após executar uma nova tarefa, quão bem seu funcionário demonstra ter aprendido algo com ela?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional9",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        //ética
        {
          type: "rating",
          name: "erros",
          title: "10. Quão bem seu funcionário lida com seus prórpios erros?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional10",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        {
          type: "boolean",
          name: "resultados",
          title: "11. Seu funcionário altera seus próprios resultados?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional11",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        {
          type: "boolean",
          name: "fofocas",
          title:
            "12. Seu funcionário participa de fofocas no ambiente de trabalho?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional12",
          title: "Comentários adicionais:",
          isRequired: false,
        },
      ],
    },
    {
      navigationTitle: "Habilidades socias/pessoais",
      questions: [
        //resolução de problemas
        {
          type: "rating",
          name: "discussao",
          title:
            "13. Quão propenso a se envolver em discussões é seu funcionário?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional13",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        {
          type: "boolean",
          name: "discussao2",
          title:
            "14. Seu funcionário se envolve em discussões que não o dizem respeito?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional14",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        //comunicação
        {
          type: "rating",
          name: "comunicacao",
          title:
            "15. Quão bem seu funcionário se comunica com outros colaboradores?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional15",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        {
          type: "rating",
          name: "educacao",
          title:
            "16. Quão respeitoso seu funcionário se mostra em sua comunicação verbal e não verbal?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional16",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        //sim ou não
        {
          type: "boolean",
          name: "feedback",
          title: "17. Seu funcionário está disposto a receber feedbacks?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional17",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        {
          type: "rating",
          name: "feedbackruim",
          title: "18. Quão bem seu funcionário reage a um feedback negativo?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional18",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        //proatividade sim ou não
        {
          type: "boolean",
          name: "ajuda",
          title:
            "19. Seu funcionário auxilia outros colaboradores?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional19",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        {
          type: "rating",
          name: "proatividade",
          title: "20. Quão propenso a expressar suas ideias é seu funcionário?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional20",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        {
          type: "boolean",
          name: "discurso",
          title:
            "21. Seu funcionário tem dificuldade de lidar com pessoas diferentes dele (etnia, religião, orientação sexual, cargo)?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional21",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        //colaboração com a equipe
        {
          type: "rating",
          name: "colaboracao",
          title:
            "22. Quão bem seu funcionário mantém seus colegas de equipe atualizados sobre suas atividades?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional22",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        //relacionamento com a equipe
        {
          type: "rating",
          name: "relacionamento",
          title: "23. Quão bem seu funcionário se relaciona com sua equipe?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional23",
          title: "Comentários adicionais:",
          isRequired: false,
        },
        //valores e diretrizes sim ou não
        {
          type: "rating",
          name: "visao",
          title:
            "24. Quão bem seu funcionário segue as normas, diretrizes e visões da empresa?",
          isRequired: true,
          rateValues: values,
          maxRateDescription: maxRate,
          minRateDescription: minRate,
        },
        {
          type: "text",
          name: "opcional24",
          title: "Comentários adicionais:",
          isRequired: false,
        },
      ],
    },
  ],
};

/*
var funcionario = {
  questions: [
    {
      type: "dropdown",
        name: "funcionário",
        title: "Selecionar o funcionário avaliado",
        isRequired: true,
        colCount: 0,
        choices: [
          "Alesandro Nunes Garcia",
          "Alicia Bingre Álvares",
          "Bruna Ataíde Moutinho",
          "Elisa Loio Castanheda",
          "Jacira Tavares Lamenha",
          "Jadson Abrantes Abelho",
          "João Felipe Moraes",
          "Luciana Aparecida da Silva",
          "Melany Simas Quinta",
          "Patrício Machado Anhaia",
          "Pietro Sanches Mourão",
          "Sancho Quintais Amoedo",
          "Simone Morgado Valadim",
          "Valdir Gimenez Carvalho",
          "Waldomiro Ribeiro dos Santos"
        ]
    }
  ]
};
*/