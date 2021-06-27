import React, { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import SurveyComponent from "../components/SurveyComponent";
import * as Survey from "survey-react";

function Home({}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [saveData, setSaveData] = useState();
  const [surveyIndex, setSurveyIndex] = useState(0);
  const [model, setModel] = useState();
  
  useEffect(() => {
    setModel(new Survey.Model(json));
  }, [])

  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const maxRate = "Muito";
  const minRate = "Pouco";
  const json = {
    elements: [1],
    title: "Avaliação",
    showTitle: true,
    innerIndent: 1,
    ignoreValidation: true,
    progressBarType: "buttons",
    showProgressBar: "top",
    pages: [
      {
        navigationTitle: "Desempenho",
        //title: "Eficácia",
        questions: [
          {
            type: "rating",
            name: "eficaz",
            title: "Quão eficaz é seu funcionário em suas tarefas?",
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
            title: "Quão eficiente é seu funcionário?",
            isRequired: true,
            rateValues: values,
            maxRateDescription: maxRate,
            minRateDescription: minRate,
          },
          {
            type: "text",
            name: "eficiente",
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
            title: "Seu funcionário tem disponibilidade quando solicitado?",
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
            title: "Quão assíduo é seu funcionário?",
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
            title:
              "Quão bem seu funcionário se expressa no ambiente de trabalho?",
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
            title: "Quão bem seu funcionário lida com prazos inflexíveis?",
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
              "Durante desentendimentos, quão tranquilo seu funcionário se mantém?",
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
              "Quão propenso a engajar em atividades fora do cotidiano é seu funcionário?",
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
              "Após executar uma tarefa nova, quão bem seu funcionário demonstra ter aprendido algo com ela?",
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
            title: "Quão bem seu funcionário lida com erros cometidos por ele?",
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
            type: "rating",
            name: "resultados",
            title: "Quão mascarados são os resultados do seu funcionário?",
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
            type: "rating",
            name: "fofocas",
            title:
              "Quanto a fofocas no ambiente de trabalho, quão informado seu funcionário se mantém?",
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
        ],
      },
      {
        navigationTitle: "Habilidades socias/pessoais",
        questions: [
          //resolução de problemas
          {
            type: "rating",
            name: "resolucao",
            title:
              "Quão propenso a se envolver em discussões é seu funcionário?",
            isRequired: true,
            rateValues: values,
            maxRateDescription: maxRate,
            minRateDescription: minRate,
          },
          {
            type: "text",
            name: "opcional",
            title: "Comentários adicionais:",
            isRequired: false,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        setSurveyIndex={setSurveyIndex}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {model && <SurveyComponent
          saveData={saveData}
          setSaveData={setSaveData}
          survey={model}
          surveyIndex={surveyIndex}
        />}
      </div>
    </div>
  );
}

export default Home;
