import React from 'react'
import ModalScrolling from "./Modal";
import {FormattedMessage} from "react-intl";
import styled from "styled-components";

const TermModal = ({trigger}) => (
  <ModalScrolling trigger={trigger} header={<FormattedMessage id="footer.term"/>}>
    <Foreword><FormattedMessage id="term.foreword"/></Foreword>
    {range(15).map(n => ++n).map(index =>
      <Paragraph key={index}>
        <h2 className="ui header"><FormattedMessage id={`term.${index}.header`}/></h2>
        <Sentence>
          <FormattedMessage id={`term.${index}.description`} values={{
            div: (...chunks) => <div>{chunks}</div>,
            p: (...chunks) => <p>{chunks}</p>,
            ol: (...chunks) => <ol>{chunks}</ol>,
            li: (...chunks) => <li>{chunks}</li>
          }}/>
        </Sentence>
      </Paragraph>
    )}
  </ModalScrolling>
);

const range = length => [...Array(length).keys()];
const Foreword = styled.div`
`;
const Sentence = styled.div`
`;
const Paragraph = styled.div`
  margin: 2vh 0 0 0;

`;
export default TermModal;
