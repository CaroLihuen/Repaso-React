(this.webpackJsonpbreakingbad=this.webpackJsonpbreakingbad||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(15),i=n.n(r),s=(n(28),n(9)),o=n(4),u=(n(29),n(2)),d=n(13),j=n(11),h=n.n(j),p=n(10),b="ADD_QUOTE",l="GET_CHARACTER_DETAIL",f="EMPTY_CHARACTER_DETAIL",O="GET_CHARACTERS",E="GET_EPISODES",x="EMPTY_EPISODE_DETAIL",m="GET_EPISODE_DETAIL";n(34);var D=n(1);var v=Object(p.b)((function(e){return Object(u.a)({},e)}),(function(e){return{addQuote:function(){return e((function(e){return fetch("https://www.breakingbadapi.com/api/quote/random").then((function(e){return e.json()})).then((function(t){e({type:b,payload:t})}))}))}}}))((function(e){return Object(c.useEffect)((function(){var t=function(){var t=Object(d.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.addQuote();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(D.jsxs)("div",{className:"Home",children:[e.quote[0]&&e.quote[0].quote,e.quote[0]&&e.quote[0].author,Object(D.jsx)("div",{className:"Home__logo"})]})})),_=(n(36),function(){return Object(D.jsxs)("div",{className:"navbar",children:[Object(D.jsx)(s.b,{to:"/",children:" Home "}),Object(D.jsx)(s.b,{to:"/characters",children:"Charaters"}),Object(D.jsx)(s.b,{to:"/episodes",children:"Episodes"})]})}),g=n(23);n(43);var w=Object(p.b)((function(e){return Object(u.a)({},e)}),(function(e){return{getCharacters:function(t){return e(function(e){return function(t){return fetch("https://www.breakingbadapi.com/api/characters?name=".concat(e||"")).then((function(e){return e.json()})).then((function(e){t({type:O,payload:e})}))}}(t))}}}))((function(e){var t=function(){var t=Object(d.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCharacters();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=Object(c.useState)(""),a=Object(g.a)(n,2),r=a[0],i=a[1];Object(c.useEffect)((function(){t()}),[]),Object(c.useEffect)((function(){e.getCharacters(r)}),[r]);return Object(D.jsxs)("div",{className:"Characters",children:[Object(D.jsx)("form",{children:Object(D.jsx)("input",{type:"text",placeholder:"Search Characters",onChange:function(e){return function(e){i(e.target.value)}(e)}})}),Object(D.jsx)("div",{children:e.characters&&e.characters.map((function(e){return Object(D.jsx)("div",{className:"Characters__list",children:Object(D.jsx)(s.b,{to:"/characters/".concat(e.char_id),children:e.name})},e.char_id)}))})]})})),y=(n(44),Object(p.b)((function(e){return Object(u.a)({},e)}),{getCharacterDetail:function(e){return function(t){return fetch("https://www.breakingbadapi.com/api/characters/".concat(e)).then((function(e){return e.json()})).then((function(e){t({type:l,payload:e[0]})}))}},emptyCharacterDetail:function(e){return{type:f}}})((function(e){var t,n=Object(o.e)().id;return Object(c.useEffect)((function(){return e.getCharacterDetail(n),function(){e.emptyCharacterDetail()}}),[]),Object(D.jsxs)("div",{className:"CharacterDetail",children:[Object(D.jsxs)("h2",{children:["Nombre: ",e.characterDetail.name]}),Object(D.jsxs)("h3",{children:["Cumplea\xf1os: ",e.characterDetail.birthday]}),Object(D.jsxs)("h3",{children:["Ocupaci\xf3n: ",null===(t=e.characterDetail.occupation)||void 0===t?void 0:t.join(", ")]}),Object(D.jsxs)("h3",{children:["Status: ",e.characterDetail.status," "]}),Object(D.jsx)("img",{src:e.characterDetail.img,alt:"",width:"200px",height:"250px"})]})})));n(45);var C=Object(p.b)((function(e){return Object(u.a)({},e)}),(function(e){return{getEpisodes:function(){return e((function(e){return fetch("https://www.breakingbadapi.com/api/episodes").then((function(e){return e.json()})).then((function(t){e({type:E,payload:t})}))}))}}}))((function(e){var t;return Object(c.useEffect)((function(){var t=function(){var t=Object(d.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getEpisodes();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(D.jsxs)("div",{className:"Episodes",children:["Episodes",null===(t=e.episodes)||void 0===t?void 0:t.filter((function(e){return"Breaking Bad"===e.series})).map((function(e){return Object(D.jsx)("div",{className:"Episodes__list",children:Object(D.jsx)(s.b,{to:"/episodes/".concat(e.episode_id),children:e.title})},e.episode_id)}))]})})),T=(n(46),Object(p.b)((function(e){return Object(u.a)({},e)}),{getEpisodeDetail:function(e){return function(t){return fetch("https://www.breakingbadapi.com/api/episodes/".concat(e)).then((function(e){return e.json()})).then((function(e){t({type:m,payload:e[0]})}))}},emptyEpisodeDetail:function(e){return{type:"EMPTY_EPISODE_DETAIL"}}})((function(e){var t,n=Object(o.e)().id;return Object(c.useEffect)((function(){return e.getEpisodeDetail(n),function(){e.emptyEpisodeDetail()}}),[]),Object(D.jsxs)("div",{className:"EpisodeDetail-Container",children:["EpisodeDetail",Object(D.jsxs)("h2",{children:["Titulo: ",e.episodesDetail.title]}),Object(D.jsxs)("h3",{children:["Temporada: ",e.episodesDetail.season]}),Object(D.jsxs)("h3",{children:["Episodio: ",e.episodesDetail.episode]}),Object(D.jsxs)("h3",{children:["Fecha de Emision: ",e.episodesDetail.air_date]}),Object(D.jsxs)("h3",{children:["Personajes: ",null===(t=e.episodesDetail.characters)||void 0===t?void 0:t.join(", ")]})]})})));var S=function(){return Object(D.jsxs)(s.a,{children:[Object(D.jsx)(o.a,{path:"/",component:_}),Object(D.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(D.jsx)(o.a,{exact:!0,path:"/characters",component:w}),Object(D.jsx)(o.a,{exact:!0,path:"/characters/:id",component:y}),Object(D.jsx)(o.a,{exact:!0,path:"/episodes",component:C}),Object(D.jsx)(o.a,{exact:!0,path:"/episodes/:id",component:T})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},k=n(19),I={quote:{},characters:[],characterDetail:{},episodes:[],episodesDetail:{}};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{quote:t.payload});case O:return Object(u.a)(Object(u.a)({},e),{},{characters:t.payload});case l:return Object(u.a)(Object(u.a)({},e),{},{characterDetail:t.payload});case f:return Object(u.a)(Object(u.a)({},e),{},{characterDetail:{}});case E:return Object(u.a)(Object(u.a)({},e),{},{episodes:t.payload});case m:return Object(u.a)(Object(u.a)({},e),{},{episodesDetail:t.payload});case x:return Object(u.a)(Object(u.a)({},e),{},{episodesDetail:{}});default:return e}},P=n(22),L=Object(k.b)(A,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(k.a)(P.a));i.a.render(Object(D.jsx)(p.a,{store:L,children:Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(S,{})})}),document.getElementById("root")),N()}},[[47,1,2]]]);
//# sourceMappingURL=main.e43c002b.chunk.js.map