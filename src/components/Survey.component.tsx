import React from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import { useEffect, useState} from "react";
import Report from './Report.component';

Survey.StylesManager.applyTheme("modern");

export interface ISurveyComponent {
  survey: Survey.ReactSurveyModel,
  surveyIndex: number,
  setSurveyIndex: React.Dispatch<React.SetStateAction<number>>
}

function SurveyComponent(props: ISurveyComponent) {
  const [complete, setComplete] = useState(false);

  const onComplete = (survey: Survey.ReactSurveyModel, json: JSON) => {
    //Write survey results into database
    setComplete(true);
    //console.log("Survey results: " + JSON.stringify(survey.data));
  };

  const onCurrentPageChanged = (survey: any) => {
    //console.log(survey);
    props.setSurveyIndex(survey.currentPageNo);
  }
  useEffect(() => {
    props.survey.currentPageNo = props.surveyIndex;
    // eslint-disable-next-line
  }, [props.surveyIndex]);

  if (complete)
  { return <Report survey={props.survey} />; }
  else
  {
    return (
      <React.Fragment>
        <Survey.Survey
          onCurrentPageChanged={onCurrentPageChanged}
          model={props.survey}
          onComplete={onComplete}
        />
      </React.Fragment>
    );
  }
}

export default SurveyComponent;
