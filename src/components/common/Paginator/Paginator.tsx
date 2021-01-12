import classes from './Paginator.module.css';
import React from 'react';

type PropsType = {
    itemsTotalCount: number
    itemsOnPage: number
    onPageSelectCallback: (pageNumber: number, pageSize: number, term?: string) => void
    buttonsCount: number
    page: number
    term: string | null
}
const Paginator: React.FC<PropsType> = React.memo(({itemsTotalCount, itemsOnPage, onPageSelectCallback, buttonsCount, page, term}) => {
    const pagesCount = Math.ceil(itemsTotalCount/itemsOnPage);
    const paginatorSectionsCount = Math.ceil(pagesCount/buttonsCount);
    let currentSection = Math.ceil(page/buttonsCount);
    let leftLimit = (currentSection - 1) * buttonsCount + 1;
    let rightLimit = currentSection * buttonsCount;
    const existingTerm = term ? term : undefined;
    if (rightLimit > pagesCount) { rightLimit = pagesCount;}
    const goPrev = () => {
        onPageSelectCallback((currentSection-1) * buttonsCount, itemsOnPage, existingTerm);
    }
    const goNext = () => {
        onPageSelectCallback(currentSection * buttonsCount + 1, itemsOnPage, existingTerm);
    }
    let pages = [];
    for (let p = leftLimit; p <= rightLimit; p++) {
        pages.push(<div key={p} 
            onClick={(e) => {onPageSelectCallback(Number(e.currentTarget.innerText), itemsOnPage, existingTerm); window.scrollTo(0, 0);}}
            className={`${classes.button} ${p === page && classes.selectedPage}`}>{p}</div>);
    }
    return (
        <div className={classes.paginator}>
            {currentSection > 1 && <button className={classes.button} onClick={goPrev}>←</button>}
            <div className={classes.pages}>{pagesCount > 1 && pages}</div>
            {currentSection < paginatorSectionsCount && <button className={classes.button} onClick={goNext}>→</button>}
        </div>
    )
})

export default Paginator;