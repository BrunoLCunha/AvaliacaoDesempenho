import React, { Component } from "react";
import * as Survey from "survey-react";
import * as SurveyPDF from "survey-pdf";
import "survey-react/modern.css";
import { useEffect } from "react";

Survey.StylesManager.applyTheme("modern");

export interface ISurveyComponent {
  survey: Survey.ReactSurveyModel,
  surveyIndex: number,
  setSurveyIndex: React.Dispatch<React.SetStateAction<number>>
}

function SurveyComponent(props: ISurveyComponent) {
  const onComplete = (survey: Survey.ReactSurveyModel, json: JSON) => {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
  };

  const onCurrentPageChanged = (survey: any) => {
    console.log(survey);
    props.setSurveyIndex(survey.currentPageNo);
  }

  const saveSurveyToPdf = (
    json: JSON,
    filename: string,
    surveyModel: any,
    pdfWidth: number,
    pdfHeight: number
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
      onCurrentPageChanged={onCurrentPageChanged}
      model={props.survey}
      onComplete={onComplete}
    />
  );
}

export default SurveyComponent;
