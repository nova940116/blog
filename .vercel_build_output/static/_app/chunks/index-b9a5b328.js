function E(){}const I=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function V(){return Object.create(null)}function w(t){t.forEach(Z)}function L(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function Ot(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function _t(t){return Object.keys(t).length===0}function Lt(t,e,n,r){if(t){const s=tt(t,e,n,r);return t[0](s)}}function tt(t,e,n,r){return t[1]&&r?ft(n.ctx.slice(),t[1](r(e))):n.ctx}function zt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],i=Math.max(e.dirty.length,s.length);for(let o=0;o<i;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function Bt(t,e,n,r,s,c){if(s){const i=tt(e,n,r,c);t.p(i,s)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Ht(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const et=typeof window!="undefined";let W=et?()=>window.performance.now():()=>Date.now(),G=et?t=>requestAnimationFrame(t):E;const v=new Set;function nt(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&G(nt)}function J(t){let e;return v.size===0&&G(nt),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let z=!1;function dt(){z=!0}function ht(){z=!1}function mt(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:mt(1,s,u=>e[n[u]].claim_order,a))-1;r[l]=n[_]+1;const f=_+1;n[f]=l,s=Math.max(f,s)}const c=[],i=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=r[l-1]){for(c.push(e[l-1]);o>=l;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);c.reverse(),i.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<i.length;l++){for(;a<c.length&&i[l].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(i[l],_)}}function gt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=rt("style");return xt(it(t),e),e.sheet}function xt(t,e){gt(t.head||t,e)}function bt(t,e){if(z){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){z&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function $t(t){t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function rt(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function K(t){return document.createTextNode(t)}function Gt(){return K(" ")}function Jt(){return K("")}function Kt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Qt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ut(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Vt(t,e){for(const n in e)vt(t,n,e[n])}function kt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,r,s=!1){Et(t);const c=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const l=n(o);return l===void 0?t.splice(i,1):t[i]=l,s||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const l=n(o);return l===void 0?t.splice(i,1):t[i]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return r()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function lt(t,e,n,r){return st(t,s=>s.nodeName===e,s=>{const c=[];for(let i=0;i<s.attributes.length;i++){const o=s.attributes[i];n[o.name]||c.push(o.name)}c.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Xt(t,e,n){return lt(t,e,n,rt)}function Yt(t,e,n){return lt(t,e,n,wt)}function At(t,e){return st(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>K(e),!0)}function Zt(t){return At(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ne(t,e,n){t.classList[n?"add":"remove"](e)}function Nt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}function ie(t,e=document.body){return Array.from(e.querySelectorAll(t))}const R=new Map;let T=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:yt(e),rules:{}};return R.set(t,n),n}function D(t,e,n,r,s,c,i,o=0){const l=16.666/r;let a=`{
`;for(let m=0;m<=1;m+=l){const y=e+(n-e)*c(m);a+=m*100+`%{${i(y,1-y)}}
`}const _=a+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Ct(_)}_${o}`,u=it(t),{stylesheet:d,rules:h}=R.get(u)||St(u,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${s}ms 1 both`,T+=1,f}function O(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),T-=s,T||jt())}function jt(){G(()=>{T||(R.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),R.clear())})}let S;function C(t){S=t}function B(){if(!S)throw new Error("Function called outside component initialization");return S}function re(t){B().$$.on_mount.push(t)}function se(t){B().$$.after_update.push(t)}function le(t,e){B().$$.context.set(t,e)}function oe(t){return B().$$.context.get(t)}const N=[],X=[],q=[],Y=[],ot=Promise.resolve();let H=!1;function ct(){H||(H=!0,ot.then(at))}function ce(){return ct(),ot}function k(t){q.push(t)}const F=new Set;let M=0;function at(){const t=S;do{for(;M<N.length;){const e=N[M];M++,C(e),Mt(e.$$)}for(C(null),N.length=0,M=0;X.length;)X.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];F.has(n)||(F.add(n),n())}q.length=0}while(N.length);for(;Y.length;)Y.pop()();H=!1,F.clear(),C(t)}function Mt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let A;function Q(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function $(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const P=new Set;let g;function ae(){g={r:0,c:[],p:g}}function ue(){g.r||w(g.c),g=g.p}function qt(t,e){t&&t.i&&(P.delete(t),t.i(e))}function fe(t,e,n,r){if(t&&t.o){if(P.has(t))return;P.add(t),g.c.push(()=>{P.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const U={duration:0};function _e(t,e,n){let r=e(t,n),s=!1,c,i,o=0;function l(){c&&O(t,c)}function a(){const{delay:f=0,duration:u=300,easing:d=I,tick:h=E,css:p}=r||U;p&&(c=D(t,0,1,u,f,d,p,o++)),h(0,1);const m=W()+f,y=m+u;i&&i.abort(),s=!0,k(()=>$(t,!0,"start")),i=J(x=>{if(s){if(x>=y)return h(1,0),$(t,!0,"end"),l(),s=!1;if(x>=m){const b=d((x-m)/u);h(b,1-b)}}return s})}let _=!1;return{start(){_||(_=!0,O(t),L(r)?(r=r(),Q().then(a)):a())},invalidate(){_=!1},end(){s&&(l(),s=!1)}}}function de(t,e,n){let r=e(t,n),s=!0,c;const i=g;i.r+=1;function o(){const{delay:l=0,duration:a=300,easing:_=I,tick:f=E,css:u}=r||U;u&&(c=D(t,1,0,a,l,_,u));const d=W()+l,h=d+a;k(()=>$(t,!1,"start")),J(p=>{if(s){if(p>=h)return f(0,1),$(t,!1,"end"),--i.r||w(i.c),!1;if(p>=d){const m=_((p-d)/a);f(1-m,m)}}return s})}return L(r)?Q().then(()=>{r=r(),o()}):o(),{end(l){l&&r.tick&&r.tick(1,0),s&&(c&&O(t,c),s=!1)}}}function he(t,e,n,r){let s=e(t,n),c=r?0:1,i=null,o=null,l=null;function a(){l&&O(t,l)}function _(u,d){const h=u.b-c;return d*=Math.abs(h),{a:c,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function f(u){const{delay:d=0,duration:h=300,easing:p=I,tick:m=E,css:y}=s||U,x={start:W()+d,b:u};u||(x.group=g,g.r+=1),i||o?o=x:(y&&(a(),l=D(t,c,u,h,d,p,y)),u&&m(0,1),i=_(x,h),k(()=>$(t,u,"start")),J(b=>{if(o&&b>o.start&&(i=_(o,h),o=null,$(t,i.b,"start"),y&&(a(),l=D(t,c,i.b,i.duration,0,p,s.css))),i){if(b>=i.end)m(c=i.b,1-c),$(t,i.b,"end"),o||(i.b?a():--i.group.r||w(i.group.c)),i=null;else if(b>=i.start){const ut=b-i.start;c=i.a+i.d*p(ut/i.duration),m(c,1-c)}}return!!(i||o)}))}return{run(u){L(s)?Q().then(()=>{s=s(),f(u)}):f(u)},end(){a(),i=o=null}}}const me=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function pe(t,e){const n={},r={},s={$$scope:1};let c=t.length;for(;c--;){const i=t[c],o=e[c];if(o){for(const l in i)l in o||(r[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[c]=o}else for(const l in i)s[l]=1}for(const i in r)i in n||(n[i]=void 0);return n}function ge(t){return typeof t=="object"&&t!==null?t:{}}function ye(t){t&&t.c()}function xe(t,e){t&&t.l(e)}function Pt(t,e,n,r){const{fragment:s,on_mount:c,on_destroy:i,after_update:o}=t.$$;s&&s.m(e,n),r||k(()=>{const l=c.map(Z).filter(L);i?i.push(...l):w(l),t.$$.on_mount=[]}),o.forEach(k)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(N.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function be(t,e,n,r,s,c,i,o=[-1]){const l=S;C(t);const a=t.$$={fragment:null,ctx:null,props:c,update:E,not_equal:s,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:V(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};i&&i(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...d)=>{const h=d.length?d[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),_&&Tt(t,f)),u}):[],a.update(),_=!0,w(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){dt();const f=kt(e.target);a.fragment&&a.fragment.l(f),f.forEach($t)}else a.fragment&&a.fragment.c();e.intro&&qt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),ht(),at()}C(l)}class $e{$destroy(){Rt(this,1),this.$destroy=E}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{he as $,pe as A,ge as B,Rt as C,ft as D,ce as E,bt as F,Wt as G,Bt as H,Ft as I,zt as J,k as K,de as L,Kt as M,Lt as N,_e as O,wt as P,Yt as Q,I as R,$e as S,Ot as T,oe as U,Vt as V,Ht as W,Ut as X,Qt as Y,ne as Z,L as _,kt as a,w as a0,me as a1,X as a2,ie as a3,vt as b,Xt as c,$t as d,rt as e,ee as f,It as g,At as h,be as i,te as j,Gt as k,Jt as l,Zt as m,E as n,ae as o,fe as p,ue as q,qt as r,Dt as s,K as t,le as u,se as v,re as w,ye as x,xe as y,Pt as z};