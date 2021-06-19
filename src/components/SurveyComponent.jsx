import React, { Component } from "react";
import * as Survey from "survey-react";
import * as SurveyPDF from "survey-pdf";
import "survey-react/modern.css";
import { useEffect } from "react";
//import "./index.css";

Survey.StylesManager.applyTheme("modern");
//git remote add origin https://github.com/BrunoLCunha/AvaliacaoDesempenho
function SurveyComponent (props) {

    const onComplete = (survey, json) => {
        //Write survey results into database
        console.log("Survey results: " + JSON.stringify(survey.data));
    }

    const saveSurveyToPdf = (json, filename, surveyModel, pdfWidth, pdfHeight) => {
        var options = {
            fontSize: 14,
            margins: {
                left: 10,
                right: 10,
                top: 10,
                bot: 10
            },
            format: [pdfWidth, pdfHeight]
        };
        var surveyPDF = new SurveyPDF.SurveyPDF(json, options);
        surveyPDF.data = surveyModel.data;
        surveyPDF.save(filename);
    }
    
    useEffect(() => {
        survey.currentPageNo = props.pageIndex;
        //survey.nextPage()
        console.log(props)
    }, [props])
    
    var surveyValueChanged = function (sender, options) {
        var el = document.getElementById(options.name);
        if(el) {
            console.log(el);
            el.value = options.value;
        }
    };

    const values = [1,2,3,4,5,6,7,8,9,10]
    const maxRate = "Satisfatório"
    const minRate = "Insuficiente"

    const json = {
        elements: [1],
        showTitle: false,
        innerIndent: 1,
        ignoreValidation: true,
        progressBarType: "buttons",
        showProgressBar: "top",
        pages: [
            {
                navigationTitle: "Desempenho",
                //title: "Eficácia",
                questions: [
                {type: "rating", name: "desempenho1", title: "Quão eficaz é seu funcionário em suas tarefas?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcional1", title: "Comentários adicionais:", isRequired: false},
                //title: "Eficiencia",
                {type: "rating", name: "desempenho2", title: "Quão eficiente é seu funcionário?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcional2", title: "Comentários adicionais:", isRequired: false}
                ]
            },
            {
                navigationTitle: "Comportamento", 
                questions: [
                //postura
                {type: "rating", name: "disponibilidade", title: "Seu funcionário tem disponibilidade quando solicitado?", rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate},
                {type: "text", name: "opcional3", title: "Comentários adicionais:", isRequired: false},
                {type: "rating", name: "assiduidade", title: "Quão assíduo é seu funcionário?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcional4", title: "Comentários adicionais:", isRequired: false},
                //resiliencia
                {type: "rating", name: "expressao", title: "Quão bem seu funcionário se expressa no ambiente de trabalho?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcional5", title: "Comentários adicionais:", isRequired: false},
                {type: "rating", name: "prazo", title: "Quão bem seu funcionário lida com prazos inflexíveis?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcional6", title: "Comentários adicionais:", isRequired: false},
                {type: "rating", name: "tensao", title: "Durante desentendimentos, quão tranquilo seu funcionário se mantém?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcional7", title: "Comentários adicionais:", isRequired: false},
                //desafiii Alek
                {type: "rating", name: "cotidiano", title: "Quão propenso a engajar em atividades fora do cotidiano é seu funcionário?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcional8", title: "Comentários adicionais:", isRequired: false},
                {type: "rating", name: "aprendizado", title: "Após executar uma tarefa nova, quão bem seu funcionário demonstra aprendizado?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcional9", title: "Comentários adicionais:", isRequired: false},
                //ética
                {type: "rating", name: "erros", title: "Quão bem seu funcionário lida com erros cometidos por ele?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcional10", title: "Comentários adicionais:", isRequired: false}
                ]
            },
            {
                navigationTitle: "Habilidades socias/pessoais", 
                questions: [
                //resolução de problemas
                {type: "rating", name: "resolucao", title: "Quão propenso a se envolver em discussões é seu funcionário?", isRequired: true, rateValues:values, maxRateDescription:maxRate, minRateDescription:minRate },
                {type: "text", name: "opcional", title: "Comentários adicionais:", isRequired: false}
                ]
            }
            ]
    };

    const survey = new Survey.Model(json);
        return (
            <Survey.Survey
                model={survey} onComplete={onComplete}
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