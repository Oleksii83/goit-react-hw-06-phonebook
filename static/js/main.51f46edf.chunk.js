(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={container:"ContactList_container__12Nj1",item:"ContactList_item__3iqfv",btn:"ContactList_btn__1WlrI"}},18:function(e,t,n){e.exports={SearchContainer:"Filter_SearchContainer__12ZzS",SearchName:"Filter_SearchName__3xFQb",ContName:"Filter_ContName__2g_o6",InputSearch:"Filter_InputSearch__2rF1z"}},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=n(5),s=n(20),u=(n(30),n(31),n(19)),l=n(7),b=n.n(l),d=(n(40),n(10)),j=n.n(d),m=n(3),h=Object(m.b)("ADD_CONTACT",(function(e){var t=e.name,n=e.number;return{payload:{id:b.a.generate(),name:t,number:n}}}));h.propTypes={name:j.a.string.isRequired,number:j.a.string.isRequired};var p={addContact:h,deleteContact:Object(m.b)("DELETE"),changeFilter:Object(m.b)("CHANGE_FILTER")},O=n(1);var f=Object(i.b)(null,(function(e){return{onSubmit:function(t,n){return e(p.addContact(t,n))}}}))((function(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(u.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),l=s[0],d=s[1],j=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":d(a);break;default:return}},m=function(){o(""),d("")},h=b.a.generate(),p=b.a.generate();return Object(O.jsxs)("form",{className:"Input-container",onSubmit:function(e){e.preventDefault(),t({name:c,number:l}),m()},children:[Object(O.jsx)("h3",{className:"Input-name",children:" Name "}),Object(O.jsx)("label",{htmlFor:h,children:Object(O.jsx)("input",{className:"Input",value:c,onChange:j,type:"text",name:"name",id:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})}),Object(O.jsxs)("label",{className:"TelInputContainer",htmlFor:p,children:[Object(O.jsx)("h3",{className:"Input-name",children:" Number "}),Object(O.jsx)("input",{value:l,onChange:j,type:"tel",name:"number",id:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(O.jsx)("button",{type:"submit",className:"input-btn",children:"Add contact"})]})})),C=n(18),g=n.n(C),x=Object(i.b)((function(e){return{value:e.phonebook.filter}}),(function(e){return{onChange:function(t){return e(p.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(O.jsxs)("label",{className:g.a.SearchContainer,children:[Object(O.jsx)("p",{className:g.a.ContName,children:"Find contacts by name:"}),Object(O.jsx)("input",{type:"text",value:t,onChange:n,className:"InputSearch",placeholder:"Paul Richardson"})]})})),v=n(13),N=n.n(v),_=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},F=Object(i.b)((function(e){var t=e.phonebook,n=t.contacts,a=t.filter;return{contacts:_(n,a)}}),(function(e){return{onDeleteContact:function(t){return e(p.deleteContact(t))}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return Object(O.jsx)("ul",{className:N.a.container,children:t.map((function(e){var t=e.name,a=e.number,r=e.id;return Object(O.jsxs)("li",{className:N.a.item,children:[t,": ",a,Object(O.jsx)("button",{type:"button",onClick:function(){return n(r)},className:N.a.btn,children:"Delete"})]},r)}))})}));function S(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"Input-form",children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(f,{}),Object(O.jsx)("h2",{className:"SearchName",children:"Contact"}),Object(O.jsx)(x,{}),Object(O.jsx)(F,{})]})})}var k,y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},I=n(12),A=n(4),T=n(21),L=n.n(T),w=n(14),D=n(2),z=Object(m.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(k={},Object(w.a)(k,p.addContact,(function(e,t){var n=t.payload;return[].concat(Object(I.a)(e),[n])})),Object(w.a)(k,p.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),k)),E=Object(m.c)("",Object(w.a)({},p.changeFilter,(function(e,t){return t.payload}))),q=Object(D.b)({contacts:z,filter:E}),R=n(22),P=n.n(R),Z=[].concat(Object(I.a)(Object(m.d)({serializableCheck:{ignoredActions:[A.a,A.f,A.b,A.c,A.d,A.e]}})),[P.a]),B={key:"phoneName",storage:L.a,blacklist:["filter"]},J=Object(m.a)({reducer:{phonebook:Object(A.g)(B,q)},middleware:Z,devTools:!1}),H={store:J,persistor:Object(A.h)(J)};o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(i.a,{store:H.store,children:Object(O.jsx)(s.a,{loading:null,persistor:H.persistor,children:Object(O.jsx)(S,{})})})}),document.getElementById("root")),y()}},[[45,1,2]]]);
//# sourceMappingURL=main.51f46edf.chunk.js.map