import React, {useState} from "react";
import LanguageSelector from "./languageSelector";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import mediaQuery from "styled-media-query";
import {Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react';
import {useMediaQuery} from "react-responsive";
import {changeLanguage} from "../../stores";


const Header = ({children}) => {
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery({query: '(max-device-width: 768px)'});
  return <Sidebar.Pushable style={{transaction: "none", transform: "none"}}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible={visible}
      width='thin'
      style={{position:"fixed"}}
    >
      <div style={{
        height: isMobile ? "90vh" : "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position:"fixed"
      }}>
        <div>
          <Menu.Item as={Link} to="/">
            <Icon name='home'/>
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/qa">
            <Icon name='question circle'/>
            Q&A
          </Menu.Item>
          <Menu.Item as="a" href="https://forms.gle/JaSEyM7JUm7jL6Lw5">
            <Icon name="edit"/>
            <FormattedMessage id="header.applicationForm"/>
          </Menu.Item>
        </div>
        <div>
          <Menu.Item as="div">
            <Icon name="globe"/>
          </Menu.Item>
          <Menu.Item as="a" onClick={() => changeLanguage("en")}>
            English
          </Menu.Item>
          <Menu.Item as="a" onClick={() => changeLanguage("ja")}>
            日本語
          </Menu.Item>
        </div>
      </div>
    </Sidebar>

    <Sidebar.Pusher>
      <div onClick={() => visible && setVisible(false)}>
        <Banner style={{position: isMobile && "fixed", zIndex: isMobile && "99"}}>
          <div className="ui container">
            <TableContainer>
              <Icon name="sidebar" style={{fontSize: "2rem", margin: "4vh 0 0 0", color: "#897657"}}
                    onClick={() => setVisible(!visible)}/>
            </TableContainer>
          </div>
        </Banner>
        <div>{children}</div>
      </div>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
};


const Banner = styled.div`
  background-image: url('/images/header/banner.png');
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: 20vw;
  margin-bottom: 5vh;
`;
const TableContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:1rem;
`;
const Title = styled.div`
  display: block;
  width: 100vw;
  margin-left: -2vw; 
`;
const Black = styled.div`
  color: black;
  margin-right: 4vw;
`;

const Items = styled.div`
  margin-top: 3vh;
  display: flex;
  text-align: right;
  color: black;
`;
export default Header;
