import React from 'react';
import classes from './ProfileDescription.module.css';
import cn from 'classnames';
import { connect } from 'react-redux';
import {getPhotos} from '../../../redux/album-reducer'
import Photo from './Photo';
import Preloader from '../../common/Preloader/Preloader';
import { AlbumPhotoType } from '../../../types/types';
import { AppStateType } from '../../../redux/redux-store';

type PropsType = {
    getPhotos: (numberOfPhotos: number, page: number) => void,
    isFetching: boolean,
    photos: Array<AlbumPhotoType>,
    numberOfPhotos: number,
    userId: number
}
class Photos extends React.Component<PropsType> {
    
    componentDidMount() {
        this.props.getPhotos(this.props.numberOfPhotos, this.props.userId % 10 + 1);
    }
    
    render () {
        return (
        <div className={cn(classes.descriptionBlock, classes.photos)}>
            <h1 className={classes.title}>Album:</h1>
            {
            this.props.isFetching
            ? 
            <Preloader /> 
            : 
            <div className={classes.photosBlock}>{this.props.photos.map((photo, index) => <Photo thumbnail={photo.src.tiny}
                photo={photo.src.large} key={index}/>)}</div>
            }
        </div>)
        }
}
const mapStateToProps = (state: AppStateType) => ({
    photos: state.album.photos, 
    numberOfPhotos: state.album.numberOfPhotos, 
    isFetching: state.album.isFetching
})

export default connect(mapStateToProps, {getPhotos})(Photos);