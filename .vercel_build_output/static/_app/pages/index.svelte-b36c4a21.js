import{S as y,i as z,s as B,e as m,k as T,t as D,c as p,a as v,d as _,m as q,h as F,T as M,b as c,g as x,F as f,j as N,n as O,G as H}from"../chunks/index-b9a5b328.js";function U(o,l,s){const r=o.slice();return r[1]=l[s],r}function V(o){let l,s,r,e,a,i,t,u,g,d,b=o[1].meta.title+"",I,k,L,E,w=o[1].meta.summary+"",j,S;return{c(){l=m("li"),s=m("article"),r=m("a"),e=m("img"),u=T(),g=m("div"),d=m("a"),I=D(b),L=T(),E=m("p"),j=D(w),S=T(),this.h()},l(n){l=p(n,"LI",{});var h=v(l);s=p(h,"ARTICLE",{class:!0});var A=v(s);r=p(A,"A",{class:!0,href:!0});var G=v(r);e=p(G,"IMG",{src:!0,alt:!0}),G.forEach(_),u=q(A),g=p(A,"DIV",{class:!0});var C=v(g);d=p(C,"A",{class:!0,href:!0});var P=v(d);I=F(P,b),P.forEach(_),L=q(C),E=p(C,"P",{class:!0});var R=v(E);j=F(R,w),R.forEach(_),C.forEach(_),A.forEach(_),S=q(h),h.forEach(_),this.h()},h(){M(e.src,a=o[1].meta.image)||c(e,"src",a),c(e,"alt",i=o[1].meta.image),c(r,"class","w-full"),c(r,"href",t=o[1].path),c(d,"class","text-2xl font-bold hover:text-slate-400"),c(d,"href",k=o[1].path),c(E,"class","mt-5"),c(g,"class","mt-4 lg:mt-0"),c(s,"class","block lg:grid lg:grid-cols-2 lg:gap-12")},m(n,h){x(n,l,h),f(l,s),f(s,r),f(r,e),f(s,u),f(s,g),f(g,d),f(d,I),f(g,L),f(g,E),f(E,j),f(l,S)},p(n,h){h&1&&!M(e.src,a=n[1].meta.image)&&c(e,"src",a),h&1&&i!==(i=n[1].meta.image)&&c(e,"alt",i),h&1&&t!==(t=n[1].path)&&c(r,"href",t),h&1&&b!==(b=n[1].meta.title+"")&&N(I,b),h&1&&k!==(k=n[1].path)&&c(d,"href",k),h&1&&w!==(w=n[1].meta.summary+"")&&N(j,w)},d(n){n&&_(l)}}}function J(o){let l,s,r=o[0],e=[];for(let a=0;a<r.length;a+=1)e[a]=V(U(o,r,a));return{c(){l=m("section"),s=m("ul");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){l=p(a,"SECTION",{class:!0});var i=v(l);s=p(i,"UL",{});var t=v(s);for(let u=0;u<e.length;u+=1)e[u].l(t);t.forEach(_),i.forEach(_),this.h()},h(){c(l,"class","w-full xl:w-2/4 p-8 xl:p-0")},m(a,i){x(a,l,i),f(l,s);for(let t=0;t<e.length;t+=1)e[t].m(s,null)},p(a,[i]){if(i&1){r=a[0];let t;for(t=0;t<r.length;t+=1){const u=U(a,r,t);e[t]?e[t].p(u,i):(e[t]=V(u),e[t].c(),e[t].m(s,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=r.length}},i:O,o:O,d(a){a&&_(l),H(e,a)}}}const W=async({fetch:o})=>{const s=await(await o("/api/posts.json")).json();return console.log(s,"@allp"),{props:{posts:s}}};function K(o,l,s){let{posts:r}=l;return o.$$set=e=>{"posts"in e&&s(0,r=e.posts)},[r]}class X extends y{constructor(l){super(),z(this,l,K,J,B,{posts:0})}}export{X as default,W as load};
