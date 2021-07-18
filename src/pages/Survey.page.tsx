import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar.component";
import Header from "../components/Header.component";
import SurveyComponent from "../components/Survey.component";
import * as Survey from "survey-react";
import { surveyJSON as json } from "../data/survey.data";

function Home() {
  const [surveyIndex, setSurveyIndex] = useState(0);
  const [model, setModel] = useState<Survey.ReactSurveyModel>();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setModel(new Survey.Model(json));
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        setSurveyIndex={setSurveyIndex}
        surveyIndex={surveyIndex}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

        {model && (
          <SurveyComponent
            survey={model}
            surveyIndex={surveyIndex}
            setSurveyIndex={setSurveyIndex}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
