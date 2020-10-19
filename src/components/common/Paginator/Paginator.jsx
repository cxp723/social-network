import classes from './Paginator.module.css';
import React from 'react';
import { useState } from 'react';

const Paginator = React.memo(({itemsTotalCount, itemsOnPage, onPageSelectCallback, buttonsCount, page, term}) => {
    const pagesCount = Math.ceil(itemsTotalCount/itemsOnPage);
    const paginatorSectionsCount = Math.ceil(pagesCount/buttonsCount);
    let [currentSection, setCurrentSection] = useState(1);
    let leftLimit = (currentSection - 1) * buttonsCount + 1;
    let rightLimit = currentSection * buttonsCount;
    if (rightLimit > pagesCount) { rightLimit = pagesCount;}
    const goPrev = () => {
        setCurrentSection(currentSection - 1);
        onPageSelectCallback((currentSection-1) * buttonsCount);
    }
    const goNext = () => {
        setCurrentSection(currentSection + 1);
        onPageSelectCallback(currentSection * buttonsCount + 1);
    }
    let pages = [];
    for (let p = leftLimit; p <= rightLimit; p++) {
        pages.push(<div key={p} onClick={(e) => {onPageSelectCallback(e.currentTarget.innerText, itemsOnPage, term)}} className={`${classes.button} ${p.toString() === page.toString() && classes.selectedPage}`}>{p}</div>);
    }
    return (
        <div className={classes.paginator}>
            {currentSection > 1 && <button className={classes.button} onClick={goPrev}>←</button>}
            <div className={classes.pages}>{pages.length > 1 && pages}</div>
            {currentSection < paginatorSectionsCount && <button className={classes.button} onClick={goNext}>→</button>}
        </div>
    )
})

export default Paginator;