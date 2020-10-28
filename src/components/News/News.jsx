import classes from './News.module.css';
import React from 'react';
import { connect } from 'react-redux';
import {getNews} from '../../redux/news-reducer'
import Article from './Article';
import Preloader from '../common/Preloader/Preloader';

class News extends React.Component {
    componentDidMount () {
        this.props.getNews();
    }
    newsList = [];
    componentDidUpdate (prevProps) {
        if (prevProps.news !== this.props.news) {
            this.newsList = this.props.news.map(newsItem => <Article title={newsItem.title} url={newsItem.url} description={newsItem.description}
                date={newsItem.publishedAt} author={newsItem.author} key={newsItem.publishedAt} image={newsItem.urlToImage}/>)
        }
    }
    
    render() {
        return (
            this.props.isFetching ?
            <Preloader /> :
            <section className={classes.news}>
                {this.newsList}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        newsCount: state.newsPage.newsCount,
        isFetching: state.newsPage.isFetching
    }
}
export default connect(mapStateToProps, {getNews})(News);