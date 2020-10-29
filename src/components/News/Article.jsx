import React from 'react';
import { Button } from 'semantic-ui-react';
import classes from './News.module.css';
import moment from 'moment'

const Article = ({title, description, date, author, image, url}) => {

    let postDate = new Date(date);
    return (
        <article className={classes.article}>
            <>
                <h2 className={classes.title}>{title}</h2>
                <p className={classes.date}><span className={classes.semiTitle}>When:</span> {moment(postDate).fromNow()}</p>
                <img className={classes.image} src={image} alt=""/>
                <p>{description}</p>
                <p><span className={classes.semiTitle}>Author:</span> {author}</p>
            </>
            <Button href={url} target="blank" color="orange">Read full article</Button>
        </article>
    )
}

export default Article;