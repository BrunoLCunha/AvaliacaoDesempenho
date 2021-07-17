import React, { Component } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

class Report extends Component {
  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }

  render() {
    const dat = this.props.survey.data;
    console.log(dat);
    const survey = JSON.parse(JSON.stringify(this.props.survey));
    console.log(survey);
    let questions = survey["pages"].map((page, index) => (
      <Table key={index}>
        <caption>{page["navigationTitle"]}</caption>
        <thead>
          <tr>
            <th>Questão</th>
            <th>Resposta</th>
            <th>Comentário</th>
          </tr>
        </thead>
        <tbody>
          {page["elements"].map((question, index2) => 
            !question["name"].includes("opcional") && (
              <tr key={index2}>
                <td>{question["title"]}</td>
                <td>{dat[question["name"]]}</td>
                <td>{dat[page["elements"][index2+1]["name"]]}</td>

              </tr>
            )
          )}
        </tbody>
      </Table>
    ));

    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <Button style={{float: "right"}} onClick={this.printDocument}>Download Report</Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <div
              id="divToPrint"
              className="mt4"
              style={{
                width: "210mm",
                minHeight: "297mm",
                marginLeft: "auto",
                marginRight: "auto",
              }}>
              
              <Container style={{ 
                marginTop: "5px",
                marginBottom: "5px",
                maxWidth: "200mm", 
                }}>
                <Row className="justify-content-md-center" style={{marginBottom: "10px"}}><h1>Report</h1></Row>
                <Row>
                  <Col>{questions}</Col>
                </Row>
              </Container>
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Report;
