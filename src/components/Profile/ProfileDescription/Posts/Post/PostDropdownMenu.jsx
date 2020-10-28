import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import classes from '../../ProfileDescription.module.css'

const PostDropdownMenu = ({deletePost, postId}) => {
    const trigger = (
        <span className={classes.dropdown}>
          <Icon name="ellipsis horizontal"/>
        </span>
      )
      
      const options = [
        { key: 'edit', icon: 'pencil alternate', content: (<span className={classes.option}>Edit post</span>) },
        { key: 'delete', icon: 'trash alternate', onClick: () => {deletePost(postId)}, content: (<span className={classes.option}>Delete post</span>) }
        
      ]

    return (
        <Dropdown pointing='top right' trigger={trigger} options={options} className={classes.menuContainer} icon={null}/>
    )
}
  

export default PostDropdownMenu;