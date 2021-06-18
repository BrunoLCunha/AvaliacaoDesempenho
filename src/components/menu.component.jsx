import { Dropdown, Nav, Sidenav, Icon } from 'rsuite';

function SideMenu() {
  return (
    <div style={{ width: 250 }}>
      <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Icon icon="bar-chart" />}>
              Desempenho
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
              Comportamento
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="avatar" />}>
              Habilidades sociais/pessoais
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}

export default SideMenu;
