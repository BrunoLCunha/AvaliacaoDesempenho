import {
  Dropdown,
  Nav,
  Sidenav,
  Icon,
  Container,
  Sidebar,
  Header,
  Content,
} from "rsuite";

const Page = (props) => {
  return (
    <div>
      <Container>
        <Container>
          <Header>
            <h2>{props.pageTitle}</h2>
            <p style={{marginTop: "12px"}}>{props.pageSubtitle}</p>
          </Header>
          <Content>{props.children}</Content>
        </Container>
      </Container>
    </div>
  );
};

export default Page;
