(this["webpackJsonpreact-project-memory"]=this["webpackJsonpreact-project-memory"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"clicked":false,"image":"./images/Bestiary_Cockatrice.png","color":"purple","description":"Cockatrice"},{"id":2,"clicked":false,"image":"./images/People_Midday_Bride.png","color":"coral","description":"Midday Bride"},{"id":3,"clicked":false,"image":"./images/Bestiary_Dagon.png","color":"olive","description":"Dagon"},{"id":4,"clicked":false,"image":"./images/Bestiary_Werewolf.png","color":"black","description":"Werewolf"},{"id":5,"clicked":false,"image":"./images/Bestiary_Striga.png","color":"crimson","description":"Striga"},{"id":6,"clicked":false,"image":"./images/Bestiary_Drowner.png","color":"aqua","description":"Drowner"},{"id":7,"clicked":false,"image":"./images/Bestiary_Golem.png","color":"teal","description":"Golem"},{"id":8,"clicked":false,"image":"./images/Bestiary_Alghoul.png","color":"grey","description":"Alghoul"},{"id":9,"clicked":false,"image":"./images/Bestiary_Wyvern.png","color":"orange","description":"Wyvern"},{"id":10,"clicked":false,"image":"./images/Bestiary_Echinops.png","color":"darkgreen","description":"Echinops"},{"id":11,"clicked":false,"image":"./images/Bestiary_Basilisk.png","color":"sienna","description":"Basilisk"},{"id":12,"clicked":false,"image":"./images/Bestiary_Barghest.png","color":"lime","description":"Barghest"}]')},,,,,,function(e,i,c){},function(e,i,c){},function(e,i,c){"use strict";c.r(i);var t=c(0),a=c(1),r=c.n(a),s=c(4),n=c.n(s),o=c(2),l=function(e){return Object(t.jsxs)("header",{className:"header",children:[Object(t.jsxs)("div",{className:"header-row",children:[Object(t.jsx)("img",{src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aae1113d-6d67-4b9d-9f5a-72c87ee934a7/dcwme31-3a9f6e9c-0d32-4ddf-a619-c016e0ae7024.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWFlMTExM2QtNmQ2Ny00YjlkLTlmNWEtNzJjODdlZTkzNGE3XC9kY3dtZTMxLTNhOWY2ZTljLTBkMzItNGRkZi1hNjE5LWMwMTZlMGFlNzAyNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.CG-YGB5f1C-pZKcAyyPZkRghaX1CS7yNaxNw06JQLao",alt:"witcher-logo",height:"80px"}),Object(t.jsxs)("h1",{className:"col-sm-8",children:[Object(t.jsx)("span",{className:"the-witcher",children:"The Witcher"})," Bestiary Memory Game"]})]}),Object(t.jsxs)("nav",{children:[Object(t.jsx)("p",{className:"game-info",children:"Get points by clicking on an image but don't click on any more than once!"}),Object(t.jsx)("strong",{children:"Top Score:"})," ",Object(t.jsx)("span",{children:e.highScore}),Object(t.jsx)("br",{}),Object(t.jsx)("strong",{children:"Current Score:"}),"  ",Object(t.jsx)("span",{children:e.currentScore})]})]})},d=function(e){return Object(t.jsxs)("div",{className:"card "+(e.Clicked?"animate":""),onClick:function(){return e.handleClick(e.id)},children:[Object(t.jsx)("div",{className:"img-container"}),Object(t.jsxs)("div",{className:"img-content",style:{color:"white",width:"200px",height:"200px",textAlign:"center",justifyContent:"center"},children:[Object(t.jsx)("img",{alt:e.description,src:e.image}),Object(t.jsxs)("strong",{children:[" ",e.description]})]})]})},g=c(5),m=(c(11),function(){var e=Object(a.useState)(g),i=Object(o.a)(e,1)[0],c=Object(a.useState)(0),r=Object(o.a)(c,2),s=r[0],n=r[1],m=Object(a.useState)(0),j=Object(o.a)(m,2),h=j[0],p=j[1],b=Object(a.useState)(!1),f=Object(o.a)(b,2),u=f[0],O=f[1],k=function(e){x(),y(e)},y=function(e){i.forEach((function(c){e===c.id&&!1===c.clicked?(c.clicked=!0,O(!1),p(h+1)):e===c.id&&!0===c.clicked&&(h>s&&n(h),p(0),O(!0),i.forEach((function(e){return e.clicked=!1})),console.log(i))}))},x=function(){N(i)},N=function(e){for(var i=e.length;0!==i;){var c=Math.floor(Math.random()*i),t=e[i-=1];e[i]=e[c],e[c]=t}return e};return Object(t.jsxs)("div",{children:[Object(t.jsx)(l,{currentScore:h,highScore:s}),Object(t.jsx)("div",{className:"game-board",children:i.map((function(e){return Object(t.jsx)(d,{Clicked:u,handleClick:k,id:e.id,description:e.description,image:e.image,color:e.color},e.id)}))})]})});c(12);n.a.render(Object(t.jsx)(r.a.StrictMode,{children:Object(t.jsx)(m,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.ce147777.chunk.js.map