import React, { useState } from "react";
import Header from "../components/Header.component";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {/* <Sidebar setSurveyIndex={setSurveyIndex} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}

        <main>
          {/* content */}
          <Container style={{ textAlign: "center" }}>
            <Button
              variant="success"
              href="/avaliacao"
              style={{ position: "absolute", top: "50%" }}
            >
              Iniciar a Avaliação
            </Button>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default Home;
