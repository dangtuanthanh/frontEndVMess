(self.webpackChunk_1_front_end=self.webpackChunk_1_front_end||[]).push([[315],{786:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>C});var r=t(43),a=t(110),n=t(447),o=t(213),c=t(3),i=t(216),l=t(937),d=t(178),m=t(579);const u=t(712),h=e=>{let{setCurrentForm:s}=e;const t=(0,i.Zp)(),[a,h]=(0,r.useState)(""),[g,p]=(0,r.useState)(""),[b,y]=(0,r.useState)(!1),[f,x]=(0,r.useState)(""),v=(0,c.wA)();return(0,m.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),y(!0),x("");try{const e=await o.A.post(u.login,{email:a,password:g},{withCredentials:!0});200===e.status&&(v((0,l.iD)({token:e.data.accessToken})),(0,d.TV)("accessToken",e.data.accessToken,15),t("/rooms"))}catch(s){s.response&&400===s.response.status?x(s.response.data.message):x("C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i.")}finally{y(!1)}},className:"shadow p-3 mb-5 rounded",children:[(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)("input",{style:{border:"gray 1px solid"},autoFocus:!0,type:"email",className:"form-control-lg w-100",value:a,onChange:e=>h(e.target.value),required:!0,placeholder:"Email"})}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)("input",{style:{border:"gray 1px solid"},type:"password",className:"form-control-lg w-100",value:g,onChange:e=>p(e.target.value),required:!0,placeholder:"M\u1eadt Kh\u1ea9u"})}),f&&(0,m.jsx)("p",{className:"error-message",children:f}),(0,m.jsx)("button",{type:"submit",className:"btn btn-primary w-100 btn-lg",disabled:b,style:{fontWeight:"bolder"},children:b?"\u0110ang t\u1ea3i...":"\u0110\u0103ng nh\u1eadp"}),(0,m.jsx)("div",{className:"mt-1 d-flex justify-content-end",children:(0,m.jsx)("a",{style:{textDecoration:"none"},href:"#",onClick:()=>s("forgotPassword"),children:"Qu\xean m\u1eadt kh\u1ea9u?"})}),(0,m.jsx)("hr",{}),(0,m.jsx)("div",{className:"mt-3",children:(0,m.jsx)(n.j,{onSuccess:async e=>{try{const s=await o.A.post(u.googleLogin,{tokenId:e.credential},{withCredentials:!0});200===s.status&&((0,d.TV)("accessToken",s.data.accessToken,15),v((0,l.iD)({user:s.data.user,token:s.data.accessToken})),t("/rooms"))}catch(s){console.error("\u0110\u0103ng nh\u1eadp Google th\u1ea5t b\u1ea1i:",s),x("C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i.")}},onError:()=>{x("\u0110\u0103ng nh\u1eadp Google th\u1ea5t b\u1ea1i.")}})}),(0,m.jsx)("div",{className:"mt-3 d-flex justify-content-center",children:(0,m.jsx)("button",{className:"btn btn-success w-75",onClick:()=>s("register"),style:{fontWeight:"bolder"},children:"T\u1ea1o t\xe0i kho\u1ea3n m\u1edbi"})})]})},g=t(712),p=e=>{let{setCurrentForm:s,setIsRegister:t,setEmailCode:a}=e;const[n,c]=(0,r.useState)(""),[i,l]=(0,r.useState)(""),[d,u]=(0,r.useState)(!1),[h,p]=(0,r.useState)(""),[b,y]=(0,r.useState)("");return(0,m.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),u(!0),p(""),y(""),t(!0);try{200===(await o.A.post(g.register,{email:n,password:i})).status&&(a(n),s("verifyCode"))}catch(r){r.response&&400===r.response.status?p(r.response.data.message):p("C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i.")}finally{u(!1)}},className:"shadow p-3 mb-5 bg-white rounded",children:[(0,m.jsx)("h2",{style:{fontWeight:"bolder"},children:"\u0110\u0103ng k\xfd"}),(0,m.jsx)("p",{children:"M\u1ed9t t\xe0i kho\u1ea3n \u0111\u1ec3 k\u1ebft n\u1ed1i v\u1edbi m\u1ecdi ng\u01b0\u1eddi."}),(0,m.jsx)("div",{className:"mb-3 mt-2",children:(0,m.jsx)("input",{style:{border:"gray 1px solid"},autoFocus:!0,type:"email",className:"form-control-lg w-100",value:n,onChange:e=>c(e.target.value),required:!0,placeholder:"Email"})}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)("input",{style:{border:"gray 1px solid"},type:"password",className:"form-control-lg w-100",value:i,onChange:e=>l(e.target.value),required:!0,placeholder:"M\u1eadt Kh\u1ea9u"})}),h&&(0,m.jsx)("p",{className:"error-message",children:h}),b&&(0,m.jsx)("p",{className:"success-message",children:b}),(0,m.jsx)("button",{type:"submit",className:"btn btn-primary w-100 btn-lg",disabled:d,style:{fontWeight:"bolder"},children:d?"\u0110ang t\u1ea3i...":"\u0110\u0103ng k\xfd"}),(0,m.jsx)("div",{className:"mt-1 d-flex justify-content-end",children:(0,m.jsx)("a",{href:"#",style:{textDecoration:"none"},onClick:()=>s("login"),children:"Quay l\u1ea1i \u0110\u0103ng nh\u1eadp"})})]})},b=t(712),y=e=>{let{setCurrentForm:s,isRegister:t,email:a}=e;const[n,c]=(0,r.useState)(""),[i,l]=(0,r.useState)(!1),[d,u]=(0,r.useState)(""),[h,g]=(0,r.useState)("");return(0,m.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),l(!0),u(""),g("");try{if(t){200===(await o.A.post(b.verifyCode,{email:a,code:n})).status&&(g("X\xe1c th\u1ef1c th\xe0nh c\xf4ng! Vui l\xf2ng ch\u1edd ..."),setTimeout((()=>{s("login")}),2e3))}else{200===(await o.A.post(b.verifyResetCode,{email:a,code:n},{withCredentials:!0})).status&&s("resetPassword")}}catch(r){r.response&&400===r.response.status?u(r.response.data.message):u("C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i.")}finally{l(!1)}},className:"shadow p-3 mb-5 bg-white rounded",children:[(0,m.jsx)("h2",{style:{fontWeight:"bolder"},children:"X\xe1c th\u1ef1c m\xe3"}),(0,m.jsxs)("p",{children:["Nh\u1eadp m\xe3 code \u0111\xe3 \u0111\u01b0\u1ee3c g\u1eedi t\u1edbi email: ",a]}),(0,m.jsx)("div",{className:"mb-3 mt-2",children:(0,m.jsx)("input",{style:{border:"gray 1px solid"},autoFocus:!0,type:"text",className:"form-control-lg w-100",value:n,onChange:e=>c(e.target.value),required:!0,placeholder:"M\xe3 X\xe1c Th\u1ef1c"})}),d&&(0,m.jsx)("p",{className:"error-message",children:d}),h&&(0,m.jsx)("p",{className:"success-message",style:{color:"darkgreen"},children:h}),(0,m.jsx)("button",{type:"submit",className:"btn btn-primary w-100 btn-lg",disabled:i,style:{fontWeight:"bolder"},children:i?"\u0110ang t\u1ea3i...":"X\xe1c th\u1ef1c"}),t?(0,m.jsx)("div",{className:"mt-1 d-flex justify-content-end",children:(0,m.jsx)("a",{href:"#",style:{textDecoration:"none"},onClick:()=>s("register"),children:"Quay l\u1ea1i \u0110\u0103ng k\xfd"})}):(0,m.jsx)("div",{className:"mt-1 d-flex justify-content-end",children:(0,m.jsx)("a",{href:"#",style:{textDecoration:"none"},onClick:()=>s("forgotPassword"),children:"Quay l\u1ea1i Nh\u1eadp Email"})})]})},f=t(712),x=e=>{let{setCurrentForm:s,setIsRegister:t,setEmailCode:a}=e;const[n,c]=(0,r.useState)(""),[i,l]=(0,r.useState)(!1),[d,u]=(0,r.useState)(""),[h,g]=(0,r.useState)("");return(0,m.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),l(!0),u(""),g(""),t(!1);try{200===(await o.A.post(f.forgotPassword,{email:n})).status&&(a(n),s("verifyCode"))}catch(r){r.response&&400===r.response.status?u(r.response.data.message):u("C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i.")}finally{l(!1)}},className:"shadow p-3 mb-5 bg-white rounded",children:[(0,m.jsx)("h2",{style:{fontWeight:"bolder"},children:"Qu\xean m\u1eadt kh\u1ea9u"}),(0,m.jsx)("p",{children:"Nh\u1eadp email c\u1ee7a b\u1ea1n \u0111\u1ec3 nh\u1eadn m\xe3 kh\xf4i ph\u1ee5c m\u1eadt kh\u1ea9u"}),(0,m.jsx)("div",{className:"mb-3 mt-2",children:(0,m.jsx)("input",{style:{border:"gray 1px solid"},autoFocus:!0,type:"email",className:"form-control-lg w-100",value:n,onChange:e=>c(e.target.value),required:!0,placeholder:"Email"})}),d&&(0,m.jsx)("p",{className:"error-message",children:d}),h&&(0,m.jsx)("p",{className:"success-message",children:h}),(0,m.jsx)("button",{type:"submit",className:"btn btn-primary w-100 btn-lg",disabled:i,style:{fontWeight:"bolder"},children:i?"\u0110ang t\u1ea3i...":"G\u1eedi m\xe3 x\xe1c th\u1ef1c"}),(0,m.jsx)("div",{className:"mt-1 d-flex justify-content-end",children:(0,m.jsx)("a",{href:"#",style:{textDecoration:"none"},onClick:()=>s("login"),children:"Quay l\u1ea1i \u0110\u0103ng nh\u1eadp"})})]})},v=t(712),k=e=>{let{setCurrentForm:s}=e;const[t,a]=(0,r.useState)(""),[n,c]=(0,r.useState)(!1),[i,l]=(0,r.useState)(""),[d,u]=(0,r.useState)("");return(0,m.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),c(!0),l(""),u("");try{200===(await o.A.post(v.resetPassword,{newPassword:t},{withCredentials:!0})).status&&(u("\u0110\u1ed5i m\u1eadt kh\u1ea9u th\xe0nh c\xf4ng! Vui l\xf2ng ch\u1edd ..."),setTimeout((()=>{s("login")}),2e3))}catch(r){r.response&&400===r.response.status?l(r.response.data.message):l("C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i.")}finally{c(!1)}},className:"shadow p-3 mb-5 bg-white rounded",children:[(0,m.jsx)("h2",{style:{fontWeight:"bolder"},children:"\u0110\u1ed5i m\u1eadt kh\u1ea9u"}),(0,m.jsx)("p",{children:"Nh\u1eadp m\u1eadt kh\u1ea9u m\u1edbi c\u1ee7a b\u1ea1n."}),(0,m.jsx)("div",{className:"mb-3 mt-2",children:(0,m.jsx)("input",{style:{border:"gray 1px solid"},type:"password",className:"form-control-lg w-100",value:t,onChange:e=>a(e.target.value),required:!0,placeholder:"M\u1eadt Kh\u1ea9u M\u1edbi"})}),i&&(0,m.jsx)("p",{className:"error-message",children:i}),d&&(0,m.jsx)("p",{className:"success-message",style:{color:"darkgreen",fontWeight:"bolder"},children:d}),(0,m.jsx)("button",{type:"submit",className:"btn btn-primary w-100 btn-lg",disabled:n,style:{fontWeight:"bolder"},children:n?"\u0110ang t\u1ea3i...":"\u0110\u1ed5i m\u1eadt kh\u1ea9u"}),(0,m.jsx)("div",{className:"mt-1 d-flex justify-content-end",children:(0,m.jsx)("a",{href:"#",style:{textDecoration:"none"},onClick:()=>s("login"),children:"Quay l\u1ea1i \u0110\u0103ng nh\u1eadp"})})]})},j=t.p+"static/media/Logo.3bc741b5c804819999cb.jpg";var w=t(617);const C=()=>{const[e,s]=(0,r.useState)(!0),t=(0,i.Zp)(),n=(0,c.wA)();(0,r.useEffect)((()=>{(async()=>{const e=await(0,w.o)();e.success?(e.user&&(n((0,l.iD)({user:e.user})),t("/rooms")),s(!1)):s(!1)})(),(0,a.n)()}),[t,n]);const[o,d]=(0,r.useState)("login"),[u,g]=(0,r.useState)(),[b,f]=(0,r.useState)(!0);return e?(0,m.jsx)("div",{children:"Vui l\xf2ng ch\u1edd..."}):(0,m.jsxs)("div",{className:"auth-page",children:[(0,m.jsx)("div",{className:"auth-page-logo",children:(0,m.jsx)("img",{src:j,alt:"Logo"})}),(0,m.jsx)("div",{className:"auth-form",children:(()=>{switch(o){case"login":default:return(0,m.jsx)(h,{setCurrentForm:d});case"register":return(0,m.jsx)(p,{setCurrentForm:d,setIsRegister:f,setEmailCode:g});case"forgotPassword":return(0,m.jsx)(x,{setCurrentForm:d,setIsRegister:f,setEmailCode:g});case"verifyCode":return(0,m.jsx)(y,{setCurrentForm:d,isRegister:b,email:u});case"resetPassword":return(0,m.jsx)(k,{setCurrentForm:d})}})()})]})}},712:e=>{e.exports={socketServer:"https://backendvmess.onrender.com",getMessagesByRoomId:e=>`https://backendvmess.onrender.com/${e}/messages`,login:"https://backendvmess.onrender.com/login",googleLogin:"https://backendvmess.onrender.com/googleLogin",register:"https://backendvmess.onrender.com/register",verifyCode:"https://backendvmess.onrender.com/verifyCode",forgotPassword:"https://backendvmess.onrender.com/forgotPassword",verifyResetCode:"https://backendvmess.onrender.com/verifyResetCode",resetPassword:"https://backendvmess.onrender.com/resetPassword",logout:"https://backendvmess.onrender.com/logout",checkToken:"https://backendvmess.onrender.com/checkToken",refreshToken:"https://backendvmess.onrender.com/refreshToken",getUserRooms:"https://backendvmess.onrender.com/getUserRooms",searchUser:"https://backendvmess.onrender.com/searchUser",createRoom:"https://backendvmess.onrender.com/createRoom",editMessageById:e=>`https://backendvmess.onrender.com/editMessage/${e}`,deleteMessageById:e=>`https://backendvmess.onrender.com/deleteMessage/${e}`,updateProfilePicture:"https://backendvmess.onrender.com/updateProfilePicture",updateUserName:"https://backendvmess.onrender.com/updateUserName",changePassword:"https://backendvmess.onrender.com/changePassword"}},617:(e,s,t)=>{"use strict";t.d(s,{o:()=>o,v:()=>c});var r=t(213),a=t(178);const n=t(712),o=async()=>{try{const e=await r.A.post(n.checkToken,{},{headers:{Authorization:(0,a.Ri)("accessToken")}});if(200===e.status)return{success:!0,user:e.data.user}}catch(e){if(!e.response)return{success:!1};if(400===e.response.status||401===e.response.status){const e=await c();return e.success?{success:!0,user:e.user}:{success:!1}}if(500===e.response.status)return{success:!1}}return{success:!1}},c=async()=>{try{const e=await r.A.post(n.refreshToken,{},{withCredentials:!0});if(200===e.status)return(0,a.TV)("accessToken",e.data.accessToken,15),{success:!0,user:e.data.user}}catch(e){return!e.response||400!==e.response.status&&e.response.status,{success:!1}}}},178:(e,s,t)=>{"use strict";function r(e){const s=e+"=",t=decodeURIComponent(document.cookie).split(";");for(let r=0;r<t.length;r++){let e=t[r];for(;" "===e.charAt(0);)e=e.substring(1);if(0===e.indexOf(s))return e.substring(s.length,e.length)}return""}function a(e,s,t){const r=new Date;r.setMinutes(r.getMinutes()+t);const a=`expires=${r.toUTCString()}`;document.cookie=`${e}=${s}; ${a}`}function n(e){document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`}t.d(s,{Ri:()=>r,TV:()=>a,Yj:()=>n})},110:(e,s,t)=>{"use strict";t.d(s,{A:()=>r,n:()=>a});const r=e=>{if("dark"===e)document.body.classList.add("dark-mode"),document.body.classList.remove("light-mode");else if("light"===e)document.body.classList.add("light-mode"),document.body.classList.remove("dark-mode");else{window.matchMedia("(prefers-color-scheme: dark)").matches?(document.body.classList.add("dark-mode"),document.body.classList.remove("light-mode")):(document.body.classList.add("light-mode"),document.body.classList.remove("dark-mode"))}},a=()=>{const e=localStorage.getItem("theme");if(e)r(e);else{const e=window.matchMedia("(prefers-color-scheme: dark)").matches;r(e?"dark":"light")}}}}]);
//# sourceMappingURL=315.16082429.chunk.js.map