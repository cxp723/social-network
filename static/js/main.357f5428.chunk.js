(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__paPYd",buddies:"Dialogs_buddies__oAGuY",buddy:"Dialogs_buddy__1uIDn",messages:"Dialogs_messages__1358W",message:"Dialogs_message__3on-B",active:"Dialogs_active__3FMLt",to:"Dialogs_to__3lZt1",from:"Dialogs_from__3fDkO",dialogImage:"Dialogs_dialogImage__3vGAn",newMessage:"Dialogs_newMessage__3JgDu",newMessageText:"Dialogs_newMessageText__279Mb",send:"Dialogs_send__2m5EZ"}},131:function(e,t,a){"use strict";a.d(t,"c",(function(){return E})),a.d(t,"e",(function(){return h})),a.d(t,"b",(function(){return b})),a.d(t,"f",(function(){return v})),a.d(t,"d",(function(){return _}));var n=a(8),r=a.n(n),s=a(15),o=a(47),i=a(5),c=a(18),u=function(e,t,a,n,r){return e.map((function(e){return e[t]===a&&(e[n]=r),e}))},l={users:[],usersTotalCount:0,currentPage:1,pageSize:5,paginationButtonsCount:10,isFetching:!1,followingUsers:[]},m=function(e){return{type:"FOLLOW",userId:e}},d=function(e){return{type:"UNFOLLOW",userId:e}},f=function(e){return{type:"SET-USERS",users:e}},p=function(e){return{type:"TOGGLE-PRELOADER",isFetching:e}},g=function(e){return{type:"TOGGLE_FOLLOWING_BUTTON",userId:e}},E=function(e,t){return function(){var a=Object(s.a)(r.a.mark((function a(n){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(p(!0)),a.next=3,c.d.getUsersFromServer(e,t);case 3:s=a.sent,n(f(s.items)),n({type:"SET-USERS-TOTAL-COUNT",usersTotalCount:s.totalCount}),n(p(!1));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(p(!0)),a({type:"INCREASE-PAGE-SIZE"}),t.next=4,c.d.getUsersFromServer(1,e+5);case 4:n=t.sent,a(f(n.items)),a(p(!1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(g(e)),t.next=3,c.b.follow(e);case 3:0===t.sent.resultCode&&(a(m(e)),a(g(e)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(g(e)),t.next=3,c.b.unfollow(e);case 3:0===t.sent.resultCode&&(a(d(e)),a(g(e)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(p(!0)),t.next=3,c.d.getUsersFromServer(e);case 3:n=t.sent,a(f(n.items)),a({type:"SET-CURRENT-PAGE",currentPage:e}),a(p(!1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,"id",t.userId,"followed",!0)});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,"id",t.userId,"followed",!1)});case"INCREASE-PAGE-SIZE":return Object(i.a)(Object(i.a)({},e),{},{pageSize:e.pageSize+5});case"SET-CURRENT-PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"SET-USERS-TOTAL-COUNT":return Object(i.a)(Object(i.a)({},e),{},{usersTotalCount:t.usersTotalCount});case"SET-USERS":return Object(i.a)(Object(i.a)({},e),{},{users:Object(o.a)(t.users)});case"TOGGLE-PRELOADER":return Object(i.a)(Object(i.a)({},e),{},{isFetching:!!t.isFetching});case"TOGGLE_FOLLOWING_BUTTON":return Object(i.a)(Object(i.a)({},e),{},{followingUsers:e.followingUsers.some((function(e){return e===t.userId}))?e.followingUsers.filter((function(e){return e!==t.userId})):e.followingUsers.concat(t.userId)});default:return Object(i.a)({},e)}}},134:function(e,t,a){},135:function(e,t,a){e.exports=a.p+"static/media/person-male.77a337e5.png"},136:function(e,t,a){e.exports=a.p+"static/media/user-wallpaper.5f8be0b5.jpg"},138:function(e,t,a){e.exports=a.p+"static/media/Preloader.3998908d.gif"},16:function(e,t,a){e.exports={navbar:"Navbar_navbar__2IowR",item:"Navbar_item__34HwD",active:"Navbar_active__3Pspa"}},165:function(e,t,a){e.exports=a(291)},166:function(e,t,a){},171:function(e,t,a){},18:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(137),r=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"1500a81d-951a-4b37-975e-19522be74bca"}}),s={getProfile:function(e){return r.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))}},o={getUsersFromServer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,a=r.get("users?page="+e+"&count="+t).then((function(e){return e.data}));return a}},i={follow:function(e){var t=r.post("follow/"+e).then((function(e){return e.data}));return t},unfollow:function(e){var t=r.delete("follow/"+e).then((function(e){return e.data}));return t}},c={auth:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t,a){return r.post("auth/login",{email:e,password:t,rememberMe:a}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}}},291:function(e,t,a){"use strict";a.r(t);a(166);var n=a(0),r=a.n(n),s=a(68),o=a.n(s),i=a(38),c=a(39),u=a(43),l=a(42),m=(a(171),a(16)),d=a.n(m),f=a(12),p=a(48),g=a.n(p),E=function(e){return r.a.createElement("div",{className:g.a.friend},r.a.createElement("div",{className:g.a.userLogo}),r.a.createElement("span",{className:g.a.friendName},e.friendName))},h=function(e){var t=e.friends.map((function(e){return r.a.createElement(E,{friendName:e.name,key:e.id})}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Friends"),r.a.createElement("div",{className:g.a.friendsList},t))},b=a(10),v=Object(b.b)((function(e){return{friends:e.sidebar.friendsList}}),(function(e){return{}}))(h),_=function(e){return r.a.createElement("nav",{className:d.a.navbar},r.a.createElement("div",{className:"".concat(d.a.item," ").concat(d.a.active)},r.a.createElement(f.b,{to:"/profile",activeClassName:d.a.active},"Profile")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/dialogs",activeClassName:d.a.active},"Messages")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/news",activeClassName:d.a.active},"News")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/music",activeClassName:d.a.active},"Music")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/settings",activeClassName:d.a.active},"Settings")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/users",activeClassName:d.a.active},"Users")),r.a.createElement(v,null))},O=a(11),w=function(){return r.a.createElement("div",null,"News")},y=function(){return r.a.createElement("div",null,"Settings")},j=function(){return r.a.createElement("div",null,"Music")},N=a(47),S=a(5),x={dialogs:[{name:"Max",id:1},{name:"Tanchita",id:2},{name:"Yura",id:3},{name:"Sanek",id:4},{name:"Dan",id:5},{name:"Krista",id:6}],messages:[{text:"Hey, man!",id:1,direction:"from"},{text:"How are you?",id:2,direction:"from"},{text:"Hey! I'm fine. Let's meet today!",id:3,direction:"to"},{text:"How about 8 o'clock?",id:4,direction:"from"},{text:"Ok, great!",id:5,direction:"to"}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var a={text:t.newMessageText,id:6,direction:"to"};return Object(S.a)(Object(S.a)({},e),{},{messages:[].concat(Object(N.a)(e.messages),[a])});default:return e}},T=a(13),I=a.n(T),C=function(e){var t=e.dialogs.map((function(e){return r.a.createElement("div",{className:I.a.buddy,key:e.id},r.a.createElement("div",{className:I.a.dialogImage}),r.a.createElement(f.b,{to:"/dialogs/"+e.id,activeClassName:I.a.active},e.name))}));return r.a.createElement("div",{className:I.a.buddies},t)},M=function(e){var t=e.messages.map((function(e){return r.a.createElement("div",{key:e.id,className:I.a.message+" "+("from"===e.direction?I.a.from:I.a.to)},e.text)}));return r.a.createElement("div",{className:I.a.messages},t)},k=a(128),L=a(129),D=a(97),R=a(72),A=a.n(R),F=function(e){var t=e.meta,a=e.children,n=t.error&&t.touched;return r.a.createElement("div",{className:A.a.formControl+" "+(n&&A.a.hasError)},a,r.a.createElement("span",{className:A.a.errorMessage},n&&t.error))},U=function(e){var t=e.input,a=(e.meta,Object(D.a)(e,["input","meta"]));return r.a.createElement(F,e," ",r.a.createElement("textarea",Object.assign({},t,a))," ")},G=function(e){var t=e.input,a=(e.meta,Object(D.a)(e,["input","meta"]));return r.a.createElement(F,e," ",r.a.createElement("input",Object.assign({},t,a))," ")},W=function(e){return e?void 0:"Field is required"},H=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols"):void 0}},z=H(50),B=Object(L.a)({form:"newMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:I.a.newMessage},r.a.createElement(k.a,{component:U,className:I.a.newMessageText,name:"newMessageText",validate:[W,z]}),r.a.createElement("button",{disabled:!e.valid,className:I.a.send,type:"submit"},"Send"))})),Z=function(e){return r.a.createElement("div",{className:I.a.dialogs},r.a.createElement(C,{dialogs:e.dialogs}),r.a.createElement("div",{className:I.a.chat},r.a.createElement(M,{messages:e.messages}),r.a.createElement(B,{onSubmit:function(t){e.sendMessage(t.newMessageText)}})))},Y=function(e){return{isAuth:e.auth.isAuth}},J=a(9),K=Object(J.d)(Object(b.b)((function(e){return{dialogs:e.messagesPage.dialogs,messages:e.messagesPage.messages}}),{sendMessage:function(e){return{type:"SEND-MESSAGE",newMessageText:e}}}),(function(e){return Object(b.b)(Y)((function(t){return t.isAuth?r.a.createElement(e,t):r.a.createElement(O.a,{to:"/login"})}))}))(Z),q=a(134),V=a.n(q),X=a(30),Q=a.n(X),$=a(135),ee=a.n($),te=a(136),ae=a.n(te),ne=a(90),re=function(e){var t=Object(n.useState)(!1),a=Object(ne.a)(t,2),s=a[0],o=a[1],i=Object(n.useState)(e.status),c=Object(ne.a)(i,2),u=c[0],l=c[1];Object(n.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",{className:Q.a.status},r.a.createElement("p",null,"Status: ",s&&r.a.createElement("input",{autoFocus:"true",type:"text",value:u,onBlur:function(){o(!1),e.updateStatus(u)},onChange:function(e){l(e.currentTarget.value)}}),!s&&r.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"No status yet")))},se=function(e){var t=e.profile;return r.a.createElement("div",{className:Q.a.profile},r.a.createElement("div",null,r.a.createElement("img",{src:t.photos.large?t.photos.large:ae.a,className:Q.a.main_picture,alt:"user wallpaper"})),r.a.createElement("div",{className:Q.a.info},r.a.createElement("img",{className:Q.a.ava,src:t.photos.small?t.photos.small:ee.a,alt:"preview"}),r.a.createElement("div",{className:Q.a.description},r.a.createElement("h1",null,t.fullName),r.a.createElement(re,{status:e.status,updateStatus:e.updateStatus}),r.a.createElement("p",null,"Professional talents: ",t.lookingForAJobDescription),r.a.createElement("p",null,"About me: ",t.aboutMe),r.a.createElement("p",null,"Instagram: ",t.contacts.instagram))))},oe=a(8),ie=a.n(oe),ce=a(15),ue=a(18),le=function(e){return{type:"ADD-POST",text:e}},me=function(e){return{type:"SET-STATUS",status:e}},de=function(e){return{type:"TOGGLE-PRELOADER",fetching:e}},fe={profile:null,status:"",posts:[{message:"It's my first post",id:1,likesCount:16},{message:"React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries.",id:2,likesCount:15},{message:"The Greeter function is a React component that accepts a property greeting. The variable App is an instance of the Greeter component where the greeting property is set to 'Hello World!'. The ReactDOM.render method then renders our Greeter component inside the DOM element with id myReactApp.When displayed in a web browser the result will be",id:3,likesCount:10},{message:"Virtual DOM Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.[12]. This process is called reconciliation. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost. It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page.",id:4,likesCount:8},{message:"Lifecycle methods use a form of hooking that allows execution of code at set points during a component's lifetime.",id:5,likesCount:15},{message:"shouldComponentUpdate allows the developer to prevent unnecessary re-rendering of a component by returning false if a render is not required.",id:6,likesCount:20},{message:"React rules!",id:7,likesCount:13}],fetching:!1},pe=function(e){return function(){var t=Object(ce.a)(ie.a.mark((function t(a){var n;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue.c.getProfile(e);case 2:n=t.sent,a({type:"SET-PROFILE",profile:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ge=function(e){return function(){var t=Object(ce.a)(ie.a.mark((function t(a){var n;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue.c.getStatus(e);case 2:n=t.sent,a(me(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={message:t.text,id:3,likesCount:0};return Object(S.a)(Object(S.a)({},e),{},{posts:[].concat(Object(N.a)(e.posts),[a])});case"DELETE-POST":return Object(S.a)(Object(S.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.id}))});case"SET-PROFILE":return Object(S.a)(Object(S.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(S.a)(Object(S.a)({},e),{},{status:t.status});case"TOGGLE-PRELOADER":return Object(S.a)(Object(S.a)({},e),{},{fetching:t.fetching});default:return e}},he=a(49),be=a.n(he),ve=a(59),_e=a.n(ve),Oe=function(e){return r.a.createElement("div",{className:_e.a.post},r.a.createElement("div",{className:_e.a.postText},r.a.createElement("div",{className:_e.a.user}),r.a.createElement("p",null,e.message)),r.a.createElement("div",{className:_e.a.postInfo},r.a.createElement("p",null,"Likes: ",e.likesCount)))},we=H(100),ye=Object(L.a)({form:"newPost"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:be.a.newPost},r.a.createElement(k.a,{component:U,name:"newPostText",className:be.a.postText,validate:[W,we],placeholder:"Write new post here"}),r.a.createElement("button",{disabled:!e.valid,className:be.a.sendButton,type:"submit"},"Send"))})),je=function(e){var t=e.posts.map((function(e){return r.a.createElement(Oe,{key:e.id,message:e.message,likesCount:e.likesCount})}));return t.reverse(),r.a.createElement("div",{className:be.a.myPosts},r.a.createElement("h1",null,"My posts"),r.a.createElement(ye,{onSubmit:function(t){e.addPost(t.newPostText)}}),t)},Ne={addPost:le},Se=Object(b.b)((function(e){return{posts:e.profilePage.posts}}),Ne)(je),xe=function(e){return r.a.createElement("div",{className:V.a.content},r.a.createElement(se,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),e.userId===e.me&&r.a.createElement(Se,{posts:e.posts,addPost:e.addPost}))},Pe=a(41),Te=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).userId=e.props.match.params.userID?e.props.match.params.userID:e.props.me,e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.getProfileWithStatus(this.userId)}},{key:"render",value:function(){return this.props.fetching||!this.props.profile?r.a.createElement(Pe.a,null):this.userId?r.a.createElement(xe,Object.assign({},this.props,{userId:this.userId})):r.a.createElement(O.a,{to:"/login"})}}]),a}(r.a.Component),Ie=Object(J.d)(Object(b.b)((function(e){return{profile:e.profilePage.profile,posts:e.profilePage.posts,fetching:e.profilePage.fetching,status:e.profilePage.status,me:e.auth.id}}),{getProfileWithStatus:function(e){return function(){var t=Object(ce.a)(ie.a.mark((function t(a){return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(de(!0)),t.next=3,a(pe(e));case 3:return t.next=5,a(ge(e));case 5:a(de(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},addPost:le,togglePreloader:de,updateStatus:function(e){return function(){var t=Object(ce.a)(ie.a.mark((function t(a){return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue.c.updateStatus(e);case 2:0===t.sent.resultCode&&a(me(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),O.f)(Te),Ce=a(35),Me=a.n(Ce),ke=function(e){return r.a.createElement("header",{className:Me.a.header},r.a.createElement("div",{className:Me.a.logo}),e.login?r.a.createElement("div",{className:Me.a.userInfo},r.a.createElement("p",{className:Me.a.user},"Welcome, ",e.login),r.a.createElement("button",{onClick:e.logout,className:Me.a.logOut},"LogOut")):r.a.createElement(f.b,{className:Me.a.login,to:"/login"},"Login"))},Le=a(37),De={id:null,email:null,login:null,isAuth:!1},Re=function(e,t,a,n){return{type:"SET-USER-DATA",id:e,email:t,login:a,isAuth:n}},Ae=function(){return function(e){return ue.a.auth().then((function(t){0===t.resultCode&&e(Re(t.data.id,t.data.email,t.data.login,!0))}))}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.id,r=t.email,s=t.login,o=t.isAuth,i=Object(S.a)({},e);switch(a){case"SET-USER-DATA":return i.id=n,i.email=r,i.login=s,i.isAuth=o,i;default:return i}},Ue=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(ke,{login:this.props.login,logout:this.props.logout})}}]),a}(r.a.Component),Ge=Object(b.b)((function(e){return{id:e.auth.id,email:e.auth.email,login:e.auth.login}}),{logout:function(){return function(){var e=Object(ce.a)(ie.a.mark((function e(t){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.logout();case 2:0===e.sent.resultCode&&t(Re(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ue),We=a(31),He=a.n(We),ze=H(30),Be=Object(L.a)({form:"loginForm"})((function(e){return r.a.createElement("form",{className:He.a.loginForm,onSubmit:e.handleSubmit},r.a.createElement("h1",null,"Please Log In"),r.a.createElement("div",{className:He.a.formRow},r.a.createElement(k.a,{type:"text",name:"email",component:G,placeholder:"Email",validate:[W,ze]})),e.error&&r.a.createElement("p",{className:He.a.errorMessage},e.error),r.a.createElement("div",{className:He.a.formRow},r.a.createElement(k.a,{type:"password",name:"password",component:G,placeholder:"Password",validate:[W,ze]})),r.a.createElement("div",{className:He.a.formRow},r.a.createElement(k.a,{type:"checkbox",name:"rememberMe",component:"input"}),r.a.createElement("span",null," remember me")),r.a.createElement("div",{className:He.a.buttons},r.a.createElement("button",null,"LogIn")," ",r.a.createElement("button",null,"Cancel")),r.a.createElement("p",null,r.a.createElement(f.b,{to:"restore-password"},"Forgot password?")))})),Ze=Object(b.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(){var n=Object(ce.a)(ie.a.mark((function n(r){var s;return ie.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ue.a.login(e,t,a);case 2:0===(s=n.sent).resultCode?r(Ae()):r(Object(Le.a)("loginForm",{_error:s.messages[0]}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(O.a,{to:"/profile"}):r.a.createElement("div",{className:He.a.loginPage},r.a.createElement(Be,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),Ye="INITIALIZE_SUCCESS",Je={initialized:!1},Ke=r.a.lazy((function(){return a.e(3).then(a.bind(null,295))})),qe=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.initializing()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Ge,null),r.a.createElement(_,null),r.a.createElement("div",{className:"content"},r.a.createElement(O.b,{path:"/dialogs",render:function(){return r.a.createElement(K,null)}}),r.a.createElement(O.b,{path:"/profile/:userID?",render:function(){return r.a.createElement(Ie,null)}}),r.a.createElement(O.b,{path:"/news",component:w}),r.a.createElement(O.b,{path:"/music",component:j}),r.a.createElement(O.b,{path:"/settings",component:y}),r.a.createElement(O.b,{path:"/users",render:(e=Ke,function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(Pe.a,null)},r.a.createElement(e,t))})}),r.a.createElement(O.b,{path:"/login",render:function(){return r.a.createElement(Ze,null)}}))):r.a.createElement(Pe.a,null);var e}}]),a}(r.a.Component),Ve=Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializing:function(){return function(){var e=Object(ce.a)(ie.a.mark((function e(t){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Ae());case 2:t({type:Ye});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(qe),Xe={friendsList:[{name:"Tanchisa",id:1},{name:"Max",id:2},{name:"Dan",id:3},{name:"Krista",id:4},{name:"Sanek",id:5},{name:"Yura",id:6}]},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe;return e},$e=a(131),et=a(139),tt=a(130),at=Object(J.c)({messagesPage:P,profilePage:Ee,usersPage:$e.a,sidebar:Qe,auth:Fe,form:tt.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0,a=Object(S.a)({},e);switch(t.type){case Ye:return a.initialized=!0,a;default:return a}}}),nt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,rt=Object(J.e)(at,nt(Object(J.a)(et.a)));window.store=rt;var st=rt;o.a.render(r.a.createElement(f.a,{basename:"/social-network"},r.a.createElement(b.a,{store:st},r.a.createElement(Ve,null))),document.getElementById("root"))},30:function(e,t,a){e.exports={main_picture:"ProfileInfo_main_picture__3HQAv",ava:"ProfileInfo_ava__1BM9_",info:"ProfileInfo_info__39dW4",description:"ProfileInfo_description__3ewSL",status:"ProfileInfo_status__1RDsD"}},31:function(e,t,a){e.exports={loginPage:"login_loginPage__MMsSR",loginForm:"login_loginForm__3IZuF",formRow:"login_formRow__1fPIH",errorMessage:"login_errorMessage__1pN1L"}},35:function(e,t,a){e.exports={header:"Header_header__6mOs8",logo:"Header_logo__2QIV9",userInfo:"Header_userInfo__2btRr",user:"Header_user__1U36Y",login:"Header_login__gMwit",logOut:"Header_logOut__Wr40Z"}},41:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(138),o=a.n(s),i=a(96),c=a.n(i);t.a=function(){return r.a.createElement("div",{className:c.a.preloder},r.a.createElement("img",{src:o.a,alt:"preloader",className:c.a.image}))}},48:function(e,t,a){e.exports={userLogo:"FriendsList_userLogo__38BfW",friendsList:"FriendsList_friendsList__VnwcF",friend:"FriendsList_friend__mZblD"}},49:function(e,t,a){e.exports={myPosts:"MyPosts_myPosts__3Ice7",postText:"MyPosts_postText__2rqm2",newPost:"MyPosts_newPost__2c4i2",sendButton:"MyPosts_sendButton__hYp3f"}},59:function(e,t,a){e.exports={user:"Post_user__1PsS4",postText:"Post_postText__3X9O0",postInfo:"Post_postInfo__e5mXk",post:"Post_post__1mycz"}},72:function(e,t,a){e.exports={formControl:"Form-controls_formControl__2oyjK",hasError:"Form-controls_hasError__1ymOg",errorMessage:"Form-controls_errorMessage__2eCZC"}},96:function(e,t,a){e.exports={image:"preloader_image__3BlKC"}}},[[165,1,2]]]);
//# sourceMappingURL=main.357f5428.chunk.js.map