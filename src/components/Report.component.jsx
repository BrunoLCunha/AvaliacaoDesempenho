import React, { Component } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Worker from "../context/avaliator-context";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 0
    };
    this.printDocument = this.printDocument.bind(this);
  }

  printDocument() {
    this.setState({loading: 1});
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");
    const page4 = document.getElementById("page4");

    let tabs = [page1, page2, page3, page4]

    var pdf = new jsPDF("p", "mm", "a4");

    setTimeout(() => {
      const tasks = tabs.map(tab => html2canvas(tab))
      Promise.all(tasks).then(canvases =>
        {
          var count = 0
          for (const canvas of canvases)
          {
              if (count > 0) pdf.addPage()
              const imgData = canvas.toDataURL('image/png');
              pdf.addImage(imgData, 'JPEG', 0, 0);
              count++;
          }
          pdf.save("relatorio.pdf");

          this.setState({loading: 2});
        })
    }, 1000);


  }

  render() {
    const dat = this.props.survey.data;
    const survey = JSON.parse(JSON.stringify(this.props.survey));
    let avaliador = "Vinicius Matias - Cargo: Gerente de TI";
    let surveyinfo = {};
    let mean = {}
    let means = <div></div>;
    let questions = <div></div>;
    let avaliacao = 
    {
      "Desempenho": 
      {
        "bom": "Seu funcionário traz resultados de forma consistente.",
        "ruim": "Seu funcionário precisa de orientação para melhorar seus resultados"
      },
      "Comportamento":
      {
        "bom": "Seu funcionário se comporta de maneira profissional no ambiente de trabalho.",
        "ruim": "Seu funcionário precisa de moderação ao se expressar e seus resultados devem ser verificados."
      },
      "Habilidades sociais/pessoais":
      {
        "bom": "Seu funcionário se relaciona de forma saudável com seus colegas.",
        "ruim": "Seu funcionário pode ser um pouco precipitado ao se comunicar com seus colegas causando desentendimentos."
      }
    };

    if (this.state.loading <= 1)
    {
      for(let page of survey['pages']){
        let index2 = -1;
        let category = page['navigationTitle'];
        let questions = [];
        let mean_ = 0

        for (let question of page['elements']){
          index2++;
          let question_ = question['title'];

          if (question['name'].includes('opcional')) {continue;}

          let answer = dat[question['name']];
          if (typeof answer === 'boolean'){ 
            mean_ += answer ? 10 : 0; 
            answer = answer ? "Sim": "Não"
          } else { mean_ += answer }
          
          let comments = "Nenhum comentário";
          if (dat[page["elements"][index2+1]["name"]])
          {
            comments = dat[page["elements"][index2+1]["name"]];
          }
          questions.push({'question': question_, 'category': category, 'answer': answer, 'comments': comments})
        }
        surveyinfo[category] = questions
        let round = Math.round(((mean_ / ((index2+1)/2)) + Number.EPSILON) * 100) / 100
        mean[category] = round
      }

      means = (
      <div style={{ 
        marginTop: "50px",
        marginBottom: "20px",
        width: "210mm",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
      <Row className="justify-content-md-center" style={{marginBottom: "10px"}}>
        <Col md="auto"><h2><b>Performance Report</b></h2></Col>
      </Row>

      <Row style={{ 
          marginTop: "10px",
          marginBottom: "10px",
          width: "190mm",
          marginLeft: "auto",
          marginRight: "auto"
      }}>
        <b><h5>Avaliador: {avaliador}</h5></b>
      </Row>
      <Row style={{ 
          marginTop: "10px",
          marginBottom: "10px",
          width: "190mm",
          marginLeft: "auto",
          marginRight: "auto"
      }}>
        <Worker.Consumer>
                {({ worker, setWorker }) => (
        <b><h5>Avaliado: {worker}</h5></b>)}
        </Worker.Consumer>
      </Row>
      <Row style={{ 
          marginTop: "30px",
          marginBottom: "20px",
          width: "190mm",
          marginLeft: "auto",
          marginRight: "auto"
      }}>

        <Row style={{marginBottom: "30px"}}>
          <Col md="auto"><h4>Média por Categoria</h4></Col>
        </Row>
        <Table striped bordered hover style={{ 
            marginTop: "20px",
            marginBottom: "20px",
            width: "190mm",
            marginLeft: "auto",
            marginRight: "auto"
        }}>
          <caption><b>Média por Categoria</b></caption>
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Média (0-10)</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(mean).map((category, index) =>(
              <tr key={index}>
                <td>{category}</td>
                <td>{mean[category]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Row style={{marginBottom: "10px", marginTop: "30px"}}>
          <Col md="auto"><h4>Comentários Gerais</h4></Col>
        </Row>
        <Row>
          <Col style={{marginBottom: "10px"}} md="auto"><p>Desempenho: {mean['Desempenho'] >= 5 ? (<div>{avaliacao['Desempenho']['bom']}</div>) : (<div>{avaliacao['Desempenho']['ruim']}</div>)}</p></Col>
          <Col style={{marginBottom: "10px"}} md="auto"><p>Comportamento: {mean['Comportamento'] >= 5 ? (<div>{avaliacao['Comportamento']['bom']}</div>) : (<div>{avaliacao['Comportamento']['ruim']}</div>)}</p></Col>
          <Col style={{marginBottom: "10px"}} md="auto"><p>Habilidades sociais/pessoais: {mean['Habilidades sociais/pessoais'] >= 5 ? (<div>{avaliacao['Habilidades sociais/pessoais']['bom']}</div>) : (<div>{avaliacao['Habilidades sociais/pessoais']['ruim']}</div>)}</p></Col>
        </Row>
      </Row>
      </div>
      )

      questions = Object.keys(surveyinfo).map((page, index) => (
      <div id={"page"+(index+2)} key={index} style={{ 
            marginTop: "20px",
            marginBottom: "20px",
            width: "210mm",
            marginLeft: "auto",
            marginRight: "auto"
        }}>
        {index === 0 && (
        <Row className="justify-content-md-center" style={{marginBottom: "10px"}}>
          <Col md="auto"><h3>Respostas</h3></Col>
        </Row>)}
        <Row style={{ 
            marginTop: "20px",
            marginBottom: "20px",
            width: "190mm",
            marginLeft: "auto",
            marginRight: "auto"
        }}>
        {index === 0 ? ( 
        <Row style={{marginBottom: "30px"}}>
          <Col md="auto"><h4>{page}</h4></Col>
        </Row>) :
        (
        <Row style={{marginBottom: "30px", marginTop: "50px"}}>
          <Col md="auto"><h4>{page}</h4></Col>
        </Row>
        )}
        <Table className="justify-content-md-center" striped bordered hover style={{ 
            marginTop: "20px",
            marginBottom: "20px",
            width: "190mm",
            marginLeft: "auto",
            marginRight: "auto"
        }}>
          <caption><b>{page}</b></caption>
          <thead>
            <tr>
              <th>Questão</th>
              <th>Resposta</th>
              <th>Comentário</th>
            </tr>
          </thead>
          <tbody>
            {(surveyinfo[page]).map((question, index2) => 
              (
                <tr key={index2}>
                  <td>{question["question"]}</td>
                  <td>{question["answer"]}</td>
                  <td>{question["comments"]}</td>
                </tr>
              )
            )}
          </tbody>
        </Table>
        </Row>
      </div>
      ));
    console.log(surveyinfo)

    }

    return (
      <React.Fragment>
        <Container style={{marginTop: "20px"}}>
          {this.state.loading === 2 ? (
            <div>
            <Row className="justify-content-md-center">
            <Col md="auto"><h3>Download finalizado</h3></Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Button variant="primary" href="/dashboard">
                  Voltar para o início
                </Button>
              </Col>
            </Row>
            </div>) : (
          <div>
          <Row>
            <Col>
              <Button style={{float: "right"}} onClick={this.printDocument}>Download Report</Button>
            </Col>
          </Row>
          {this.state.loading === 1 && (
          <Row className="justify-content-md-center">
              <Col md="auto">
              <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Carregando...
            </Button>
            </Col>
          </Row>
          )}
          <Row className="justify-content-md-center">         
            <Row id="page1" className="justify-content-md-center" style={{marginBottom: "10px"}}>
              <Col>{means}</Col>
            </Row>
            <Row className="justify-content-md-center" style={{marginBottom: "10px"}}>
              <Col>{questions}</Col>
            </Row>
          </Row>
          </div>)}
        </Container>
      </React.Fragment>
    );
  }
}

export default Report;
