import {FormattedMessage} from "react-intl";
import React from 'react'
const MultiLineFormattedMessage = ({...others}) => (
  <FormattedMessage {...others}>
    {message => {
      return <div>{message.split("\n").map((m,index) => (<div key={index}>{m}<br/></div>))}</div>
    }}
  </FormattedMessage>
);
export default MultiLineFormattedMessage;
