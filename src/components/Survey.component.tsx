import React from "react";
import * as Survey from "survey-react";
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

  useEffect(() => {
    props.survey.currentPageNo = props.surveyIndex;
    // eslint-disable-next-line
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
