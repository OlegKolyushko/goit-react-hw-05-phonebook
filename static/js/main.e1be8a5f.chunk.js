(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,function(t,e,a){t.exports={name:"ContactForm_name__2dqL9",number:"ContactForm_number__30WFT",inputName:"ContactForm_inputName__1d5_c",inputNumber:"ContactForm_inputNumber__1hUW7",button:"ContactForm_button__3PFRK"}},function(t,e,a){t.exports={enter:"Alert_enter__ezsX_",enterActive:"Alert_enterActive__v0TcF",exit:"Alert_exit__2a8fR",exitActive:"Alert_exitActive__rjGwb",container:"Alert_container__fL7am",text:"Alert_text__2VRix"}},,,,,,function(t,e,a){t.exports={item:"ContactListItem_item__2kV-y",info:"ContactListItem_info__28iaY",button:"ContactListItem_button__3vjta"}},function(t,e,a){t.exports={container:"Filter_container__wp4X2",label:"Filter_label__14ari",input:"Filter_input__2Vbeq"}},function(t,e,a){t.exports={appear:"App_appear__1SpJn",appearActive:"App_appearActive__Bn-wy",title:"App_title__jCwcL",container:"App_container__KHk5R"}},,,function(t,e,a){t.exports={enter:"ContactList_enter__3nqHn",enterActive:"ContactList_enterActive__3sm2U",exit:"ContactList_exit__K1VqQ",exitActive:"ContactList_exitActive__3b4Bj"}},,,,function(t,e,a){t.exports=a(28)},,,,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=a(18),l=a(7),s=a(8),u=a(11),m=a(10),_=a(31),p=a(5),f=a.n(p),b=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handlerForm=function(e){e.preventDefault(),t.props.onAddContact(t.state.name,t.state.number),t.setState({name:""}),t.setState({number:""})},t.handlerName=function(e){t.setState({name:e.target.value})},t.handlerNumber=function(e){t.setState({number:e.target.value})},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number;return r.a.createElement("form",{onSubmit:this.handlerForm},r.a.createElement("label",{className:f.a.name},"Name",r.a.createElement("input",{className:f.a.inputName,type:"text",value:e,onChange:this.handlerName,placeholder:"Enter your name"})),r.a.createElement("label",{className:f.a.number},"Number",r.a.createElement("input",{className:f.a.inputNumber,type:"tel",value:a,onChange:this.handlerNumber,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"123-12-12"})),r.a.createElement("button",{className:f.a.button,type:"submit"},"Add contact"))}}]),a}(n.Component),d=a(12),v=a.n(d);var h=function(t){var e=t.name,a=t.number,n=t.deleteContact;return r.a.createElement("li",{className:v.a.item},r.a.createElement("span",{className:v.a.info},e," : ",a),r.a.createElement("button",{className:v.a.button,onClick:n},"Delete"))},C=a(17),E=a.n(C),N=a(32),A=a(30);var x=function(t){var e=t.contacts,a=t.deleteContact;return r.a.createElement(N.a,{component:"ul"},e.map((function(t){var e=t.id,n=t.name,c=t.number;return r.a.createElement(A.a,{key:e,timeout:250,classNames:E.a},r.a.createElement(h,{name:n,number:c,deleteContact:function(){return a(e)}}))})))},y=a(13),F=a.n(y);var g=function(t){var e=t.value,a=t.handlerFilter;return r.a.createElement("div",{className:F.a.container},r.a.createElement("label",{className:F.a.label},"Search contacts by name",r.a.createElement("input",{className:F.a.input,type:"text",value:e,onChange:function(t){return a(t.target.value)}})))},S=a(14),L=a.n(S),j=a(6),k=a.n(j);var O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:k.a.container},r.a.createElement("h1",{className:k.a.text},"Contact already exist!")))},w=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:"",inList:!1},t.addContact=function(e,a){if(t.state.contacts.find((function(t){return t.name===e})))return t.setState({inList:!0}),void setTimeout((function(){t.setState({inList:!1})}),2500);var n={id:Object(_.a)(),name:e,number:a};t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[n])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handlerFilter=function(e){t.setState({filter:e})},t.filteredContact=function(){var e=t.state,a=e.contacts,n=e.filter;return a.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,a=t.filter,n=t.inList;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{in:!0,appear:!0,timeout:500,classNames:L.a},r.a.createElement("h1",{className:L.a.title},"Phonebook")),r.a.createElement(A.a,{in:n,timeout:250,classNames:k.a,unmountOnExit:!0},r.a.createElement(O,null)),r.a.createElement("section",{className:L.a.container},r.a.createElement(b,{onAddContact:this.addContact})),e.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(g,{value:a,handlerFilter:this.handlerFilter}),r.a.createElement(x,{contacts:this.filteredContact(),deleteContact:this.deleteContact})))}}]),a}(n.Component);o.a.render(r.a.createElement(w,null),document.querySelector("#root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.e1be8a5f.chunk.js.map