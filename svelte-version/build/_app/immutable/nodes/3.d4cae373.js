import{D as je,E as Be,F as ht,s as Te,e as de,i as L,d as _,z as ye,f as D,g as T,h as S,j as g,k as U,G as ft,a as F,c as Y,H as Q,x as y,I as Se,J as B,K as ze,L as dt,M as Ge,N as ut,O as Ze,y as ke,P as $e,Q as He,l as _e,A as Ne,m as be,n as pt,o as gt,B as _t,C as bt}from"../chunks/scheduler.017b303e.js";import{n as wt,l as vt,S as Ie,i as Ee,a as V,g as we,t as X,c as ve,f as mt,h as De,b as fe,d as ue,m as me,e as he}from"../chunks/index.4cbd2ca2.js";import{S as yt,F as kt,M as Dt,e as Je,i as Pe}from"../chunks/index.824b5cc3.js";import{w as Re}from"../chunks/index.739c3de6.js";import{b as Ve}from"../chunks/paths.864cf02d.js";function Le(s){const e=s-1;return e*e*e+1}function pe(s,{delay:e=0,duration:t=400,easing:r=Le,x:n=0,y:l=0,opacity:i=0}={}){const a=getComputedStyle(s),o=+a.opacity,f=a.transform==="none"?"":a.transform,c=o*(1-i),[b,I]=je(n),[z,d]=je(l);return{delay:e,duration:t,easing:r,css:(u,h)=>`
			transform: ${f} translate(${(1-u)*b}${I}, ${(1-u)*z}${d});
			opacity: ${o-c*h}`}}function Ke(s){return Object.prototype.toString.call(s)==="[object Date]"}function Oe(s,e){if(s===e||s!==s)return()=>s;const t=typeof s;if(t!==typeof e||Array.isArray(s)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(s)){const r=e.map((n,l)=>Oe(s[l],n));return n=>r.map(l=>l(n))}if(t==="object"){if(!s||!e)throw new Error("Object cannot be null");if(Ke(s)&&Ke(e)){s=s.getTime(),e=e.getTime();const l=e-s;return i=>new Date(s+i*l)}const r=Object.keys(e),n={};return r.forEach(l=>{n[l]=Oe(s[l],e[l])}),l=>{const i={};return r.forEach(a=>{i[a]=n[a](l)}),i}}if(t==="number"){const r=e-s;return n=>s+n*r}throw new Error(`Cannot interpolate ${t} values`)}function Qe(s,e={}){const t=Re(s);let r,n=s;function l(i,a){if(s==null)return t.set(s=i),Promise.resolve();n=i;let o=r,f=!1,{delay:c=0,duration:b=400,easing:I=ht,interpolate:z=Oe}=Be(Be({},e),a);if(b===0)return o&&(o.abort(),o=null),t.set(s=n),Promise.resolve();const d=wt()+c;let u;return r=vt(h=>{if(h<d)return!0;f||(u=z(s,i),typeof b=="function"&&(b=b(s,i)),f=!0),o&&(o.abort(),o=null);const w=h-d;return w>b?(t.set(s=i),!1):(t.set(s=u(I(w/b))),!0)}),r.promise}return{set:l,update:(i,a)=>l(i(n,s),a),subscribe:t.subscribe}}const Ae=Re(0);var ct;const It=(ct=globalThis.matchMedia)==null?void 0:ct.call(globalThis,"(prefers-reduced-motion: reduce)").matches,Me=s=>({easing:Le,duration:It?0:s});function xe(s){let e,t,r,n,l=!s[2]&&et();return{c(){e=D("div"),l&&l.c(),this.h()},l(i){e=T(i,"DIV",{class:!0,style:!0});var a=S(e);l&&l.l(a),a.forEach(_),this.h()},h(){g(e,"class","bp-load"),U(e,"background-image","url("+s[0]+")")},m(i,a){L(i,e,a),l&&l.m(e,null),n=!0},p(i,a){s=i,s[2]?l&&(l.d(1),l=null):l||(l=et(),l.c(),l.m(e,null)),(!n||a&1)&&U(e,"background-image","url("+s[0]+")")},i(i){n||(i&&ft(()=>{n&&(r&&r.end(1),t=mt(e,pe,{duration:s[1]?400:0}),t.start())}),n=!0)},o(i){t&&t.invalidate(),i&&(r=De(e,pe,{duration:480})),n=!1},d(i){i&&_(e),l&&l.d(),i&&r&&r.end()}}}function et(s){let e,t,r;return{c(){e=D("span"),t=F(),r=D("span"),this.h()},l(n){e=T(n,"SPAN",{class:!0}),S(e).forEach(_),t=Y(n),r=T(n,"SPAN",{class:!0}),S(r).forEach(_),this.h()},h(){g(e,"class","bp-bar"),g(r,"class","bp-o")},m(n,l){L(n,e,l),L(n,t,l),L(n,r,l)},d(n){n&&(_(e),_(t),_(r))}}}function Et(s){let e,t=(!s[1]||s[2])&&xe(s);return{c(){t&&t.c(),e=de()},l(r){t&&t.l(r),e=de()},m(r,n){t&&t.m(r,n),L(r,e,n)},p(r,[n]){!r[1]||r[2]?t?(t.p(r,n),n&6&&V(t,1)):(t=xe(r),t.c(),V(t,1),t.m(e.parentNode,e)):t&&(we(),X(t,1,1,()=>{t=null}),ve())},i(r){V(t)},o(r){X(t)},d(r){r&&_(e),t&&t.d(r)}}}function Ct(s,e,t){let r;ye(s,Ae,i=>t(2,r=i));let{thumb:n}=e,{loaded:l}=e;return s.$$set=i=>{"thumb"in i&&t(0,n=i.thumb),"loaded"in i&&t(1,l=i.loaded)},[n,l,r]}class Xe extends Ie{constructor(e){super(),Ee(this,e,Ct,Et,Te,{thumb:0,loaded:1})}}function tt(s){let e,t,r,n,l,i,a;return{c(){e=D("img"),this.h()},l(o){e=T(o,"IMG",{srcset:!0,sizes:!0,alt:!0}),this.h()},h(){dt(e,t=s[7].img)||g(e,"srcset",t),g(e,"sizes",r=s[8].sizes||`${s[1]}px`),g(e,"alt",s[7].alt)},m(o,f){L(o,e,f),l=!0,i||(a=B(e,"error",s[26]),i=!0)},p(o,f){(!l||f[0]&2&&r!==(r=o[8].sizes||`${o[1]}px`))&&g(e,"sizes",r)},i(o){l||(n&&n.end(1),l=!0)},o(o){n=De(e,pe,{}),l=!1},d(o){o&&_(e),o&&n&&n.end(),i=!1,a()}}}function rt(s){let e,t;return e=new Xe({props:{thumb:s[7].thumb,loaded:s[2]}}),{c(){fe(e.$$.fragment)},l(r){ue(e.$$.fragment,r)},m(r,n){me(e,r,n),t=!0},p(r,n){const l={};n[0]&4&&(l.loaded=r[2]),e.$set(l)},i(r){t||(V(e.$$.fragment,r),t=!0)},o(r){X(e.$$.fragment,r),t=!1},d(r){he(e,r)}}}function Tt(s){let e,t,r,n,l,i,a=s[2]&&tt(s),o=s[3]&&rt(s);return{c(){e=D("div"),t=D("div"),a&&a.c(),r=F(),o&&o.c(),this.h()},l(f){e=T(f,"DIV",{class:!0});var c=S(e);t=T(c,"DIV",{class:!0,style:!0});var b=S(t);a&&a.l(b),r=Y(b),o&&o.l(b),b.forEach(_),c.forEach(_),this.h()},h(){g(t,"class","bp-img"),U(t,"background-image","url("+s[7].thumb+")"),U(t,"width",s[0][0]+"px"),U(t,"height",s[0][1]+"px"),U(t,"transform","translate3d("+(s[0][0]/-2+s[6][0])+"px, "+(s[0][1]/-2+s[6][1])+"px, 0)"),Q(t,"bp-drag",s[4]),Q(t,"bp-canzoom",s[11]>1&&s[0][0]<s[12]),g(e,"class","bp-img-wrap"),Q(e,"bp-close",s[5])},m(f,c){L(f,e,c),y(e,t),a&&a.m(t,null),y(t,r),o&&o.m(t,null),n=!0,l||(i=[Se(s[20].call(null,t)),B(e,"wheel",s[15]),B(e,"pointerdown",s[16]),B(e,"pointermove",s[17]),B(e,"pointerup",s[19]),B(e,"pointercancel",s[18])],l=!0)},p(f,c){f[2]?a?(a.p(f,c),c[0]&4&&V(a,1)):(a=tt(f),a.c(),V(a,1),a.m(t,r)):a&&(we(),X(a,1,1,()=>{a=null}),ve()),f[3]?o?(o.p(f,c),c[0]&8&&V(o,1)):(o=rt(f),o.c(),V(o,1),o.m(t,null)):o&&(we(),X(o,1,1,()=>{o=null}),ve()),(!n||c[0]&1)&&U(t,"width",f[0][0]+"px"),(!n||c[0]&1)&&U(t,"height",f[0][1]+"px"),(!n||c[0]&65)&&U(t,"transform","translate3d("+(f[0][0]/-2+f[6][0])+"px, "+(f[0][1]/-2+f[6][1])+"px, 0)"),(!n||c[0]&16)&&Q(t,"bp-drag",f[4]),(!n||c[0]&6145)&&Q(t,"bp-canzoom",f[11]>1&&f[0][0]<f[12]),(!n||c[0]&32)&&Q(e,"bp-close",f[5])},i(f){n||(V(a),V(o),n=!0)},o(f){X(a),X(o),n=!1},d(f){f&&_(e),a&&a.d(),o&&o.d(),l=!1,ze(i)}}}function zt(s,e,t){let r,n,l,i;ye(s,Ae,m=>t(25,l=m));let{props:a}=e,{smallScreen:o}=e,{activeItem:f,opts:c,prev:b,next:I,zoomed:z,container:d}=a;ye(s,z,m=>t(24,r=m));let u=f.maxZoom||c.maxZoom||10,h=a.calculateDimensions(f),w=h[0],O,E,G,te,x=0,A,re,le,oe,Z,ie,ge;const ne=+f.width,ae=[],W=new Map,se=Qe(h,Me(400));ye(s,se,m=>t(0,i=m));const J=Qe([0,0],Me(400));ye(s,J,m=>t(6,n=m));const ce=([m,N],$=i)=>{const k=($[0]-d.w)/2,R=($[1]-d.h)/2;return k<0?m=0:m>k?o?(m=A?k+(m-k)/10:k,m>k+20&&t(4,A=b())):m=k:m<-k&&(o?(m=A?-k-(-k-m)/10:-k,m<-k-20&&t(4,A=I())):m=-k),R<0?N=0:N>R?N=R:N<-R&&(N=-R),[m,N]};function K(m=u,N){if(l)return;const $=h[0]*u;let k=i[0]+i[0]*m,R=i[1]+i[1]*m;if(m>0)k>$&&(k=$,R=h[1]*u),k>ne&&(k=ne,R=+f.height);else if(k<h[0])return se.set(h),J.set([0,0]);let{x:ee,y:Ce,width:qe,height:Fe}=te.getBoundingClientRect();const Ye=N?N.clientX-ee-qe/2:0,Ue=N?N.clientY-Ce-Fe/2:0;ee=-Ye*(k/qe)+Ye,Ce=-Ue*(R/Fe)+Ue;const We=[k,R];se.set(We).then(()=>{t(1,w=Math.round(Math.max(w,k)))}),J.set(ce([n[0]+ee,n[1]+Ce],We))}Object.defineProperty(f,"zoom",{configurable:!0,get:()=>r,set:m=>K(m?u:-u)});const p=m=>{c.inline&&!r||(m.preventDefault(),K(m.deltaY/-300,m))},v=m=>{m.button!==2&&(m.preventDefault(),t(4,A=!0),W.set(m.pointerId,m),le=m.clientX,oe=m.clientY,Z=n[0],ie=n[1])},C=m=>{var k;if(W.size>1)return t(4,A=!1),((k=c.noPinch)==null?void 0:k.call(c,d.el))||H(m);if(!A)return;let N=m.clientX,$=m.clientY;re=ae.push({x:N,y:$})>2,N=N-le,$=$-oe,r||($<-90&&t(4,A=!c.noClose&&a.close()),Math.abs($)<30&&(N>40&&t(4,A=b()),N<-40&&t(4,A=I()))),r&&re&&!l&&J.set(ce([Z+N,ie+$]),{duration:0})},H=m=>{const[N,$]=W.set(m.pointerId,m).values(),k=N.clientX-$.clientX,R=N.clientY-$.clientY,ee=Math.hypot(k,R);G=G||{clientX:(N.clientX+$.clientX)/2,clientY:(N.clientY+$.clientY)/2},K(((x||ee)-ee)/-35,G),x=ee},M=m=>W.delete(m.pointerId);function P(m){var N;if(M(m),G&&(t(4,A=x=0),G=W.size?G:null),!!A){if(t(4,A=!1),m.target===this&&!c.noClose)return a.close();if(re){const[$,k,R]=ae.slice(-3),ee=k.x-R.x,Ce=k.y-R.y;Math.hypot(ee,Ce)>5&&J.set(ce([n[0]-($.x-R.x)*5,n[1]-($.y-R.y)*5]))}else(N=c.onImageClick)!=null&&N.call(c,d.el,f)||K(r?-u:u,m);re=!1,ae.length=0}}const q=m=>{te=m,a.setResizeFunc(()=>{t(23,h=a.calculateDimensions(f)),(c.inline||!o)&&(se.set(h),J.set([0,0]))}),a.loadImage(f).then(()=>{t(2,O=!0),a.preloadNext()}),setTimeout(()=>{t(3,E=!O)},250)},j=m=>{var N;return(N=c.onError)==null?void 0:N.call(c,d,f,m)};return s.$$set=m=>{"props"in m&&t(21,a=m.props),"smallScreen"in m&&t(22,o=m.smallScreen)},s.$$.update=()=>{if(s.$$.dirty[0]&8388609&&z.set(i[0]-10>h[0]),s.$$.dirty[0]&58720256&&l&&r&&!c.intro){const m=Me(480);J.set([0,0],m),se.set(h,m),t(5,ge=!0)}},[i,w,O,E,A,ge,n,f,c,z,d,u,ne,se,J,p,v,C,M,P,q,a,o,h,r,l,j]}class Nt extends Ie{constructor(e){super(),Ee(this,e,zt,Tt,Te,{props:21,smallScreen:22},null,[-1,-1])}}function Pt(s){let e,t,r,n,l,i,a;return n=new Xe({props:{thumb:s[2].thumb,loaded:s[0]}}),{c(){e=D("div"),t=D("iframe"),r=F(),fe(n.$$.fragment),this.h()},l(o){e=T(o,"DIV",{class:!0,style:!0});var f=S(e);t=T(f,"IFRAME",{allow:!0,title:!0}),S(t).forEach(_),r=Y(f),ue(n.$$.fragment,f),f.forEach(_),this.h()},h(){g(t,"allow","autoplay; fullscreen"),g(t,"title",s[2].title),g(e,"class","bp-if"),U(e,"width",s[1][0]+"px"),U(e,"height",s[1][1]+"px")},m(o,f){L(o,e,f),y(e,t),y(e,r),me(n,e,null),l=!0,i||(a=[Se(s[3].call(null,t)),B(t,"load",s[5])],i=!0)},p(o,[f]){const c={};f&1&&(c.loaded=o[0]),n.$set(c),(!l||f&2)&&U(e,"width",o[1][0]+"px"),(!l||f&2)&&U(e,"height",o[1][1]+"px")},i(o){l||(V(n.$$.fragment,o),l=!0)},o(o){X(n.$$.fragment,o),l=!1},d(o){o&&_(e),he(n),i=!1,ze(a)}}}function At(s,e,t){let{props:r}=e,n,l;const{activeItem:i}=r,a=()=>t(1,l=r.calculateDimensions(i));a(),r.setResizeFunc(a);const o=c=>c.src=i.iframe,f=()=>t(0,n=!0);return s.$$set=c=>{"props"in c&&t(4,r=c.props)},[n,l,i,o,r,f]}class St extends Ie{constructor(e){super(),Ee(this,e,At,Pt,Te,{props:4})}}function Vt(s){let e,t,r,n,l;return t=new Xe({props:{thumb:s[2].thumb,loaded:s[0]}}),{c(){e=D("div"),fe(t.$$.fragment),this.h()},l(i){e=T(i,"DIV",{class:!0,style:!0});var a=S(e);ue(t.$$.fragment,a),a.forEach(_),this.h()},h(){g(e,"class","bp-vid"),U(e,"width",s[1][0]+"px"),U(e,"height",s[1][1]+"px"),U(e,"background-image","url("+s[2].thumb+")")},m(i,a){L(i,e,a),me(t,e,null),r=!0,n||(l=Se(s[3].call(null,e)),n=!0)},p(i,[a]){const o={};a&1&&(o.loaded=i[0]),t.$set(o),(!r||a&2)&&U(e,"width",i[1][0]+"px"),(!r||a&2)&&U(e,"height",i[1][1]+"px")},i(i){r||(V(t.$$.fragment,i),r=!0)},o(i){X(t.$$.fragment,i),r=!1},d(i){i&&_(e),he(t),n=!1,l()}}}function Mt(s,e,t){let{props:r}=e,n,l;const{activeItem:i,opts:a,container:o}=r,f=()=>t(1,l=r.calculateDimensions(i));f(),r.setResizeFunc(f);const c=(I,z)=>{for(const d in z)g(I,d,z[d])},b=I=>{let z;const d=(u,h)=>{var w;Array.isArray(h)||(h=JSON.parse(h));for(const O of h){z||(z=D((w=O.type)!=null&&w.includes("audio")?"audio":"video"),c(z,{controls:!0,autoplay:!0,playsinline:!0,tabindex:"0"}));const E=D(u);c(E,O),u=="source"&&B(E,"error",G=>{var te;return(te=a.onError)==null?void 0:te.call(a,o,i,G)}),Ge(z,E)}};d("source",i.sources),d("track",i.tracks||[]),B(z,"canplay",()=>t(0,n=!0)),Ge(I,z)};return s.$$set=I=>{"props"in I&&t(4,r=I.props)},[n,l,i,b,r]}class Ot extends Ie{constructor(e){super(),Ee(this,e,Mt,Vt,Te,{props:4})}}function nt(s){let e,t,r,n,l=s[6].i,i,a,o,f,c,b,I,z,d=lt(s),u=s[0].length>1&&ot(s);return{c(){e=D("div"),t=D("div"),n=F(),d.c(),i=F(),a=D("div"),o=D("button"),f=F(),u&&u.c(),this.h()},l(h){e=T(h,"DIV",{class:!0});var w=S(e);t=T(w,"DIV",{}),S(t).forEach(_),n=Y(w),d.l(w),i=Y(w),a=T(w,"DIV",{class:!0});var O=S(a);o=T(O,"BUTTON",{class:!0,title:!0,"aria-label":!0}),S(o).forEach(_),f=Y(O),u&&u.l(O),O.forEach(_),w.forEach(_),this.h()},h(){g(o,"class","bp-x"),g(o,"title","Close"),g(o,"aria-label","Close"),g(a,"class","bp-controls"),g(e,"class","bp-wrap"),Q(e,"bp-zoomed",s[10]),Q(e,"bp-inline",s[8]),Q(e,"bp-small",s[7]),Q(e,"bp-noclose",s[5].noClose)},m(h,w){L(h,e,w),y(e,t),y(e,n),d.m(e,null),y(e,i),y(e,a),y(a,o),y(a,f),u&&u.m(a,null),b=!0,I||(z=[B(o,"click",s[1]),Se(s[14].call(null,e))],I=!0)},p(h,w){w[0]&64&&ut(l,l=h[6].i)?(we(),X(d,1,1,ke),ve(),d=lt(h),d.c(),V(d,1),d.m(e,i)):d.p(h,w),h[0].length>1?u?u.p(h,w):(u=ot(h),u.c(),u.m(a,null)):u&&(u.d(1),u=null),(!b||w[0]&1024)&&Q(e,"bp-zoomed",h[10]),(!b||w[0]&256)&&Q(e,"bp-inline",h[8]),(!b||w[0]&128)&&Q(e,"bp-small",h[7]),(!b||w[0]&32)&&Q(e,"bp-noclose",h[5].noClose)},i(h){b||(r&&r.end(1),V(d),c&&c.end(1),b=!0)},o(h){h&&(r=De(t,pe,{duration:480})),X(d),h&&(c=De(a,pe,{})),b=!1},d(h){h&&_(e),h&&r&&r.end(),d.d(h),u&&u.d(),h&&c&&c.end(),I=!1,ze(z)}}}function $t(s){let e,t,r=s[6].html+"";return{c(){e=D("div"),t=new $e(!1),this.h()},l(n){e=T(n,"DIV",{class:!0});var l=S(e);t=He(l,!1),l.forEach(_),this.h()},h(){t.a=null,g(e,"class","bp-html")},m(n,l){L(n,e,l),t.m(r,e)},p(n,l){l[0]&64&&r!==(r=n[6].html+"")&&t.p(r)},i:ke,o:ke,d(n){n&&_(e)}}}function Ht(s){let e,t;return e=new St({props:{props:s[13]()}}),{c(){fe(e.$$.fragment)},l(r){ue(e.$$.fragment,r)},m(r,n){me(e,r,n),t=!0},p:ke,i(r){t||(V(e.$$.fragment,r),t=!0)},o(r){X(e.$$.fragment,r),t=!1},d(r){he(e,r)}}}function Rt(s){let e,t;return e=new Ot({props:{props:s[13]()}}),{c(){fe(e.$$.fragment)},l(r){ue(e.$$.fragment,r)},m(r,n){me(e,r,n),t=!0},p:ke,i(r){t||(V(e.$$.fragment,r),t=!0)},o(r){X(e.$$.fragment,r),t=!1},d(r){he(e,r)}}}function Lt(s){let e,t;return e=new Nt({props:{props:s[13](),smallScreen:s[7]}}),{c(){fe(e.$$.fragment)},l(r){ue(e.$$.fragment,r)},m(r,n){me(e,r,n),t=!0},p(r,n){const l={};n[0]&128&&(l.smallScreen=r[7]),e.$set(l)},i(r){t||(V(e.$$.fragment,r),t=!0)},o(r){X(e.$$.fragment,r),t=!1},d(r){he(e,r)}}}function st(s){let e,t,r=s[6].caption+"",n,l;return{c(){e=D("div"),t=new $e(!1),this.h()},l(i){e=T(i,"DIV",{class:!0});var a=S(e);t=He(a,!1),a.forEach(_),this.h()},h(){t.a=null,g(e,"class","bp-cap")},m(i,a){L(i,e,a),t.m(r,e),l=!0},p(i,a){(!l||a[0]&64)&&r!==(r=i[6].caption+"")&&t.p(r)},i(i){l||(n&&n.end(1),l=!0)},o(i){n=De(e,pe,{duration:200}),l=!1},d(i){i&&_(e),i&&n&&n.end()}}}function lt(s){let e,t,r,n,l,i,a,o,f,c;const b=[Lt,Rt,Ht,$t],I=[];function z(u,h){return u[6].img?0:u[6].sources?1:u[6].iframe?2:3}t=z(s),r=I[t]=b[t](s);let d=s[6].caption&&st(s);return{c(){e=D("div"),r.c(),i=F(),d&&d.c(),a=de(),this.h()},l(u){e=T(u,"DIV",{class:!0});var h=S(e);r.l(h),h.forEach(_),i=Y(u),d&&d.l(u),a=de(),this.h()},h(){g(e,"class","bp-inner")},m(u,h){L(u,e,h),I[t].m(e,null),L(u,i,h),d&&d.m(u,h),L(u,a,h),o=!0,f||(c=[B(e,"pointerdown",s[21]),B(e,"pointerup",s[22])],f=!0)},p(u,h){let w=t;t=z(u),t===w?I[t].p(u,h):(we(),X(I[w],1,1,()=>{I[w]=null}),ve(),r=I[t],r?r.p(u,h):(r=I[t]=b[t](u),r.c()),V(r,1),r.m(e,null)),u[6].caption?d?(d.p(u,h),h[0]&64&&V(d,1)):(d=st(u),d.c(),V(d,1),d.m(a.parentNode,a)):d&&(we(),X(d,1,1,()=>{d=null}),ve())},i(u){o||(V(r),ft(()=>{o&&(l&&l.end(1),n=mt(e,s[12],!0),n.start())}),V(d),o=!0)},o(u){X(r),n&&n.invalidate(),l=De(e,s[12],!1),X(d),o=!1},d(u){u&&(_(e),_(i),_(a)),I[t].d(),u&&l&&l.end(),d&&d.d(u),f=!1,ze(c)}}}function ot(s){let e,t,r=`${s[4]+1} / ${s[0].length}`,n,l,i,a,o,f;return{c(){e=D("div"),t=new $e(!1),n=F(),l=D("button"),i=F(),a=D("button"),this.h()},l(c){e=T(c,"DIV",{class:!0});var b=S(e);t=He(b,!1),b.forEach(_),n=Y(c),l=T(c,"BUTTON",{class:!0,title:!0,"aria-label":!0}),S(l).forEach(_),i=Y(c),a=T(c,"BUTTON",{class:!0,title:!0,"aria-label":!0}),S(a).forEach(_),this.h()},h(){t.a=null,g(e,"class","bp-count"),g(l,"class","bp-prev"),g(l,"title","Previous"),g(l,"aria-label","Previous"),g(a,"class","bp-next"),g(a,"title","Next"),g(a,"aria-label","Next")},m(c,b){L(c,e,b),t.m(r,e),L(c,n,b),L(c,l,b),L(c,i,b),L(c,a,b),o||(f=[B(l,"click",s[2]),B(a,"click",s[3])],o=!0)},p(c,b){b[0]&17&&r!==(r=`${c[4]+1} / ${c[0].length}`)&&t.p(r)},d(c){c&&(_(e),_(n),_(l),_(i),_(a)),o=!1,ze(f)}}}function Xt(s){let e,t,r=s[0]&&nt(s);return{c(){r&&r.c(),e=de()},l(n){r&&r.l(n),e=de()},m(n,l){r&&r.m(n,l),L(n,e,l),t=!0},p(n,l){n[0]?r?(r.p(n,l),l[0]&1&&V(r,1)):(r=nt(n),r.c(),V(r,1),r.m(e.parentNode,e)):r&&(we(),X(r,1,1,()=>{r=null}),ve())},i(n){t||(V(r),t=!0)},o(n){X(r),t=!1},d(n){n&&_(e),r&&r.d(n)}}}function qt(s,e,t){let r,{items:n=void 0}=e,{target:l=void 0}=e;const i=document.documentElement;let a,o,f,c,b,I,z,d,u,h,w;const O=p=>w=p,E={},G=Re(0);ye(s,G,p=>t(10,r=p));const te=p=>{t(5,o=p),t(8,I=o.inline);const v=o.items;!I&&i.scrollHeight>i.clientHeight&&i.classList.add("bp-lock"),c=document.activeElement,t(20,E.w=l.offsetWidth,E),t(20,E.h=l===document.body?window.innerHeight:l.clientHeight,E),t(7,b=E.w<769),t(4,a=o.position||0),Array.isArray(v)?t(0,n=v.map((C,H)=>(o.el&&o.el===C.element&&t(4,a=H),{i:H,...C}))):t(0,n=(v.length?[...v]:[v]).map((C,H)=>(o.el===C&&t(4,a=H),{element:C,i:H,...C.dataset})))},x=()=>{var p;(p=o.onClose)==null||p.call(o,E.el,u),Ae.set(!0),t(0,n=null),c==null||c.focus({preventScroll:!0})},A=()=>le(a-1),re=()=>le(a+1),le=p=>{z=p-a,t(4,a=oe(p))},oe=p=>(p+n.length)%n.length,Z=p=>{const{key:v,shiftKey:C}=p;if(v==="Escape")!o.noClose&&x();else if(v==="ArrowRight")re();else if(v==="ArrowLeft")A();else if(v==="Tab"){const{activeElement:H}=document;if(C||!H.controls){p.preventDefault();const{focusWrap:M=E.el}=o,P=[...M.querySelectorAll("*")].filter(j=>j.tabIndex>=0);let q=P.indexOf(H);q+=P.length+(C?-1:1),P[q%P.length].focus()}}},ie=({width:p=1920,height:v=1080})=>{const{scale:C=.99}=o,H=Math.min(1,E.w/p*C,E.h/v*C);return[Math.round(p*H),Math.round(v*H)]},ge=()=>{if(n){const p=n[oe(a+1)],v=n[oe(a-1)];!p.preload&&ne(p),!v.preload&&ne(v)}},ne=p=>{if(p.img){const v=D("img");return v.sizes=o.sizes||`${ie(p)[0]}px`,v.srcset=p.img,p.preload=!0,v.decode().catch(C=>{})}},ae=(p,v)=>!f||!n?(t(18,f=v),o.intro?pe(p,{y:v?10:-10}):W(p)):pe(p,{x:(z>0?20:-20)*(v?1:-1),duration:250}),W=p=>{let v;if(h){const j=p.firstChild.firstChild;v=[j.clientWidth,j.clientHeight]}else v=ie(u);const C=(u.element||c).getBoundingClientRect(),H=C.left-(E.w-C.width)/2,M=C.top-(E.h-C.height)/2,P=C.width/v[0],q=C.height/v[1];return{duration:480,easing:Le,css:(j,m)=>`transform:translate3d(${H*m}px, ${M*m}px, 0) scale3d(${P+j*(1-P)}, ${q+j*(1-q)}, 1)`}},se=()=>({activeItem:u,calculateDimensions:ie,loadImage:ne,preloadNext:ge,opts:o,prev:A,next:re,close:x,setResizeFunc:O,zoomed:G,container:E}),J=p=>{var M;t(20,E.el=p,E);let v,C;(M=o.onOpen)==null||M.call(o,E.el,u),I||(v=B(window,"keydown",Z));const H=new ResizeObserver(P=>{var q;C&&(t(20,E.w=P[0].contentRect.width,E),t(20,E.h=P[0].contentRect.height,E),t(7,b=E.w<769),w==null||w(),(q=o.onResize)==null||q.call(o,E.el,u)),C=!0});return H.observe(p),{destroy(){var P;H.disconnect(),v==null||v(),Ae.set(!1),i.classList.remove("bp-lock"),(P=o.onClosed)==null||P.call(o)}}},ce=p=>t(9,d=p.target),K=function(p){p.button!==2&&p.target===this&&d===this&&!o.noClose&&x()};return s.$$set=p=>{"items"in p&&t(0,n=p.items),"target"in p&&t(15,l=p.target)},s.$$.update=()=>{var p;s.$$.dirty[0]&1835121&&n&&(t(6,u=n[a]),t(19,h=u.hasOwnProperty("html")),f&&(h&&O(null),(p=o.onUpdate)==null||p.call(o,E.el,u)))},[n,x,A,re,a,o,u,b,I,d,r,G,ae,se,J,l,te,le,f,h,E,ce,K]}class Ft extends Ie{constructor(e){super(),Ee(this,e,qt,Xt,ut,{items:0,target:15,open:16,close:1,prev:2,next:3,setPosition:17},null,[-1,-1])}get items(){return this.$$.ctx[0]}set items(e){this.$$set({items:e}),Ze()}get target(){return this.$$.ctx[15]}set target(e){this.$$set({target:e}),Ze()}get open(){return this.$$.ctx[16]}get close(){return this.$$.ctx[1]}get prev(){return this.$$.ctx[2]}get next(){return this.$$.ctx[3]}get setPosition(){return this.$$.ctx[17]}}function Yt(s){return new Ft({...s,props:s})}function it(s,e,t){const r=s.slice();return r[5]=e[t],r}function at(s){let e,t,r,n,l,i;return{c(){e=D("a"),t=D("img"),n=F(),this.h()},l(a){e=T(a,"A",{class:!0,href:!0,"data-img":!0,"data-thumb":!0,"data-height":!0,"data-width":!0,"data-alt":!0,"data-caption":!0});var o=S(e);t=T(o,"IMG",{src:!0,width:!0,alt:!0}),n=Y(o),o.forEach(_),this.h()},h(){bt(t.src,r=Pe(s[5].repImage,"thumb"))||g(t,"src",r),g(t,"width","300"),g(t,"alt",s[5].title),g(e,"class","tile svelte-tjc7wo"),g(e,"href",Pe(s[5].repImage)),g(e,"data-img",Pe(s[5].repImage)),g(e,"data-thumb",Pe(s[5].repImage,"thumb")),g(e,"data-height",s[5].repImageHeight),g(e,"data-width",s[5].repImageWidth),g(e,"data-alt",s[5].title),g(e,"data-caption",s[5].title+".  View at <a href='https://collections.newberry.org/asset-management/"+s[5].mei+"' target='_blank' class='llines'>Newberry Digital Collections</a>")},m(a,o){L(a,e,o),y(e,t),y(e,n),l||(i=B(e,"click",s[2]),l=!0)},p:ke,d(a){a&&_(e),l=!1,i()}}}function Ut(s){let e,t=Je(s[1]),r=[];for(let n=0;n<t.length;n+=1)r[n]=at(it(s,t,n));return{c(){for(let n=0;n<r.length;n+=1)r[n].c();e=de()},l(n){for(let l=0;l<r.length;l+=1)r[l].l(n);e=de()},m(n,l){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(n,l);L(n,e,l)},p(n,l){if(l&6){t=Je(n[1]);let i;for(i=0;i<t.length;i+=1){const a=it(n,t,i);r[i]?r[i].p(a,l):(r[i]=at(a),r[i].c(),r[i].m(e.parentNode,e))}for(;i<r.length;i+=1)r[i].d(1);r.length=t.length}},d(n){n&&_(e),_t(r,n)}}}function Wt(s){let e,t,r,n,l,i=`<a href="${Ve}/"><img class="biggo" src="${Ve}/NewberryLogo.png" alt="Logo for the Newberry Library" height="60" width="300"/> <img class="smallo" src="${Ve}/NLogo.png" alt="Logo for the Newberry Library" height="60" width="60"/></a>`,a,o,f,c,b="Free to Use and Reuse:",I,z,d=s[0].galleryData.context+"",u,h,w,O,E,G=" ",te,x,A,re="Postcard Gallery",le,oe,Z,ie,ge=" ",ne,ae,W,se="Open Access Policy",J,ce,K,p,v,C,H;return t=new yt({props:{title:s[0].galleryData.context}}),K=new kt({}),C=new Dt({props:{$$slots:{default:[Ut]},$$scope:{ctx:s}}}),{c(){e=D("main"),fe(t.$$.fragment),r=F(),n=D("div"),l=D("div"),l.innerHTML=i,a=F(),o=D("header"),f=D("section"),c=D("h3"),c.textContent=b,I=F(),z=D("h1"),u=_e(d),h=F(),w=D("section"),O=D("p"),E=_e(`Featured here are some staff favorites from the Newberry’s
                    collection. View more free to use and reuse images at our`),te=_e(G),x=F(),A=D("a"),A.textContent=re,le=_e("."),oe=F(),Z=D("p"),ie=_e(`The vintage postcard images featured here are free to use and
                    reuse. The Newberry believes that this content is in the public
                    domain, and makes these digitized copies available without
                    requiring fees or permissions. For more information, see our`),ne=_e(ge),ae=F(),W=D("a"),W.textContent=se,J=_e(`
                    .`),ce=F(),fe(K.$$.fragment),p=F(),v=D("div"),fe(C.$$.fragment),this.h()},l(M){e=T(M,"MAIN",{});var P=S(e);ue(t.$$.fragment,P),r=Y(P),n=T(P,"DIV",{class:!0});var q=S(n);l=T(q,"DIV",{class:!0,"data-svelte-h":!0}),Ne(l)!=="svelte-1ckqrq8"&&(l.innerHTML=i),a=Y(q),o=T(q,"HEADER",{class:!0});var j=S(o);f=T(j,"SECTION",{});var m=S(f);c=T(m,"H3",{"data-svelte-h":!0}),Ne(c)!=="svelte-i0mqc1"&&(c.textContent=b),I=Y(m),z=T(m,"H1",{});var N=S(z);u=be(N,d),N.forEach(_),m.forEach(_),h=Y(j),w=T(j,"SECTION",{class:!0});var $=S(w);O=T($,"P",{class:!0});var k=S(O);E=be(k,`Featured here are some staff favorites from the Newberry’s
                    collection. View more free to use and reuse images at our`),te=be(k,G),x=Y(k),A=T(k,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),Ne(A)!=="svelte-1rj1iwf"&&(A.textContent=re),le=be(k,"."),k.forEach(_),oe=Y($),Z=T($,"P",{class:!0});var R=S(Z);ie=be(R,`The vintage postcard images featured here are free to use and
                    reuse. The Newberry believes that this content is in the public
                    domain, and makes these digitized copies available without
                    requiring fees or permissions. For more information, see our`),ne=be(R,ge),ae=Y(R),W=T(R,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),Ne(W)!=="svelte-u8amqq"&&(W.textContent=se),J=be(R,`
                    .`),R.forEach(_),$.forEach(_),j.forEach(_),ce=Y(q),ue(K.$$.fragment,q),q.forEach(_),p=Y(P),v=T(P,"DIV",{class:!0});var ee=S(v);ue(C.$$.fragment,ee),ee.forEach(_),P.forEach(_),this.h()},h(){g(l,"class","logo"),g(A,"href","https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4UE6RXM&PN=1"),g(A,"target","_blank"),g(A,"class","llines"),g(O,"class","text-lg"),g(W,"href","https://www.newberry.org/policies#open-access"),g(W,"target","_blank"),g(W,"class","llines"),g(Z,"class","text-base"),g(w,"class","text-content"),g(o,"class","title"),g(n,"class","left"),g(v,"class","right")},m(M,P){L(M,e,P),me(t,e,null),y(e,r),y(e,n),y(n,l),y(n,a),y(n,o),y(o,f),y(f,c),y(f,I),y(f,z),y(z,u),y(o,h),y(o,w),y(w,O),y(O,E),y(O,te),y(O,x),y(O,A),y(O,le),y(w,oe),y(w,Z),y(Z,ie),y(Z,ne),y(Z,ae),y(Z,W),y(Z,J),y(n,ce),me(K,n,null),y(e,p),y(e,v),me(C,v,null),H=!0},p(M,[P]){const q={};P&1&&(q.title=M[0].galleryData.context),t.$set(q),(!H||P&1)&&d!==(d=M[0].galleryData.context+"")&&pt(u,d);const j={};P&256&&(j.$$scope={dirty:P,ctx:M}),C.$set(j)},i(M){H||(V(t.$$.fragment,M),V(K.$$.fragment,M),V(C.$$.fragment,M),H=!0)},o(M){X(t.$$.fragment,M),X(K.$$.fragment,M),X(C.$$.fragment,M),H=!1},d(M){M&&_(e),he(t),he(K),he(C)}}}function jt(s,e,t){let{data:r}=e;const{postcards:n}=r.galleryData;console.log(r);let l,i;gt(()=>{l=Yt({target:document.body}),i=document.querySelectorAll("#images > a")});function a(o){o.preventDefault(),o.currentTarget!==null&&l.open({intro:"fadeup",items:i,el:o.currentTarget})}return s.$$set=o=>{"data"in o&&t(0,r=o.data)},[r,n,a]}class Qt extends Ie{constructor(e){super(),Ee(this,e,jt,Wt,Te,{data:0})}}export{Qt as component};
