import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
//import "./index.css";

Survey.StylesManager.applyTheme("modern");
//https://surveyjs.io/examples/library/?id=survey-lazy&platform=Reactjs&theme=modern
//82 radio group
//94 Rating
//
class SurveyComponent extends Component {


    onComplete(survey, options) {
        //Write survey results into database
        console.log("Survey results: " + JSON.stringify(survey.data));
    }

    render() {
    var surveyValueChanged = function (sender, options) {
        var el = document.getElementById(options.name);
        if(el) {
            console.log(el);
            el.value = options.value;
        }
    };

    const values = [1,2,3,4,5,6,7,8,9,10]
    const maxRate = "Muito"
    const minRate = "Pouco"

    const json = {
        elements: [1],
        title: "AVALIATOR",
        innerIndent: 1,
        progressBarType: "buttons",
        showProgressBar: "top",
        pages: [
            {
                navigationTitle: "Desempenho",
                navigationDescription: "Descrição SOBRE ESSA CATEGORIA",
                
                questions: [
                {type: "text", name: "avaliador", title: "Nome do avaliador:", isRequired: true},
                {type: "text", name: "funcionario", title: "Nome do funcionário:", isRequired: true},
                {type: "rating", name: "desempenho1", title: "Seu funcionário é eficaz?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcionalDesemp1", title: "Comentários adicionais:", isRequired: true},
                {type: "rating", name: "desempenho2", title: "Seu funcionário é eficiente?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcionalDesemp2", title: "Comentários adicionais:", isRequired: true}
                ]
            }]

           /* [
            {
                navigationTitle: "Comportamento",
                navigationDescription: "Nessa seção você deverá avaliar o comportamento do seu funcionário",
                
                questions: [
                {type: "text", name: "funcionario", title: "Nome do funcionário:", isRequired: true},
                {type: "rating", name: "desempenho1", title: "Seu funcionário é eficaz?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "rating", name: "desempenho2", title: "Seu funcionário é eficiente?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate }
                ]
            }
            ]*/
    };

    const survey = new Survey.Model(json);
        return (
            <Survey.Survey
                model={survey} onComplete={this.onComplete}
            />
        );
    }
}

export default SurveyComponent;

/*
import React, { Component } from "react";
import * as Survey from "survey-react";

import "survey-react/modern.css";
import "./index.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
    constructor() {
        super();
        
    }
    render() {
        

        var surveyValueChanged = function (sender, options) {
    var el = document.getElementById(options.name);
    if(el) {
        el.value = options.value;
    }
};

        const json = { questions: [
    {type: "text", name: "name", title: "Your name:"},
    {type: "text", name: "email", title: "Your e-mail"},
    { type: "checkbox", name: "car", title: "What car are you driving?", isRequired: true, colCount: 4,
        choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"] }
]};
const survey = new Survey.Model(json);

        

        

        return (
            <Survey.Survey
                model={survey}
            />
        );
    }
}

export default SurveyComponent;
*/