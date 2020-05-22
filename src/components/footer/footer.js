import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import TermModal from "../../pages/component/modal/TermModal";
import PrivacyModal from "../../pages/component/modal/PrivacyModal";

const Footer = () => (
  <Container>
    <div className="ui container center aligned">
      <div style={{color: "white"}}>©CHANT-THROUGH Ltd. ❤️ KISEKI Authentic Japanese restaurant All Right Reserved.
      </div>
      <div style={{margin: "1rem"}}>
        <TermModal trigger={<Trigger><FormattedMessage id="footer.term"/></Trigger>}/>

        <div style={{margin: "0 1rem 0 1rem", display: "inline", color: "white"}}>|</div>
        <PrivacyModal trigger={<Trigger><FormattedMessage id="footer.privacy"/></Trigger>}/>
      </div>
    </div>
  </Container>);

const Container = styled.div`
  background-color: #827153;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3vh 0 1vh 0;
`;

const Trigger = styled.span`
  color: yellow;
  cursor: pointer;
`;

export default Footer;
