import React, { Component } from "react";
import * as Survey from "survey-react";
import * as SurveyPDF from "survey-pdf";
import "survey-react/modern.css";
import { useEffect } from "react";
//import "./index.css";

Survey.StylesManager.applyTheme("modern");
//git remote add origin https://github.com/BrunoLCunha/AvaliacaoDesempenho
function SurveyComponent(props) {
  const onComplete = (survey, json) => {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
  };

  const saveSurveyToPdf = (
    json,
    filename,
    surveyModel,
    pdfWidth,
    pdfHeight
  ) => {
    var options = {
      fontSize: 14,
      margins: {
        left: 10,
        right: 10,
        top: 10,
        bot: 10,
      },
      format: [pdfWidth, pdfHeight],
    };
    var surveyPDF = new SurveyPDF.SurveyPDF(json, options);
    surveyPDF.data = surveyModel.data;
    surveyPDF.save(filename);
  };

  useEffect(() => {
    props.survey.currentPageNo = props.surveyIndex;
  }, [props.surveyIndex]);

  return (
    <Survey.Survey
      model={props.survey}
      onComplete={onComplete}
    />
  );
}

export default SurveyComponent;

/*
const desempenho = {
        elements: [1],
        showTitle: false,
        innerIndent: 1,
        progressBarType: "buttons",
        showProgressBar: "top",
        pages: [
            {
                navigationTitle: "Eficácia",
                questions: [
                {type: "rating", name: "desempenho1", title: "Quão eficaz é seu funcionário em suas tarefas?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcionalDesemp1", title: "Comentários adicionais:", isRequired: false},
                {type: "rating", name: "desempenho2", title: "Quão eficiente é seu funcionário?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcionalDesemp2", title: "Comentários adicionais:", isRequired: false}
                ]
            },
            {
                navigationTitle: "Eficiênc",
                questions: [
                {type: "rating", name: "desempenho1", title: "Quão eficaz é seu funcionário em suas tarefas?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcionalDesemp1", title: "Comentários adicionais:", isRequired: false},
                {type: "rating", name: "desempenho2", title: "Quão eficiente é seu funcionário?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcionalDesemp2", title: "Comentários adicionais:", isRequired: false}
                ]
            }
        ]
    }*/
