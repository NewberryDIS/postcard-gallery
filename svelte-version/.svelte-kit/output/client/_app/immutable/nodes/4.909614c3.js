import{s as A,f as M,l as T,g as _,h as u,m as H,d,j as W,i as w,x,y as c}from"../chunks/scheduler.238e0827.js";import{S as C,i as S}from"../chunks/index.afd122aa.js";import{s as k}from"../chunks/index.bd882b40.js";function D(p){let a,i,s=JSON.stringify(p[0],null,4)+"",l;return{c(){a=M("div"),i=M("pre"),l=T(s),this.h()},l(n){a=_(n,"DIV",{class:!0});var r=u(a);i=_(r,"PRE",{});var o=u(i);l=H(o,s),o.forEach(d),r.forEach(d),this.h()},h(){W(a,"class","page svelte-1fcmmcw")},m(n,r){w(n,a,r),x(a,i),x(i,l)},p:c,i:c,o:c,d(n){n&&d(a)}}}function L(p,a,i){let{data:s}=a;const{allltoo:l}=s,{allthree:n}=s,r=n.map(e=>e.APIResponse),o=l.map(e=>{var g,m,I,h;return{context:e.APIResponse["new.Context"],title:e.APIResponse.Title,slug:k(e.APIResponse.Title),galLink:`https://collections.newberry.org/${e.APIResponse.Link}`,galMEI:e.APIResponse.MediaEncryptedIdentifier,galRepreImageMEI:(g=e.APIResponse.Representative)==null?void 0:g.MediaEncryptedIdentifier,galRepreImageTitle:(m=e.APIResponse.Representative)==null?void 0:m.Title,galRepreImageWidth:(I=e.APIResponse.Representative)==null?void 0:I.MaxWidth,galRepreImageHeight:(h=e.APIResponse.Representative)==null?void 0:h.MaxHeight,postcards:e.APIResponse.Content.map(E=>{var R,f,v,y;let t=r.filter(P=>P.MediaEncryptedIdentifier===E.MediaEncryptedIdentifier).pop();return t.Representative?{mei:t.MediaEncryptedIdentifier,repImage:(R=t.Representative)==null?void 0:R.MediaEncryptedIdentifier,repImageHeight:(f=t.Representative)==null?void 0:f.MaxHeight,repImageTitle:(v=t.Representative)==null?void 0:v.Title,repImageWidth:(y=t.Representative)==null?void 0:y.MaxWidth,title:t.Title}:{mei:t.MediaEncryptedIdentifier,repImage:t.MediaEncryptedIdentifier,repImageHeight:t.MaxHeight,repImageTitle:t.Title,repImageWidth:t.MaxWidth,title:t.Title}})}});return p.$$set=e=>{"data"in e&&i(1,s=e.data)},[o,s]}class J extends C{constructor(a){super(),S(this,a,L,D,A,{data:1})}}export{J as component};