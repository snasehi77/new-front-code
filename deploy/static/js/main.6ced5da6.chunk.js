(this.webpackJsonplanding=this.webpackJsonplanding||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(48),c=n.n(r),i=(n(59),n(49)),s=n.n(i),l=(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_ENVIRONMENT,"https://dev-ngn.mrreset.com"),m=n(53),u=Object(m.a)(),d=s.a.create({baseURL:l,headers:{Authorization:"Bearer "+localStorage.getItem("token")}});function f(e){(function(e,t){return d.post(e,t).then((function(e){return e.data})).catch((function(e){console.error(e.message)}))})("login",e).then((function(e){var t;e&&e.token&&(localStorage.setItem("token",e.token),t=e.token,d.defaults.headers={Authorization:"Bearer "+t})}))}d.interceptors.request.use((function(e){return e}),(function(e){return u.push("/"),Promise.reject(e)})),d.interceptors.response.use((function(e){return e}),(function(e){return console.log(e),u.push("/"),Promise.reject(e)}));var h=n(50),g=n(51),p=n(52),E=n.n(p),N=(n(80),function(){return o.a.createElement("div",{className:"content-front vh-100"},o.a.createElement("h4",{className:"your-case-logo font-weight-bold"},o.a.createElement(h.a,{icon:g.a,className:"mr-1"}),"YourCase"),o.a.createElement("img",{className:"img-home",src:E.a,alt:""}),o.a.createElement("div",{className:"row m-0"},o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("div",{className:"text-center ptp-20"},o.a.createElement("h1",{className:"title font-weight-bold"},"Hey everybody! ",o.a.createElement("br",null)," We're coming soon..."),o.a.createElement("p",{className:"subtitle font-weight-bolder"},"We're coming soon! To tell us your cases. ",o.a.createElement("br",null),"We're working hard to give you the best experience."))),o.a.createElement("div",{className:"col-lg-12 ptp-10 d-flex justify-content-center"},o.a.createElement("a",{className:"circle-item pointer-event text-decoration-none"},o.a.createElement("i",{title:"Instagram",className:"fa fa-instagram"})),o.a.createElement("a",{className:"circle-item pointer-event text-decoration-none"},o.a.createElement("i",{title:"Twitter",className:"fa fa-twitter"})),o.a.createElement("a",{className:"circle-item pointer-event text-decoration-none"},o.a.createElement("i",{title:"Linkedin",className:"fa fa-linkedin"})))))}),v=function(){return Object(a.useEffect)((function(){f({username:"hans@allcode.com",password:"wpwd"})}),[]),o.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(81),n(125);c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,t,n){e.exports=n.p+"static/media/woman.72b3515a.png"},54:function(e,t,n){e.exports=n(126)},59:function(e,t,n){},80:function(e,t,n){},94:function(e,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.6ced5da6.chunk.js.map