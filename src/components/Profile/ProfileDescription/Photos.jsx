import React from 'react';
import classes from './ProfileDescription.module.css';
import cn from 'classnames';
import { connect } from 'react-redux';
import {getPhotos} from '../../../redux/album-reducer'
import Photo from './Photo';


class Photos extends React.Component {
    
    componentDidMount() {
        this.props.getPhotos(this.props.numberOfPhotos);
    }
    
    render () {
        return (
        <div className={cn(classes.descriptionBlock, classes.photos)}>
            <h1 className={classes.title}>Album:</h1>
            <div className={classes.photosBlock}>{this.props.photos.map((photo, index) => <Photo thumbnail={photo.src.tiny}
                photo={photo.src.large} author={photo.photographer} key={index}/>)}</div>
        </div>)
        }
}
export default connect(state => ({photos: state.album.photos, numberOfPhotos: state.album.numberOfPhotos}), {getPhotos})(Photos);