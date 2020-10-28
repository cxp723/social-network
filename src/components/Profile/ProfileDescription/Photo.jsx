import React from 'react'
import { Modal, Image } from 'semantic-ui-react';
import classes from './ProfileDescription.module.css';

function Photo({thumbnail, photo, author}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
    size="large"
    closeIcon
    dimmer="blurring"
    basic
      open={open}
      trigger={<img className={classes.photo} src={thumbnail} alt=''/>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Content>
        <Image src={photo} className={classes.fullscreenPhoto}/>
      </Modal.Content>
    </Modal>
  )
}

export default Photo
