import React from "react";
import styled from "styled-components";

const Footer = () => (
  <Container>
    <div className="ui container center aligned">
      <div style={{color: "white"}}>©CHANT-THROUGH Ltd. ❤️ KISEKI Authentic Japanese restaurant All Right Reserved.</div>
    </div>
  </Container>);

const Container = styled.div`
  background-color: #827153;
  height: 9vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1vh;
`;


export default Footer;
