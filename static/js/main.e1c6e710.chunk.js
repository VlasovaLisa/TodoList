(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(e,t,n){e.exports=n(22)},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(10),c=n.n(o),u=(n(20),n(8)),i=n(7),s=n(3);var l=function(e){var t=Object(a.useState)(e.edit?e.edit.value:""),n=Object(s.a)(t,2),o=n[0],c=n[1],u=Object(a.useRef)(null);Object(a.useEffect)((function(){u.current.focus()}));var i=function(e){c(e.target.value)},l=function(t){t.preventDefault(),e.onSubmit({name:o}),c("")};return r.a.createElement("form",{onSubmit:l,className:"todo-form"},e.edit?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{placeholder:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0437\u0430\u0434\u0430\u0447\u0443",value:o,onChange:i,name:"text",ref:u,className:"todo-input edit"}),r.a.createElement("button",{onClick:l,className:"todo-button edit"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")):r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",value:o,onChange:i,name:"text",className:"todo-input",ref:u}),r.a.createElement("button",{onClick:l,className:"todo-button"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))},f=n(11),d=n(12),m=function(e){var t=e.todos,n=e.completeTodo,o=e.removeTodo,c=e.updateTodo,u=Object(a.useState)({id:null,value:""}),m=Object(s.a)(u,2),p=m[0],v=m[1];return p.id?r.a.createElement(l,{edit:p,onSubmit:function(e){c(Object(i.a)({id:p.id},e)),v({id:null,value:""})}}):t.map((function(e){return r.a.createElement("div",{className:e.isComplete?"todo-row complete":"todo-row",key:e.id},r.a.createElement("div",{onClick:function(){return n(e)}},e.name),r.a.createElement("div",{className:"icons"},r.a.createElement(f.a,{onClick:function(){return o(e.id)},className:"delete-icon"}),r.a.createElement(d.a,{onClick:function(){return v({id:e.id,value:e.name})},className:"edit-icon"})))}))};function p(e){return!e.name||/^\s*$/.test(e.name)}var v=n(2),b=n.n(v),h=n(5),k=n(13),E=n(14),j="https://todolist-vlasova.herokuapp.com/",O=function(){function e(){Object(k.a)(this,e)}return Object(E.a)(e,null,[{key:"getTasks",value:function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"tasks"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"addTask",value:function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(j,"tasks"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteTask",value:function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(j,"tasks/").concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateTask",value:function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(j,"tasks/").concat(t.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();var T=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){O.getTasks().then((function(e){o(e)}),(function(e){console.error(e)}))}),[]);var c=function(e){o([].concat(Object(u.a)(n),[e]))},f=function(e){o((function(t){return t.map((function(t){return t.id===e.id?e:t}))}))},d=function(e){var t=Object(u.a)(n).filter((function(t){return t.id!==e}));o(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u041a\u0430\u043a\u0438\u0435 \u043f\u043b\u0430\u043d\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f?"),r.a.createElement(l,{onSubmit:function(e){p(e)||O.addTask(e).then((function(e){e.json().then((function(e){c(e)}))}),(function(e){console.error(e)}))}}),r.a.createElement(m,{todos:n,completeTodo:function(e){var t=Object(i.a)({},e);t.isComplete=!e.isComplete,O.updateTask(t).then((function(a){if(200===a.status){var r=n.map((function(n){return n.id===e.id&&(n.isComplete=t.isComplete),n}));o(r)}}))},removeTodo:function(e){O.deleteTask(e).then((function(t){200===t.status&&d(e)}))},updateTodo:function(e){p(e)||O.updateTask(e).then((function(t){200===t.status&&f(e)}))}}))};var y=function(){return r.a.createElement("div",{className:"todo-app"},r.a.createElement(T,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e1c6e710.chunk.js.map