(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(28)},23:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(9),o=n.n(i),r=(n(23),n(16)),c=n(10),l=n(11),d=n(15),u=n(12),h=n(17),m=n(30),g=n(31),p=n(32),b=(n(24),n(6)),f=n.n(b),w=(n(25),function(e){function t(e){var n,a;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={isStarted:!1,questions:[],currentIndex:0},n.isMobile=function(){return window.innerWidth<=1200},(a=new XMLHttpRequest,a.open("GET","https://docs.google.com/document/d/1CjiR97piLL1sX-RDEW4XZpfOM9j8dpGPZLJSt8bbsuk/edit",!0),a.responseType="blob",a.onload=function(){var e=new FileReader;e.readAsText(a.response),e.onload=function(e){n.setState({questions:n.isMobile()?e.target.result.replace(/>([^\n])/g,">\n$1").replace(/([^\n])</g,"$1\n<").match(/<ol(.)+>\n((.)+\n)+<\/ol>/g).join().replace(/<\/?(.)+>\n?/g,"").split(/\n/g):e.target.result.match(/QUESTIONS\\n(.)+\?/g).join().replace(/\\u0027/g,"'").split(/\\n/g).splice(1)})}},a).send(),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;console.log(this.state.questions);return s.a.createElement(m.a,{fluid:!0,className:"vh-100",style:{backgroundColor:"rgb(35,58,61"}},s.a.createElement(g.a,{className:"h-100 align-items-center"},0===this.state.questions.length?s.a.createElement(p.a,{xs:"12",style:{textAlign:"center",fontSize:"5vh",color:"rgb(200,200,200)"}},"Loading..."):s.a.createElement(p.a,{xs:"12"},s.a.createElement(g.a,{className:"justify-content-center",style:{textAlign:"center"}},s.a.createElement(p.a,{xs:"12",className:this.state.isStarted?"fade-in-delayed":"invisible",style:{fontSize:"5vh",color:"rgb(200,200,200)"}},this.state.questions[this.state.currentIndex]),s.a.createElement(p.a,{xs:"auto",className:"mb-3 d-flex ".concat(this.state.isStarted?"start-animation":"")},s.a.createElement("div",{className:this.state.isStarted?"shrink-animation-delayed":"",style:{width:"50vh",height:"50vh"}},s.a.createElement("img",{src:f.a,alt:"Logo",className:this.state.isStarted?"shrink-animation-delayed":"",style:{width:"100%",borderRadius:"100%",border:"2px white solid"},onClick:function(){return e.setState({isStarted:!0})}}))),s.a.createElement(p.a,{xs:"12",className:this.state.isStarted?"fade-out":"",style:{fontSize:"5vh",color:"rgb(200,200,200)"}},"Press Logo to Start"),s.a.createElement(p.a,{xs:"auto",className:"".concat(this.state.isStarted?"fade-in-delayed":"d-none"),style:{marginTop:"40vh"}},s.a.createElement("div",{style:{width:"10vh",height:"10vh"}},s.a.createElement("img",{src:f.a,alt:"Logo",style:{width:"100%",borderRadius:"100%",border:"2px white solid"},onClick:function(){return e.setState(function(e){return Object(r.a)({},e,{currentIndex:e.currentIndex===e.questions.length-1?0:e.currentIndex+1})})}})))))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports=n.p+"static/media/Logo.76f970b5.jpg"}},[[18,1,2]]]);
//# sourceMappingURL=main.a57dcaf8.chunk.js.map