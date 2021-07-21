import React, { Component } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 0,
      style: {
        marginTop: "20px",
        marginBottom: "20px",
        maxWidth: "200mm", 
      }
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

    let surveyinfo = {};
    let mean = {}
    let means = <div></div>;
    let questions = <div></div>;

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
          <h2><b>Report</b></h2>
        </Row>
        <Row style={{ 
            marginTop: "20px",
            marginBottom: "20px",
            width: "190mm",
            marginLeft: "auto",
            marginRight: "auto"
        }}>
        <Row style={{marginBottom: "30px"}}>
          <h4>Média por Categoria</h4>
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
          <h3>Respostas</h3>
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
          <h4>{page}</h4>
        </Row>) :
        (
        <Row style={{marginBottom: "30px", marginTop: "50px"}}>
          <h4>{page}</h4>
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
                <Button variant="primary" href="/">
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
