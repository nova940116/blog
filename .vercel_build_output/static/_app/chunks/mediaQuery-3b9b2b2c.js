import{R as p,S as y,i as g,s as h,N as q,H as w,I as M,J as b,r as L,p as S,w as C}from"./index-b9a5b328.js";function I(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function O(t,{delay:n=0,duration:o=400,easing:s=I,amount:e=5,opacity:a=0}={}){const r=getComputedStyle(t),i=+r.opacity,u=r.filter==="none"?"":r.filter,l=i*(1-a);return{delay:n,duration:o,easing:s,css:(_,f)=>`opacity: ${i-l*f}; filter: ${u} blur(${f*e}px);`}}function Q(t,{delay:n=0,duration:o=400,easing:s=p}={}){const e=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:s,css:a=>`opacity: ${a*e}`}}const N=t=>({matches:t&1}),d=t=>({matches:t[0]});function A(t){let n;const o=t[4].default,s=q(o,t,t[3],d);return{c(){s&&s.c()},l(e){s&&s.l(e)},m(e,a){s&&s.m(e,a),n=!0},p(e,[a]){s&&s.p&&(!n||a&9)&&w(s,o,e,e[3],n?b(o,e[3],a,N):M(e[3]),d)},i(e){n||(L(s,e),n=!0)},o(e){S(s,e),n=!1},d(e){s&&s.d(e)}}}function H(t,n,o){let{$$slots:s={},$$scope:e}=n,{query:a}=n,r,i,u=!1,l=!1;C(()=>(o(2,u=!0),()=>{f()}));function _(c){r=window.matchMedia(c),i=m=>o(0,l=m.matches),r.addListener(i),o(0,l=r.matches)}function f(){r&&i&&r.removeListener(i)}return t.$$set=c=>{"query"in c&&o(1,a=c.query),"$$scope"in c&&o(3,e=c.$$scope)},t.$$.update=()=>{t.$$.dirty&6&&u&&(f(),_(a))},[l,a,u,e,s]}class R extends y{constructor(n){super(),g(this,n,H,A,h,{query:1})}}export{R as M,O as b,Q as f};
