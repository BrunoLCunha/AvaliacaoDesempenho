import styled from "styled-components";
import { Nav } from "rsuite";

export const CustomNav = styled(Nav)`
  ul .rs-nav-item:not(.rs-nav-item-active) a {
    color: white !important;
  }

  ul .rs-nav-item.rs-nav-item-active a {
    color: #66aeff !important;
  }

  ul .rs-nav-item.rs-nav-item-active a::before {
    background-color: #66aeff !important;
  }
`;
