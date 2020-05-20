import React, {useState} from "react";
import Header from "../../components/header/header";
import {FormattedMessage} from "react-intl";
import styled from "styled-components";
import Footer from "../../components/footer/footer";
import mediaQuery from "styled-media-query";
import {useMediaQuery} from "react-responsive";
import {Accordion, Icon} from 'semantic-ui-react'
import MultiLineFormattedMessage from "../component/MultiLineFormattedMessage";


const QA = () => {
  const isMobile = useMediaQuery({query: '(max-device-width: 768px)'});
  const [activeIndex, setActiveIndex] = useState();
  return (
    <div>
      <Header>
        <div className="ui container">
          <Accordion>
            {range(6).map(index => (
              <div key={index}>
                <Accordion.Title
                  active={activeIndex === index}
                  index={index}
                  onClick={(e, props) => setActiveIndex(activeIndex === index ? void 0 : index)}
                >
                  <h2 className="ui header"><Icon name='dropdown'/>
                    <FormattedMessage id={`qas.${index}.title`}/>
                  </h2>
                  <Driver/>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index} style={{margin: "-2vh 0 3vh 2.5rem"}}>
                  <MultiLineFormattedMessage id={`qas.${index}.description`}/>
                </Accordion.Content>
              </div>
            ))}
          </Accordion>
        </div>
      </Header>
      <Footer/>
    </div>
  )
};

const range = length => [...Array(length).keys()];

const mediaMobile = mediaQuery.lessThan("medium");

const Driver = styled.div`
border:1px solid rgba(34,36,38,.15);
margin: 5vh 0 5vh 0;
`;

export default QA;
