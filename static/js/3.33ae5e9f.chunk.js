(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{430:function(e,t,n){e.exports={user:"Users_user__2_Dk-",photo:"Users_photo__34FFQ",preview:"Users_preview__1ouTJ",info:"Users_info__1fgLJ",country:"Users_country__2t0Mm",name:"Users_name__2Sje5",location:"Users_location__Mn7AS",followButton:"Users_followButton__2fZOR",pagination:"Users_pagination__3i3YS",selectedPage:"Users_selectedPage__2LTzD",pageNumber:"Users_pageNumber__3Jf1t",showMoreButton:"Users_showMoreButton__3RIoJ"}},431:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3XoyN",paginator:"Paginator_paginator__mecTG",button:"Paginator_button__2moz4",pages:"Paginator_pages__3bSVG"}},432:function(e,t,n){"use strict";n.r(t);var r=n(134),a=n(135),o=n(140),s=n(139),u=n(19),l=n(0),i=n.n(l),c=n(430),p=n.n(c),m=n(225),g=n.n(m),f=n(17),h=function(e){var t=function(t){return!!e.followingUsers.some((function(e){return e===t}))};return i.a.createElement("div",{className:p.a.user},i.a.createElement("div",{className:p.a.preview},i.a.createElement(f.b,{to:"/profile/"+e.userId},i.a.createElement("img",{src:e.photo?e.photo:g.a,className:p.a.photo,alt:"user"})),e.followed?i.a.createElement("button",{disabled:t(e.userId),onClick:function(){e.unfollow(e.userId)},className:p.a.followButton},"Unfollow"):i.a.createElement("button",{disabled:t(e.userId),onClick:function(){e.follow(e.userId)},className:p.a.followButton},"Follow")),i.a.createElement("div",{className:p.a.info},i.a.createElement("div",{className:p.a.description},i.a.createElement("p",{className:p.a.name},e.name),i.a.createElement("p",{className:p.a.status},e.status)),i.a.createElement("div",{className:p.a.location},i.a.createElement("p",{className:p.a.country},e.location.country?e.location.country:"Unknown country"),i.a.createElement("p",{className:p.a.city},e.location.city?e.location.city:"Unknown city"))))},d=n(50),_=n(83),w=n(431),v=n.n(w),P=i.a.memo((function(e){var t=e.itemsTotalCount,n=e.itemsOnPage,r=e.onPageSelectCallback,a=e.buttonsCount,o=e.page,s=e.term,u=Math.ceil(t/n),c=Math.ceil(u/a),p=Object(l.useState)(1),m=Object(_.a)(p,2),g=m[0],f=m[1],h=g*a;h>u&&(h=u);for(var d=[],w=(g-1)*a+1;w<=h;w++)d.push(i.a.createElement("div",{key:w,onClick:function(e){r(e.currentTarget.innerText,n,s)},className:"".concat(v.a.button," ").concat(w.toString()===o.toString()&&v.a.selectedPage)},w));return i.a.createElement("div",{className:v.a.paginator},g>1&&i.a.createElement("button",{className:v.a.button,onClick:function(){f(g-1),r((g-1)*a)}},"\u2190"),i.a.createElement("div",{className:v.a.pages},d.length>1&&d),g<c&&i.a.createElement("button",{className:v.a.button,onClick:function(){f(g+1),r(g*a+1)}},"\u2192"))})),U=function(e){var t=e.users.map((function(t){return i.a.createElement(h,{key:t.id,name:t.name,location:"user.location",userId:t.id,photo:t.photos.small,status:t.status,followed:t.followed,follow:e.follow,unfollow:e.unfollow,followingUsers:e.followingUsers})}));return i.a.createElement("div",{className:p.a.usersPage},i.a.createElement(P,{term:e.term,itemsTotalCount:e.usersTotalCount,itemsOnPage:e.pageSize,onPageSelectCallback:e.onPageChanged,buttonsCount:e.paginationButtonsCount,page:e.currentPage}),e.isFetching||0===e.users.length?i.a.createElement(d.a,null):i.a.createElement("div",{className:p.a.users},i.a.createElement("h1",null,"Users found: ",!e.isFetching&&e.usersTotalCount),t))},b=n(136),y=n(15);function C(e,t){return e===t}function E(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function N(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var S=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,s=r.pop(),u=N(r),l=e.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(n)),i=e((function(){for(var e=[],t=u.length,n=0;n<t;n++)e.push(u[n].apply(null,arguments));return l.apply(null,e)}));return i.resultFunc=s,i.dependencies=u,i.recomputations=function(){return o},i.resetRecomputations=function(){return o=0},i}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C,n=null,r=null;return function(){return E(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var k=S((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!!e.photos.small}))})),T=(S(k,(function(e){return e.filter((function(e){return!!e.followed}))})),function(e){return e.usersPage.usersTotalCount}),B=n(21),O=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).getUsersWithTerm=function(){a.props.match.params.term?(a.setState({term:a.props.match.params.term}),a.props.getUsers(a.props.currentPage,a.props.pageSize,a.props.match.params.term)):a.props.getUsers(a.props.currentPage,a.props.pageSize,a.props.term)},a.state={term:a.props.term},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.setCurrentPage(1),this.getUsersWithTerm()}},{key:"componentDidUpdate",value:function(e){e.match.params.term!==this.props.match.params.term&&this.getUsersWithTerm()}},{key:"render",value:function(){return i.a.createElement(U,{usersTotalCount:this.props.usersTotalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.props.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,isFetching:this.props.isFetching,showMoreUsers:this.props.showMoreUsers,followingUsers:this.props.followingUsers,paginationButtonsCount:this.props.paginationButtonsCount,term:this.state.term})}}]),n}(i.a.Component),j={follow:b.b,unfollow:b.i,showMoreUsers:b.h,getUsers:b.d,onPageChanged:b.e,setTerm:b.g,setCurrentPage:b.f};t.default=Object(y.d)(Object(u.b)((function(e){return{users:k(e),usersTotalCount:T(e),paginationButtonsCount:e.usersPage.paginationButtonsCount,currentPage:e.usersPage.currentPage,pageSize:e.usersPage.pageSize,term:e.usersPage.term,isFetching:e.usersPage.isFetching,followingUsers:e.usersPage.followingUsers}}),j),B.g)(O)}}]);
//# sourceMappingURL=3.33ae5e9f.chunk.js.map