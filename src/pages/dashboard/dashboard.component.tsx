import React, { useState } from "react";
import {
  SelectPicker,
  Container,
  Content,
  Modal,
  Button,
  Header as H,
  Row,
  Col,
} from "rsuite";
import Worker from "../../context/avaliator-context";
import Sidebar from "../../components/Sidebar.component";
import Header from "../../components/Header.component";
import { useHistory } from "react-router-dom";

function Workers() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [func, setFunc] = useState<string>();
  const [modalVisible, setModalVisible] = useState(false);
  const history = useHistory();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <Container style={{ padding: "50px" }}>
          <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
            <Modal.Header>
              <Modal.Title>Avaliar {func?.split(" -")[0]}?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Tem certeza que deseja avaliar o(a) funcionário(a) {func}?
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => {
                  history.push("/avaliacao");
                }}
                appearance="primary"
              >
                Confimar
              </Button>

              <Button
                onClick={() => setModalVisible(false)}
                appearance="subtle"
              >
                Voltar
              </Button>
            </Modal.Footer>
          </Modal>
          <H style={{ marginBottom: "32px" }}>
            <h2>Escolha a pessoa avaliada</h2>
          </H>
          <Content>
            <Row>
              <Col xs={24} lg={12}>
                <Worker.Consumer>
                  {({ worker, setWorker }) => (
                    <SelectPicker
                      onSelect={(e: string) => {
                        setFunc(e);
                        setWorker(e);
                      }}
                      onClean={() => setFunc(undefined)}
                      placeholder="Selecione um(a) funcionário(a)"
                      style={{ width: "100%" }}
                      groupBy="role"
                      data={[
                        {
                          role: "Assistente",
                          value: "Alesandro Nunes Garcia - Cargo: Assistente",
                          label: "Alesandro Nunes Garcia",
                        },
                        {
                          role: "Assistente",
                          value: "Alicia Bingre Álvares - Cargo: Assistente",
                          label: "Alicia Bingre Álvares",
                        },
                        {
                          role: "Assistente",
                          value: "Bruna Ataíde Moutinho - Cargo: Assistente",
                          label: "Bruna Ataíde Moutinho",
                        },
                        {
                          role: "Assistente",
                          value: "Elisa Loio Castanheda - Cargo: Assistente",
                          label: "Elisa Loio Castanheda",
                        },
                        {
                          role: "Assistente",
                          value: "Jacira Tavares Lamenha - Cargo: Assistente",
                          label: "Jacira Tavares Lamenha",
                        },
                        {
                          role: "Desenvolvedor(a)",
                          value:
                            "Jadson Abrantes Abelho - Cargo: Desenvolvedor(a)",
                          label: "Jadson Abrantes Abelho",
                        },
                        {
                          role: "Desenvolvedor(a)",
                          value: "João Felipe Moraes - Cargo: Desenvolvedor(a)",
                          label: "João Felipe Moraes",
                        },
                        {
                          role: "Desenvolvedor(a)",
                          value:
                            "Luciana Aparecida da Silva - Cargo: Desenvolvedor(a)",
                          label: "Luciana Aparecida da Silva",
                        },
                        {
                          role: "Desenvolvedor(a)",
                          value:
                            "Melany Simas Quinta - Cargo: Desenvolvedor(a)",
                          label: "Melany Simas Quinta",
                        },
                        {
                          role: "Desenvolvedor(a)",
                          value:
                            "Patrício Machado Anhaia - Cargo: Desenvolvedor(a)",
                          label: "Patrício Machado Anhaia",
                        },
                        {
                          role: "Analista de Negócios",
                          value:
                            "Pietro Sanches Mourão - Cargo: Analista de Negócios",
                          label: "Pietro Sanches Mourão",
                        },
                        {
                          role: "Analista de Negócios",
                          value:
                            "Sancho Quintais Amoedo - Cargo: Analista de Negócios",
                          label: "Sancho Quintais Amoedo",
                        },
                        {
                          role: "Diretor(a) Associado(a)",
                          value:
                            "Simone Morgado Valadim - Cargo: Diretor(a) Associado(a)",
                          label: "Simone Morgado Valadim",
                        },
                        {
                          role: "Suporte Técnico",
                          value:
                            "Valdir Gimenez Carvalho - Cargo: Suporte Técnico",
                          label: "Valdir Gimenez Carvalho",
                        },
                        {
                          role: "Suporte Técnico",
                          value:
                            "Waldomiro Ribeiro dos Santos - Cargo: Suporte Técnico",
                          label: "Waldomiro Ribeiro dos Santos",
                        },
                      ]}
                    ></SelectPicker>
                  )}
                </Worker.Consumer>
              </Col>
              <Col xs={24} lg={12}>
                <Button
                  disabled={!func}
                  onClick={() => setModalVisible(true)}
                  appearance="ghost"
                >
                  Prosseguir
                </Button>
              </Col>
            </Row>
          </Content>
        </Container>
      </div>
    </div>
  );
}

export default Workers;
