(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function so(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const pe={},xn=[],Ct=()=>{},xh=()=>!1,Oi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),io=t=>t.startsWith("onUpdate:"),We=Object.assign,ro=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rh=Object.prototype.hasOwnProperty,he=(t,e)=>Rh.call(t,e),G=Array.isArray,Rn=t=>Os(t)==="[object Map]",Mi=t=>Os(t)==="[object Set]",ll=t=>Os(t)==="[object Date]",ee=t=>typeof t=="function",Te=t=>typeof t=="string",St=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",La=t=>(be(t)||ee(t))&&ee(t.then)&&ee(t.catch),$a=Object.prototype.toString,Os=t=>$a.call(t),Ah=t=>Os(t).slice(8,-1),Fa=t=>Os(t)==="[object Object]",oo=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ss=so(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ki=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nh=/-(\w)/g,Qt=ki(t=>t.replace(Nh,(e,n)=>n?n.toUpperCase():"")),Dh=/\B([A-Z])/g,Cn=ki(t=>t.replace(Dh,"-$1").toLowerCase()),Ua=ki(t=>t.charAt(0).toUpperCase()+t.slice(1)),rr=ki(t=>t?`on${Ua(t)}`:""),Yt=(t,e)=>!Object.is(t,e),Qs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ba=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ri=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let al;const Li=()=>al||(al=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ms(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Te(s)?kh(s):Ms(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Te(t)||be(t))return t}const Ph=/;(?![^(]*\))/g,Oh=/:([^]+)/,Mh=/\/\*[^]*?\*\//g;function kh(t){const e={};return t.replace(Mh,"").split(Ph).forEach(n=>{if(n){const s=n.split(Oh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function et(t){let e="";if(Te(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=et(t[n]);s&&(e+=s+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Lh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$h=so(Lh);function Ha(t){return!!t||t===""}function Fh(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=$i(t[s],e[s]);return n}function $i(t,e){if(t===e)return!0;let n=ll(t),s=ll(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=St(t),s=St(e),n||s)return t===e;if(n=G(t),s=G(e),n||s)return n&&s?Fh(t,e):!1;if(n=be(t),s=be(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!$i(t[o],e[o]))return!1}}return String(t)===String(e)}function Uh(t,e){return t.findIndex(n=>$i(n,e))}const Wa=t=>!!(t&&t.__v_isRef===!0),Ce=t=>Te(t)?t:t==null?"":G(t)||be(t)&&(t.toString===$a||!ee(t.toString))?Wa(t)?Ce(t.value):JSON.stringify(t,Va,2):String(t),Va=(t,e)=>Wa(e)?Va(t,e.value):Rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[or(s,r)+" =>"]=i,n),{})}:Mi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>or(n))}:St(e)?or(e):be(e)&&!G(e)&&!Fa(e)?String(e):e,or=(t,e="")=>{var n;return St(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Je;class Bh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Je,!e&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Je;try{return Je=this,e()}finally{Je=n}}}on(){Je=this}off(){Je=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Hh(){return Je}let me;const lr=new WeakSet;class ja{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Je&&Je.active&&Je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,lr.has(this)&&(lr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||za(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cl(this),qa(this);const e=me,n=ut;me=this,ut=!0;try{return this.fn()}finally{Ga(this),me=e,ut=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)co(e);this.deps=this.depsTail=void 0,cl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?lr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ar(this)&&this.run()}get dirty(){return Ar(this)}}let Ya=0,is,rs;function za(t,e=!1){if(t.flags|=8,e){t.next=rs,rs=t;return}t.next=is,is=t}function lo(){Ya++}function ao(){if(--Ya>0)return;if(rs){let e=rs;for(rs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;is;){let e=is;for(is=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function qa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ga(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),co(s),Wh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Ar(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ka(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ka(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ms))return;t.globalVersion=ms;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ar(t)){t.flags&=-3;return}const n=me,s=ut;me=t,ut=!0;try{qa(t);const i=t.fn(t._value);(e.version===0||Yt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{me=n,ut=s,Ga(t),t.flags&=-3}}function co(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)co(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ut=!0;const Qa=[];function tn(){Qa.push(ut),ut=!1}function nn(){const t=Qa.pop();ut=t===void 0?!0:t}function cl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=me;me=void 0;try{e()}finally{me=n}}}let ms=0;class Vh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!me||!ut||me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==me)n=this.activeLink=new Vh(me,this),me.deps?(n.prevDep=me.depsTail,me.depsTail.nextDep=n,me.depsTail=n):me.deps=me.depsTail=n,Xa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=me.depsTail,n.nextDep=void 0,me.depsTail.nextDep=n,me.depsTail=n,me.deps===n&&(me.deps=s)}return n}trigger(e){this.version++,ms++,this.notify(e)}notify(e){lo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ao()}}}function Xa(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Xa(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Nr=new WeakMap,pn=Symbol(""),Dr=Symbol(""),gs=Symbol("");function Me(t,e,n){if(ut&&me){let s=Nr.get(t);s||Nr.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new uo),i.map=s,i.key=n),i.track()}}function Mt(t,e,n,s,i,r){const o=Nr.get(t);if(!o){ms++;return}const l=a=>{a&&a.trigger()};if(lo(),e==="clear")o.forEach(l);else{const a=G(t),c=a&&oo(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===gs||!St(d)&&d>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(gs)),e){case"add":a?c&&l(o.get("length")):(l(o.get(pn)),Rn(t)&&l(o.get(Dr)));break;case"delete":a||(l(o.get(pn)),Rn(t)&&l(o.get(Dr)));break;case"set":Rn(t)&&l(o.get(pn));break}}ao()}function En(t){const e=ue(t);return e===t?e:(Me(e,"iterate",gs),rt(t)?e:e.map(ke))}function Fi(t){return Me(t=ue(t),"iterate",gs),t}const jh={__proto__:null,[Symbol.iterator](){return ar(this,Symbol.iterator,ke)},concat(...t){return En(this).concat(...t.map(e=>G(e)?En(e):e))},entries(){return ar(this,"entries",t=>(t[1]=ke(t[1]),t))},every(t,e){return Nt(this,"every",t,e,void 0,arguments)},filter(t,e){return Nt(this,"filter",t,e,n=>n.map(ke),arguments)},find(t,e){return Nt(this,"find",t,e,ke,arguments)},findIndex(t,e){return Nt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Nt(this,"findLast",t,e,ke,arguments)},findLastIndex(t,e){return Nt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Nt(this,"forEach",t,e,void 0,arguments)},includes(...t){return cr(this,"includes",t)},indexOf(...t){return cr(this,"indexOf",t)},join(t){return En(this).join(t)},lastIndexOf(...t){return cr(this,"lastIndexOf",t)},map(t,e){return Nt(this,"map",t,e,void 0,arguments)},pop(){return Kn(this,"pop")},push(...t){return Kn(this,"push",t)},reduce(t,...e){return ul(this,"reduce",t,e)},reduceRight(t,...e){return ul(this,"reduceRight",t,e)},shift(){return Kn(this,"shift")},some(t,e){return Nt(this,"some",t,e,void 0,arguments)},splice(...t){return Kn(this,"splice",t)},toReversed(){return En(this).toReversed()},toSorted(t){return En(this).toSorted(t)},toSpliced(...t){return En(this).toSpliced(...t)},unshift(...t){return Kn(this,"unshift",t)},values(){return ar(this,"values",ke)}};function ar(t,e,n){const s=Fi(t),i=s[e]();return s!==t&&!rt(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Yh=Array.prototype;function Nt(t,e,n,s,i,r){const o=Fi(t),l=o!==t&&!rt(t),a=o[e];if(a!==Yh[e]){const h=a.apply(t,r);return l?ke(h):h}let c=n;o!==t&&(l?c=function(h,d){return n.call(this,ke(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function ul(t,e,n,s){const i=Fi(t);let r=n;return i!==t&&(rt(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,ke(l),a,t)}),i[e](r,...s)}function cr(t,e,n){const s=ue(t);Me(s,"iterate",gs);const i=s[e](...n);return(i===-1||i===!1)&&po(n[0])?(n[0]=ue(n[0]),s[e](...n)):i}function Kn(t,e,n=[]){tn(),lo();const s=ue(t)[e].apply(t,n);return ao(),nn(),s}const zh=so("__proto__,__v_isRef,__isVue"),Ja=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(St));function qh(t){St(t)||(t=String(t));const e=ue(this);return Me(e,"has",t),e.hasOwnProperty(t)}class Za{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?sd:sc:r?nc:tc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=G(e);if(!i){let a;if(o&&(a=jh[n]))return a;if(n==="hasOwnProperty")return qh}const l=Reflect.get(e,n,$e(e)?e:s);return(St(n)?Ja.has(n):zh(n))||(i||Me(e,"get",n),r)?l:$e(l)?o&&oo(n)?l:l.value:be(l)?i?ic(l):Ui(l):l}}class ec extends Za{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=mn(r);if(!rt(s)&&!mn(s)&&(r=ue(r),s=ue(s)),!G(e)&&$e(r)&&!$e(s))return a?!1:(r.value=s,!0)}const o=G(e)&&oo(n)?Number(n)<e.length:he(e,n),l=Reflect.set(e,n,s,$e(e)?e:i);return e===ue(i)&&(o?Yt(s,r)&&Mt(e,"set",n,s):Mt(e,"add",n,s)),l}deleteProperty(e,n){const s=he(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Mt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!St(n)||!Ja.has(n))&&Me(e,"has",n),s}ownKeys(e){return Me(e,"iterate",G(e)?"length":pn),Reflect.ownKeys(e)}}class Gh extends Za{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Kh=new ec,Qh=new Gh,Xh=new ec(!0);const Pr=t=>t,Ys=t=>Reflect.getPrototypeOf(t);function Jh(t,e,n){return function(...s){const i=this.__v_raw,r=ue(i),o=Rn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?Pr:e?Or:ke;return!e&&Me(r,"iterate",a?Dr:pn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function zs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Zh(t,e){const n={get(i){const r=this.__v_raw,o=ue(r),l=ue(i);t||(Yt(i,l)&&Me(o,"get",i),Me(o,"get",l));const{has:a}=Ys(o),c=e?Pr:t?Or:ke;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Me(ue(i),"iterate",pn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=ue(r),l=ue(i);return t||(Yt(i,l)&&Me(o,"has",i),Me(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=ue(l),c=e?Pr:t?Or:ke;return!t&&Me(a,"iterate",pn),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return We(n,t?{add:zs("add"),set:zs("set"),delete:zs("delete"),clear:zs("clear")}:{add(i){!e&&!rt(i)&&!mn(i)&&(i=ue(i));const r=ue(this);return Ys(r).has.call(r,i)||(r.add(i),Mt(r,"add",i,i)),this},set(i,r){!e&&!rt(r)&&!mn(r)&&(r=ue(r));const o=ue(this),{has:l,get:a}=Ys(o);let c=l.call(o,i);c||(i=ue(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?Yt(r,u)&&Mt(o,"set",i,r):Mt(o,"add",i,r),this},delete(i){const r=ue(this),{has:o,get:l}=Ys(r);let a=o.call(r,i);a||(i=ue(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&Mt(r,"delete",i,void 0),c},clear(){const i=ue(this),r=i.size!==0,o=i.clear();return r&&Mt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Jh(i,t,e)}),n}function ho(t,e){const n=Zh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(he(n,i)&&i in s?n:s,i,r)}const ed={get:ho(!1,!1)},td={get:ho(!1,!0)},nd={get:ho(!0,!1)};const tc=new WeakMap,nc=new WeakMap,sc=new WeakMap,sd=new WeakMap;function id(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rd(t){return t.__v_skip||!Object.isExtensible(t)?0:id(Ah(t))}function Ui(t){return mn(t)?t:fo(t,!1,Kh,ed,tc)}function od(t){return fo(t,!1,Xh,td,nc)}function ic(t){return fo(t,!0,Qh,nd,sc)}function fo(t,e,n,s,i){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=rd(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function An(t){return mn(t)?An(t.__v_raw):!!(t&&t.__v_isReactive)}function mn(t){return!!(t&&t.__v_isReadonly)}function rt(t){return!!(t&&t.__v_isShallow)}function po(t){return t?!!t.__v_raw:!1}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function ld(t){return!he(t,"__v_skip")&&Object.isExtensible(t)&&Ba(t,"__v_skip",!0),t}const ke=t=>be(t)?Ui(t):t,Or=t=>be(t)?ic(t):t;function $e(t){return t?t.__v_isRef===!0:!1}function re(t){return ad(t,!1)}function ad(t,e){return $e(t)?t:new cd(t,e)}class cd{constructor(e,n){this.dep=new uo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ue(e),this._value=n?e:ke(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||rt(e)||mn(e);e=s?e:ue(e),Yt(e,n)&&(this._rawValue=e,this._value=s?e:ke(e),this.dep.trigger())}}function ud(t){return $e(t)?t.value:t}const hd={get:(t,e,n)=>e==="__v_raw"?t:ud(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return $e(i)&&!$e(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function rc(t){return An(t)?t:new Proxy(t,hd)}class dd{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new uo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ms-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&me!==this)return za(this,!0),!0}get value(){const e=this.dep.track();return Ka(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fd(t,e,n=!1){let s,i;return ee(t)?s=t:(s=t.get,i=t.set),new dd(s,i,n)}const qs={},oi=new WeakMap;let an;function pd(t,e=!1,n=an){if(n){let s=oi.get(n);s||oi.set(n,s=[]),s.push(t)}}function _d(t,e,n=pe){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=b=>i?b:rt(b)||i===!1||i===0?kt(b,1):kt(b);let u,h,d,_,g=!1,m=!1;if($e(t)?(h=()=>t.value,g=rt(t)):An(t)?(h=()=>c(t),g=!0):G(t)?(m=!0,g=t.some(b=>An(b)||rt(b)),h=()=>t.map(b=>{if($e(b))return b.value;if(An(b))return c(b);if(ee(b))return a?a(b,2):b()})):ee(t)?e?h=a?()=>a(t,2):t:h=()=>{if(d){tn();try{d()}finally{nn()}}const b=an;an=u;try{return a?a(t,3,[_]):t(_)}finally{an=b}}:h=Ct,e&&i){const b=h,L=i===!0?1/0:i;h=()=>kt(b(),L)}const N=Hh(),x=()=>{u.stop(),N&&N.active&&ro(N.effects,u)};if(r&&e){const b=e;e=(...L)=>{b(...L),x()}}let U=m?new Array(t.length).fill(qs):qs;const C=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const L=u.run();if(i||g||(m?L.some((M,H)=>Yt(M,U[H])):Yt(L,U))){d&&d();const M=an;an=u;try{const H=[L,U===qs?void 0:m&&U[0]===qs?[]:U,_];a?a(e,3,H):e(...H),U=L}finally{an=M}}}else u.run()};return l&&l(C),u=new ja(h),u.scheduler=o?()=>o(C,!1):C,_=b=>pd(b,!1,u),d=u.onStop=()=>{const b=oi.get(u);if(b){if(a)a(b,4);else for(const L of b)L();oi.delete(u)}},e?s?C(!0):U=u.run():o?o(C.bind(null,!0),!0):u.run(),x.pause=u.pause.bind(u),x.resume=u.resume.bind(u),x.stop=x,x}function kt(t,e=1/0,n){if(e<=0||!be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,$e(t))kt(t.value,e,n);else if(G(t))for(let s=0;s<t.length;s++)kt(t[s],e,n);else if(Mi(t)||Rn(t))t.forEach(s=>{kt(s,e,n)});else if(Fa(t)){for(const s in t)kt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&kt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ks(t,e,n,s){try{return s?t(...s):t()}catch(i){Bi(i,e,n)}}function It(t,e,n,s){if(ee(t)){const i=ks(t,e,n,s);return i&&La(i)&&i.catch(r=>{Bi(r,e,n)}),i}if(G(t)){const i=[];for(let r=0;r<t.length;r++)i.push(It(t[r],e,n,s));return i}}function Bi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pe;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){tn(),ks(r,null,10,[t,a,c]),nn();return}}md(t,n,i,s,o)}function md(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ue=[];let vt=-1;const Nn=[];let Vt=null,In=0;const oc=Promise.resolve();let li=null;function lc(t){const e=li||oc;return t?e.then(this?t.bind(this):t):e}function gd(t){let e=vt+1,n=Ue.length;for(;e<n;){const s=e+n>>>1,i=Ue[s],r=vs(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function _o(t){if(!(t.flags&1)){const e=vs(t),n=Ue[Ue.length-1];!n||!(t.flags&2)&&e>=vs(n)?Ue.push(t):Ue.splice(gd(e),0,t),t.flags|=1,ac()}}function ac(){li||(li=oc.then(uc))}function vd(t){G(t)?Nn.push(...t):Vt&&t.id===-1?Vt.splice(In+1,0,t):t.flags&1||(Nn.push(t),t.flags|=1),ac()}function hl(t,e,n=vt+1){for(;n<Ue.length;n++){const s=Ue[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ue.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function cc(t){if(Nn.length){const e=[...new Set(Nn)].sort((n,s)=>vs(n)-vs(s));if(Nn.length=0,Vt){Vt.push(...e);return}for(Vt=e,In=0;In<Vt.length;In++){const n=Vt[In];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Vt=null,In=0}}const vs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function uc(t){try{for(vt=0;vt<Ue.length;vt++){const e=Ue[vt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ks(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vt<Ue.length;vt++){const e=Ue[vt];e&&(e.flags&=-2)}vt=-1,Ue.length=0,cc(),li=null,(Ue.length||Nn.length)&&uc()}}let it=null,hc=null;function ai(t){const e=it;return it=t,hc=t&&t.type.__scopeId||null,e}function yd(t,e=it,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&bl(-1);const r=ai(e);let o;try{o=t(...i)}finally{ai(r),s._d&&bl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function wt(t,e){if(it===null)return t;const n=Yi(it),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=pe]=e[i];r&&(ee(r)&&(r={mounted:r,updated:r}),r.deep&&kt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function on(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(tn(),It(a,n,8,[t.el,l,t,e]),nn())}}const bd=Symbol("_vte"),Cd=t=>t.__isTeleport;function mo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,mo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ci(t,e,n,s,i=!1){if(G(t)){t.forEach((g,m)=>ci(g,e&&(G(e)?e[m]:e),n,s,i));return}if(os(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ci(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Yi(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===pe?l.refs={}:l.refs,h=l.setupState,d=ue(h),_=h===pe?()=>!1:g=>he(d,g);if(c!=null&&c!==a&&(Te(c)?(u[c]=null,_(c)&&(h[c]=null)):$e(c)&&(c.value=null)),ee(a))ks(a,l,12,[o,u]);else{const g=Te(a),m=$e(a);if(g||m){const N=()=>{if(t.f){const x=g?_(a)?h[a]:u[a]:a.value;i?G(x)&&ro(x,r):G(x)?x.includes(r)||x.push(r):g?(u[a]=[r],_(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else g?(u[a]=o,_(a)&&(h[a]=o)):m&&(a.value=o,t.k&&(u[t.k]=o))};o?(N.id=-1,Xe(N,n)):N()}}}Li().requestIdleCallback;Li().cancelIdleCallback;const os=t=>!!t.type.__asyncLoader,fc=t=>t.type.__isKeepAlive;function wd(t,e){pc(t,"a",e)}function Ed(t,e){pc(t,"da",e)}function pc(t,e,n=Be){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Hi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)fc(i.parent.vnode)&&Sd(s,e,n,i),i=i.parent}}function Sd(t,e,n,s){const i=Hi(e,t,s,!0);Wi(()=>{ro(s[e],i)},n)}function Hi(t,e,n=Be,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{tn();const l=Ls(n),a=It(e,n,t,o);return l(),nn(),a});return s?i.unshift(r):i.push(r),r}}const Ht=t=>(e,n=Be)=>{(!bs||t==="sp")&&Hi(t,(...s)=>e(...s),n)},Id=Ht("bm"),sn=Ht("m"),Td=Ht("bu"),xd=Ht("u"),_c=Ht("bum"),Wi=Ht("um"),Rd=Ht("sp"),Ad=Ht("rtg"),Nd=Ht("rtc");function Dd(t,e=Be){Hi("ec",t,e)}const Pd=Symbol.for("v-ndc");function ht(t,e,n,s){let i;const r=n,o=G(t);if(o||Te(t)){const l=o&&An(t);let a=!1;l&&(a=!rt(t),t=Fi(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(a?ke(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(be(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const Mr=t=>t?Fc(t)?Yi(t):Mr(t.parent):null,ls=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mr(t.parent),$root:t=>Mr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>gc(t),$forceUpdate:t=>t.f||(t.f=()=>{_o(t.update)}),$nextTick:t=>t.n||(t.n=lc.bind(t.proxy)),$watch:t=>ef.bind(t)}),ur=(t,e)=>t!==pe&&!t.__isScriptSetup&&he(t,e),Od={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ur(s,e))return o[e]=1,s[e];if(i!==pe&&he(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&he(c,e))return o[e]=3,r[e];if(n!==pe&&he(n,e))return o[e]=4,n[e];kr&&(o[e]=0)}}const u=ls[e];let h,d;if(u)return e==="$attrs"&&Me(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==pe&&he(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,he(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ur(i,e)?(i[e]=n,!0):s!==pe&&he(s,e)?(s[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==pe&&he(t,o)||ur(e,o)||(l=r[0])&&he(l,o)||he(s,o)||he(ls,o)||he(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function dl(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kr=!0;function Md(t){const e=gc(t),n=t.proxy,s=t.ctx;kr=!1,e.beforeCreate&&fl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:g,activated:m,deactivated:N,beforeDestroy:x,beforeUnmount:U,destroyed:C,unmounted:b,render:L,renderTracked:M,renderTriggered:H,errorCaptured:ie,serverPrefetch:Z,expose:q,inheritAttrs:Q,components:tt,directives:Ge,filters:Y}=e;if(c&&kd(c,s,null),o)for(const O in o){const S=o[O];ee(S)&&(s[O]=S.bind(n))}if(i){const O=i.call(n,n);be(O)&&(t.data=Ui(O))}if(kr=!0,r)for(const O in r){const S=r[O],W=ee(S)?S.bind(n,n):ee(S.get)?S.get.bind(n,n):Ct,K=!ee(S)&&ee(S.set)?S.set.bind(n):Ct,oe=Wn({get:W,set:K});Object.defineProperty(s,O,{enumerable:!0,configurable:!0,get:()=>oe.value,set:ae=>oe.value=ae})}if(l)for(const O in l)mc(l[O],s,n,O);if(a){const O=ee(a)?a.call(n):a;Reflect.ownKeys(O).forEach(S=>{Hd(S,O[S])})}u&&fl(u,t,"c");function R(O,S){G(S)?S.forEach(W=>O(W.bind(n))):S&&O(S.bind(n))}if(R(Id,h),R(sn,d),R(Td,_),R(xd,g),R(wd,m),R(Ed,N),R(Dd,ie),R(Nd,M),R(Ad,H),R(_c,U),R(Wi,b),R(Rd,Z),G(q))if(q.length){const O=t.exposed||(t.exposed={});q.forEach(S=>{Object.defineProperty(O,S,{get:()=>n[S],set:W=>n[S]=W})})}else t.exposed||(t.exposed={});L&&t.render===Ct&&(t.render=L),Q!=null&&(t.inheritAttrs=Q),tt&&(t.components=tt),Ge&&(t.directives=Ge),Z&&dc(t)}function kd(t,e,n=Ct){G(t)&&(t=Lr(t));for(const s in t){const i=t[s];let r;be(i)?"default"in i?r=Xs(i.from||s,i.default,!0):r=Xs(i.from||s):r=Xs(i),$e(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function fl(t,e,n){It(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function mc(t,e,n,s){let i=s.includes(".")?Dc(n,s):()=>n[s];if(Te(t)){const r=e[t];ee(r)&&Pn(i,r)}else if(ee(t))Pn(i,t.bind(n));else if(be(t))if(G(t))t.forEach(r=>mc(r,e,n,s));else{const r=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(r)&&Pn(i,r,t)}}function gc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>ui(a,c,o,!0)),ui(a,e,o)),be(e)&&r.set(e,a),a}function ui(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ui(t,r,n,!0),i&&i.forEach(o=>ui(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Ld[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Ld={data:pl,props:_l,emits:_l,methods:ns,computed:ns,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:ns,directives:ns,watch:Fd,provide:pl,inject:$d};function pl(t,e){return e?t?function(){return We(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function $d(t,e){return ns(Lr(t),Lr(e))}function Lr(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Fe(t,e){return t?[...new Set([].concat(t,e))]:e}function ns(t,e){return t?We(Object.create(null),t,e):e}function _l(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:We(Object.create(null),dl(t),dl(e??{})):e}function Fd(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const s in e)n[s]=Fe(t[s],e[s]);return n}function vc(){return{app:null,config:{isNativeTag:xh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ud=0;function Bd(t,e){return function(s,i=null){ee(s)||(s=We({},s)),i!=null&&!be(i)&&(i=null);const r=vc(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:Ud++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:wf,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&ee(u.install)?(o.add(u),u.install(c,...h)):ee(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!a){const _=c._ceVNode||xe(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(_,u,d),a=!0,c._container=u,u.__vue_app__=c,Yi(_.component)}},onUnmount(u){l.push(u)},unmount(){a&&(It(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Dn;Dn=c;try{return u()}finally{Dn=h}}};return c}}let Dn=null;function Hd(t,e){if(Be){let n=Be.provides;const s=Be.parent&&Be.parent.provides;s===n&&(n=Be.provides=Object.create(s)),n[t]=e}}function Xs(t,e,n=!1){const s=Be||it;if(s||Dn){const i=Dn?Dn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ee(e)?e.call(s&&s.proxy):e}}const yc={},bc=()=>Object.create(yc),Cc=t=>Object.getPrototypeOf(t)===yc;function Wd(t,e,n,s=!1){const i={},r=bc();t.propsDefaults=Object.create(null),wc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:od(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Vd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=ue(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Vi(t.emitsOptions,d))continue;const _=e[d];if(a)if(he(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const g=Qt(d);i[g]=$r(a,l,g,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{wc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!he(e,h)&&((u=Cn(h))===h||!he(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=$r(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!he(e,h))&&(delete r[h],c=!0)}c&&Mt(t.attrs,"set","")}function wc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ss(a))continue;const c=e[a];let u;i&&he(i,u=Qt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Vi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=ue(n),c=l||pe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=$r(i,a,h,c[h],t,!he(c,h))}}return o}function $r(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=he(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&ee(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ls(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Cn(n))&&(s=!0))}return s}const jd=new WeakMap;function Ec(t,e,n=!1){const s=n?jd:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!ee(t)){const u=h=>{a=!0;const[d,_]=Ec(h,e,!0);We(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return be(t)&&s.set(t,xn),xn;if(G(r))for(let u=0;u<r.length;u++){const h=Qt(r[u]);ml(h)&&(o[h]=pe)}else if(r)for(const u in r){const h=Qt(u);if(ml(h)){const d=r[u],_=o[h]=G(d)||ee(d)?{type:d}:We({},d),g=_.type;let m=!1,N=!0;if(G(g))for(let x=0;x<g.length;++x){const U=g[x],C=ee(U)&&U.name;if(C==="Boolean"){m=!0;break}else C==="String"&&(N=!1)}else m=ee(g)&&g.name==="Boolean";_[0]=m,_[1]=N,(m||he(_,"default"))&&l.push(h)}}const c=[o,l];return be(t)&&s.set(t,c),c}function ml(t){return t[0]!=="$"&&!ss(t)}const Sc=t=>t[0]==="_"||t==="$stable",go=t=>G(t)?t.map(yt):[yt(t)],Yd=(t,e,n)=>{if(e._n)return e;const s=yd((...i)=>go(e(...i)),n);return s._c=!1,s},Ic=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Sc(i))continue;const r=t[i];if(ee(r))e[i]=Yd(i,r,s);else if(r!=null){const o=go(r);e[i]=()=>o}}},Tc=(t,e)=>{const n=go(e);t.slots.default=()=>n},xc=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},zd=(t,e,n)=>{const s=t.slots=bc();if(t.vnode.shapeFlag&32){const i=e._;i?(xc(s,e,n),n&&Ba(s,"_",i,!0)):Ic(e,s)}else e&&Tc(t,e)},qd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=pe;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:xc(i,e,n):(r=!e.$stable,Ic(e,i)),o=e}else e&&(Tc(t,e),o={default:1});if(r)for(const l in i)!Sc(l)&&o[l]==null&&delete i[l]},Xe=af;function Gd(t){return Kd(t)}function Kd(t,e){const n=Li();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=Ct,insertStaticContent:g}=t,m=(f,p,v,I=null,w=null,E=null,k=void 0,P=null,D=!!p.dynamicChildren)=>{if(f===p)return;f&&!Qn(f,p)&&(I=st(f),ae(f,w,E,!0),f=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:T,ref:V,shapeFlag:$}=p;switch(T){case ji:N(f,p,v,I);break;case gn:x(f,p,v,I);break;case Js:f==null&&U(p,v,I,k);break;case Ee:tt(f,p,v,I,w,E,k,P,D);break;default:$&1?L(f,p,v,I,w,E,k,P,D):$&6?Ge(f,p,v,I,w,E,k,P,D):($&64||$&128)&&T.process(f,p,v,I,w,E,k,P,D,Ie)}V!=null&&w&&ci(V,f&&f.ref,E,p||f,!p)},N=(f,p,v,I)=>{if(f==null)s(p.el=l(p.children),v,I);else{const w=p.el=f.el;p.children!==f.children&&c(w,p.children)}},x=(f,p,v,I)=>{f==null?s(p.el=a(p.children||""),v,I):p.el=f.el},U=(f,p,v,I)=>{[f.el,f.anchor]=g(f.children,p,v,I,f.el,f.anchor)},C=({el:f,anchor:p},v,I)=>{let w;for(;f&&f!==p;)w=d(f),s(f,v,I),f=w;s(p,v,I)},b=({el:f,anchor:p})=>{let v;for(;f&&f!==p;)v=d(f),i(f),f=v;i(p)},L=(f,p,v,I,w,E,k,P,D)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),f==null?M(p,v,I,w,E,k,P,D):Z(f,p,w,E,k,P,D)},M=(f,p,v,I,w,E,k,P)=>{let D,T;const{props:V,shapeFlag:$,transition:B,dirs:X}=f;if(D=f.el=o(f.type,E,V&&V.is,V),$&8?u(D,f.children):$&16&&ie(f.children,D,null,I,w,hr(f,E),k,P),X&&on(f,null,I,"created"),H(D,f,f.scopeId,k,I),V){for(const _e in V)_e!=="value"&&!ss(_e)&&r(D,_e,null,V[_e],E,I);"value"in V&&r(D,"value",null,V.value,E),(T=V.onVnodeBeforeMount)&&gt(T,I,f)}X&&on(f,null,I,"beforeMount");const le=Qd(w,B);le&&B.beforeEnter(D),s(D,p,v),((T=V&&V.onVnodeMounted)||le||X)&&Xe(()=>{T&&gt(T,I,f),le&&B.enter(D),X&&on(f,null,I,"mounted")},w)},H=(f,p,v,I,w)=>{if(v&&_(f,v),I)for(let E=0;E<I.length;E++)_(f,I[E]);if(w){let E=w.subTree;if(p===E||Oc(E.type)&&(E.ssContent===p||E.ssFallback===p)){const k=w.vnode;H(f,k,k.scopeId,k.slotScopeIds,w.parent)}}},ie=(f,p,v,I,w,E,k,P,D=0)=>{for(let T=D;T<f.length;T++){const V=f[T]=P?jt(f[T]):yt(f[T]);m(null,V,p,v,I,w,E,k,P)}},Z=(f,p,v,I,w,E,k)=>{const P=p.el=f.el;let{patchFlag:D,dynamicChildren:T,dirs:V}=p;D|=f.patchFlag&16;const $=f.props||pe,B=p.props||pe;let X;if(v&&ln(v,!1),(X=B.onVnodeBeforeUpdate)&&gt(X,v,p,f),V&&on(p,f,v,"beforeUpdate"),v&&ln(v,!0),($.innerHTML&&B.innerHTML==null||$.textContent&&B.textContent==null)&&u(P,""),T?q(f.dynamicChildren,T,P,v,I,hr(p,w),E):k||S(f,p,P,null,v,I,hr(p,w),E,!1),D>0){if(D&16)Q(P,$,B,v,w);else if(D&2&&$.class!==B.class&&r(P,"class",null,B.class,w),D&4&&r(P,"style",$.style,B.style,w),D&8){const le=p.dynamicProps;for(let _e=0;_e<le.length;_e++){const de=le[_e],Ke=$[de],je=B[de];(je!==Ke||de==="value")&&r(P,de,Ke,je,w,v)}}D&1&&f.children!==p.children&&u(P,p.children)}else!k&&T==null&&Q(P,$,B,v,w);((X=B.onVnodeUpdated)||V)&&Xe(()=>{X&&gt(X,v,p,f),V&&on(p,f,v,"updated")},I)},q=(f,p,v,I,w,E,k)=>{for(let P=0;P<p.length;P++){const D=f[P],T=p[P],V=D.el&&(D.type===Ee||!Qn(D,T)||D.shapeFlag&70)?h(D.el):v;m(D,T,V,null,I,w,E,k,!0)}},Q=(f,p,v,I,w)=>{if(p!==v){if(p!==pe)for(const E in p)!ss(E)&&!(E in v)&&r(f,E,p[E],null,w,I);for(const E in v){if(ss(E))continue;const k=v[E],P=p[E];k!==P&&E!=="value"&&r(f,E,P,k,w,I)}"value"in v&&r(f,"value",p.value,v.value,w)}},tt=(f,p,v,I,w,E,k,P,D)=>{const T=p.el=f?f.el:l(""),V=p.anchor=f?f.anchor:l("");let{patchFlag:$,dynamicChildren:B,slotScopeIds:X}=p;X&&(P=P?P.concat(X):X),f==null?(s(T,v,I),s(V,v,I),ie(p.children||[],v,V,w,E,k,P,D)):$>0&&$&64&&B&&f.dynamicChildren?(q(f.dynamicChildren,B,v,w,E,k,P),(p.key!=null||w&&p===w.subTree)&&Rc(f,p,!0)):S(f,p,v,V,w,E,k,P,D)},Ge=(f,p,v,I,w,E,k,P,D)=>{p.slotScopeIds=P,f==null?p.shapeFlag&512?w.ctx.activate(p,v,I,k,D):Y(p,v,I,w,E,k,D):F(f,p,D)},Y=(f,p,v,I,w,E,k)=>{const P=f.component=mf(f,I,w);if(fc(f)&&(P.ctx.renderer=Ie),gf(P,!1,k),P.asyncDep){if(w&&w.registerDep(P,R,k),!f.el){const D=P.subTree=xe(gn);x(null,D,p,v)}}else R(P,f,p,v,w,E,k)},F=(f,p,v)=>{const I=p.component=f.component;if(of(f,p,v))if(I.asyncDep&&!I.asyncResolved){O(I,p,v);return}else I.next=p,I.update();else p.el=f.el,I.vnode=p},R=(f,p,v,I,w,E,k)=>{const P=()=>{if(f.isMounted){let{next:$,bu:B,u:X,parent:le,vnode:_e}=f;{const _t=Ac(f);if(_t){$&&($.el=_e.el,O(f,$,k)),_t.asyncDep.then(()=>{f.isUnmounted||P()});return}}let de=$,Ke;ln(f,!1),$?($.el=_e.el,O(f,$,k)):$=_e,B&&Qs(B),(Ke=$.props&&$.props.onVnodeBeforeUpdate)&&gt(Ke,le,$,_e),ln(f,!0);const je=vl(f),pt=f.subTree;f.subTree=je,m(pt,je,h(pt.el),st(pt),f,w,E),$.el=je.el,de===null&&lf(f,je.el),X&&Xe(X,w),(Ke=$.props&&$.props.onVnodeUpdated)&&Xe(()=>gt(Ke,le,$,_e),w)}else{let $;const{el:B,props:X}=p,{bm:le,m:_e,parent:de,root:Ke,type:je}=f,pt=os(p);ln(f,!1),le&&Qs(le),!pt&&($=X&&X.onVnodeBeforeMount)&&gt($,de,p),ln(f,!0);{Ke.ce&&Ke.ce._injectChildStyle(je);const _t=f.subTree=vl(f);m(null,_t,v,I,f,w,E),p.el=_t.el}if(_e&&Xe(_e,w),!pt&&($=X&&X.onVnodeMounted)){const _t=p;Xe(()=>gt($,de,_t),w)}(p.shapeFlag&256||de&&os(de.vnode)&&de.vnode.shapeFlag&256)&&f.a&&Xe(f.a,w),f.isMounted=!0,p=v=I=null}};f.scope.on();const D=f.effect=new ja(P);f.scope.off();const T=f.update=D.run.bind(D),V=f.job=D.runIfDirty.bind(D);V.i=f,V.id=f.uid,D.scheduler=()=>_o(V),ln(f,!0),T()},O=(f,p,v)=>{p.component=f;const I=f.vnode.props;f.vnode=p,f.next=null,Vd(f,p.props,I,v),qd(f,p.children,v),tn(),hl(f),nn()},S=(f,p,v,I,w,E,k,P,D=!1)=>{const T=f&&f.children,V=f?f.shapeFlag:0,$=p.children,{patchFlag:B,shapeFlag:X}=p;if(B>0){if(B&128){K(T,$,v,I,w,E,k,P,D);return}else if(B&256){W(T,$,v,I,w,E,k,P,D);return}}X&8?(V&16&&nt(T,w,E),$!==T&&u(v,$)):V&16?X&16?K(T,$,v,I,w,E,k,P,D):nt(T,w,E,!0):(V&8&&u(v,""),X&16&&ie($,v,I,w,E,k,P,D))},W=(f,p,v,I,w,E,k,P,D)=>{f=f||xn,p=p||xn;const T=f.length,V=p.length,$=Math.min(T,V);let B;for(B=0;B<$;B++){const X=p[B]=D?jt(p[B]):yt(p[B]);m(f[B],X,v,null,w,E,k,P,D)}T>V?nt(f,w,E,!0,!1,$):ie(p,v,I,w,E,k,P,D,$)},K=(f,p,v,I,w,E,k,P,D)=>{let T=0;const V=p.length;let $=f.length-1,B=V-1;for(;T<=$&&T<=B;){const X=f[T],le=p[T]=D?jt(p[T]):yt(p[T]);if(Qn(X,le))m(X,le,v,null,w,E,k,P,D);else break;T++}for(;T<=$&&T<=B;){const X=f[$],le=p[B]=D?jt(p[B]):yt(p[B]);if(Qn(X,le))m(X,le,v,null,w,E,k,P,D);else break;$--,B--}if(T>$){if(T<=B){const X=B+1,le=X<V?p[X].el:I;for(;T<=B;)m(null,p[T]=D?jt(p[T]):yt(p[T]),v,le,w,E,k,P,D),T++}}else if(T>B)for(;T<=$;)ae(f[T],w,E,!0),T++;else{const X=T,le=T,_e=new Map;for(T=le;T<=B;T++){const Qe=p[T]=D?jt(p[T]):yt(p[T]);Qe.key!=null&&_e.set(Qe.key,T)}let de,Ke=0;const je=B-le+1;let pt=!1,_t=0;const Gn=new Array(je);for(T=0;T<je;T++)Gn[T]=0;for(T=X;T<=$;T++){const Qe=f[T];if(Ke>=je){ae(Qe,w,E,!0);continue}let mt;if(Qe.key!=null)mt=_e.get(Qe.key);else for(de=le;de<=B;de++)if(Gn[de-le]===0&&Qn(Qe,p[de])){mt=de;break}mt===void 0?ae(Qe,w,E,!0):(Gn[mt-le]=T+1,mt>=_t?_t=mt:pt=!0,m(Qe,p[mt],v,null,w,E,k,P,D),Ke++)}const rl=pt?Xd(Gn):xn;for(de=rl.length-1,T=je-1;T>=0;T--){const Qe=le+T,mt=p[Qe],ol=Qe+1<V?p[Qe+1].el:I;Gn[T]===0?m(null,mt,v,ol,w,E,k,P,D):pt&&(de<0||T!==rl[de]?oe(mt,v,ol,2):de--)}}},oe=(f,p,v,I,w=null)=>{const{el:E,type:k,transition:P,children:D,shapeFlag:T}=f;if(T&6){oe(f.component.subTree,p,v,I);return}if(T&128){f.suspense.move(p,v,I);return}if(T&64){k.move(f,p,v,Ie);return}if(k===Ee){s(E,p,v);for(let $=0;$<D.length;$++)oe(D[$],p,v,I);s(f.anchor,p,v);return}if(k===Js){C(f,p,v);return}if(I!==2&&T&1&&P)if(I===0)P.beforeEnter(E),s(E,p,v),Xe(()=>P.enter(E),w);else{const{leave:$,delayLeave:B,afterLeave:X}=P,le=()=>s(E,p,v),_e=()=>{$(E,()=>{le(),X&&X()})};B?B(E,le,_e):_e()}else s(E,p,v)},ae=(f,p,v,I=!1,w=!1)=>{const{type:E,props:k,ref:P,children:D,dynamicChildren:T,shapeFlag:V,patchFlag:$,dirs:B,cacheIndex:X}=f;if($===-2&&(w=!1),P!=null&&ci(P,null,v,f,!0),X!=null&&(p.renderCache[X]=void 0),V&256){p.ctx.deactivate(f);return}const le=V&1&&B,_e=!os(f);let de;if(_e&&(de=k&&k.onVnodeBeforeUnmount)&&gt(de,p,f),V&6)Ve(f.component,v,I);else{if(V&128){f.suspense.unmount(v,I);return}le&&on(f,null,p,"beforeUnmount"),V&64?f.type.remove(f,p,v,Ie,I):T&&!T.hasOnce&&(E!==Ee||$>0&&$&64)?nt(T,p,v,!1,!0):(E===Ee&&$&384||!w&&V&16)&&nt(D,p,v),I&&Se(f)}(_e&&(de=k&&k.onVnodeUnmounted)||le)&&Xe(()=>{de&&gt(de,p,f),le&&on(f,null,p,"unmounted")},v)},Se=f=>{const{type:p,el:v,anchor:I,transition:w}=f;if(p===Ee){Ne(v,I);return}if(p===Js){b(f);return}const E=()=>{i(v),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:k,delayLeave:P}=w,D=()=>k(v,E);P?P(f.el,E,D):D()}else E()},Ne=(f,p)=>{let v;for(;f!==p;)v=d(f),i(f),f=v;i(p)},Ve=(f,p,v)=>{const{bum:I,scope:w,job:E,subTree:k,um:P,m:D,a:T}=f;gl(D),gl(T),I&&Qs(I),w.stop(),E&&(E.flags|=8,ae(k,f,p,v)),P&&Xe(P,p),Xe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},nt=(f,p,v,I=!1,w=!1,E=0)=>{for(let k=E;k<f.length;k++)ae(f[k],p,v,I,w)},st=f=>{if(f.shapeFlag&6)return st(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),v=p&&p[bd];return v?d(v):p};let Rt=!1;const ft=(f,p,v)=>{f==null?p._vnode&&ae(p._vnode,null,null,!0):m(p._vnode||null,f,p,null,null,null,v),p._vnode=f,Rt||(Rt=!0,hl(),cc(),Rt=!1)},Ie={p:m,um:ae,m:oe,r:Se,mt:Y,mc:ie,pc:S,pbc:q,n:st,o:t};return{render:ft,hydrate:void 0,createApp:Bd(ft)}}function hr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ln({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Rc(t,e,n=!1){const s=t.children,i=e.children;if(G(s)&&G(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=jt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Rc(o,l)),l.type===ji&&(l.el=o.el)}}function Xd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ac(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ac(e)}function gl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Jd=Symbol.for("v-scx"),Zd=()=>Xs(Jd);function Pn(t,e,n){return Nc(t,e,n)}function Nc(t,e,n=pe){const{immediate:s,deep:i,flush:r,once:o}=n,l=We({},n),a=e&&s||!e&&r!=="post";let c;if(bs){if(r==="sync"){const _=Zd();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=Ct,_.resume=Ct,_.pause=Ct,_}}const u=Be;l.call=(_,g,m)=>It(_,u,g,m);let h=!1;r==="post"?l.scheduler=_=>{Xe(_,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,g)=>{g?_():_o(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=_d(t,e,l);return bs&&(c?c.push(d):a&&d()),d}function ef(t,e,n){const s=this.proxy,i=Te(t)?t.includes(".")?Dc(s,t):()=>s[t]:t.bind(s,s);let r;ee(e)?r=e:(r=e.handler,n=e);const o=Ls(this),l=Nc(i,r.bind(s),n);return o(),l}function Dc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const tf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Qt(e)}Modifiers`]||t[`${Cn(e)}Modifiers`];function nf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let i=n;const r=e.startsWith("update:"),o=r&&tf(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>Te(u)?u.trim():u)),o.number&&(i=n.map(ri)));let l,a=s[l=rr(e)]||s[l=rr(Qt(e))];!a&&r&&(a=s[l=rr(Cn(e))]),a&&It(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,It(c,t,6,i)}}function Pc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!ee(t)){const a=c=>{const u=Pc(c,e,!0);u&&(l=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(be(t)&&s.set(t,null),null):(G(r)?r.forEach(a=>o[a]=null):We(o,r),be(t)&&s.set(t,o),o)}function Vi(t,e){return!t||!Oi(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,Cn(e))||he(t,e))}function vl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:g,inheritAttrs:m}=t,N=ai(t);let x,U;try{if(n.shapeFlag&4){const b=i||s,L=b;x=yt(c.call(L,b,u,h,_,d,g)),U=l}else{const b=e;x=yt(b.length>1?b(h,{attrs:l,slots:o,emit:a}):b(h,null)),U=e.props?l:sf(l)}}catch(b){as.length=0,Bi(b,t,1),x=xe(gn)}let C=x;if(U&&m!==!1){const b=Object.keys(U),{shapeFlag:L}=C;b.length&&L&7&&(r&&b.some(io)&&(U=rf(U,r)),C=Fn(C,U,!1,!0))}return n.dirs&&(C=Fn(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&mo(C,n.transition),x=C,ai(N),x}const sf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oi(n))&&((e||(e={}))[n]=t[n]);return e},rf=(t,e)=>{const n={};for(const s in t)(!io(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function of(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?yl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Vi(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?yl(s,o,c):!0:!!o;return!1}function yl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Vi(n,r))return!0}return!1}function lf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Oc=t=>t.__isSuspense;function af(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):vd(t)}const Ee=Symbol.for("v-fgt"),ji=Symbol.for("v-txt"),gn=Symbol.for("v-cmt"),Js=Symbol.for("v-stc"),as=[];let Ze=null;function z(t=!1){as.push(Ze=t?null:[])}function cf(){as.pop(),Ze=as[as.length-1]||null}let ys=1;function bl(t,e=!1){ys+=t,t<0&&Ze&&e&&(Ze.hasOnce=!0)}function Mc(t){return t.dynamicChildren=ys>0?Ze||xn:null,cf(),ys>0&&Ze&&Ze.push(t),t}function J(t,e,n,s,i,r){return Mc(y(t,e,n,s,i,r,!0))}function cs(t,e,n,s,i){return Mc(xe(t,e,n,s,i,!0))}function kc(t){return t?t.__v_isVNode===!0:!1}function Qn(t,e){return t.type===e.type&&t.key===e.key}const Lc=({key:t})=>t??null,Zs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Te(t)||$e(t)||ee(t)?{i:it,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,s=0,i=null,r=t===Ee?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lc(e),ref:e&&Zs(e),scopeId:hc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:it};return l?(vo(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Te(n)?8:16),ys>0&&!o&&Ze&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ze.push(a),a}const xe=uf;function uf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Pd)&&(t=gn),kc(t)){const l=Fn(t,e,!0);return n&&vo(l,n),ys>0&&!r&&Ze&&(l.shapeFlag&6?Ze[Ze.indexOf(t)]=l:Ze.push(l)),l.patchFlag=-2,l}if(Cf(t)&&(t=t.__vccOpts),e){e=hf(e);let{class:l,style:a}=e;l&&!Te(l)&&(e.class=et(l)),be(a)&&(po(a)&&!G(a)&&(a=We({},a)),e.style=Ms(a))}const o=Te(t)?1:Oc(t)?128:Cd(t)?64:be(t)?4:ee(t)?2:0;return y(t,e,n,s,i,o,r,!0)}function hf(t){return t?po(t)||Cc(t)?We({},t):t:null}function Fn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?ff(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Lc(c),ref:e&&e.ref?n&&r?G(r)?r.concat(Zs(e)):[r,Zs(e)]:Zs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ee?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fn(t.ssContent),ssFallback:t.ssFallback&&Fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&mo(u,a.clone(u)),u}function $c(t=" ",e=0){return xe(ji,null,t,e)}function df(t,e){const n=xe(Js,null,t);return n.staticCount=e,n}function Et(t="",e=!1){return e?(z(),cs(gn,null,t)):xe(gn,null,t)}function yt(t){return t==null||typeof t=="boolean"?xe(gn):G(t)?xe(Ee,null,t.slice()):kc(t)?jt(t):xe(ji,null,String(t))}function jt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fn(t)}function vo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),vo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Cc(e)?e._ctx=it:i===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:it},n=32):(e=String(e),s&64?(n=16,e=[$c(e)]):n=8);t.children=e,t.shapeFlag|=n}function ff(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=et([e.class,s.class]));else if(i==="style")e.style=Ms([e.style,s.style]);else if(Oi(i)){const r=e[i],o=s[i];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function gt(t,e,n,s=null){It(t,e,7,[n,s])}const pf=vc();let _f=0;function mf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||pf,r={uid:_f++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ec(s,i),emitsOptions:Pc(s,i),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=nf.bind(null,r),t.ce&&t.ce(r),r}let Be=null,hi,Fr;{const t=Li(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};hi=e("__VUE_INSTANCE_SETTERS__",n=>Be=n),Fr=e("__VUE_SSR_SETTERS__",n=>bs=n)}const Ls=t=>{const e=Be;return hi(t),t.scope.on(),()=>{t.scope.off(),hi(e)}},Cl=()=>{Be&&Be.scope.off(),hi(null)};function Fc(t){return t.vnode.shapeFlag&4}let bs=!1;function gf(t,e=!1,n=!1){e&&Fr(e);const{props:s,children:i}=t.vnode,r=Fc(t);Wd(t,s,r,e),zd(t,i,n);const o=r?vf(t,e):void 0;return e&&Fr(!1),o}function vf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Od);const{setup:s}=n;if(s){tn();const i=t.setupContext=s.length>1?bf(t):null,r=Ls(t),o=ks(s,t,0,[t.props,i]),l=La(o);if(nn(),r(),(l||t.sp)&&!os(t)&&dc(t),l){if(o.then(Cl,Cl),e)return o.then(a=>{wl(t,a)}).catch(a=>{Bi(a,t,0)});t.asyncDep=o}else wl(t,o)}else Uc(t)}function wl(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=rc(e)),Uc(t)}function Uc(t,e,n){const s=t.type;t.render||(t.render=s.render||Ct);{const i=Ls(t);tn();try{Md(t)}finally{nn(),i()}}}const yf={get(t,e){return Me(t,"get",""),t[e]}};function bf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,yf),slots:t.slots,emit:t.emit,expose:e}}function Yi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(rc(ld(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ls)return ls[n](t)},has(e,n){return n in e||n in ls}})):t.proxy}function Cf(t){return ee(t)&&"__vccOpts"in t}const Wn=(t,e)=>fd(t,e,bs),wf="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ur;const El=typeof window<"u"&&window.trustedTypes;if(El)try{Ur=El.createPolicy("vue",{createHTML:t=>t})}catch{}const Bc=Ur?t=>Ur.createHTML(t):t=>t,Ef="http://www.w3.org/2000/svg",Sf="http://www.w3.org/1998/Math/MathML",Dt=typeof document<"u"?document:null,Sl=Dt&&Dt.createElement("template"),If={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Dt.createElementNS(Ef,t):e==="mathml"?Dt.createElementNS(Sf,t):n?Dt.createElement(t,{is:n}):Dt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Dt.createTextNode(t),createComment:t=>Dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Sl.innerHTML=Bc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Sl.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Tf=Symbol("_vtc");function xf(t,e,n){const s=t[Tf];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const di=Symbol("_vod"),Hc=Symbol("_vsh"),Wc={beforeMount(t,{value:e},{transition:n}){t[di]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Xn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Xn(t,!0),s.enter(t)):s.leave(t,()=>{Xn(t,!1)}):Xn(t,e))},beforeUnmount(t,{value:e}){Xn(t,e)}};function Xn(t,e){t.style.display=e?t[di]:"none",t[Hc]=!e}const Rf=Symbol(""),Af=/(^|;)\s*display\s*:/;function Nf(t,e,n){const s=t.style,i=Te(n);let r=!1;if(n&&!i){if(e)if(Te(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ei(s,l,"")}else for(const o in e)n[o]==null&&ei(s,o,"");for(const o in n)o==="display"&&(r=!0),ei(s,o,n[o])}else if(i){if(e!==n){const o=s[Rf];o&&(n+=";"+o),s.cssText=n,r=Af.test(n)}}else e&&t.removeAttribute("style");di in t&&(t[di]=r?s.display:"",t[Hc]&&(s.display="none"))}const Il=/\s*!important$/;function ei(t,e,n){if(G(n))n.forEach(s=>ei(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Df(t,e);Il.test(n)?t.setProperty(Cn(s),n.replace(Il,""),"important"):t[s]=n}}const Tl=["Webkit","Moz","ms"],dr={};function Df(t,e){const n=dr[e];if(n)return n;let s=Qt(e);if(s!=="filter"&&s in t)return dr[e]=s;s=Ua(s);for(let i=0;i<Tl.length;i++){const r=Tl[i]+s;if(r in t)return dr[e]=r}return e}const xl="http://www.w3.org/1999/xlink";function Rl(t,e,n,s,i,r=$h(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xl,e.slice(6,e.length)):t.setAttributeNS(xl,e,n):n==null||r&&!Ha(n)?t.removeAttribute(e):t.setAttribute(e,r?"":St(n)?String(n):n)}function Al(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Bc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ha(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function hn(t,e,n,s){t.addEventListener(e,n,s)}function Pf(t,e,n,s){t.removeEventListener(e,n,s)}const Nl=Symbol("_vei");function Of(t,e,n,s,i=null){const r=t[Nl]||(t[Nl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Mf(e);if(s){const c=r[e]=$f(s,i);hn(t,l,c,a)}else o&&(Pf(t,l,o,a),r[e]=void 0)}}const Dl=/(?:Once|Passive|Capture)$/;function Mf(t){let e;if(Dl.test(t)){e={};let s;for(;s=t.match(Dl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cn(t.slice(2)),e]}let fr=0;const kf=Promise.resolve(),Lf=()=>fr||(kf.then(()=>fr=0),fr=Date.now());function $f(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;It(Ff(s,n.value),e,5,[s])};return n.value=t,n.attached=Lf(),n}function Ff(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Pl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Uf=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?xf(t,s,o):e==="style"?Nf(t,n,s):Oi(e)?io(e)||Of(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bf(t,e,s,o))?(Al(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Te(s))?Al(t,Qt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Rl(t,e,s,o))};function Bf(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pl(e)&&ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Pl(e)&&Te(n)?!1:e in t}const fi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Qs(e,n):e};function Hf(t){t.target.composing=!0}function Ol(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const On=Symbol("_assign"),Mn={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[On]=fi(i);const r=s||i.props&&i.props.type==="number";hn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=ri(l)),t[On](l)}),n&&hn(t,"change",()=>{t.value=t.value.trim()}),e||(hn(t,"compositionstart",Hf),hn(t,"compositionend",Ol),hn(t,"change",Ol))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[On]=fi(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?ri(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},Ml={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Mi(e);hn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ri(pi(o)):pi(o));t[On](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,lc(()=>{t._assigning=!1})}),t[On]=fi(s)},mounted(t,{value:e}){kl(t,e)},beforeUpdate(t,e,n){t[On]=fi(n)},updated(t,{value:e}){t._assigning||kl(t,e)}};function kl(t,e){const n=t.multiple,s=G(e);if(!(n&&!s&&!Mi(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],l=pi(o);if(n)if(s){const a=typeof l;a==="string"||a==="number"?o.selected=e.some(c=>String(c)===String(l)):o.selected=Uh(e,l)>-1}else o.selected=e.has(l);else if($i(pi(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function pi(t){return"_value"in t?t._value:t.value}const Wf=["ctrl","shift","alt","meta"],Vf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Wf.some(n=>t[`${n}Key`]&&!e.includes(n))},jf=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const l=Vf[e[o]];if(l&&l(i,e))return}return t(i,...r)})},Yf=We({patchProp:Uf},If);let Ll;function zf(){return Ll||(Ll=Gd(Yf))}const qf=(...t)=>{const e=zf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Kf(s);if(!i)return;const r=e._component;!ee(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Gf(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Gf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Kf(t){return Te(t)?document.querySelector(t):t}const Qf={class:"header"},Xf=["onClick"],Jf={__name:"Header",props:{activeIndex:{type:Number,default:0}},emits:["update:activeIndex"],setup(t,{emit:e}){const n=e,s=re(["首页","记仇本","纪念日","成长"]),i=r=>{n("update:activeIndex",r)};return(r,o)=>(z(),J("section",Qf,[(z(!0),J(Ee,null,ht(s.value,(l,a)=>(z(),J("p",{class:et(["title",[a===t.activeIndex?"active":""]]),key:a,onClick:c=>i(a)},Ce(l),11,Xf))),128))]))}},ot=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Zf={__name:"BgmPlayer",setup(t){const e=re(!1),n=re(null);function s(){e.value?n.value.pause():n.value.play(),e.value=!e.value}function i(){document.hidden?(n.value.pause(),e.value=!1):e.value&&n.value.play()}return sn(()=>{document.addEventListener("visibilitychange",i)}),Wi(()=>{document.removeEventListener("visibilitychange",i)}),(r,o)=>(z(),J("div",null,[y("audio",{ref_key:"audioPlayer",ref:n,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/ffseh7bfubfbps/bgm.mp3",loop:""},null,512),y("div",{class:et(["bgm_icon",{rotate:e.value}]),onClick:s},null,2)]))}},ep=ot(Zf,[["__scopeId","data-v-2cde0a74"]]),tp=()=>{};var $l={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=function(t,e){if(!t)throw Vn(e)},Vn=function(t){return new Error("Firebase Database ("+Vc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},np=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):np(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new sp;const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yc=function(t){const e=jc(t);return yo.encodeByteArray(e,!0)},_i=function(t){return Yc(t).replace(/\./g,"")},Br=function(t){try{return yo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t){return zc(void 0,t)}function zc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rp(n)||(t[n]=zc(t[n],e[n]));return t}function rp(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=()=>op().__FIREBASE_DEFAULTS__,ap=()=>{if(typeof process>"u"||typeof $l>"u")return;const t=$l.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Br(t[1]);return e&&JSON.parse(e)},qc=()=>{try{return tp()||lp()||ap()||cp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},up=t=>{var e,n;return(n=(e=qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hp=t=>{const e=up(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Gc=()=>{var t;return(t=qc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){return t.endsWith(".cloudworkstations.dev")}async function dp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_i(JSON.stringify(n)),_i(JSON.stringify(o)),""].join(".")}const us={};function pp(){const t={prod:[],emulator:[]};for(const e of Object.keys(us))us[e]?t.emulator.push(e):t.prod.push(e);return t}function _p(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Fl=!1;function Kc(t,e){if(typeof window>"u"||typeof document>"u"||!bo(window.location.host)||us[t]===e||us[t]||Fl)return;us[t]=e;function n(d){return`__firebase__banner__${d}`}const s="__firebase__banner",r=pp().prod.length>0;function o(){const d=document.getElementById(s);d&&d.remove()}function l(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="absolute",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function a(d,_){d.setAttribute("width","24"),d.setAttribute("id",_),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Fl=!0,o()},d}function u(d,_){d.setAttribute("id",_),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function h(){const d=_p(s),_=n("text"),g=document.getElementById(_)||document.createElement("span"),m=n("learnmore"),N=document.getElementById(m)||document.createElement("a"),x=n("preprendIcon"),U=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const C=d.element;l(C),u(N,m);const b=c();a(U,x),C.append(U,g,N,b),document.body.appendChild(C)}r?(g.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mp())}function gp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vp(){return Vc.NODE_ADMIN===!0}function yp(){try{return typeof indexedDB=="object"}catch{return!1}}function bp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="FirebaseError";class $s extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Cp,Object.setPrototypeOf(this,$s.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xc.prototype.create)}}class Xc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?wp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new $s(i,l,s)}}function wp(t,e){return t.replace(Ep,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ep=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){return JSON.parse(t)}function Re(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Cs(Br(r[0])||""),n=Cs(Br(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Sp=function(t){const e=Jc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ip=function(t){const e=Jc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Un(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ul(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function gi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Bl(r)&&Bl(o)){if(!gi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Bl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Co(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,A(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t){return t&&t._delegate?t._delegate:t}class ws{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dp(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Np(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Np(t){return t===cn?void 0:t}function Dp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ap(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Op={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Mp=ge.INFO,kp={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Lp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=kp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=Mp,this._logHandler=Lp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Op[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const $p=(t,e)=>e.some(n=>t instanceof n);let Hl,Wl;function Fp(){return Hl||(Hl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Up(){return Wl||(Wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eu=new WeakMap,Hr=new WeakMap,tu=new WeakMap,pr=new WeakMap,wo=new WeakMap;function Bp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(zt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eu.set(n,t)}).catch(()=>{}),wo.set(e,t),e}function Hp(t){if(Hr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Hr.set(t,e)}let Wr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wp(t){Wr=t(Wr)}function Vp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_r(this),e,...n);return tu.set(s,e.sort?e.sort():[e]),zt(s)}:Up().includes(t)?function(...e){return t.apply(_r(this),e),zt(eu.get(this))}:function(...e){return zt(t.apply(_r(this),e))}}function jp(t){return typeof t=="function"?Vp(t):(t instanceof IDBTransaction&&Hp(t),$p(t,Fp())?new Proxy(t,Wr):t)}function zt(t){if(t instanceof IDBRequest)return Bp(t);if(pr.has(t))return pr.get(t);const e=jp(t);return e!==t&&(pr.set(t,e),wo.set(e,t)),e}const _r=t=>wo.get(t);function Yp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=zt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(zt(o.result),a.oldVersion,a.newVersion,zt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const zp=["get","getKey","getAll","getAllKeys","count"],qp=["put","add","delete","clear"],mr=new Map;function Vl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mr.get(e))return mr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=qp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||zp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return mr.set(e,r),r}Wp(t=>({...t,get:(e,n,s)=>Vl(e,n)||t.get(e,n,s),has:(e,n)=>!!Vl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Kp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vr="@firebase/app",jl="0.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new Zc("@firebase/app"),Qp="@firebase/app-compat",Xp="@firebase/analytics-compat",Jp="@firebase/analytics",Zp="@firebase/app-check-compat",e_="@firebase/app-check",t_="@firebase/auth",n_="@firebase/auth-compat",s_="@firebase/database",i_="@firebase/data-connect",r_="@firebase/database-compat",o_="@firebase/functions",l_="@firebase/functions-compat",a_="@firebase/installations",c_="@firebase/installations-compat",u_="@firebase/messaging",h_="@firebase/messaging-compat",d_="@firebase/performance",f_="@firebase/performance-compat",p_="@firebase/remote-config",__="@firebase/remote-config-compat",m_="@firebase/storage",g_="@firebase/storage-compat",v_="@firebase/firestore",y_="@firebase/vertexai",b_="@firebase/firestore-compat",C_="firebase",w_="11.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]",E_={[Vr]:"fire-core",[Qp]:"fire-core-compat",[Jp]:"fire-analytics",[Xp]:"fire-analytics-compat",[e_]:"fire-app-check",[Zp]:"fire-app-check-compat",[t_]:"fire-auth",[n_]:"fire-auth-compat",[s_]:"fire-rtdb",[i_]:"fire-data-connect",[r_]:"fire-rtdb-compat",[o_]:"fire-fn",[l_]:"fire-fn-compat",[a_]:"fire-iid",[c_]:"fire-iid-compat",[u_]:"fire-fcm",[h_]:"fire-fcm-compat",[d_]:"fire-perf",[f_]:"fire-perf-compat",[p_]:"fire-rc",[__]:"fire-rc-compat",[m_]:"fire-gcs",[g_]:"fire-gcs-compat",[v_]:"fire-fst",[b_]:"fire-fst-compat",[y_]:"fire-vertex","fire-js":"fire-js",[C_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Map,S_=new Map,Yr=new Map;function Yl(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yi(t){const e=t.name;if(Yr.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;Yr.set(e,t);for(const n of vi.values())Yl(n,t);for(const n of S_.values())Yl(n,t);return!0}function I_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function T_(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new Xc("app","Firebase",x_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=w_;function nu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:jr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(n||(n=Gc()),!n)throw qt.create("no-options");const r=vi.get(i);if(r){if(gi(n,r.options)&&gi(s,r.config))return r;throw qt.create("duplicate-app",{appName:i})}const o=new Pp(i);for(const a of Yr.values())o.addComponent(a);const l=new R_(n,s,o);return vi.set(i,l),l}function N_(t=jr){const e=vi.get(t);if(!e&&t===jr&&Gc())return nu();if(!e)throw qt.create("no-app",{appName:t});return e}function kn(t,e,n){var s;let i=(s=E_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(l.join(" "));return}yi(new ws(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="firebase-heartbeat-database",P_=1,Es="firebase-heartbeat-store";let gr=null;function su(){return gr||(gr=Yp(D_,P_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Es)}catch(n){console.warn(n)}}}}).catch(t=>{throw qt.create("idb-open",{originalErrorMessage:t.message})})),gr}async function O_(t){try{const n=(await su()).transaction(Es),s=await n.objectStore(Es).get(iu(t));return await n.done,s}catch(e){if(e instanceof $s)Ut.warn(e.message);else{const n=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function zl(t,e){try{const s=(await su()).transaction(Es,"readwrite");await s.objectStore(Es).put(e,iu(t)),await s.done}catch(n){if(n instanceof $s)Ut.warn(n.message);else{const s=qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(s.message)}}}function iu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=1024,k_=30;class L_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new F_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ql();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>k_){const o=U_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ut.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ql(),{heartbeatsToSend:s,unsentEntries:i}=$_(this._heartbeatsCache.heartbeats),r=_i(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Ut.warn(n),""}}}function ql(){return new Date().toISOString().substring(0,10)}function $_(t,e=M_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Gl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class F_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yp()?bp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await O_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gl(t){return _i(JSON.stringify({version:2,heartbeats:t})).length}function U_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t){yi(new ws("platform-logger",e=>new Gp(e),"PRIVATE")),yi(new ws("heartbeat",e=>new L_(e),"PRIVATE")),kn(Vr,jl,t),kn(Vr,jl,"esm2017"),kn("fire-js","")}B_("");var Kl={};const Ql="@firebase/database",Xl="1.0.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru="";function H_(t){ru=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Cs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new W_(e)}}catch{}return new V_},dn=ou("localStorage"),j_=ou("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new Zc("@firebase/database"),Y_=function(){let t=1;return function(){return t++}}(),lu=function(t){const e=Rp(t),n=new xp;n.update(e);const s=n.digest();return yo.encodeByteArray(s)},Fs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fs.apply(null,s):typeof s=="object"?e+=Re(s):e+=s,e+=" "}return e};let hs=null,Jl=!0;const z_=function(t,e){A(!0,"Can't turn on custom loggers persistently."),Ln.logLevel=ge.VERBOSE,hs=Ln.log.bind(Ln)},Le=function(...t){if(Jl===!0&&(Jl=!1,hs===null&&j_.get("logging_enabled")===!0&&z_()),hs){const e=Fs.apply(null,t);hs(e)}},Us=function(t){return function(...e){Le(t,...e)}},zr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fs(...t);Ln.error(e)},Bt=function(...t){const e=`FIREBASE FATAL ERROR: ${Fs(...t)}`;throw Ln.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+Fs(...t);Ln.warn(e)},q_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Eo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},G_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vn="[MIN_NAME]",Xt="[MAX_NAME]",jn=function(t,e){if(t===e)return 0;if(t===vn||e===Xt)return-1;if(e===vn||t===Xt)return 1;{const n=Zl(t),s=Zl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},K_=function(t,e){return t===e?0:t<e?-1:1},Jn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Re(e))},So=function(t){if(typeof t!="object"||t===null)return Re(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Re(e[s]),n+=":",n+=So(t[e[s]]);return n+="}",n},au=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const cu=function(t){A(!Eo(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Q_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},X_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function J_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Z_=new RegExp("^-?(0*)\\d{1,10}$"),em=-2147483648,tm=2147483647,Zl=function(t){if(Z_.test(t)){const e=Number(t);if(e>=em&&e<=tm)return e}return null},Yn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},nm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ds=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,T_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class ti{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ti.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="5",uu="v",hu="s",du="r",fu="f",pu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_u="ls",mu="p",qr="ac",gu="websocket",vu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=dn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&dn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bu(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let s;if(e===gu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===vu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rm(t)&&(n.ns=t.namespace);const i=[];return qe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(){this.counters_={}}incrementCounter(e,n=1){xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ip(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr={},yr={};function To(t){const e=t.toString();return vr[e]||(vr[e]=new om),vr[e]}function lm(t,e){const n=t.toString();return yr[n]||(yr[n]=e()),yr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Yn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="start",cm="close",um="pLPCommand",hm="pRTLPCB",Cu="id",wu="pw",Eu="ser",dm="cb",fm="seg",pm="ts",_m="d",mm="dframe",Su=1870,Iu=30,gm=Su-Iu,vm=25e3,ym=3e4;class Tn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(e),this.stats_=To(n),this.urlFn=a=>(this.appCheckToken&&(a[qr]=this.appCheckToken),bu(n,vu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new am(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ym)),G_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ea)this.id=l,this.password=a;else if(o===cm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ea]="t",s[Eu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[dm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[uu]=Io,this.transportSessionId&&(s[hu]=this.transportSessionId),this.lastSessionId&&(s[_u]=this.lastSessionId),this.applicationId&&(s[mu]=this.applicationId),this.appCheckToken&&(s[qr]=this.appCheckToken),typeof location<"u"&&location.hostname&&pu.test(location.hostname)&&(s[du]=fu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tn.forceAllow_=!0}static forceDisallow(){Tn.forceDisallow_=!0}static isAvailable(){return Tn.forceAllow_?!0:!Tn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Q_()&&!X_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Yc(n),i=au(s,gm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[mm]="t",s[Cu]=e,s[wu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Y_(),window[um+this.uniqueCallbackIdentifier]=e,window[hm+this.uniqueCallbackIdentifier]=n,this.myIFrame=xo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Le("frame writing exception"),l.stack&&Le(l.stack),Le(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Cu]=this.myID,e[wu]=this.myPW,e[Eu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Iu+s.length<=Su;){const o=this.pendingSegs.shift();s=s+"&"+fm+i+"="+o.seg+"&"+pm+i+"="+o.ts+"&"+_m+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(vm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=16384,Cm=45e3;let bi=null;typeof MozWebSocket<"u"?bi=MozWebSocket:typeof WebSocket<"u"&&(bi=WebSocket);class lt{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=To(n),this.connURL=lt.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[uu]=Io,typeof location<"u"&&location.hostname&&pu.test(location.hostname)&&(o[du]=fu),n&&(o[hu]=n),s&&(o[_u]=s),i&&(o[qr]=i),r&&(o[mu]=r),bu(e,gu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,dn.set("previous_websocket_failure",!0);try{let s;vp(),this.mySock=new bi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&bi!==null&&!lt.forceDisallow_}static previouslyFailed(){return dn.isInMemoryStorage||dn.get("previous_websocket_failure")===!0}markConnectionHealthy(){dn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Cs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=au(n,bm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Cm))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lt.responsesRequiredToBeHealthy=2;lt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{static get ALL_TRANSPORTS(){return[Tn,lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=lt&&lt.isAvailable();let s=n&&!lt.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[lt];else{const i=this.transports_=[];for(const r of Ss.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ss.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ss.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=6e4,Em=5e3,Sm=10*1024,Im=100*1024,br="t",ta="d",Tm="s",na="r",xm="e",sa="o",ia="a",ra="n",oa="p",Rm="h";class Am{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new Ss(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ds(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Im?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Sm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(br in e){const n=e[br];n===ia?this.upgradeIfSecondaryHealthy_():n===na?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===sa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Jn("t",e),s=Jn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:oa,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ia,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ra,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Jn("t",e),s=Jn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Jn(br,e);if(ta in e){const s=e[ta];if(n===Rm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ra){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Tm?this.onConnectionShutdown_(s):n===na?this.onReset_(s):n===xm?zr("Server Error: "+s):n===sa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Io!==s&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ds(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ds(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Em))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:oa,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(dn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends xu{static getInstance(){return new Ci}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=32,aa=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new fe("")}function te(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Jt(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function Ru(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Nm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Au(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Nu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function Ae(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof fe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new fe(n,0)}function ne(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=te(t),s=te(e);if(n===null)return e;if(n===s)return He(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ro(t,e){if(Jt(t)!==Jt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function at(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Jt(t)>Jt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Dm{constructor(e,n){this.errorPrefix_=n,this.parts_=Au(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=qi(this.parts_[s]);Du(this)}}function Pm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=qi(e),Du(t)}function Om(t){const e=t.parts_.pop();t.byteLength_-=qi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Du(t){if(t.byteLength_>aa)throw new Error(t.errorPrefix_+"has a key path longer than "+aa+" bytes ("+t.byteLength_+").");if(t.parts_.length>la)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+la+") or object contains a cycle "+un(t))}function un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends xu{static getInstance(){return new Ao}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=1e3,Mm=60*5*1e3,ca=30*1e3,km=1.3,Lm=3e4,$m="server_kill",ua=3;class Ft extends Tu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ft.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zn,this.maxReconnectDelay_=Mm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ao.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ci.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Re(r)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new zi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Ft.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xt(e,"w")){const s=Un(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ip(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ca)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Sp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Re(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zr("Unrecognized action received from server: "+Re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Lm&&(this.reconnectDelay_=Zn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*km)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ft.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){A(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Am(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{ze(_+" ("+this.repoInfo_.toString()+")"),this.interrupt($m)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ze(h),a())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ul(this.interruptReasons_)&&(this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>So(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new fe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ua&&(this.reconnectDelay_=ca,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ua&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ru.replace(/\./g,"-")]=1,Qc()?e["framework.cordova"]=1:gp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ci.getInstance().currentlyOnline();return Ul(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0;Ft.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new se(vn,e),i=new se(vn,n);return this.compare(s,i)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs;class Pu extends Gi{static get __EMPTY_NODE(){return Gs}static set __EMPTY_NODE(e){Gs=e}compare(e,n){return jn(e.name,n.name)}isDefinedOn(e){throw Vn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(Xt,Gs)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,Gs)}toString(){return".key"}}const _n=new Pu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Pe.RED,this.left=i??Ye.EMPTY_NODE,this.right=r??Ye.EMPTY_NODE}copy(e,n,s,i,r){return new Pe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class Fm{copy(e,n,s,i,r){return this}insert(e,n,s){return new Pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ye{constructor(e,n=Ye.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ye(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ks(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ks(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ks(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ks(this.root_,null,this.comparator_,!0,e)}}Ye.EMPTY_NODE=new Fm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t,e){return jn(t.name,e.name)}function No(t,e){return jn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr;function Bm(t){Gr=t}const Ou=function(t){return typeof t=="number"?"number:"+cu(t):"string:"+t},Mu=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xt(e,".sv"),"Priority must be a string or number.")}else A(t===Gr||t.isEmpty(),"priority of unexpected type.");A(t===Gr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;class De{static set __childrenNodeConstructor(e){ha=e}static get __childrenNodeConstructor(){return ha}constructor(e,n=De.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Mu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new De(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:te(e)===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:De.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=te(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(A(s!==".priority"||Jt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,De.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ou(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=cu(this.value_):e+=this.value_,this.lazyHash_=lu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===De.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof De.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=De.VALUE_TYPE_ORDER.indexOf(n),r=De.VALUE_TYPE_ORDER.indexOf(s);return A(i>=0,"Unknown leaf type: "+n),A(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}De.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku,Lu;function Hm(t){ku=t}function Wm(t){Lu=t}class Vm extends Gi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?jn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Xt,new De("[PRIORITY-POST]",Lu))}makePost(e,n){const s=ku(e);return new se(n,new De("[PRIORITY-POST]",s))}toString(){return".priority"}}const we=new Vm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=Math.log(2);class Ym{constructor(e){const n=r=>parseInt(Math.log(r)/jm,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wi=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new Pe(d,h.node,Pe.BLACK,null,null);{const _=parseInt(u/2,10)+a,g=i(a,_),m=i(_+1,c);return h=t[_],d=n?n(h):h,new Pe(d,h.node,Pe.BLACK,g,m)}},r=function(a){let c=null,u=null,h=t.length;const d=function(g,m){const N=h-g,x=h;h-=g;const U=i(N+1,x),C=t[N],b=n?n(C):C;_(new Pe(b,C.node,m,null,U))},_=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const m=a.nextBitIsOne(),N=Math.pow(2,a.count-(g+1));m?d(N,Pe.BLACK):(d(N,Pe.BLACK),d(N,Pe.RED))}return u},o=new Ym(t.length),l=r(o);return new Ye(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr;const Sn={};class Lt{static get Default(){return A(Sn&&we,"ChildrenNode.ts has not been loaded"),Cr=Cr||new Lt({".priority":Sn},{".priority":we}),Cr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Un(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ye?n:null}hasIndex(e){return xt(this.indexSet_,e.toString())}addIndex(e,n){A(e!==_n,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(se.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=wi(s,e.getCompare()):l=Sn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Lt(u,c)}addToIndexes(e,n){const s=mi(this.indexes_,(i,r)=>{const o=Un(this.indexSet_,r);if(A(o,"Missing index implementation for "+r),i===Sn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(se.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),wi(l,o.getCompare())}else return Sn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new se(e.name,l))),a.insert(e,e.node)}});return new Lt(s,this.indexSet_)}removeFromIndexes(e,n){const s=mi(this.indexes_,i=>{if(i===Sn)return i;{const r=n.get(e.name);return r?i.remove(new se(e.name,r)):i}});return new Lt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es;class j{static get EMPTY_NODE(){return es||(es=new j(new Ye(No),null,Lt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Mu(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||es}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?es:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new se(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?es:this.priorityNode_;return new j(i,o,r)}}updateChild(e,n){const s=te(e);if(s===null)return n;{A(te(e)!==".priority"||Jt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(we,(o,l)=>{n[o]=l.val(e),s++,r&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ou(this.getPriority().val())+":"),this.forEachChild(we,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":lu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new se(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,se.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bs?-1:0}withIndex(e){if(e===_n||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===_n||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(we),i=n.getIterator(we);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_n?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zm extends j{constructor(){super(new Ye(No),j.EMPTY_NODE,Lt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Bs=new zm;Object.defineProperties(se,{MIN:{value:new se(vn,j.EMPTY_NODE)},MAX:{value:new se(Xt,Bs)}});Pu.__EMPTY_NODE=j.EMPTY_NODE;De.__childrenNodeConstructor=j;Bm(Bs);Wm(Bs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=!0;function Oe(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new De(n,Oe(e))}if(!(t instanceof Array)&&qm){const n=[];let s=!1;if(qe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Oe(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new se(o,a)))}}),n.length===0)return j.EMPTY_NODE;const r=wi(n,Um,o=>o.name,No);if(s){const o=wi(n,we.getCompare());return new j(r,Oe(e),new Lt({".priority":o},{".priority":we}))}else return new j(r,Oe(e),Lt.Default)}else{let n=j.EMPTY_NODE;return qe(t,(s,i)=>{if(xt(t,s)&&s.substring(0,1)!=="."){const r=Oe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Oe(e))}}Hm(Oe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Gi{constructor(e){super(),this.indexPath_=e,A(!ne(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?jn(e.name,n.name):r}makePost(e,n){const s=Oe(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,s);return new se(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Bs);return new se(Xt,e)}toString(){return Au(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm extends Gi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?jn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const s=Oe(e);return new se(n,s)}toString(){return".value"}}const $u=new Gm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t){return{type:"value",snapshotNode:t}}function Bn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Is(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ts(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Km(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Is(n,l)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Bn(n,s)):o.trackChildChange(Ts(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(we,(i,r)=>{n.hasChild(i)||s.trackChildChange(Is(i,r))}),n.isLeafNode()||n.forEachChild(we,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ts(i,r,o))}else s.trackChildChange(Bn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.indexedFilter_=new Po(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xs.getStartPost_(e),this.endPost_=xs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new se(n,s))||(s=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const r=this;return n.forEachChild(we,(o,l)=>{r.matches(new se(o,l))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new xs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new se(n,s))||(s=j.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;A(l.numChildren()===this.limit_,"");const a=new se(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Ts(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Is(n,h));const m=l.updateImmediateChild(n,j.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Bn(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Is(c.name,c.node)),r.trackChildChange(Bn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=we}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vn}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===we}copy(){const e=new Oo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Xm(t){return t.loadsAllData()?new Po(t.getIndex()):t.hasLimit()?new Qm(t):new xs(t)}function Jm(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function Zm(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function eg(t,e){const n=t.copy();return n.index_=e,n}function da(t){const e={};if(t.isDefault())return e;let n;if(t.index_===we?n="$priority":t.index_===$u?n="$value":t.index_===_n?n="$key":(A(t.index_ instanceof Do,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Re(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Re(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Re(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Re(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function fa(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==we&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Tu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Us("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ei.getListenId_(e,s),l={};this.listens_[o]=l;const a=da(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Un(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ei.getListenId_(e,n);delete this.listens_[s]}get(e){const n=da(e._queryParams),s=e._path.toString(),i=new zi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Tp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Cs(l.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(){return{value:null,children:new Map}}function Uu(t,e,n){if(ne(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=te(e);t.children.has(s)||t.children.set(s,Si());const i=t.children.get(s);e=ve(e),Uu(i,e,n)}}function Kr(t,e,n){t.value!==null?n(e,t.value):ng(t,(s,i)=>{const r=new fe(e.toString()+"/"+s);Kr(i,r,n)})}function ng(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=10*1e3,ig=30*1e3,rg=5*60*1e3;class og{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new sg(e);const s=pa+(ig-pa)*Math.random();ds(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;qe(e,(i,r)=>{r>0&&xt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ds(this.reportStats_.bind(this),Math.floor(Math.random()*2*rg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function Bu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Mo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ko(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ct.ACK_USER_WRITE,this.source=Bu()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Ii(ce(),n,this.revert)}}else return A(te(this.path)===e,"operationForChild called for unrelated child."),new Ii(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return ne(this.path)?new Rs(this.source,ce()):new Rs(this.source,ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ct.OVERWRITE}operationForChild(e){return ne(this.path)?new yn(this.source,ce(),this.snap.getImmediateChild(e)):new yn(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ct.MERGE}operationForChild(e){if(ne(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new yn(this.source,ce(),n.value):new As(this.source,ce(),n)}else return A(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new As(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ag(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Km(o.childName,o.snapshotNode))}),ts(t,i,"child_removed",e,s,n),ts(t,i,"child_added",e,s,n),ts(t,i,"child_moved",r,s,n),ts(t,i,"child_changed",e,s,n),ts(t,i,"value",e,s,n),i}function ts(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>ug(t,l,a)),o.forEach(l=>{const a=cg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function cg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ug(t,e,n){if(e.childName==null||n.childName==null)throw Vn("Should only compare child_ events.");const s=new se(e.childName,e.snapshotNode),i=new se(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t,e){return{eventCache:t,serverCache:e}}function fs(t,e,n,s){return Ki(new Zt(e,n,s),t.serverCache)}function Hu(t,e,n,s){return Ki(t.eventCache,new Zt(e,n,s))}function Ti(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function bn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr;const hg=()=>(wr||(wr=new Ye(K_)),wr);class ye{static fromObject(e){let n=new ye(null);return qe(e,(s,i)=>{n=n.set(new fe(s),i)}),n}constructor(e,n=hg()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(ne(e))return null;{const s=te(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ve(e),n);return r!=null?{path:Ae(new fe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const n=te(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new ye(null)}}set(e,n){if(ne(e))return new ye(n,this.children);{const s=te(e),r=(this.children.get(s)||new ye(null)).set(ve(e),n),o=this.children.insert(s,r);return new ye(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new ye(null):new ye(null,this.children);{const n=te(e),s=this.children.get(n);if(s){const i=s.remove(ve(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ye(null):new ye(this.value,r)}else return this}}get(e){if(ne(e))return this.value;{const n=te(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(ne(e))return n;{const s=te(e),r=(this.children.get(s)||new ye(null)).setTree(ve(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ye(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ae(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ne(e))return null;{const r=te(e),o=this.children.get(r);return o?o.findOnPath_(ve(e),Ae(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,s){if(ne(e))return this;{this.value&&s(n,this.value);const i=te(e),r=this.children.get(i);return r?r.foreachOnPath_(ve(e),Ae(n,i),s):new ye(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ae(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.writeTree_=e}static empty(){return new dt(new ye(null))}}function ps(t,e,n){if(ne(e))return new dt(new ye(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=He(i,e);return r=r.updateChild(o,n),new dt(t.writeTree_.set(i,r))}else{const i=new ye(n),r=t.writeTree_.setTree(e,i);return new dt(r)}}}function _a(t,e,n){let s=t;return qe(n,(i,r)=>{s=ps(s,Ae(e,i),r)}),s}function ma(t,e){if(ne(e))return dt.empty();{const n=t.writeTree_.setTree(e,new ye(null));return new dt(n)}}function Qr(t,e){return wn(t,e)!=null}function wn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function ga(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(we,(s,i)=>{e.push(new se(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new se(s,i.value))}),e}function Gt(t,e){if(ne(e))return t;{const n=wn(t,e);return n!=null?new dt(new ye(n)):new dt(t.writeTree_.subtree(e))}}function Xr(t){return t.writeTree_.isEmpty()}function Hn(t,e){return Wu(ce(),t.writeTree_,e)}function Wu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(A(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Wu(Ae(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ae(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t,e){return zu(e,t)}function dg(t,e,n,s,i){A(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ps(t.visibleWrites,e,n)),t.lastWriteId=s}function fg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function pg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&_g(l,s.path)?i=!1:at(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return mg(t),!0;if(s.snap)t.visibleWrites=ma(t.visibleWrites,s.path);else{const l=s.children;qe(l,a=>{t.visibleWrites=ma(t.visibleWrites,Ae(s.path,a))})}return!0}else return!1}function _g(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(Ae(t.path,n),e))return!0;return!1}function mg(t){t.visibleWrites=Vu(t.allWrites,gg,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function gg(t){return t.visible}function Vu(t,e,n){let s=dt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)at(n,o)?(l=He(n,o),s=ps(s,l,r.snap)):at(o,n)&&(l=He(o,n),s=ps(s,ce(),r.snap.getChild(l)));else if(r.children){if(at(n,o))l=He(n,o),s=_a(s,l,r.children);else if(at(o,n))if(l=He(o,n),ne(l))s=_a(s,ce(),r.children);else{const a=Un(r.children,te(l));if(a){const c=a.getChild(ve(l));s=ps(s,ce(),c)}}}else throw Vn("WriteRecord should have .snap or .children")}}return s}function ju(t,e,n,s,i){if(!s&&!i){const r=wn(t.visibleWrites,e);if(r!=null)return r;{const o=Gt(t.visibleWrites,e);if(Xr(o))return n;if(n==null&&!Qr(o,ce()))return null;{const l=n||j.EMPTY_NODE;return Hn(o,l)}}}else{const r=Gt(t.visibleWrites,e);if(!i&&Xr(r))return n;if(!i&&n==null&&!Qr(r,ce()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(at(c.path,e)||at(e,c.path))},l=Vu(t.allWrites,o,e),a=n||j.EMPTY_NODE;return Hn(l,a)}}}function vg(t,e,n){let s=j.EMPTY_NODE;const i=wn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(we,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Gt(t.visibleWrites,e);return n.forEachChild(we,(o,l)=>{const a=Hn(Gt(r,new fe(o)),l);s=s.updateImmediateChild(o,a)}),ga(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Gt(t.visibleWrites,e);return ga(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function yg(t,e,n,s,i){A(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ae(e,n);if(Qr(t.visibleWrites,r))return null;{const o=Gt(t.visibleWrites,r);return Xr(o)?i.getChild(n):Hn(o,i.getChild(n))}}function bg(t,e,n,s){const i=Ae(e,n),r=wn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Gt(t.visibleWrites,i);return Hn(o,s.getNode().getImmediateChild(n))}else return null}function Cg(t,e){return wn(t.visibleWrites,e)}function wg(t,e,n,s,i,r,o){let l;const a=Gt(t.visibleWrites,e),c=wn(a,ce());if(c!=null)l=c;else if(n!=null)l=Hn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Eg(){return{visibleWrites:dt.empty(),allWrites:[],lastWriteId:-1}}function xi(t,e,n,s){return ju(t.writeTree,t.treePath,e,n,s)}function Lo(t,e){return vg(t.writeTree,t.treePath,e)}function va(t,e,n,s){return yg(t.writeTree,t.treePath,e,n,s)}function Ri(t,e){return Cg(t.writeTree,Ae(t.treePath,e))}function Sg(t,e,n,s,i,r){return wg(t.writeTree,t.treePath,e,n,s,i,r)}function $o(t,e,n){return bg(t.writeTree,t.treePath,e,n)}function Yu(t,e){return zu(Ae(t.treePath,e),t.writeTree)}function zu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ts(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Is(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Bn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ts(s,e.snapshotNode,i.oldSnap));else throw Vn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const qu=new Tg;class Fo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Zt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $o(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bn(this.viewCache_),r=Sg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){return{filter:t}}function Rg(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ag(t,e,n,s,i){const r=new Ig;let o,l;if(n.type===ct.OVERWRITE){const c=n;c.source.fromUser?o=Jr(t,e,c.path,c.snap,s,i,r):(A(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!ne(c.path),o=Ai(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===ct.MERGE){const c=n;c.source.fromUser?o=Dg(t,e,c.path,c.children,s,i,r):(A(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Zr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===ct.ACK_USER_WRITE){const c=n;c.revert?o=Mg(t,e,c.path,s,i,r):o=Pg(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ct.LISTEN_COMPLETE)o=Og(t,e,n.path,s,r);else throw Vn("Unknown operation type: "+n.type);const a=r.getChanges();return Ng(e,o,a),{viewCache:o,changes:a}}function Ng(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ti(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Fu(Ti(e)))}}function Gu(t,e,n,s,i,r){const o=e.eventCache;if(Ri(s,n)!=null)return e;{let l,a;if(ne(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=bn(e),u=c instanceof j?c:j.EMPTY_NODE,h=Lo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=xi(s,bn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=te(n);if(c===".priority"){A(Jt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=va(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ve(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=va(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=$o(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return fs(e,l,o.isFullyInitialized()||ne(n),t.filter.filtersNodes())}}function Ai(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ne(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=te(n);if(!a.isCompleteForPath(n)&&Jt(n)>1)return e;const g=ve(n),N=a.getNode().getImmediateChild(_).updateChild(g,s);_===".priority"?c=u.updatePriority(a.getNode(),N):c=u.updateChild(a.getNode(),_,N,g,qu,null)}const h=Hu(e,c,a.isFullyInitialized()||ne(n),u.filtersNodes()),d=new Fo(i,h,r);return Gu(t,h,n,i,d,l)}function Jr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Fo(i,e,r);if(ne(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=fs(e,c,!0,t.filter.filtersNodes());else{const h=te(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=fs(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ve(n),_=l.getNode().getImmediateChild(h);let g;if(ne(d))g=s;else{const m=u.getCompleteChild(h);m!=null?Ru(d)===".priority"&&m.getChild(Nu(d)).isEmpty()?g=m:g=m.updateChild(d,s):g=j.EMPTY_NODE}if(_.equals(g))a=e;else{const m=t.filter.updateChild(l.getNode(),h,g,d,u,o);a=fs(e,m,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ya(t,e){return t.eventCache.isCompleteForChild(e)}function Dg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=Ae(n,a);ya(e,te(u))&&(l=Jr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=Ae(n,a);ya(e,te(u))||(l=Jr(t,l,u,c,i,r,o))}),l}function ba(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;ne(n)?c=s:c=new ye(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),g=ba(t,_,d);a=Ai(t,a,new fe(h),g,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const g=e.serverCache.getNode().getImmediateChild(h),m=ba(t,g,d);a=Ai(t,a,new fe(h),m,i,r,o,l)}}),a}function Pg(t,e,n,s,i,r,o){if(Ri(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(ne(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ai(t,e,n,a.getNode().getChild(n),i,r,l,o);if(ne(n)){let c=new ye(null);return a.getNode().forEachChild(_n,(u,h)=>{c=c.set(new fe(u),h)}),Zr(t,e,n,c,i,r,l,o)}else return e}else{let c=new ye(null);return s.foreach((u,h)=>{const d=Ae(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Zr(t,e,n,c,i,r,l,o)}}function Og(t,e,n,s,i){const r=e.serverCache,o=Hu(e,r.getNode(),r.isFullyInitialized()||ne(n),r.isFiltered());return Gu(t,o,n,s,qu,i)}function Mg(t,e,n,s,i,r){let o;if(Ri(s,n)!=null)return e;{const l=new Fo(s,e,i),a=e.eventCache.getNode();let c;if(ne(n)||te(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=xi(s,bn(e));else{const h=e.serverCache.getNode();A(h instanceof j,"serverChildren would be complete if leaf node"),u=Lo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=te(n);let h=$o(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ve(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,j.EMPTY_NODE,ve(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xi(s,bn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ri(s,ce())!=null,fs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Po(s.getIndex()),r=Xm(s);this.processor_=xg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(j.EMPTY_NODE,l.getNode(),null),u=new Zt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Zt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ki(h,u),this.eventGenerator_=new lg(this.query_)}get query(){return this.query_}}function Lg(t){return t.viewCache_.serverCache.getNode()}function $g(t){return Ti(t.viewCache_)}function Fg(t,e){const n=bn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ne(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function Ca(t){return t.eventRegistrations_.length===0}function Ug(t,e){t.eventRegistrations_.push(e)}function wa(t,e,n){const s=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ea(t,e,n,s){e.type===ct.MERGE&&e.source.queryId!==null&&(A(bn(t.viewCache_),"We should always have a full cache before handling merges"),A(Ti(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Ag(t.processor_,i,e,n,s);return Rg(t.processor_,r.viewCache),A(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ku(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Bg(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(we,(r,o)=>{s.push(Bn(r,o))}),n.isFullyInitialized()&&s.push(Fu(n.getNode())),Ku(t,s,n.getNode(),e)}function Ku(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return ag(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni;class Qu{constructor(){this.views=new Map}}function Hg(t){A(!Ni,"__referenceConstructor has already been defined"),Ni=t}function Wg(){return A(Ni,"Reference.ts has not been loaded"),Ni}function Vg(t){return t.views.size===0}function Uo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return A(r!=null,"SyncTree gave us an op for an invalid query."),Ea(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ea(o,e,n,s));return r}}function Xu(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=xi(n,i?s:null),a=!1;l?a=!0:s instanceof j?(l=Lo(n,s),a=!1):(l=j.EMPTY_NODE,a=!1);const c=Ki(new Zt(l,a,!1),new Zt(s,i,!1));return new kg(e,c)}return o}function jg(t,e,n,s,i,r){const o=Xu(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ug(o,n),Bg(o,n)}function Yg(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=en(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(wa(c,n,s)),Ca(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(wa(a,n,s)),Ca(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!en(t)&&r.push(new(Wg())(e._repo,e._path)),{removed:r,events:o}}function Ju(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Kt(t,e){let n=null;for(const s of t.views.values())n=n||Fg(s,e);return n}function Zu(t,e){if(e._queryParams.loadsAllData())return Xi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function eh(t,e){return Zu(t,e)!=null}function en(t){return Xi(t)!=null}function Xi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di;function zg(t){A(!Di,"__referenceConstructor has already been defined"),Di=t}function qg(){return A(Di,"Reference.ts has not been loaded"),Di}let Gg=1;class Sa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ye(null),this.pendingWriteTree_=Eg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function th(t,e,n,s,i){return dg(t.pendingWriteTree_,e,n,s,i),i?Ws(t,new yn(Bu(),e,n)):[]}function fn(t,e,n=!1){const s=fg(t.pendingWriteTree_,e);if(pg(t.pendingWriteTree_,e)){let r=new ye(null);return s.snap!=null?r=r.set(ce(),!0):qe(s.children,o=>{r=r.set(new fe(o),!0)}),Ws(t,new Ii(s.path,r,n))}else return[]}function Hs(t,e,n){return Ws(t,new yn(Mo(),e,n))}function Kg(t,e,n){const s=ye.fromObject(n);return Ws(t,new As(Mo(),e,s))}function Qg(t,e){return Ws(t,new Rs(Mo(),e))}function Xg(t,e,n){const s=Ho(t,n);if(s){const i=Wo(s),r=i.path,o=i.queryId,l=He(r,e),a=new Rs(ko(o),l);return Vo(t,r,a)}else return[]}function Pi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||eh(o,e))){const a=Yg(o,e,n,s);Vg(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>en(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=ev(d);for(let g=0;g<_.length;++g){const m=_[g],N=m.query,x=rh(t,m);t.listenProvider_.startListening(_s(N),Ns(t,N),x.hashFn,x.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(_s(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Ji(d));t.listenProvider_.stopListening(_s(d),_)}))}tv(t,c)}return l}function nh(t,e,n,s){const i=Ho(t,s);if(i!=null){const r=Wo(i),o=r.path,l=r.queryId,a=He(o,e),c=new yn(ko(l),a,n);return Vo(t,o,c)}else return[]}function Jg(t,e,n,s){const i=Ho(t,s);if(i){const r=Wo(i),o=r.path,l=r.queryId,a=He(o,e),c=ye.fromObject(n),u=new As(ko(l),a,c);return Vo(t,o,u)}else return[]}function eo(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const g=He(d,i);r=r||Kt(_,g),o=o||en(_)});let l=t.syncPointTree_.get(i);l?(o=o||en(l),r=r||Kt(l,ce())):(l=new Qu,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,g)=>{const m=Kt(g,ce());m&&(r=r.updateImmediateChild(_,m))}));const c=eh(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ji(e);A(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=nv();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Qi(t.pendingWriteTree_,i);let h=jg(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Zu(l,e);h=h.concat(sv(t,e,d))}return h}function Bo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=He(o,e),c=Kt(l,a);if(c)return c});return ju(i,e,r,n,!0)}function Zg(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=He(c,n);s=s||Kt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Kt(i,ce()):(i=new Qu,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Zt(s,!0,!1):null,l=Qi(t.pendingWriteTree_,e._path),a=Xu(i,e,l,r?o.getNode():j.EMPTY_NODE,r);return $g(a)}function Ws(t,e){return sh(e,t.syncPointTree_,null,Qi(t.pendingWriteTree_,ce()))}function sh(t,e,n,s){if(ne(t.path))return ih(t,e,n,s);{const i=e.get(ce());n==null&&i!=null&&(n=Kt(i,ce()));let r=[];const o=te(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Yu(s,o);r=r.concat(sh(l,a,c,u))}return i&&(r=r.concat(Uo(i,t,s,n))),r}}function ih(t,e,n,s){const i=e.get(ce());n==null&&i!=null&&(n=Kt(i,ce()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Yu(s,o),u=t.operationForChild(o);u&&(r=r.concat(ih(u,l,a,c)))}),i&&(r=r.concat(Uo(i,t,s,n))),r}function rh(t,e){const n=e.query,s=Ns(t,n);return{hashFn:()=>(Lg(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Xg(t,n._path,s):Qg(t,n._path);{const r=J_(i,n);return Pi(t,n,null,r)}}}}function Ns(t,e){const n=Ji(e);return t.queryToTagMap.get(n)}function Ji(t){return t._path.toString()+"$"+t._queryIdentifier}function Ho(t,e){return t.tagToQueryMap.get(e)}function Wo(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function Vo(t,e,n){const s=t.syncPointTree_.get(e);A(s,"Missing sync point for query tag that we're tracking");const i=Qi(t.pendingWriteTree_,e);return Uo(s,n,i,null)}function ev(t){return t.fold((e,n,s)=>{if(n&&en(n))return[Xi(n)];{let i=[];return n&&(i=Ju(n)),qe(s,(r,o)=>{i=i.concat(o)}),i}})}function _s(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(qg())(t._repo,t._path):t}function tv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ji(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function nv(){return Gg++}function sv(t,e,n){const s=e._path,i=Ns(t,e),r=rh(t,n),o=t.listenProvider_.startListening(_s(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)A(!en(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!ne(c)&&u&&en(u))return[Xi(u).query];{let d=[];return u&&(d=d.concat(Ju(u).map(_=>_.query))),qe(h,(_,g)=>{d=d.concat(g)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(_s(u),Ns(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new jo(n)}node(){return this.node_}}class Yo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ae(this.path_,e);return new Yo(this.syncTree_,n)}node(){return Bo(this.syncTree_,this.path_)}}const iv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ia=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return rv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ov(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},rv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},ov=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&A(!1,"Unexpected increment value: "+s);const i=e.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},lv=function(t,e,n,s){return zo(e,new Yo(n,t),s)},oh=function(t,e,n){return zo(t,new jo(e),n)};function zo(t,e,n){const s=t.getPriority().val(),i=Ia(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ia(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new De(l,Oe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new De(i))),o.forEachChild(we,(l,a)=>{const c=zo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Go(t,e){let n=e instanceof fe?e:new fe(e),s=t,i=te(n);for(;i!==null;){const r=Un(s.node.children,i)||{children:{},childCount:0};s=new qo(i,s,r),n=ve(n),i=te(n)}return s}function zn(t){return t.node.value}function lh(t,e){t.node.value=e,to(t)}function ah(t){return t.node.childCount>0}function av(t){return zn(t)===void 0&&!ah(t)}function Zi(t,e){qe(t.node.children,(n,s)=>{e(new qo(n,t,s))})}function ch(t,e,n,s){n&&e(t),Zi(t,i=>{ch(i,e,!0)})}function cv(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Vs(t){return new fe(t.parent===null?t.name:Vs(t.parent)+"/"+t.name)}function to(t){t.parent!==null&&uv(t.parent,t.name,t)}function uv(t,e,n){const s=av(n),i=xt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,to(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,to(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=/[\[\].#$\/\u0000-\u001F\u007F]/,dv=/[\[\].#$\u0000-\u001F\u007F]/,Er=10*1024*1024,uh=function(t){return typeof t=="string"&&t.length!==0&&!hv.test(t)},hh=function(t){return typeof t=="string"&&t.length!==0&&!dv.test(t)},fv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hh(t)},Ta=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Eo(t)||t&&typeof t=="object"&&xt(t,".sv")},js=function(t,e,n,s){s&&e===void 0||Ko(Co(t,"value"),e,n)},Ko=function(t,e,n){const s=n instanceof fe?new Dm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+un(s));if(typeof e=="function")throw new Error(t+"contains a function "+un(s)+" with contents = "+e.toString());if(Eo(e))throw new Error(t+"contains "+e.toString()+" "+un(s));if(typeof e=="string"&&e.length>Er/3&&qi(e)>Er)throw new Error(t+"contains a string greater than "+Er+" utf8 bytes "+un(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(qe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!uh(o)))throw new Error(t+" contains an invalid key ("+o+") "+un(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Pm(s,o),Ko(t,l,s),Om(s)}),i&&r)throw new Error(t+' contains ".value" child '+un(s)+" in addition to actual children.")}},Qo=function(t,e,n,s){if(!hh(n))throw new Error(Co(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},pv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qo(t,e,n)},Xo=function(t,e){if(te(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},_v=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!uh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!fv(n))throw new Error(Co(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Jo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ro(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function dh(t,e,n){Jo(t,n),fh(t,s=>Ro(s,e))}function Tt(t,e,n){Jo(t,n),fh(t,s=>at(s,e)||at(e,s))}function fh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(gv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function gv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();hs&&Le("event: "+n.toString()),Yn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="repo_interrupt",yv=25;class bv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Si(),this.transactionQueueTree_=new qo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Cv(t,e,n){if(t.stats_=To(t.repoInfo_),t.forceRestClient_||nm())t.server_=new Ei(t.repoInfo_,(s,i,r,o)=>{xa(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ra(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Re(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ft(t.repoInfo_,e,(s,i,r,o)=>{xa(t,s,i,r,o)},s=>{Ra(t,s)},s=>{wv(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=lm(t.repoInfo_,()=>new og(t.stats_,t.server_)),t.infoData_=new tg,t.infoSyncTree_=new Sa({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Hs(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),el(t,"connected",!1),t.serverSyncTree_=new Sa({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Tt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ph(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zo(t){return iv({timestamp:ph(t)})}function xa(t,e,n,s,i){t.dataUpdateCount++;const r=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=mi(n,c=>Oe(c));o=Jg(t.serverSyncTree_,r,a,i)}else{const a=Oe(n);o=nh(t.serverSyncTree_,r,a,i)}else if(s){const a=mi(n,c=>Oe(c));o=Kg(t.serverSyncTree_,r,a)}else{const a=Oe(n);o=Hs(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=tr(t,r)),Tt(t.eventQueue_,l,o)}function Ra(t,e){el(t,"connected",e),e===!1&&Iv(t)}function wv(t,e){qe(e,(n,s)=>{el(t,n,s)})}function el(t,e,n){const s=new fe("/.info/"+e),i=Oe(n);t.infoData_.updateSnapshot(s,i);const r=Hs(t.infoSyncTree_,s,i);Tt(t.eventQueue_,s,r)}function _h(t){return t.nextWriteId_++}function Ev(t,e,n){const s=Zg(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Oe(i).withIndex(e._queryParams.getIndex());eo(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Hs(t.serverSyncTree_,e._path,r);else{const l=Ns(t.serverSyncTree_,e);o=nh(t.serverSyncTree_,e._path,r,l)}return Tt(t.eventQueue_,e._path,o),Pi(t.serverSyncTree_,e,n,null,!0),r},i=>(er(t,"get for query "+Re(e)+" failed: "+i),Promise.reject(new Error(i))))}function Sv(t,e,n,s,i){er(t,"set",{path:e.toString(),value:n,priority:s});const r=Zo(t),o=Oe(n,s),l=Bo(t.serverSyncTree_,e),a=oh(o,l,r),c=_h(t),u=th(t.serverSyncTree_,e,a,c,!0);Jo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const g=d==="ok";g||ze("set at "+e+" failed: "+d);const m=fn(t.serverSyncTree_,c,!g);Tt(t.eventQueue_,e,m),Rv(t,i,d,_)});const h=bh(t,e);tr(t,h),Tt(t.eventQueue_,h,[])}function Iv(t){er(t,"onDisconnectEvents");const e=Zo(t),n=Si();Kr(t.onDisconnect_,ce(),(i,r)=>{const o=lv(i,r,t.serverSyncTree_,e);Uu(n,i,o)});let s=[];Kr(n,ce(),(i,r)=>{s=s.concat(Hs(t.serverSyncTree_,i,r));const o=bh(t,i);tr(t,o)}),t.onDisconnect_=Si(),Tt(t.eventQueue_,ce(),s)}function Tv(t,e,n){let s;te(e._path)===".info"?s=eo(t.infoSyncTree_,e,n):s=eo(t.serverSyncTree_,e,n),dh(t.eventQueue_,e._path,s)}function Aa(t,e,n){let s;te(e._path)===".info"?s=Pi(t.infoSyncTree_,e,n):s=Pi(t.serverSyncTree_,e,n),dh(t.eventQueue_,e._path,s)}function xv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(vv)}function er(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function Rv(t,e,n,s){e&&Yn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function mh(t,e,n){return Bo(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function tl(t,e=t.transactionQueueTree_){if(e||nr(t,e),zn(e)){const n=vh(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Av(t,Vs(e),n)}else ah(e)&&Zi(e,n=>{tl(t,n)})}function Av(t,e,n){const s=n.map(c=>c.currentWriteId),i=mh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];A(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=He(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{er(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(fn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();nr(t,Go(t.transactionQueueTree_,e)),tl(t,t.transactionQueueTree_),Tt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Yn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ze("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}tr(t,e)}},o)}function tr(t,e){const n=gh(t,e),s=Vs(n),i=vh(t,n);return Nv(t,i,s),s}function Nv(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=He(n,a.path);let u=!1,h;if(A(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(fn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=yv)u=!0,h="maxretry",i=i.concat(fn(t.serverSyncTree_,a.currentWriteId,!0));else{const d=mh(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){Ko("transaction failed: Data returned ",_,a.path);let g=Oe(_);typeof _=="object"&&_!=null&&xt(_,".priority")||(g=g.updatePriority(d.getPriority()));const N=a.currentWriteId,x=Zo(t),U=oh(g,d,x);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=U,a.currentWriteId=_h(t),o.splice(o.indexOf(N),1),i=i.concat(th(t.serverSyncTree_,a.path,U,a.currentWriteId,a.applyLocally)),i=i.concat(fn(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(fn(t.serverSyncTree_,a.currentWriteId,!0))}Tt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}nr(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Yn(s[l]);tl(t,t.transactionQueueTree_)}function gh(t,e){let n,s=t.transactionQueueTree_;for(n=te(e);n!==null&&zn(s)===void 0;)s=Go(s,n),e=ve(e),n=te(e);return s}function vh(t,e){const n=[];return yh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function yh(t,e,n){const s=zn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Zi(e,i=>{yh(t,i,n)})}function nr(t,e){const n=zn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,lh(e,n.length>0?n:void 0)}Zi(e,s=>{nr(t,s)})}function bh(t,e){const n=Vs(gh(t,e)),s=Go(t.transactionQueueTree_,e);return cv(s,i=>{Sr(t,i)}),Sr(t,s),ch(s,i=>{Sr(t,i)}),n}function Sr(t,e){const n=zn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(fn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?lh(e,void 0):n.length=r+1,Tt(t.eventQueue_,Vs(e),i);for(let o=0;o<s.length;o++)Yn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Pv(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Na=function(t,e){const n=Ov(t),s=n.namespace;n.domain==="firebase.com"&&Bt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||q_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new yu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new fe(n.pathString)}},Ov=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Dv(t.substring(u,h)));const d=Pv(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Mv=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Da.charAt(n%64),n=Math.floor(n/64);A(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Da.charAt(e[i]);return A(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Re(this.snapshot.exportVal())}}class Lv{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ne(this._path)?null:Ru(this._path)}get ref(){return new Wt(this._repo,this._path)}get _queryIdentifier(){const e=fa(this._queryParams),n=So(e);return n==="{}"?"default":n}get _queryObject(){return fa(this._queryParams)}isEqual(e){if(e=rn(e),!(e instanceof qn))return!1;const n=this._repo===e._repo,s=Ro(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Nm(this._path)}}function $v(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function nl(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===_n){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==vn)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Xt)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===we){if(e!=null&&!Ta(e)||n!=null&&!Ta(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(A(t.getIndex()instanceof Do||t.getIndex()===$u,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function wh(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Wt extends qn{constructor(e,n){super(e,n,new Oo,!1)}get parent(){const e=Nu(this._path);return e===null?null:new Wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ds{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),s=Ps(this.ref,e);return new Ds(this._node.getChild(n),s,we)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ds(i,Ps(this.ref,s),we)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Pt(t,e){return t=rn(t),t._checkNotDeleted("ref"),e!==void 0?Ps(t._root,e):t._root}function Ps(t,e){return t=rn(t),te(t._path)===null?pv("child","path",e):Qo("child","path",e),new Wt(t._repo,Ae(t._path,e))}function Fv(t,e){t=rn(t),Xo("push",t._path),js("push",e,t._path,!0);const n=ph(t._repo),s=Mv(n),i=Ps(t,s),r=Ps(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Uv(t){return Xo("remove",t._path),$t(t,null)}function $t(t,e){t=rn(t),Xo("set",t._path),js("set",e,t._path,!1);const n=new zi;return Sv(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ir(t){t=rn(t);const e=new Ch(()=>{}),n=new sr(e);return Ev(t._repo,t,n).then(s=>new Ds(s,new Wt(t._repo,t._path),t._queryParams.getIndex()))}class sr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new kv("value",this,new Ds(e.snapshotNode,new Wt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lv(this,e,n):null}matches(e){return e instanceof sr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Bv(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{Aa(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Ch(n,r||void 0),l=new sr(o);return Tv(t._repo,t,l),()=>Aa(t._repo,t,l)}function sl(t,e,n,s){return Bv(t,"value",e,n,s)}class ir{}class Hv extends ir{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){js("endAt",this._value,e._path,!0);const n=Zm(e._queryParams,this._value,this._key);if(wh(n),nl(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new qn(e._repo,e._path,n,e._orderByCalled)}}class Wv extends ir{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){js("startAt",this._value,e._path,!0);const n=Jm(e._queryParams,this._value,this._key);if(wh(n),nl(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new qn(e._repo,e._path,n,e._orderByCalled)}}class Vv extends ir{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){$v(e,"orderByChild");const n=new fe(this._path);if(ne(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Do(n),i=eg(e._queryParams,s);return nl(i),new qn(e._repo,e._path,i,!0)}}function Tr(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Qo("orderByChild","path",t),new Vv(t)}class jv extends ir{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(js("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Hv(this._value,this._key)._apply(new Wv(this._value,this._key)._apply(e))}}function xr(t,e){return new jv(t,e)}function Rr(t,...e){let n=rn(t);for(const s of e)n=s._apply(n);return n}Hg(Wt);zg(Wt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="FIREBASE_DATABASE_EMULATOR_HOST",no={};let zv=!1;function qv(t,e,n,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=bo(r);t.repoInfo_=new yu(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function Gv(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Na(r,i),l=o.repoInfo,a;typeof process<"u"&&Kl&&(a=Kl[Yv]),a?(r=`http://${a}?ns=${l.namespace}`,o=Na(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new im(t.name,t.options,e);_v("Invalid Firebase Database URL",o),ne(o.path)||Bt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Qv(l,t,c,new sm(t,n));return new Xv(u,t)}function Kv(t,e){const n=no[e];(!n||n[t.key]!==t)&&Bt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),xv(t),delete n[t.key]}function Qv(t,e,n,s){let i=no[e.name];i||(i={},no[e.name]=i);let r=i[t.toURLString()];return r&&Bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new bv(t,zv,n,s),i[t.toURLString()]=r,r}class Xv{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Cv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0,Kc("Database",this._repo.repoInfo_.emulatorOptions!==null)),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wt(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Kv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bt("Cannot call "+e+" on a deleted database.")}}function Jv(t=N_(),e){const n=I_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=hp("database");s&&Zv(n,...s)}return n}function Zv(t,e,n,s={}){t=rn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&gi(s,r.repoInfo_.emulatorOptions))return;Bt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ti(ti.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:fp(s.mockUserToken,t.app.options.projectId);o=new ti(l)}bo(e)&&(dp(e),Kc("Database",!0)),qv(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t){H_(A_),yi(new ws("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Gv(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),kn(Ql,Xl,t),kn(Ql,Xl,"esm2017")}Ft.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ft.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ey();var ty="firebase",ny="11.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(ty,ny,"app");const sy={apiKey:"AIzaSyBEYS8UtnIdaYA4aZHsFCE3rnSya_DdS8o",authDomain:"yierbubu.firebaseapp.com",projectId:"yierbubu",storageBucket:"yierbubu.firebasestorage.app",messagingSenderId:"745521053033",appId:"1:745521053033:web:57602c1e935aa1cca811f8",measurementId:"G-7TF1KMZJBQ",databaseURL:"https://yierbubu-default-rtdb.asia-southeast1.firebasedatabase.app"},iy=nu(sy),Ot=Jv(iy),ry={class:"user-count-box"},oy={class:"count-text"},ly={__name:"index",setup(t){const e=Pt(Ot,"users"),n=re(0),s=re({opacity:0,position:"absolute",top:"70px",right:"0px",zIndex:"9999"}),i=re(null);sn(()=>{i.value=sl(e,x=>{x.exists()?(n.value=Object.keys(x.val()||{}).length,s.value.opacity=1):n.value=0})}),Wi(()=>{i.value&&i.value()});const r=re(!1),o=re(0),l=re(0),a=x=>x.touches?{clientX:x.touches[0].clientX,clientY:x.touches[0].clientY}:{clientX:x.clientX,clientY:x.clientY},c=()=>{document.body.style.overflow="hidden"},u=()=>{document.body.style.overflow=""},h=x=>{const{clientX:U,clientY:C}=a(x);r.value=!0;const L=x.currentTarget.getBoundingClientRect();o.value=U-L.left,l.value=C-L.top,s.value={...s.value,left:`${L.left}px`,right:"auto"},c(),document.addEventListener("mousemove",_),document.addEventListener("mouseup",m)},d=x=>{const{clientX:U,clientY:C}=a(x);r.value=!0;const L=x.currentTarget.getBoundingClientRect();o.value=U-L.left,l.value=C-L.top,s.value={...s.value,left:`${L.left}px`,right:"auto"},c(),document.addEventListener("touchmove",g),document.addEventListener("touchend",N)},_=x=>{if(r.value){const{clientX:U,clientY:C}=a(x);s.value.left=`${U-o.value}px`,s.value.top=`${C-l.value}px`}},g=x=>{if(r.value){const{clientX:U,clientY:C}=a(x);s.value.left=`${U-o.value}px`,s.value.top=`${C-l.value}px`}},m=()=>{r.value=!1,u(),document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",m)},N=()=>{r.value=!1,u(),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",N)};return(x,U)=>(z(),J("div",{class:"user-count-container",style:Ms(s.value),onMousedown:h,onTouchstart:d},[y("div",ry,[y("span",oy,"当前已有 "+Ce(n.value)+" 人访问",1)])],36))}},ay=ot(ly,[["__scopeId","data-v-f5bab605"]]),cy=""+new URL("yier_avatar-CSEOs6om.jpg",import.meta.url).href,uy=""+new URL("bubu_avatar-DEQ1y__y.jpg",import.meta.url).href,hy=""+new URL("card1-BjV9YNQd.png",import.meta.url).href,dy=""+new URL("card2-AYQs3wvw.png",import.meta.url).href,fy=""+new URL("yierbubu1-B23mzmrk.gif",import.meta.url).href,py=""+new URL("yierbubu2-B7bgCKGJ.gif",import.meta.url).href,_y=""+new URL("yierbubu3-CPNQMIDT.gif",import.meta.url).href,my=""+new URL("yierbubu4-CvyKPgHh.gif",import.meta.url).href,gy=""+new URL("yierbubu5-BShqPsnc.gif",import.meta.url).href,vy=""+new URL("yierbubu6-DT3n0tNy.gif",import.meta.url).href,yy=""+new URL("yierbubu7-QHzcuu4f.gif",import.meta.url).href,Eh=""+new URL("yierbubu8-R6jPVSrt.gif",import.meta.url).href,by=""+new URL("yierbubu9-CRF36ScZ.gif",import.meta.url).href,Cy=""+new URL("yierbubu10-DrkyPMO_.gif",import.meta.url).href,wy=""+new URL("yierbubu11-vewBH8We.gif",import.meta.url).href,Ey=""+new URL("yierbubu12-DlyaiZpM.gif",import.meta.url).href,Sy=""+new URL("yierbubu13-BNA4hEOo.gif",import.meta.url).href,Sh=""+new URL("yierRole-kStJEXR8.gif",import.meta.url).href,Iy=""+new URL("youke-D8Qhs-IN.jpeg",import.meta.url).href,Pa=[Sh,hy,dy,fy,py,_y,my,gy,vy,yy,Eh,by,Cy,wy,Ey,Sy],$n=[Sh,Eh,Iy],Ty={class:"index-body"},xy={class:"avatar"},Ry={class:"days-container"},Ay={class:"card_container"},Ny=["src"],Dy=2,Py={__name:"IndexBody",setup(t){const e=re(0);let n,s=0;const i=re([...Pa,...Pa]),r=re(null);let o=null;o=setInterval(()=>{Array.from({length:5}).forEach(()=>{var g;i.value.push(i.value[s]),(g=r.value[s])==null||g.remove(),s++,d.value-=120,c.value.style.transform=`translateX(-${d.value}px)`})},5e3);const l=()=>{const N=Math.abs(new Date-new Date("2023-12-07"));e.value=Math.ceil(N/(1e3*60*60*24))},a=Wn(()=>e.value.toString().split("")),c=re(null);let u,h=0;const d=re(0),_=()=>{u=setInterval(()=>{c.value&&(d.value+=Dy,d.value>=h&&(d.value=0),c.value.style.transform=`translateX(-${d.value}px)`)},16)};return sn(()=>{l(),n=setInterval(l,60*1e3),setTimeout(()=>{if(c.value){h=c.value.offsetWidth;const g=c.value.querySelector(".card1");if(g){const m=window.getComputedStyle(g);g.offsetWidth+parseInt(m.marginRight)}_()}},0)}),_c(()=>{clearInterval(n),clearInterval(u),clearInterval(o)}),(g,m)=>(z(),J(Ee,null,[m[5]||(m[5]=y("section",{class:"banner"},null,-1)),y("div",Ty,[y("div",xy,[m[2]||(m[2]=y("div",{class:"left container"},[y("img",{class:"img",src:cy,width:"84"}),y("div",{class:"img_name"},"王宇晴")],-1)),y("div",null,[m[1]||(m[1]=y("div",{class:"desc_container text"},"在一起",-1)),y("div",Ry,[(z(!0),J(Ee,null,ht(a.value,(N,x)=>(z(),J("div",{key:x,class:"digit-card"},Ce(N),1))),128)),m[0]||(m[0]=y("div",{class:"digit-card text"},"Days",-1))])]),m[3]||(m[3]=y("div",{class:"right container"},[y("img",{class:"img",src:uy,width:"84"}),y("div",{class:"img_name"},"刘云宇")],-1))]),y("div",Ay,[y("div",{class:"scroll-wrapper",ref_key:"scrollWrapper",ref:c},[(z(!0),J(Ee,null,ht(i.value,(N,x)=>(z(),J("img",{key:N+x,src:N,class:"card card1",ref_for:!0,ref_key:"scrollImgRef",ref:r},null,8,Ny))),128))],512)]),m[4]||(m[4]=df('<div class="content" data-v-987828b7><div class="about_us" data-v-987828b7><span class="card_title" data-v-987828b7>关于我们</span><div class="divider" data-v-987828b7></div><div class="about_us_content" data-v-987828b7><div data-v-987828b7>     一二布布相识于2017年12月湖里实验中学，在初一办公室见面，那时候一二带着陈伟诺小弟改英语作业，布布来数数学卷子，两天彼此对视，留下了深刻的印象，并成为了soulmate。但是好景不长......被一二的班主任发现了，一二布布被迫分开。 </div><div data-v-987828b7>     初中毕业后，一二布布来到不同的高中，布布去了最好的厦门一中，一二去了厦门仅此一所的松柏中学。中间虽然见了几次面，但最终抵不过时间的洪流，联系渐少，生活的轨迹似乎越行越远 。</div><div data-v-987828b7>     到了大学，醒悟的布布重新找到一二，互相诉说着这三年来各自的遭遇，在经历了这么多事情之后，两人决定再也不分开了。至此，一二和布布从soulmate变成lovers，开启了属于他们的爱情篇章...... </div></div></div></div>',1))])],64))}},Oy=ot(Py,[["__scopeId","data-v-987828b7"]]);function il(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ni={exports:{}},My=ni.exports,Oa;function ky(){return Oa||(Oa=1,function(t,e){(function(n,s){t.exports=s()})(My,function(){var n=1e3,s=6e4,i=36e5,r="millisecond",o="second",l="minute",a="hour",c="day",u="week",h="month",d="quarter",_="year",g="date",m="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(Y){var F=["th","st","nd","rd"],R=Y%100;return"["+Y+(F[(R-20)%10]||F[R]||F[0])+"]"}},C=function(Y,F,R){var O=String(Y);return!O||O.length>=F?Y:""+Array(F+1-O.length).join(R)+Y},b={s:C,z:function(Y){var F=-Y.utcOffset(),R=Math.abs(F),O=Math.floor(R/60),S=R%60;return(F<=0?"+":"-")+C(O,2,"0")+":"+C(S,2,"0")},m:function Y(F,R){if(F.date()<R.date())return-Y(R,F);var O=12*(R.year()-F.year())+(R.month()-F.month()),S=F.clone().add(O,h),W=R-S<0,K=F.clone().add(O+(W?-1:1),h);return+(-(O+(R-S)/(W?S-K:K-S))||0)},a:function(Y){return Y<0?Math.ceil(Y)||0:Math.floor(Y)},p:function(Y){return{M:h,y:_,w:u,d:c,D:g,h:a,m:l,s:o,ms:r,Q:d}[Y]||String(Y||"").toLowerCase().replace(/s$/,"")},u:function(Y){return Y===void 0}},L="en",M={};M[L]=U;var H="$isDayjsObject",ie=function(Y){return Y instanceof tt||!(!Y||!Y[H])},Z=function Y(F,R,O){var S;if(!F)return L;if(typeof F=="string"){var W=F.toLowerCase();M[W]&&(S=W),R&&(M[W]=R,S=W);var K=F.split("-");if(!S&&K.length>1)return Y(K[0])}else{var oe=F.name;M[oe]=F,S=oe}return!O&&S&&(L=S),S||!O&&L},q=function(Y,F){if(ie(Y))return Y.clone();var R=typeof F=="object"?F:{};return R.date=Y,R.args=arguments,new tt(R)},Q=b;Q.l=Z,Q.i=ie,Q.w=function(Y,F){return q(Y,{locale:F.$L,utc:F.$u,x:F.$x,$offset:F.$offset})};var tt=function(){function Y(R){this.$L=Z(R.locale,null,!0),this.parse(R),this.$x=this.$x||R.x||{},this[H]=!0}var F=Y.prototype;return F.parse=function(R){this.$d=function(O){var S=O.date,W=O.utc;if(S===null)return new Date(NaN);if(Q.u(S))return new Date;if(S instanceof Date)return new Date(S);if(typeof S=="string"&&!/Z$/i.test(S)){var K=S.match(N);if(K){var oe=K[2]-1||0,ae=(K[7]||"0").substring(0,3);return W?new Date(Date.UTC(K[1],oe,K[3]||1,K[4]||0,K[5]||0,K[6]||0,ae)):new Date(K[1],oe,K[3]||1,K[4]||0,K[5]||0,K[6]||0,ae)}}return new Date(S)}(R),this.init()},F.init=function(){var R=this.$d;this.$y=R.getFullYear(),this.$M=R.getMonth(),this.$D=R.getDate(),this.$W=R.getDay(),this.$H=R.getHours(),this.$m=R.getMinutes(),this.$s=R.getSeconds(),this.$ms=R.getMilliseconds()},F.$utils=function(){return Q},F.isValid=function(){return this.$d.toString()!==m},F.isSame=function(R,O){var S=q(R);return this.startOf(O)<=S&&S<=this.endOf(O)},F.isAfter=function(R,O){return q(R)<this.startOf(O)},F.isBefore=function(R,O){return this.endOf(O)<q(R)},F.$g=function(R,O,S){return Q.u(R)?this[O]:this.set(S,R)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(R,O){var S=this,W=!!Q.u(O)||O,K=Q.p(R),oe=function(ft,Ie){var At=Q.w(S.$u?Date.UTC(S.$y,Ie,ft):new Date(S.$y,Ie,ft),S);return W?At:At.endOf(c)},ae=function(ft,Ie){return Q.w(S.toDate()[ft].apply(S.toDate("s"),(W?[0,0,0,0]:[23,59,59,999]).slice(Ie)),S)},Se=this.$W,Ne=this.$M,Ve=this.$D,nt="set"+(this.$u?"UTC":"");switch(K){case _:return W?oe(1,0):oe(31,11);case h:return W?oe(1,Ne):oe(0,Ne+1);case u:var st=this.$locale().weekStart||0,Rt=(Se<st?Se+7:Se)-st;return oe(W?Ve-Rt:Ve+(6-Rt),Ne);case c:case g:return ae(nt+"Hours",0);case a:return ae(nt+"Minutes",1);case l:return ae(nt+"Seconds",2);case o:return ae(nt+"Milliseconds",3);default:return this.clone()}},F.endOf=function(R){return this.startOf(R,!1)},F.$set=function(R,O){var S,W=Q.p(R),K="set"+(this.$u?"UTC":""),oe=(S={},S[c]=K+"Date",S[g]=K+"Date",S[h]=K+"Month",S[_]=K+"FullYear",S[a]=K+"Hours",S[l]=K+"Minutes",S[o]=K+"Seconds",S[r]=K+"Milliseconds",S)[W],ae=W===c?this.$D+(O-this.$W):O;if(W===h||W===_){var Se=this.clone().set(g,1);Se.$d[oe](ae),Se.init(),this.$d=Se.set(g,Math.min(this.$D,Se.daysInMonth())).$d}else oe&&this.$d[oe](ae);return this.init(),this},F.set=function(R,O){return this.clone().$set(R,O)},F.get=function(R){return this[Q.p(R)]()},F.add=function(R,O){var S,W=this;R=Number(R);var K=Q.p(O),oe=function(Ne){var Ve=q(W);return Q.w(Ve.date(Ve.date()+Math.round(Ne*R)),W)};if(K===h)return this.set(h,this.$M+R);if(K===_)return this.set(_,this.$y+R);if(K===c)return oe(1);if(K===u)return oe(7);var ae=(S={},S[l]=s,S[a]=i,S[o]=n,S)[K]||1,Se=this.$d.getTime()+R*ae;return Q.w(Se,this)},F.subtract=function(R,O){return this.add(-1*R,O)},F.format=function(R){var O=this,S=this.$locale();if(!this.isValid())return S.invalidDate||m;var W=R||"YYYY-MM-DDTHH:mm:ssZ",K=Q.z(this),oe=this.$H,ae=this.$m,Se=this.$M,Ne=S.weekdays,Ve=S.months,nt=S.meridiem,st=function(Ie,At,f,p){return Ie&&(Ie[At]||Ie(O,W))||f[At].slice(0,p)},Rt=function(Ie){return Q.s(oe%12||12,Ie,"0")},ft=nt||function(Ie,At,f){var p=Ie<12?"AM":"PM";return f?p.toLowerCase():p};return W.replace(x,function(Ie,At){return At||function(f){switch(f){case"YY":return String(O.$y).slice(-2);case"YYYY":return Q.s(O.$y,4,"0");case"M":return Se+1;case"MM":return Q.s(Se+1,2,"0");case"MMM":return st(S.monthsShort,Se,Ve,3);case"MMMM":return st(Ve,Se);case"D":return O.$D;case"DD":return Q.s(O.$D,2,"0");case"d":return String(O.$W);case"dd":return st(S.weekdaysMin,O.$W,Ne,2);case"ddd":return st(S.weekdaysShort,O.$W,Ne,3);case"dddd":return Ne[O.$W];case"H":return String(oe);case"HH":return Q.s(oe,2,"0");case"h":return Rt(1);case"hh":return Rt(2);case"a":return ft(oe,ae,!0);case"A":return ft(oe,ae,!1);case"m":return String(ae);case"mm":return Q.s(ae,2,"0");case"s":return String(O.$s);case"ss":return Q.s(O.$s,2,"0");case"SSS":return Q.s(O.$ms,3,"0");case"Z":return K}return null}(Ie)||K.replace(":","")})},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(R,O,S){var W,K=this,oe=Q.p(O),ae=q(R),Se=(ae.utcOffset()-this.utcOffset())*s,Ne=this-ae,Ve=function(){return Q.m(K,ae)};switch(oe){case _:W=Ve()/12;break;case h:W=Ve();break;case d:W=Ve()/3;break;case u:W=(Ne-Se)/6048e5;break;case c:W=(Ne-Se)/864e5;break;case a:W=Ne/i;break;case l:W=Ne/s;break;case o:W=Ne/n;break;default:W=Ne}return S?W:Q.a(W)},F.daysInMonth=function(){return this.endOf(h).$D},F.$locale=function(){return M[this.$L]},F.locale=function(R,O){if(!R)return this.$L;var S=this.clone(),W=Z(R,O,!0);return W&&(S.$L=W),S},F.clone=function(){return Q.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},Y}(),Ge=tt.prototype;return q.prototype=Ge,[["$ms",r],["$s",o],["$m",l],["$H",a],["$W",c],["$M",h],["$y",_],["$D",g]].forEach(function(Y){Ge[Y[1]]=function(F){return this.$g(F,Y[0],Y[1])}}),q.extend=function(Y,F){return Y.$i||(Y(F,tt,q),Y.$i=!0),q},q.locale=Z,q.isDayjs=ie,q.unix=function(Y){return q(1e3*Y)},q.en=M[L],q.Ls=M,q.p={},q})}(ni)),ni.exports}var Ly=ky();const bt=il(Ly),$y={class:"app-container"},Fy={class:"form-group"},Uy={class:"form-group"},By={class:"form-group"},Hy={type:"submit",class:"btn primary-btn"},Wy={class:"memo-list"},Vy={class:"item-header"},jy={class:"item-meta"},Yy={class:"date"},zy={class:"countdown"},qy={class:"actions"},Gy=["onClick"],Ky=["onClick"],Qy={key:0,class:"empty-state"},Xy={__name:"MemoryDay",setup(t){const e=Pt(Ot,"memos"),n=re([]),s=Ui({id:null,name:"",date:"",type:"纪念日",backgroundColor:""}),i=re(""),r=re(!0),o=re(null),l=re(!1),a=Wn(()=>(n.value.forEach(C=>{C.backgroundColor||(C.backgroundColor=_())}),n.value.filter(C=>C.name.toLowerCase().includes(i.value.toLowerCase())))),c=C=>{const b=bt(C),L=bt();return b.diff(L,"day")},u=C=>{const b=c(C);return b>0?`${b}天后`:b===0?"今天！":`${-b}天前`},h=C=>bt(C).format("YYYY年MM月DD日"),d=C=>C>7?"countdown-normal":C>0?"countdown-warning":C===0?"countdown-today":"countdown-past",_=()=>{const C=["rgba(163, 217, 0, 0.3)","rgba(0, 163, 224, 0.3)","rgba(255, 184, 28, 0.3)","rgba(0, 166, 172, 0.3)","rgba(214, 0, 28, 0.3)","rgba(143, 195, 31, 0.3)","rgba(0, 153, 68, 0.3)"],b=Math.floor(Math.random()*C.length);return C[b]},g=async()=>{if(!(!s.name||!s.date))try{const C={id:Date.now(),name:s.name,date:s.date,type:s.type,days:c(s.date),backgroundColor:_()};n.value.push(C),await $t(e,n.value),U()}catch(C){o.value=C.message,console.error("添加失败:",C)}},m=C=>{const b=n.value[C];s.id=b.id,s.name=b.name,s.date=b.date,s.type=b.type,s.backgroundColor=b.backgroundColor,l.value=!0},N=async()=>{if(s.id)try{const C=n.value.findIndex(b=>b.id===s.id);C!==-1&&(n.value[C]={...n.value[C],name:s.name,date:s.date,type:s.type,days:c(s.date),backgroundColor:s.backgroundColor},await $t(e,n.value),U(),l.value=!1)}catch(C){o.value=C.message,console.error("更新失败:",C)}},x=async C=>{if(confirm("确定要删除这个纪念日吗？"))try{n.value=n.value.filter(b=>b.id!==C),await $t(e,n.value)}catch(b){o.value=b.message,console.error("删除失败:",b)}},U=()=>{s.id=null,s.name="",s.date="",s.type="纪念日",s.backgroundColor=""};return sn(()=>{try{sl(e,C=>{const b=C.val();n.value=b?Object.values(b):[],r.value=!1},C=>{o.value=C.message,r.value=!1,console.error("获取数据失败:",C)})}catch(C){o.value=C.message,r.value=!1,console.error("初始化失败:",C)}}),(C,b)=>(z(),J("div",$y,[y("form",{class:"memo-form",onSubmit:b[3]||(b[3]=jf(L=>l.value?N():g(),["prevent"]))},[y("div",Fy,[b[4]||(b[4]=y("label",null,"名称",-1)),wt(y("input",{type:"text","onUpdate:modelValue":b[0]||(b[0]=L=>s.name=L),placeholder:"请输入纪念日名称",required:""},null,512),[[Mn,s.name,void 0,{trim:!0}]])]),y("div",Uy,[b[5]||(b[5]=y("label",null,"日期",-1)),wt(y("input",{type:"date","onUpdate:modelValue":b[1]||(b[1]=L=>s.date=L),required:""},null,512),[[Mn,s.date]])]),y("div",By,[b[6]||(b[6]=y("label",null,"类型",-1)),wt(y("input",{type:"text","onUpdate:modelValue":b[2]||(b[2]=L=>s.type=L),placeholder:"请输入纪念类型",required:""},null,512),[[Mn,s.type,void 0,{trim:!0}]])]),y("button",Hy,Ce(l.value?"保存编辑":"添加纪念日"),1)],32),y("div",Wy,[(z(!0),J(Ee,null,ht(a.value,(L,M)=>(z(),J("div",{class:"memo-item",key:L.id},[y("div",Vy,[y("p",{class:"item-name",style:Ms({backgroundColor:L.backgroundColor})},Ce(L.name),5)]),y("div",jy,[y("span",{class:et(["type-tag",L.type])},Ce(L.type),3),y("span",Yy,Ce(h(L.date)),1)]),y("div",zy,[y("span",{class:et(["countdown-text",d(L.days)])},Ce(u(L.date)),3)]),y("div",qy,[y("button",{class:"btn edit-btn",onClick:H=>m(M)},b[7]||(b[7]=[y("span",{class:"icon-edit"},"编辑",-1)]),8,Gy),y("button",{class:"btn delete-btn",onClick:H=>x(L.id)},b[8]||(b[8]=[y("span",{class:"icon-delete"},"删除",-1)]),8,Ky)])]))),128)),n.value.length===0?(z(),J("div",Qy,b[9]||(b[9]=[y("p",null,"暂无纪念日，点击上方按钮添加",-1)]))):Et("",!0)])]))}},Jy=ot(Xy,[["__scopeId","data-v-2d71f74a"]]);var si={exports:{}},Zy=si.exports,Ma;function eb(){return Ma||(Ma=1,function(t,e){(function(n,s){t.exports=s()})(Zy,function(){var n={year:0,month:1,day:2,hour:3,minute:4,second:5},s={};return function(i,r,o){var l,a=function(d,_,g){g===void 0&&(g={});var m=new Date(d),N=function(x,U){U===void 0&&(U={});var C=U.timeZoneName||"short",b=x+"|"+C,L=s[b];return L||(L=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:x,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:C}),s[b]=L),L}(_,g);return N.formatToParts(m)},c=function(d,_){for(var g=a(d,_),m=[],N=0;N<g.length;N+=1){var x=g[N],U=x.type,C=x.value,b=n[U];b>=0&&(m[b]=parseInt(C,10))}var L=m[3],M=L===24?0:L,H=m[0]+"-"+m[1]+"-"+m[2]+" "+M+":"+m[4]+":"+m[5]+":000",ie=+d;return(o.utc(H).valueOf()-(ie-=ie%1e3))/6e4},u=r.prototype;u.tz=function(d,_){d===void 0&&(d=l);var g,m=this.utcOffset(),N=this.toDate(),x=N.toLocaleString("en-US",{timeZone:d}),U=Math.round((N-new Date(x))/1e3/60),C=15*-Math.round(N.getTimezoneOffset()/15)-U;if(!Number(C))g=this.utcOffset(0,_);else if(g=o(x,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(C,!0),_){var b=g.utcOffset();g=g.add(m-b,"minute")}return g.$x.$timezone=d,g},u.offsetName=function(d){var _=this.$x.$timezone||o.tz.guess(),g=a(this.valueOf(),_,{timeZoneName:d}).find(function(m){return m.type.toLowerCase()==="timezonename"});return g&&g.value};var h=u.startOf;u.startOf=function(d,_){if(!this.$x||!this.$x.$timezone)return h.call(this,d,_);var g=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return h.call(g,d,_).tz(this.$x.$timezone,!0)},o.tz=function(d,_,g){var m=g&&_,N=g||_||l,x=c(+o(),N);if(typeof d!="string")return o(d).tz(N);var U=function(M,H,ie){var Z=M-60*H*1e3,q=c(Z,ie);if(H===q)return[Z,H];var Q=c(Z-=60*(q-H)*1e3,ie);return q===Q?[Z,q]:[M-60*Math.min(q,Q)*1e3,Math.max(q,Q)]}(o.utc(d,m).valueOf(),x,N),C=U[0],b=U[1],L=o(C).utcOffset(b);return L.$x.$timezone=N,L},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(d){l=d}}})}(si)),si.exports}var tb=eb();const Ih=il(tb);var ii={exports:{}},nb=ii.exports,ka;function sb(){return ka||(ka=1,function(t,e){(function(n,s){t.exports=s()})(nb,function(){var n="minute",s=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(r,o,l){var a=o.prototype;l.utc=function(m){var N={date:m,utc:!0,args:arguments};return new o(N)},a.utc=function(m){var N=l(this.toDate(),{locale:this.$L,utc:!0});return m?N.add(this.utcOffset(),n):N},a.local=function(){return l(this.toDate(),{locale:this.$L,utc:!1})};var c=a.parse;a.parse=function(m){m.utc&&(this.$u=!0),this.$utils().u(m.$offset)||(this.$offset=m.$offset),c.call(this,m)};var u=a.init;a.init=function(){if(this.$u){var m=this.$d;this.$y=m.getUTCFullYear(),this.$M=m.getUTCMonth(),this.$D=m.getUTCDate(),this.$W=m.getUTCDay(),this.$H=m.getUTCHours(),this.$m=m.getUTCMinutes(),this.$s=m.getUTCSeconds(),this.$ms=m.getUTCMilliseconds()}else u.call(this)};var h=a.utcOffset;a.utcOffset=function(m,N){var x=this.$utils().u;if(x(m))return this.$u?0:x(this.$offset)?h.call(this):this.$offset;if(typeof m=="string"&&(m=function(L){L===void 0&&(L="");var M=L.match(s);if(!M)return null;var H=(""+M[0]).match(i)||["-",0,0],ie=H[0],Z=60*+H[1]+ +H[2];return Z===0?0:ie==="+"?Z:-Z}(m),m===null))return this;var U=Math.abs(m)<=16?60*m:m,C=this;if(N)return C.$offset=U,C.$u=m===0,C;if(m!==0){var b=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(C=this.local().add(U+b,n)).$offset=U,C.$x.$localOffset=b}else C=this.utc();return C};var d=a.format;a.format=function(m){var N=m||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,N)},a.valueOf=function(){var m=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*m},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var _=a.toDate;a.toDate=function(m){return m==="s"&&this.$offset?l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():_.call(this)};var g=a.diff;a.diff=function(m,N,x){if(m&&this.$u===m.$u)return g.call(this,m,N,x);var U=this.local(),C=l(m).local();return g.call(U,C,N,x)}}})}(ii)),ii.exports}var ib=sb();const Th=il(ib),rb={class:"tab-bar"},ob={__name:"TabBar",props:{currentTab:{type:String,default:"home"}},emits:["tabChange"],setup(t,{emit:e}){return(n,s)=>(z(),J("div",rb,[y("button",{onClick:s[0]||(s[0]=i=>n.$emit("tabChange","home")),class:et({active:t.currentTab==="home"})},"说说主页",2),y("button",{onClick:s[1]||(s[1]=i=>n.$emit("tabChange","stats")),class:et({active:t.currentTab==="stats"})},"统计分析",2)]))}},lb=ot(ob,[["__scopeId","data-v-bce7c543"]]),ab={class:"post-area"},cb={class:"post-card"},ub={class:"post-header"},hb=["src"],db={class:"post-info"},fb={class:"post-name"},pb={class:"post-time"},_b={class:"post-form"},mb={class:"post-actions"},gb={class:"image-upload"},vb={key:0,class:"image-preview"},yb={class:"image-grid"},bb=["src"],Cb={__name:"PostArea",props:{currentUser:{type:Object,required:!0},newPost:{type:Object,required:!0},showUpload:{type:Boolean,required:!0}},emits:["publishPost","handleImageUpload","showImageUpload"],setup(t,{emit:e}){const n=t,s=e,i=()=>{s("showImageUpload",!0)},r=()=>{s("publishPost",n.newPost)},o=l=>{s("handleImageUpload",l)};return(l,a)=>(z(),J("div",ab,[y("div",cb,[y("div",ub,[y("img",{src:t.currentUser.avatar,alt:"头像",class:"post-avatar"},null,8,hb),y("div",db,[y("div",fb,Ce(t.currentUser.name),1),y("span",pb,Ce(new Date().toLocaleString()),1)])]),y("div",_b,[wt(y("textarea",{"onUpdate:modelValue":a[0]||(a[0]=c=>t.newPost.content=c),placeholder:"今天有什么值得记录的事？",class:"post-textarea",onFocus:i},null,544),[[Mn,t.newPost.content]]),y("div",mb,[wt(y("div",gb,[y("input",{type:"file",id:"post-image",onChange:o,multiple:"",class:"hidden-input"},null,32),a[1]||(a[1]=y("label",{for:"post-image",class:"upload-btn"},[y("i",{class:"fa fa-image"}),$c(" 上传图片 ")],-1))],512),[[Wc,t.showUpload]]),y("button",{onClick:r,class:"publish-btn"},"发布")]),t.newPost.images.length?(z(),J("div",vb,[y("div",yb,[(z(!0),J(Ee,null,ht(t.newPost.images,c=>(z(),J("img",{src:c,alt:"预览",class:"preview-img",key:c},null,8,bb))),128))])])):Et("",!0)])])]))}},wb=ot(Cb,[["__scopeId","data-v-fc18fefb"]]),Eb={class:"feed-list"},Sb={class:"feed-header"},Ib=["src"],Tb={class:"feed-user-info"},xb={class:"feed-actions"},Rb={class:"feed-actions-group"},Ab=["onClick"],Nb=["onClick"],Db=["onClick"],Pb={class:"feed-content"},Ob={class:"feed-images"},Mb=["src"],kb={class:"feed-footer"},Lb={class:"comment-section"},$b=["onClick"],Fb={class:"comment-list"},Ub={class:"comment-user"},Bb={class:"comment-text"},Hb={class:"comment-input"},Wb=["onClick"],Vb={__name:"FeedList",props:{posts:{type:Array,required:!0},filteredPosts:{type:Array,required:!0},currentUser:{type:Object,required:!0}},emits:["editPost","deletePost","toggleForgiven","toggleComments","addComment"],setup(t,{emit:e}){bt.extend(Th),bt.extend(Ih),bt.tz.setDefault("Asia/Shanghai");const n=t,s=e,i={content:""},r=h=>bt.tz(h,"Asia/Shanghai").format("YYYY年MM月DD日 HH:MM"),o=h=>{s("editPost",h)},l=h=>{s("deletePost",h)},a=h=>{h.user.id===n.currentUser.id&&s("toggleForgiven",h)},c=h=>{s("toggleComments",h)},u=(h,d)=>{s("addComment",h,d),i.content=""};return(h,d)=>(z(),J("div",Eb,[(z(!0),J(Ee,null,ht(t.filteredPosts,_=>{var g;return z(),J("div",{class:"feed-card",key:_.id},[y("div",Sb,[y("img",{src:_.user.avatar,alt:"头像",class:"feed-avatar"},null,8,Ib),y("div",Tb,[y("div",null,Ce(_.user.name),1),y("span",null,Ce(r(_.timestamp)),1)]),y("div",xb,[y("div",Rb,[_.user.id===t.currentUser.id?(z(),J("button",{key:0,onClick:m=>o(_)},d[1]||(d[1]=[y("i",{class:"fa fa-pen"},null,-1)]),8,Ab)):Et("",!0),_.user.id===t.currentUser.id?(z(),J("button",{key:1,onClick:m=>l(_)},d[2]||(d[2]=[y("i",{class:"fa fa-trash"},null,-1)]),8,Nb)):Et("",!0)]),[1,2].includes(_.user.id)?(z(),J("div",{key:0,onClick:m=>a(_),class:et(_.forgiven?"forgiven-status forgiven":"forgiven-status unforgiven")},Ce(_.forgiven?"已原谅":"未原谅"),11,Db)):Et("",!0)])]),y("div",Pb,[y("p",null,Ce(_.content),1),y("div",Ob,[(z(!0),J(Ee,null,ht(_.images,m=>(z(),J("img",{src:m,alt:"动态图片",class:"feed-img",key:m},null,8,Mb))),128))])]),y("div",kb,[y("div",Lb,[y("button",{onClick:m=>c(_),class:"comment-button"},Ce(((g=_.comments)==null?void 0:g.length)||0)+"条留言，点击留言 ",9,$b),y("div",Fb,[(z(!0),J(Ee,null,ht(_.comments,(m,N)=>(z(),J("div",{class:"comment",key:N},[y("span",Ub,Ce(m.user.name)+":",1),y("span",Bb,Ce(m.content),1)]))),128)),wt(y("div",Hb,[wt(y("textarea",{"onUpdate:modelValue":d[0]||(d[0]=m=>i.content=m),placeholder:"留下你的评论...",class:"comment-textarea"},null,512),[[Mn,i.content]]),y("button",{onClick:m=>u(_.id,i),class:"comment-submit-button"},"发表",8,Wb)],512),[[Wc,_.showComments]])])])])])}),128))]))}},jb=ot(Vb,[["__scopeId","data-v-50f9a7e6"]]),Yb={class:"stats-container"},zb={class:"stats-table"},qb={__name:"StatsComponent",props:{posts:Array},setup(t){const e=t,n=Wn(()=>{const s={};return e.posts.forEach(i=>{const r=i.timestamp.split(" ")[0];s[r]||(s[r]={yier:!1,bubu:!1}),i.user.name==="一二"?s[r].yier=!0:i.user.name==="布布"&&(s[r].bubu=!0)}),s});return(s,i)=>(z(),J("div",Yb,[i[1]||(i[1]=y("h2",null,"统计分析",-1)),y("div",zb,[y("table",null,[i[0]||(i[0]=y("thead",null,[y("tr",null,[y("th",null,"日期"),y("th",null,"一二"),y("th",null,"布布")])],-1)),y("tbody",null,[(z(!0),J(Ee,null,ht(n.value,(r,o)=>(z(),J("tr",{key:o},[y("td",null,Ce(o),1),y("td",{class:et({active:r.yier})},null,2),y("td",{class:et({active:r.bubu})},null,2)]))),128))])])])]))}},Gb=ot(qb,[["__scopeId","data-v-152414fc"]]),Kb={class:"filter-container"},Qb={class:"filter-item"},Xb={class:"filter-item"},Jb=["value"],Zb={__name:"FilterComponent",props:{posts:Array},setup(t,{expose:e}){const n=re(""),s=re(""),i=re([]),r=t,o=()=>{s.value="",a()},l=Wn(()=>r.posts.map(c=>c.timestamp.split(" ")[0]).filter((c,u,h)=>h.indexOf(c)===u)),a=()=>{n.value?i.value=l.value.filter(c=>r.posts.some(u=>u.user.name===n.value&&u.timestamp.includes(c))):i.value=[...new Set(l.value)]};return Pn(()=>l.value,a,{immediate:!0}),e({selectedIdentity:n,selectedDate:s}),(c,u)=>(z(),J("div",Kb,[y("div",Qb,[u[3]||(u[3]=y("label",{for:"identity"},"身份筛选：",-1)),wt(y("select",{"onUpdate:modelValue":u[0]||(u[0]=h=>n.value=h),id:"identity",onChange:o},u[2]||(u[2]=[y("option",{value:""},"全部",-1),y("option",{value:"一二"},"一二",-1),y("option",{value:"布布"},"布布",-1)]),544),[[Ml,n.value]])]),y("div",Xb,[u[5]||(u[5]=y("label",{for:"date"},"时间筛选：",-1)),wt(y("select",{"onUpdate:modelValue":u[1]||(u[1]=h=>s.value=h),id:"date"},[u[4]||(u[4]=y("option",{value:""},"全部",-1)),(z(!0),J(Ee,null,ht(i.value,h=>(z(),J("option",{key:h,value:h},Ce(h),9,Jb))),128))],512),[[Ml,s.value]])])]))}},eC=ot(Zb,[["__scopeId","data-v-80c044ae"]]),tC={class:"app-container"},nC={class:"app-main"},sC={key:0},iC={key:1,class:"stats-area"},rC={__name:"index",setup(t){const e=re("home"),n=re({id:3,name:"访客",avatar:$n[2]}),s=[{id:1,name:"一二",avatar:$n[0]},{id:2,name:"布布",avatar:$n[1]}],i=re([]),r=re({content:"",images:[],originalId:null}),o=re(!1),l=re(null),a=re(null),c=Wn(()=>{var H,ie;let M=i.value;if((H=a.value)!=null&&H.selectedIdentity&&(M=M.filter(Z=>Z.user.name===a.value.selectedIdentity)),(ie=a.value)!=null&&ie.selectedDate){const Z=new Date(a.value.selectedDate);M=M.filter(q=>{const Q=new Date(q.timestamp);return Q.getFullYear()===Z.getFullYear()&&Q.getMonth()===Z.getMonth()&&Q.getDate()===Z.getDate()})}return M});bt.extend(Th),bt.extend(Ih),bt.tz.setDefault("Asia/Shanghai"),sn(()=>{sl(Pt(Ot,"posts"),H=>{const ie=H.val(),Z=ie?Object.values(ie).map(q=>(q.comments=q.comments?Object.values(q.comments):[],q)):[];console.log("获取动态数据:",Z),i.value=Z.reverse()},H=>{console.error("获取动态数据失败:",H)});const M=localStorage.getItem("YIERBUBU_ROLE");M==="yier"?n.value=s[0]:M==="bubu"&&(n.value=s[1]),n.value.name=localStorage.getItem("YIERBUBU_NAME")||"访客"});const u=M=>new Promise((H,ie)=>{const Z=new FileReader;Z.onloadend=()=>H(Z.result),Z.onerror=ie,Z.readAsDataURL(M)}),h=async M=>{const ie=await(await fetch(M)).arrayBuffer();return new Blob([ie],{type:"image/jpeg"})},d=async M=>{var Q,tt;if(!M.content&&!M.images.length){alert("请输入内容或上传图片");return}const H=await h(n.value.avatar),ie=await u(H),Z=!!M.originalId,q={id:Z?M.originalId:Date.now(),user:{...n.value,avatar:ie},content:M.content,images:M.images,comments:Z?((Q=i.value.find(Ge=>Ge.id===M.originalId))==null?void 0:Q.comments)||[]:[],timestamp:Z?new Date((tt=i.value.find(Ge=>Ge.id===M.originalId))==null?void 0:tt.timestamp).toLocaleString():new Date().toLocaleString(),forgiven:!1};try{Z?await $t(Pt(Ot,`posts/${q.originalId}`),q):await $t(Pt(Ot,`posts/${q.id}`),q),_(!0)}catch(Ge){console.error("发布动态失败:",Ge),alert("发布失败，请重试")}},_=(M=!1)=>{r.value.content="",r.value.images=[],r.value.originalId=null,o.value=!1,l.value=null},g=()=>{o.value=!o.value},m=M=>{const H=M.target.files;H&&(r.value.images=[],Array.from(H).forEach(ie=>{const Z=new FileReader;Z.onload=q=>{r.value.images.push(q.target.result)},Z.readAsDataURL(ie)}))},N=M=>{r.value.content=M.content,r.value.images=(M==null?void 0:M.images)??[],r.value.originalId=M.id,l.value={...M}},x=async M=>{if(confirm("确定要删除这条动态吗？"))try{await Uv(Pt(Ot,`posts/${M.id}`))}catch(H){console.error("删除动态失败:",H),alert("删除失败，请重试")}},U=async(M,H)=>{if(!H.content)return;const ie={user:n.value,content:H.content,timestamp:new Date().toLocaleString()};try{await $t(Pt(Ot,`posts/${M}/comments/${Date.now()}`),ie)}catch(Z){console.error("添加评论失败:",Z)}},C=M=>{M.showComments=!M.showComments},b=async M=>{try{await $t(Pt(Ot,`posts/${M.id}/forgiven`),!M.forgiven),M.forgiven=!M.forgiven,console.log(111,M),console.log("切换原谅状态成功:",c.value)}catch(H){console.error("切换原谅状态失败:",H)}},L=M=>{e.value=M};return(M,H)=>(z(),J("div",tC,[y("main",nC,[xe(lb,{currentTab:e.value,onTabChange:L},null,8,["currentTab"]),xe(eC,{ref_key:"filterComponent",ref:a,posts:i.value},null,8,["posts"]),e.value==="home"?(z(),J("div",sC,[xe(wb,{currentUser:n.value,newPost:r.value,showUpload:o.value,onPublishPost:d,onHandleImageUpload:m,onShowImageUpload:g},null,8,["currentUser","newPost","showUpload"]),xe(jb,{posts:i.value,filteredPosts:c.value,currentUser:n.value,onEditPost:N,onDeletePost:x,onToggleForgiven:b,onToggleComments:C,onAddComment:U},null,8,["posts","filteredPosts","currentUser"])])):(z(),J("div",iC,[xe(Gb,{posts:i.value},null,8,["posts"])]))])]))}},oC=ot(rC,[["__scopeId","data-v-97ad5964"]]),lC=["src"],aC={class:"name"},cC={class:"description"},uC={__name:"RoleCard",props:{role:Object,selectedRole:String},emits:["select"],setup(t,{emit:e}){const n=t,s=e,i=()=>{s("select",n.role.id)};return(r,o)=>(z(),J("div",{class:et(["role-card",[{selected:t.role.id===t.selectedRole}]]),onClick:i},[y("img",{src:t.role.icon,class:"icon",width:"36"},null,8,lC),y("div",aC,Ce(t.role.name),1),y("div",cC,Ce(t.role.description),1)],2))}},hC=ot(uC,[["__scopeId","data-v-e177fee1"]]),dC={key:0,class:"modal-overlay"},fC={class:"role-selection-modal"},pC={class:"modal-content"},_C={class:"role-cards"},mC={class:"username-input"},gC={key:0,class:"error-message"},vC=["disabled"],yC={__name:"RoleSelect",setup(t){const e=Pt(Ot,"users"),n=re(!1),s=re([{id:"yier",name:"一二",icon:$n[0],description:"公主专属身份"},{id:"bubu",name:"布布",icon:$n[1],description:"王子专属身份"},{id:"guest",name:"访客",icon:$n[2],description:"访客身份"}]),i=re(null),r=re(""),o=re(""),l=re(!1);sn(()=>{localStorage.getItem("yierbubu-role")&&(localStorage.removeItem("yierbubu-role"),localStorage.removeItem("yierbubu-role-time")),localStorage.getItem("YIERBUBU_ROLE")?n.value=!1:n.value=!0}),Pn(n,h=>{h?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")});const a=h=>{i.value=h,o.value=""},c=async()=>{if(!i.value)return"请选择一个身份";if(!r.value.trim())return"请输入用户名";if(i.value==="yier"||i.value==="bubu"){const _=Rr(e,Tr("role"),xr("yier")),g=await Ir(_);let m=0;g.exists()&&(m+=g.size);const N=Rr(e,Tr("role"),xr("bubu")),x=await Ir(N);if(x.exists()&&(m+=x.size),m>4)return"特殊角色数量已达上限，请选择其他身份"}const h=Rr(e,Tr("username"),xr(r.value));return(await Ir(h)).exists()?"该用户名已被使用，请选择其他用户名":null},u=async()=>{if(!l.value)try{l.value=!0,o.value="";const h=await c();if(h){o.value=h;return}localStorage.setItem("YIERBUBU_ROLE",i.value),localStorage.setItem("YIERBUBU_NAME",r.value);const d=Fv(e);await $t(d,{role:i.value,username:r.value,createdAt:new Date().toISOString()}),n.value=!1}catch(h){console.error("保存用户信息失败:",h),o.value="保存失败，请稍后再试"}finally{l.value=!1}};return(h,d)=>n.value?(z(),J("div",dC,[y("div",fC,[y("div",pC,[d[2]||(d[2]=y("h3",{class:"modal-title"},"请选择您的身份",-1)),y("div",_C,[(z(!0),J(Ee,null,ht(s.value,_=>(z(),cs(hC,{key:_.id,role:_,selectedRole:i.value,onSelect:a},null,8,["role","selectedRole"]))),128))]),y("div",mC,[d[1]||(d[1]=y("label",{for:"username"},"请输入您的用户名:",-1)),wt(y("input",{type:"text",id:"username","onUpdate:modelValue":d[0]||(d[0]=_=>r.value=_),placeholder:"请输入用户名"},null,512),[[Mn,r.value]])]),o.value?(z(),J("p",gC,Ce(o.value),1)):Et("",!0),y("button",{class:"confirm-button",onClick:u,disabled:l.value},Ce(l.value?"提交中...":"确定"),9,vC)])])])):Et("",!0)}},bC=ot(yC,[["__scopeId","data-v-14f50229"]]),CC={__name:"App",setup(t){const e=re(0);return Pn(e,n=>{localStorage.setItem("yierbubu-activeIndex",n)}),sn(()=>{e.value=Number(localStorage.getItem("yierbubu-activeIndex"))||0}),(n,s)=>(z(),J(Ee,null,[y("div",null,[xe(ep),xe(ay),xe(Jf,{activeIndex:e.value,"onUpdate:activeIndex":s[0]||(s[0]=i=>e.value=i)},null,8,["activeIndex"]),e.value===0?(z(),cs(Oy,{key:0})):Et("",!0),e.value===1?(z(),cs(oC,{key:1})):Et("",!0),e.value===2?(z(),cs(Jy,{key:2})):Et("",!0)]),xe(bC)],64))}};qf(CC).mount("#app");
