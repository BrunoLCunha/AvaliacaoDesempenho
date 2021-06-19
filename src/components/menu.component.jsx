import { Dropdown, Nav, Sidenav, Icon } from 'rsuite';

function SideMenu(props) {
  return (
    <div style={{ width: 250 }}>
      <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item onClick={() => props.setPageIndex(0)} eventKey="1" icon={<Icon icon="bar-chart" />}>
              Início
            </Nav.Item>
            <Nav.Item onClick={() => props.setPageIndex(1)} eventKey="2" icon={<Icon icon="bar-chart" />}>
              Desempenho
            </Nav.Item>
            <Nav.Item onClick={() => props.setPageIndex(2)} eventKey="3" icon={<Icon icon="group" />}>
              Comportamento
            </Nav.Item>
            <Nav.Item onClick={() => props.setPageIndex(3)} eventKey="4" icon={<Icon icon="avatar" />}>
              Habilidades sociais/pessoais
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}

export default SideMenu;
