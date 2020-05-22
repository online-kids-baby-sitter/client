import React from 'react'
import {Button, Header, Icon, Image, Modal} from 'semantic-ui-react'

const ModalScrolling = ({trigger, header, children, actions}) => (
  <Modal trigger={trigger}>
    <Modal.Header>{header}</Modal.Header>
    <Modal.Content scrolling>
      <Modal.Description>
        {children}
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalScrolling
