(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function zr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const pe={},En=[],bt=()=>{},ah=()=>!1,Ti=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),qr=t=>t.startsWith("onUpdate:"),We=Object.assign,Gr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ch=Object.prototype.hasOwnProperty,fe=(t,e)=>ch.call(t,e),Y=Array.isArray,wn=t=>Rs(t)==="[object Map]",xi=t=>Rs(t)==="[object Set]",Ko=t=>Rs(t)==="[object Date]",Z=t=>typeof t=="function",Re=t=>typeof t=="string",Ct=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",wa=t=>(Ee(t)||Z(t))&&Z(t.then)&&Z(t.catch),Sa=Object.prototype.toString,Rs=t=>Sa.call(t),uh=t=>Rs(t).slice(8,-1),Ia=t=>Rs(t)==="[object Object]",Yr=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,es=zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ri=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hh=/-(\w)/g,Vt=Ri(t=>t.replace(hh,(e,n)=>n?n.toUpperCase():"")),fh=/\B([A-Z])/g,pn=Ri(t=>t.replace(fh,"-$1").toLowerCase()),Ta=Ri(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yi=Ri(t=>t?`on${Ta(t)}`:""),$t=(t,e)=>!Object.is(t,e),js=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},xa=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Xs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qo;const Di=()=>Qo||(Qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ni(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Re(s)?mh(s):Ni(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Re(t)||Ee(t))return t}const dh=/;(?![^(]*\))/g,ph=/:([^]+)/,_h=/\/\*[^]*?\*\//g;function mh(t){const e={};return t.replace(_h,"").split(dh).forEach(n=>{if(n){const s=n.split(ph);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function rt(t){let e="";if(Re(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const s=rt(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yh=zr(gh);function Ra(t){return!!t||t===""}function vh(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ai(t[s],e[s]);return n}function Ai(t,e){if(t===e)return!0;let n=Ko(t),s=Ko(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ct(t),s=Ct(e),n||s)return t===e;if(n=Y(t),s=Y(e),n||s)return n&&s?vh(t,e):!1;if(n=Ee(t),s=Ee(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!Ai(t[o],e[o]))return!1}}return String(t)===String(e)}function bh(t,e){return t.findIndex(n=>Ai(n,e))}const Da=t=>!!(t&&t.__v_isRef===!0),xe=t=>Re(t)?t:t==null?"":Y(t)||Ee(t)&&(t.toString===Sa||!Z(t.toString))?Da(t)?xe(t.value):JSON.stringify(t,Na,2):String(t),Na=(t,e)=>Da(e)?Na(t,e.value):wn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ki(s,r)+" =>"]=i,n),{})}:xi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ki(n))}:Ct(e)?Ki(e):Ee(e)&&!Y(e)&&!Ia(e)?String(e):e,Ki=(t,e="")=>{var n;return Ct(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ze;class Ch{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ze,!e&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ze;try{return Ze=this,e()}finally{Ze=n}}}on(){Ze=this}off(){Ze=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Eh(){return Ze}let ge;const Qi=new WeakSet;class Aa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ze&&Ze.active&&Ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qi.has(this)&&(Qi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ma(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jo(this),Pa(this);const e=ge,n=ht;ge=this,ht=!0;try{return this.fn()}finally{ka(this),ge=e,ht=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jr(e);this.deps=this.depsTail=void 0,Jo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_r(this)&&this.run()}get dirty(){return _r(this)}}let Oa=0,ts,ns;function Ma(t,e=!1){if(t.flags|=8,e){t.next=ns,ns=t;return}t.next=ts,ts=t}function Kr(){Oa++}function Qr(){if(--Oa>0)return;if(ns){let e=ns;for(ns=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ts;){let e=ts;for(ts=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Pa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ka(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Jr(s),wh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function _r(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(La(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function La(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ps))return;t.globalVersion=ps;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!_r(t)){t.flags&=-3;return}const n=ge,s=ht;ge=t,ht=!0;try{Pa(t);const i=t.fn(t._value);(e.version===0||$t(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ge=n,ht=s,ka(t),t.flags&=-3}}function Jr(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Jr(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function wh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ht=!0;const Fa=[];function qt(){Fa.push(ht),ht=!1}function Gt(){const t=Fa.pop();ht=t===void 0?!0:t}function Jo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ge;ge=void 0;try{e()}finally{ge=n}}}let ps=0;class Sh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ge||!ht||ge===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ge)n=this.activeLink=new Sh(ge,this),ge.deps?(n.prevDep=ge.depsTail,ge.depsTail.nextDep=n,ge.depsTail=n):ge.deps=ge.depsTail=n,$a(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ge.depsTail,n.nextDep=void 0,ge.depsTail.nextDep=n,ge.depsTail=n,ge.deps===n&&(ge.deps=s)}return n}trigger(e){this.version++,ps++,this.notify(e)}notify(e){Kr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qr()}}}function $a(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)$a(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const mr=new WeakMap,on=Symbol(""),gr=Symbol(""),_s=Symbol("");function ke(t,e,n){if(ht&&ge){let s=mr.get(t);s||mr.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Xr),i.map=s,i.key=n),i.track()}}function xt(t,e,n,s,i,r){const o=mr.get(t);if(!o){ps++;return}const l=a=>{a&&a.trigger()};if(Kr(),e==="clear")o.forEach(l);else{const a=Y(t),c=a&&Yr(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,f)=>{(f==="length"||f===_s||!Ct(f)&&f>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(_s)),e){case"add":a?c&&l(o.get("length")):(l(o.get(on)),wn(t)&&l(o.get(gr)));break;case"delete":a||(l(o.get(on)),wn(t)&&l(o.get(gr)));break;case"set":wn(t)&&l(o.get(on));break}}Qr()}function gn(t){const e=he(t);return e===t?e:(ke(e,"iterate",_s),it(t)?e:e.map(Le))}function Oi(t){return ke(t=he(t),"iterate",_s),t}const Ih={__proto__:null,[Symbol.iterator](){return Ji(this,Symbol.iterator,Le)},concat(...t){return gn(this).concat(...t.map(e=>Y(e)?gn(e):e))},entries(){return Ji(this,"entries",t=>(t[1]=Le(t[1]),t))},every(t,e){return It(this,"every",t,e,void 0,arguments)},filter(t,e){return It(this,"filter",t,e,n=>n.map(Le),arguments)},find(t,e){return It(this,"find",t,e,Le,arguments)},findIndex(t,e){return It(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return It(this,"findLast",t,e,Le,arguments)},findLastIndex(t,e){return It(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return It(this,"forEach",t,e,void 0,arguments)},includes(...t){return Xi(this,"includes",t)},indexOf(...t){return Xi(this,"indexOf",t)},join(t){return gn(this).join(t)},lastIndexOf(...t){return Xi(this,"lastIndexOf",t)},map(t,e){return It(this,"map",t,e,void 0,arguments)},pop(){return qn(this,"pop")},push(...t){return qn(this,"push",t)},reduce(t,...e){return Xo(this,"reduce",t,e)},reduceRight(t,...e){return Xo(this,"reduceRight",t,e)},shift(){return qn(this,"shift")},some(t,e){return It(this,"some",t,e,void 0,arguments)},splice(...t){return qn(this,"splice",t)},toReversed(){return gn(this).toReversed()},toSorted(t){return gn(this).toSorted(t)},toSpliced(...t){return gn(this).toSpliced(...t)},unshift(...t){return qn(this,"unshift",t)},values(){return Ji(this,"values",Le)}};function Ji(t,e,n){const s=Oi(t),i=s[e]();return s!==t&&!it(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Th=Array.prototype;function It(t,e,n,s,i,r){const o=Oi(t),l=o!==t&&!it(t),a=o[e];if(a!==Th[e]){const h=a.apply(t,r);return l?Le(h):h}let c=n;o!==t&&(l?c=function(h,f){return n.call(this,Le(h),f,t)}:n.length>2&&(c=function(h,f){return n.call(this,h,f,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function Xo(t,e,n,s){const i=Oi(t);let r=n;return i!==t&&(it(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,Le(l),a,t)}),i[e](r,...s)}function Xi(t,e,n){const s=he(t);ke(s,"iterate",_s);const i=s[e](...n);return(i===-1||i===!1)&&to(n[0])?(n[0]=he(n[0]),s[e](...n)):i}function qn(t,e,n=[]){qt(),Kr();const s=he(t)[e].apply(t,n);return Qr(),Gt(),s}const xh=zr("__proto__,__v_isRef,__isVue"),Ua=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ct));function Rh(t){Ct(t)||(t=String(t));const e=he(this);return ke(e,"has",t),e.hasOwnProperty(t)}class Ba{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?$h:ja:r?Va:Wa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=Y(e);if(!i){let a;if(o&&(a=Ih[n]))return a;if(n==="hasOwnProperty")return Rh}const l=Reflect.get(e,n,$e(e)?e:s);return(Ct(n)?Ua.has(n):xh(n))||(i||ke(e,"get",n),r)?l:$e(l)?o&&Yr(n)?l:l.value:Ee(l)?i?za(l):Pn(l):l}}class Ha extends Ba{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=an(r);if(!it(s)&&!an(s)&&(r=he(r),s=he(s)),!Y(e)&&$e(r)&&!$e(s))return a?!1:(r.value=s,!0)}const o=Y(e)&&Yr(n)?Number(n)<e.length:fe(e,n),l=Reflect.set(e,n,s,$e(e)?e:i);return e===he(i)&&(o?$t(s,r)&&xt(e,"set",n,s):xt(e,"add",n,s)),l}deleteProperty(e,n){const s=fe(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&xt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ct(n)||!Ua.has(n))&&ke(e,"has",n),s}ownKeys(e){return ke(e,"iterate",Y(e)?"length":on),Reflect.ownKeys(e)}}class Dh extends Ba{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Nh=new Ha,Ah=new Dh,Oh=new Ha(!0);const yr=t=>t,$s=t=>Reflect.getPrototypeOf(t);function Mh(t,e,n){return function(...s){const i=this.__v_raw,r=he(i),o=wn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?yr:e?vr:Le;return!e&&ke(r,"iterate",a?gr:on),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Us(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ph(t,e){const n={get(i){const r=this.__v_raw,o=he(r),l=he(i);t||($t(i,l)&&ke(o,"get",i),ke(o,"get",l));const{has:a}=$s(o),c=e?yr:t?vr:Le;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&ke(he(i),"iterate",on),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=he(r),l=he(i);return t||($t(i,l)&&ke(o,"has",i),ke(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=he(l),c=e?yr:t?vr:Le;return!t&&ke(a,"iterate",on),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return We(n,t?{add:Us("add"),set:Us("set"),delete:Us("delete"),clear:Us("clear")}:{add(i){!e&&!it(i)&&!an(i)&&(i=he(i));const r=he(this);return $s(r).has.call(r,i)||(r.add(i),xt(r,"add",i,i)),this},set(i,r){!e&&!it(r)&&!an(r)&&(r=he(r));const o=he(this),{has:l,get:a}=$s(o);let c=l.call(o,i);c||(i=he(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?$t(r,u)&&xt(o,"set",i,r):xt(o,"add",i,r),this},delete(i){const r=he(this),{has:o,get:l}=$s(r);let a=o.call(r,i);a||(i=he(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&xt(r,"delete",i,void 0),c},clear(){const i=he(this),r=i.size!==0,o=i.clear();return r&&xt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Mh(i,t,e)}),n}function Zr(t,e){const n=Ph(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(fe(n,i)&&i in s?n:s,i,r)}const kh={get:Zr(!1,!1)},Lh={get:Zr(!1,!0)},Fh={get:Zr(!0,!1)};const Wa=new WeakMap,Va=new WeakMap,ja=new WeakMap,$h=new WeakMap;function Uh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bh(t){return t.__v_skip||!Object.isExtensible(t)?0:Uh(uh(t))}function Pn(t){return an(t)?t:eo(t,!1,Nh,kh,Wa)}function Hh(t){return eo(t,!1,Oh,Lh,Va)}function za(t){return eo(t,!0,Ah,Fh,ja)}function eo(t,e,n,s,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Bh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Sn(t){return an(t)?Sn(t.__v_raw):!!(t&&t.__v_isReactive)}function an(t){return!!(t&&t.__v_isReadonly)}function it(t){return!!(t&&t.__v_isShallow)}function to(t){return t?!!t.__v_raw:!1}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function Wh(t){return!fe(t,"__v_skip")&&Object.isExtensible(t)&&xa(t,"__v_skip",!0),t}const Le=t=>Ee(t)?Pn(t):t,vr=t=>Ee(t)?za(t):t;function $e(t){return t?t.__v_isRef===!0:!1}function be(t){return Vh(t,!1)}function Vh(t,e){return $e(t)?t:new jh(t,e)}class jh{constructor(e,n){this.dep=new Xr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:he(e),this._value=n?e:Le(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||it(e)||an(e);e=s?e:he(e),$t(e,n)&&(this._rawValue=e,this._value=s?e:Le(e),this.dep.trigger())}}function zh(t){return $e(t)?t.value:t}const qh={get:(t,e,n)=>e==="__v_raw"?t:zh(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return $e(i)&&!$e(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function qa(t){return Sn(t)?t:new Proxy(t,qh)}class Gh{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ps-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ge!==this)return Ma(this,!0),!0}get value(){const e=this.dep.track();return La(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Yh(t,e,n=!1){let s,i;return Z(t)?s=t:(s=t.get,i=t.set),new Gh(s,i,n)}const Bs={},Zs=new WeakMap;let Xt;function Kh(t,e=!1,n=Xt){if(n){let s=Zs.get(n);s||Zs.set(n,s=[]),s.push(t)}}function Qh(t,e,n=pe){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=$=>i?$:it($)||i===!1||i===0?Rt($,1):Rt($);let u,h,f,_,g=!1,m=!1;if($e(t)?(h=()=>t.value,g=it(t)):Sn(t)?(h=()=>c(t),g=!0):Y(t)?(m=!0,g=t.some($=>Sn($)||it($)),h=()=>t.map($=>{if($e($))return $.value;if(Sn($))return c($);if(Z($))return a?a($,2):$()})):Z(t)?e?h=a?()=>a(t,2):t:h=()=>{if(f){qt();try{f()}finally{Gt()}}const $=Xt;Xt=u;try{return a?a(t,3,[_]):t(_)}finally{Xt=$}}:h=bt,e&&i){const $=h,Q=i===!0?1/0:i;h=()=>Rt($(),Q)}const N=Eh(),U=()=>{u.stop(),N&&N.active&&Gr(N.effects,u)};if(r&&e){const $=e;e=(...Q)=>{$(...Q),U()}}let W=m?new Array(t.length).fill(Bs):Bs;const B=$=>{if(!(!(u.flags&1)||!u.dirty&&!$))if(e){const Q=u.run();if(i||g||(m?Q.some((k,P)=>$t(k,W[P])):$t(Q,W))){f&&f();const k=Xt;Xt=u;try{const P=[Q,W===Bs?void 0:m&&W[0]===Bs?[]:W,_];a?a(e,3,P):e(...P),W=Q}finally{Xt=k}}}else u.run()};return l&&l(B),u=new Aa(h),u.scheduler=o?()=>o(B,!1):B,_=$=>Kh($,!1,u),f=u.onStop=()=>{const $=Zs.get(u);if($){if(a)a($,4);else for(const Q of $)Q();Zs.delete(u)}},e?s?B(!0):W=u.run():o?o(B.bind(null,!0),!0):u.run(),U.pause=u.pause.bind(u),U.resume=u.resume.bind(u),U.stop=U,U}function Rt(t,e=1/0,n){if(e<=0||!Ee(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,$e(t))Rt(t.value,e,n);else if(Y(t))for(let s=0;s<t.length;s++)Rt(t[s],e,n);else if(xi(t)||wn(t))t.forEach(s=>{Rt(s,e,n)});else if(Ia(t)){for(const s in t)Rt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Rt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ds(t,e,n,s){try{return s?t(...s):t()}catch(i){Mi(i,e,n)}}function Et(t,e,n,s){if(Z(t)){const i=Ds(t,e,n,s);return i&&wa(i)&&i.catch(r=>{Mi(r,e,n)}),i}if(Y(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Et(t[r],e,n,s));return i}}function Mi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pe;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){qt(),Ds(r,null,10,[t,a,c]),Gt();return}}Jh(t,n,i,s,o)}function Jh(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Be=[];let yt=-1;const In=[];let Lt=null,vn=0;const Ga=Promise.resolve();let ei=null;function Ya(t){const e=ei||Ga;return t?e.then(this?t.bind(this):t):e}function Xh(t){let e=yt+1,n=Be.length;for(;e<n;){const s=e+n>>>1,i=Be[s],r=ms(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function no(t){if(!(t.flags&1)){const e=ms(t),n=Be[Be.length-1];!n||!(t.flags&2)&&e>=ms(n)?Be.push(t):Be.splice(Xh(e),0,t),t.flags|=1,Ka()}}function Ka(){ei||(ei=Ga.then(Ja))}function Zh(t){Y(t)?In.push(...t):Lt&&t.id===-1?Lt.splice(vn+1,0,t):t.flags&1||(In.push(t),t.flags|=1),Ka()}function Zo(t,e,n=yt+1){for(;n<Be.length;n++){const s=Be[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Be.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Qa(t){if(In.length){const e=[...new Set(In)].sort((n,s)=>ms(n)-ms(s));if(In.length=0,Lt){Lt.push(...e);return}for(Lt=e,vn=0;vn<Lt.length;vn++){const n=Lt[vn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Lt=null,vn=0}}const ms=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ja(t){try{for(yt=0;yt<Be.length;yt++){const e=Be[yt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ds(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;yt<Be.length;yt++){const e=Be[yt];e&&(e.flags&=-2)}yt=-1,Be.length=0,Qa(),ei=null,(Be.length||In.length)&&Ja()}}let st=null,Xa=null;function ti(t){const e=st;return st=t,Xa=t&&t.type.__scopeId||null,e}function ef(t,e=st,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&al(-1);const r=ti(e);let o;try{o=t(...i)}finally{ti(r),s._d&&al(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ot(t,e){if(st===null)return t;const n=Fi(st),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=pe]=e[i];r&&(Z(r)&&(r={mounted:r,updated:r}),r.deep&&Rt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function Qt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(qt(),Et(a,n,8,[t.el,l,t,e]),Gt())}}const tf=Symbol("_vte"),nf=t=>t.__isTeleport;function so(t,e){t.shapeFlag&6&&t.component?(t.transition=e,so(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Za(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ni(t,e,n,s,i=!1){if(Y(t)){t.forEach((g,m)=>ni(g,e&&(Y(e)?e[m]:e),n,s,i));return}if(ss(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ni(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Fi(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===pe?l.refs={}:l.refs,h=l.setupState,f=he(h),_=h===pe?()=>!1:g=>fe(f,g);if(c!=null&&c!==a&&(Re(c)?(u[c]=null,_(c)&&(h[c]=null)):$e(c)&&(c.value=null)),Z(a))Ds(a,l,12,[o,u]);else{const g=Re(a),m=$e(a);if(g||m){const N=()=>{if(t.f){const U=g?_(a)?h[a]:u[a]:a.value;i?Y(U)&&Gr(U,r):Y(U)?U.includes(r)||U.push(r):g?(u[a]=[r],_(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else g?(u[a]=o,_(a)&&(h[a]=o)):m&&(a.value=o,t.k&&(u[t.k]=o))};o?(N.id=-1,Xe(N,n)):N()}}}Di().requestIdleCallback;Di().cancelIdleCallback;const ss=t=>!!t.type.__asyncLoader,ec=t=>t.type.__isKeepAlive;function sf(t,e){tc(t,"a",e)}function rf(t,e){tc(t,"da",e)}function tc(t,e,n=He){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Pi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ec(i.parent.vnode)&&of(s,e,n,i),i=i.parent}}function of(t,e,n,s){const i=Pi(e,t,s,!0);io(()=>{Gr(s[e],i)},n)}function Pi(t,e,n=He,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{qt();const l=Ns(n),a=Et(e,n,t,o);return l(),Gt(),a});return s?i.unshift(r):i.push(r),r}}const Pt=t=>(e,n=He)=>{(!ys||t==="sp")&&Pi(t,(...s)=>e(...s),n)},lf=Pt("bm"),_n=Pt("m"),af=Pt("bu"),cf=Pt("u"),nc=Pt("bum"),io=Pt("um"),uf=Pt("sp"),hf=Pt("rtg"),ff=Pt("rtc");function df(t,e=He){Pi("ec",t,e)}const pf=Symbol.for("v-ndc");function at(t,e,n,s){let i;const r=n,o=Y(t);if(o||Re(t)){const l=o&&Sn(t);let a=!1;l&&(a=!it(t),t=Oi(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(a?Le(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const br=t=>t?Ic(t)?Fi(t):br(t.parent):null,is=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>br(t.parent),$root:t=>br(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ic(t),$forceUpdate:t=>t.f||(t.f=()=>{no(t.update)}),$nextTick:t=>t.n||(t.n=Ya.bind(t.proxy)),$watch:t=>Lf.bind(t)}),Zi=(t,e)=>t!==pe&&!t.__isScriptSetup&&fe(t,e),_f={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Zi(s,e))return o[e]=1,s[e];if(i!==pe&&fe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&fe(c,e))return o[e]=3,r[e];if(n!==pe&&fe(n,e))return o[e]=4,n[e];Cr&&(o[e]=0)}}const u=is[e];let h,f;if(u)return e==="$attrs"&&ke(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==pe&&fe(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,fe(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Zi(i,e)?(i[e]=n,!0):s!==pe&&fe(s,e)?(s[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==pe&&fe(t,o)||Zi(e,o)||(l=r[0])&&fe(l,o)||fe(s,o)||fe(is,o)||fe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function el(t){return Y(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cr=!0;function mf(t){const e=ic(t),n=t.proxy,s=t.ctx;Cr=!1,e.beforeCreate&&tl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:g,activated:m,deactivated:N,beforeDestroy:U,beforeUnmount:W,destroyed:B,unmounted:$,render:Q,renderTracked:k,renderTriggered:P,errorCaptured:X,serverPrefetch:H,expose:L,inheritAttrs:x,components:ue,directives:ae,filters:V}=e;if(c&&gf(c,s,null),o)for(const A in o){const E=o[A];Z(E)&&(s[A]=E.bind(n))}if(i){const A=i.call(n,n);Ee(A)&&(t.data=Pn(A))}if(Cr=!0,r)for(const A in r){const E=r[A],z=Z(E)?E.bind(n,n):Z(E.get)?E.get.bind(n,n):bt,K=!Z(E)&&Z(E.set)?E.set.bind(n):bt,re=Bn({get:z,set:K});Object.defineProperty(s,A,{enumerable:!0,configurable:!0,get:()=>re.value,set:le=>re.value=le})}if(l)for(const A in l)sc(l[A],s,n,A);if(a){const A=Z(a)?a.call(n):a;Reflect.ownKeys(A).forEach(E=>{wf(E,A[E])})}u&&tl(u,t,"c");function I(A,E){Y(E)?E.forEach(z=>A(z.bind(n))):E&&A(E.bind(n))}if(I(lf,h),I(_n,f),I(af,_),I(cf,g),I(sf,m),I(rf,N),I(df,X),I(ff,k),I(hf,P),I(nc,W),I(io,$),I(uf,H),Y(L))if(L.length){const A=t.exposed||(t.exposed={});L.forEach(E=>{Object.defineProperty(A,E,{get:()=>n[E],set:z=>n[E]=z})})}else t.exposed||(t.exposed={});Q&&t.render===bt&&(t.render=Q),x!=null&&(t.inheritAttrs=x),ue&&(t.components=ue),ae&&(t.directives=ae),H&&Za(t)}function gf(t,e,n=bt){Y(t)&&(t=Er(t));for(const s in t){const i=t[s];let r;Ee(i)?"default"in i?r=zs(i.from||s,i.default,!0):r=zs(i.from||s):r=zs(i),$e(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function tl(t,e,n){Et(Y(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function sc(t,e,n,s){let i=s.includes(".")?yc(n,s):()=>n[s];if(Re(t)){const r=e[t];Z(r)&&xn(i,r)}else if(Z(t))xn(i,t.bind(n));else if(Ee(t))if(Y(t))t.forEach(r=>sc(r,e,n,s));else{const r=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(r)&&xn(i,r,t)}}function ic(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>si(a,c,o,!0)),si(a,e,o)),Ee(e)&&r.set(e,a),a}function si(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&si(t,r,n,!0),i&&i.forEach(o=>si(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=yf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const yf={data:nl,props:sl,emits:sl,methods:Zn,computed:Zn,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:Zn,directives:Zn,watch:bf,provide:nl,inject:vf};function nl(t,e){return e?t?function(){return We(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function vf(t,e){return Zn(Er(t),Er(e))}function Er(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ue(t,e){return t?[...new Set([].concat(t,e))]:e}function Zn(t,e){return t?We(Object.create(null),t,e):e}function sl(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:We(Object.create(null),el(t),el(e??{})):e}function bf(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const s in e)n[s]=Ue(t[s],e[s]);return n}function rc(){return{app:null,config:{isNativeTag:ah,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cf=0;function Ef(t,e){return function(s,i=null){Z(s)||(s=We({},s)),i!=null&&!Ee(i)&&(i=null);const r=rc(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:Cf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:nd,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Z(u.install)?(o.add(u),u.install(c,...h)):Z(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!a){const _=c._ceVNode||Ge(s,i);return _.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(_,u,f),a=!0,c._container=u,u.__vue_app__=c,Fi(_.component)}},onUnmount(u){l.push(u)},unmount(){a&&(Et(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Tn;Tn=c;try{return u()}finally{Tn=h}}};return c}}let Tn=null;function wf(t,e){if(He){let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[t]=e}}function zs(t,e,n=!1){const s=He||st;if(s||Tn){const i=Tn?Tn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Z(e)?e.call(s&&s.proxy):e}}const oc={},lc=()=>Object.create(oc),ac=t=>Object.getPrototypeOf(t)===oc;function Sf(t,e,n,s=!1){const i={},r=lc();t.propsDefaults=Object.create(null),cc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Hh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function If(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=he(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ki(t.emitsOptions,f))continue;const _=e[f];if(a)if(fe(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const g=Vt(f);i[g]=wr(a,l,g,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{cc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!fe(e,h)&&((u=pn(h))===h||!fe(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=wr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!fe(e,h))&&(delete r[h],c=!0)}c&&xt(t.attrs,"set","")}function cc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(es(a))continue;const c=e[a];let u;i&&fe(i,u=Vt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:ki(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=he(n),c=l||pe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=wr(i,a,h,c[h],t,!fe(c,h))}}return o}function wr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=fe(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&Z(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ns(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===pn(n))&&(s=!0))}return s}const Tf=new WeakMap;function uc(t,e,n=!1){const s=n?Tf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!Z(t)){const u=h=>{a=!0;const[f,_]=uc(h,e,!0);We(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return Ee(t)&&s.set(t,En),En;if(Y(r))for(let u=0;u<r.length;u++){const h=Vt(r[u]);il(h)&&(o[h]=pe)}else if(r)for(const u in r){const h=Vt(u);if(il(h)){const f=r[u],_=o[h]=Y(f)||Z(f)?{type:f}:We({},f),g=_.type;let m=!1,N=!0;if(Y(g))for(let U=0;U<g.length;++U){const W=g[U],B=Z(W)&&W.name;if(B==="Boolean"){m=!0;break}else B==="String"&&(N=!1)}else m=Z(g)&&g.name==="Boolean";_[0]=m,_[1]=N,(m||fe(_,"default"))&&l.push(h)}}const c=[o,l];return Ee(t)&&s.set(t,c),c}function il(t){return t[0]!=="$"&&!es(t)}const hc=t=>t[0]==="_"||t==="$stable",ro=t=>Y(t)?t.map(vt):[vt(t)],xf=(t,e,n)=>{if(e._n)return e;const s=ef((...i)=>ro(e(...i)),n);return s._c=!1,s},fc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(hc(i))continue;const r=t[i];if(Z(r))e[i]=xf(i,r,s);else if(r!=null){const o=ro(r);e[i]=()=>o}}},dc=(t,e)=>{const n=ro(e);t.slots.default=()=>n},pc=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Rf=(t,e,n)=>{const s=t.slots=lc();if(t.vnode.shapeFlag&32){const i=e._;i?(pc(s,e,n),n&&xa(s,"_",i,!0)):fc(e,s)}else e&&dc(t,e)},Df=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=pe;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:pc(i,e,n):(r=!e.$stable,fc(e,i)),o=e}else e&&(dc(t,e),o={default:1});if(r)for(const l in i)!hc(l)&&o[l]==null&&delete i[l]},Xe=Vf;function Nf(t){return Af(t)}function Af(t,e){const n=Di();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=bt,insertStaticContent:g}=t,m=(d,p,v,w=null,b=null,C=null,M=void 0,D=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!Gn(d,p)&&(w=nt(d),le(d,b,C,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:S,ref:q,shapeFlag:F}=p;switch(S){case Li:N(d,p,v,w);break;case cn:U(d,p,v,w);break;case tr:d==null&&W(p,v,w,M);break;case we:ue(d,p,v,w,b,C,M,D,R);break;default:F&1?Q(d,p,v,w,b,C,M,D,R):F&6?ae(d,p,v,w,b,C,M,D,R):(F&64||F&128)&&S.process(d,p,v,w,b,C,M,D,R,Te)}q!=null&&b&&ni(q,d&&d.ref,C,p||d,!p)},N=(d,p,v,w)=>{if(d==null)s(p.el=l(p.children),v,w);else{const b=p.el=d.el;p.children!==d.children&&c(b,p.children)}},U=(d,p,v,w)=>{d==null?s(p.el=a(p.children||""),v,w):p.el=d.el},W=(d,p,v,w)=>{[d.el,d.anchor]=g(d.children,p,v,w,d.el,d.anchor)},B=({el:d,anchor:p},v,w)=>{let b;for(;d&&d!==p;)b=f(d),s(d,v,w),d=b;s(p,v,w)},$=({el:d,anchor:p})=>{let v;for(;d&&d!==p;)v=f(d),i(d),d=v;i(p)},Q=(d,p,v,w,b,C,M,D,R)=>{p.type==="svg"?M="svg":p.type==="math"&&(M="mathml"),d==null?k(p,v,w,b,C,M,D,R):H(d,p,b,C,M,D,R)},k=(d,p,v,w,b,C,M,D)=>{let R,S;const{props:q,shapeFlag:F,transition:j,dirs:J}=d;if(R=d.el=o(d.type,C,q&&q.is,q),F&8?u(R,d.children):F&16&&X(d.children,R,null,w,b,er(d,C),M,D),J&&Qt(d,null,w,"created"),P(R,d,d.scopeId,M,w),q){for(const me in q)me!=="value"&&!es(me)&&r(R,me,null,q[me],C,w);"value"in q&&r(R,"value",null,q.value,C),(S=q.onVnodeBeforeMount)&&gt(S,w,d)}J&&Qt(d,null,w,"beforeMount");const oe=Of(b,j);oe&&j.beforeEnter(R),s(R,p,v),((S=q&&q.onVnodeMounted)||oe||J)&&Xe(()=>{S&&gt(S,w,d),oe&&j.enter(R),J&&Qt(d,null,w,"mounted")},b)},P=(d,p,v,w,b)=>{if(v&&_(d,v),w)for(let C=0;C<w.length;C++)_(d,w[C]);if(b){let C=b.subTree;if(p===C||bc(C.type)&&(C.ssContent===p||C.ssFallback===p)){const M=b.vnode;P(d,M,M.scopeId,M.slotScopeIds,b.parent)}}},X=(d,p,v,w,b,C,M,D,R=0)=>{for(let S=R;S<d.length;S++){const q=d[S]=D?Ft(d[S]):vt(d[S]);m(null,q,p,v,w,b,C,M,D)}},H=(d,p,v,w,b,C,M)=>{const D=p.el=d.el;let{patchFlag:R,dynamicChildren:S,dirs:q}=p;R|=d.patchFlag&16;const F=d.props||pe,j=p.props||pe;let J;if(v&&Jt(v,!1),(J=j.onVnodeBeforeUpdate)&&gt(J,v,p,d),q&&Qt(p,d,v,"beforeUpdate"),v&&Jt(v,!0),(F.innerHTML&&j.innerHTML==null||F.textContent&&j.textContent==null)&&u(D,""),S?L(d.dynamicChildren,S,D,v,w,er(p,b),C):M||E(d,p,D,null,v,w,er(p,b),C,!1),R>0){if(R&16)x(D,F,j,v,b);else if(R&2&&F.class!==j.class&&r(D,"class",null,j.class,b),R&4&&r(D,"style",F.style,j.style,b),R&8){const oe=p.dynamicProps;for(let me=0;me<oe.length;me++){const de=oe[me],Qe=F[de],je=j[de];(je!==Qe||de==="value")&&r(D,de,Qe,je,b,v)}}R&1&&d.children!==p.children&&u(D,p.children)}else!M&&S==null&&x(D,F,j,v,b);((J=j.onVnodeUpdated)||q)&&Xe(()=>{J&&gt(J,v,p,d),q&&Qt(p,d,v,"updated")},w)},L=(d,p,v,w,b,C,M)=>{for(let D=0;D<p.length;D++){const R=d[D],S=p[D],q=R.el&&(R.type===we||!Gn(R,S)||R.shapeFlag&70)?h(R.el):v;m(R,S,q,null,w,b,C,M,!0)}},x=(d,p,v,w,b)=>{if(p!==v){if(p!==pe)for(const C in p)!es(C)&&!(C in v)&&r(d,C,p[C],null,b,w);for(const C in v){if(es(C))continue;const M=v[C],D=p[C];M!==D&&C!=="value"&&r(d,C,D,M,b,w)}"value"in v&&r(d,"value",p.value,v.value,b)}},ue=(d,p,v,w,b,C,M,D,R)=>{const S=p.el=d?d.el:l(""),q=p.anchor=d?d.anchor:l("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:J}=p;J&&(D=D?D.concat(J):J),d==null?(s(S,v,w),s(q,v,w),X(p.children||[],v,q,b,C,M,D,R)):F>0&&F&64&&j&&d.dynamicChildren?(L(d.dynamicChildren,j,v,b,C,M,D),(p.key!=null||b&&p===b.subTree)&&_c(d,p,!0)):E(d,p,v,q,b,C,M,D,R)},ae=(d,p,v,w,b,C,M,D,R)=>{p.slotScopeIds=D,d==null?p.shapeFlag&512?b.ctx.activate(p,v,w,M,R):V(p,v,w,b,C,M,R):O(d,p,R)},V=(d,p,v,w,b,C,M)=>{const D=d.component=Qf(d,w,b);if(ec(d)&&(D.ctx.renderer=Te),Jf(D,!1,M),D.asyncDep){if(b&&b.registerDep(D,I,M),!d.el){const R=D.subTree=Ge(cn);U(null,R,p,v)}}else I(D,d,p,v,b,C,M)},O=(d,p,v)=>{const w=p.component=d.component;if(Hf(d,p,v))if(w.asyncDep&&!w.asyncResolved){A(w,p,v);return}else w.next=p,w.update();else p.el=d.el,w.vnode=p},I=(d,p,v,w,b,C,M)=>{const D=()=>{if(d.isMounted){let{next:F,bu:j,u:J,parent:oe,vnode:me}=d;{const _t=mc(d);if(_t){F&&(F.el=me.el,A(d,F,M)),_t.asyncDep.then(()=>{d.isUnmounted||D()});return}}let de=F,Qe;Jt(d,!1),F?(F.el=me.el,A(d,F,M)):F=me,j&&js(j),(Qe=F.props&&F.props.onVnodeBeforeUpdate)&&gt(Qe,oe,F,me),Jt(d,!0);const je=ol(d),pt=d.subTree;d.subTree=je,m(pt,je,h(pt.el),nt(pt),d,b,C),F.el=je.el,de===null&&Wf(d,je.el),J&&Xe(J,b),(Qe=F.props&&F.props.onVnodeUpdated)&&Xe(()=>gt(Qe,oe,F,me),b)}else{let F;const{el:j,props:J}=p,{bm:oe,m:me,parent:de,root:Qe,type:je}=d,pt=ss(p);Jt(d,!1),oe&&js(oe),!pt&&(F=J&&J.onVnodeBeforeMount)&&gt(F,de,p),Jt(d,!0);{Qe.ce&&Qe.ce._injectChildStyle(je);const _t=d.subTree=ol(d);m(null,_t,v,w,d,b,C),p.el=_t.el}if(me&&Xe(me,b),!pt&&(F=J&&J.onVnodeMounted)){const _t=p;Xe(()=>gt(F,de,_t),b)}(p.shapeFlag&256||de&&ss(de.vnode)&&de.vnode.shapeFlag&256)&&d.a&&Xe(d.a,b),d.isMounted=!0,p=v=w=null}};d.scope.on();const R=d.effect=new Aa(D);d.scope.off();const S=d.update=R.run.bind(R),q=d.job=R.runIfDirty.bind(R);q.i=d,q.id=d.uid,R.scheduler=()=>no(q),Jt(d,!0),S()},A=(d,p,v)=>{p.component=d;const w=d.vnode.props;d.vnode=p,d.next=null,If(d,p.props,w,v),Df(d,p.children,v),qt(),Zo(d),Gt()},E=(d,p,v,w,b,C,M,D,R=!1)=>{const S=d&&d.children,q=d?d.shapeFlag:0,F=p.children,{patchFlag:j,shapeFlag:J}=p;if(j>0){if(j&128){K(S,F,v,w,b,C,M,D,R);return}else if(j&256){z(S,F,v,w,b,C,M,D,R);return}}J&8?(q&16&&tt(S,b,C),F!==S&&u(v,F)):q&16?J&16?K(S,F,v,w,b,C,M,D,R):tt(S,b,C,!0):(q&8&&u(v,""),J&16&&X(F,v,w,b,C,M,D,R))},z=(d,p,v,w,b,C,M,D,R)=>{d=d||En,p=p||En;const S=d.length,q=p.length,F=Math.min(S,q);let j;for(j=0;j<F;j++){const J=p[j]=R?Ft(p[j]):vt(p[j]);m(d[j],J,v,null,b,C,M,D,R)}S>q?tt(d,b,C,!0,!1,F):X(p,v,w,b,C,M,D,R,F)},K=(d,p,v,w,b,C,M,D,R)=>{let S=0;const q=p.length;let F=d.length-1,j=q-1;for(;S<=F&&S<=j;){const J=d[S],oe=p[S]=R?Ft(p[S]):vt(p[S]);if(Gn(J,oe))m(J,oe,v,null,b,C,M,D,R);else break;S++}for(;S<=F&&S<=j;){const J=d[F],oe=p[j]=R?Ft(p[j]):vt(p[j]);if(Gn(J,oe))m(J,oe,v,null,b,C,M,D,R);else break;F--,j--}if(S>F){if(S<=j){const J=j+1,oe=J<q?p[J].el:w;for(;S<=j;)m(null,p[S]=R?Ft(p[S]):vt(p[S]),v,oe,b,C,M,D,R),S++}}else if(S>j)for(;S<=F;)le(d[S],b,C,!0),S++;else{const J=S,oe=S,me=new Map;for(S=oe;S<=j;S++){const Je=p[S]=R?Ft(p[S]):vt(p[S]);Je.key!=null&&me.set(Je.key,S)}let de,Qe=0;const je=j-oe+1;let pt=!1,_t=0;const zn=new Array(je);for(S=0;S<je;S++)zn[S]=0;for(S=J;S<=F;S++){const Je=d[S];if(Qe>=je){le(Je,b,C,!0);continue}let mt;if(Je.key!=null)mt=me.get(Je.key);else for(de=oe;de<=j;de++)if(zn[de-oe]===0&&Gn(Je,p[de])){mt=de;break}mt===void 0?le(Je,b,C,!0):(zn[mt-oe]=S+1,mt>=_t?_t=mt:pt=!0,m(Je,p[mt],v,null,b,C,M,D,R),Qe++)}const Go=pt?Mf(zn):En;for(de=Go.length-1,S=je-1;S>=0;S--){const Je=oe+S,mt=p[Je],Yo=Je+1<q?p[Je+1].el:w;zn[S]===0?m(null,mt,v,Yo,b,C,M,D,R):pt&&(de<0||S!==Go[de]?re(mt,v,Yo,2):de--)}}},re=(d,p,v,w,b=null)=>{const{el:C,type:M,transition:D,children:R,shapeFlag:S}=d;if(S&6){re(d.component.subTree,p,v,w);return}if(S&128){d.suspense.move(p,v,w);return}if(S&64){M.move(d,p,v,Te);return}if(M===we){s(C,p,v);for(let F=0;F<R.length;F++)re(R[F],p,v,w);s(d.anchor,p,v);return}if(M===tr){B(d,p,v);return}if(w!==2&&S&1&&D)if(w===0)D.beforeEnter(C),s(C,p,v),Xe(()=>D.enter(C),b);else{const{leave:F,delayLeave:j,afterLeave:J}=D,oe=()=>s(C,p,v),me=()=>{F(C,()=>{oe(),J&&J()})};j?j(C,oe,me):me()}else s(C,p,v)},le=(d,p,v,w=!1,b=!1)=>{const{type:C,props:M,ref:D,children:R,dynamicChildren:S,shapeFlag:q,patchFlag:F,dirs:j,cacheIndex:J}=d;if(F===-2&&(b=!1),D!=null&&ni(D,null,v,d,!0),J!=null&&(p.renderCache[J]=void 0),q&256){p.ctx.deactivate(d);return}const oe=q&1&&j,me=!ss(d);let de;if(me&&(de=M&&M.onVnodeBeforeUnmount)&&gt(de,p,d),q&6)Ve(d.component,v,w);else{if(q&128){d.suspense.unmount(v,w);return}oe&&Qt(d,null,p,"beforeUnmount"),q&64?d.type.remove(d,p,v,Te,w):S&&!S.hasOnce&&(C!==we||F>0&&F&64)?tt(S,p,v,!1,!0):(C===we&&F&384||!b&&q&16)&&tt(R,p,v),w&&Ie(d)}(me&&(de=M&&M.onVnodeUnmounted)||oe)&&Xe(()=>{de&&gt(de,p,d),oe&&Qt(d,null,p,"unmounted")},v)},Ie=d=>{const{type:p,el:v,anchor:w,transition:b}=d;if(p===we){Ne(v,w);return}if(p===tr){$(d);return}const C=()=>{i(v),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:M,delayLeave:D}=b,R=()=>M(v,C);D?D(d.el,C,R):R()}else C()},Ne=(d,p)=>{let v;for(;d!==p;)v=f(d),i(d),d=v;i(p)},Ve=(d,p,v)=>{const{bum:w,scope:b,job:C,subTree:M,um:D,m:R,a:S}=d;rl(R),rl(S),w&&js(w),b.stop(),C&&(C.flags|=8,le(M,d,p,v)),D&&Xe(D,p),Xe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},tt=(d,p,v,w=!1,b=!1,C=0)=>{for(let M=C;M<d.length;M++)le(d[M],p,v,w,b)},nt=d=>{if(d.shapeFlag&6)return nt(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=f(d.anchor||d.el),v=p&&p[tf];return v?f(v):p};let wt=!1;const dt=(d,p,v)=>{d==null?p._vnode&&le(p._vnode,null,null,!0):m(p._vnode||null,d,p,null,null,null,v),p._vnode=d,wt||(wt=!0,Zo(),Qa(),wt=!1)},Te={p:m,um:le,m:re,r:Ie,mt:V,mc:X,pc:E,pbc:L,n:nt,o:t};return{render:dt,hydrate:void 0,createApp:Ef(dt)}}function er({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Jt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Of(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function _c(t,e,n=!1){const s=t.children,i=e.children;if(Y(s)&&Y(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Ft(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&_c(o,l)),l.type===Li&&(l.el=o.el)}}function Mf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function mc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mc(e)}function rl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Pf=Symbol.for("v-scx"),kf=()=>zs(Pf);function xn(t,e,n){return gc(t,e,n)}function gc(t,e,n=pe){const{immediate:s,deep:i,flush:r,once:o}=n,l=We({},n),a=e&&s||!e&&r!=="post";let c;if(ys){if(r==="sync"){const _=kf();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=bt,_.resume=bt,_.pause=bt,_}}const u=He;l.call=(_,g,m)=>Et(_,u,g,m);let h=!1;r==="post"?l.scheduler=_=>{Xe(_,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,g)=>{g?_():no(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const f=Qh(t,e,l);return ys&&(c?c.push(f):a&&f()),f}function Lf(t,e,n){const s=this.proxy,i=Re(t)?t.includes(".")?yc(s,t):()=>s[t]:t.bind(s,s);let r;Z(e)?r=e:(r=e.handler,n=e);const o=Ns(this),l=gc(i,r.bind(s),n);return o(),l}function yc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Ff=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Vt(e)}Modifiers`]||t[`${pn(e)}Modifiers`];function $f(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let i=n;const r=e.startsWith("update:"),o=r&&Ff(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>Re(u)?u.trim():u)),o.number&&(i=n.map(Xs)));let l,a=s[l=Yi(e)]||s[l=Yi(Vt(e))];!a&&r&&(a=s[l=Yi(pn(e))]),a&&Et(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Et(c,t,6,i)}}function vc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!Z(t)){const a=c=>{const u=vc(c,e,!0);u&&(l=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(Ee(t)&&s.set(t,null),null):(Y(r)?r.forEach(a=>o[a]=null):We(o,r),Ee(t)&&s.set(t,o),o)}function ki(t,e){return!t||!Ti(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,pn(e))||fe(t,e))}function ol(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:f,setupState:_,ctx:g,inheritAttrs:m}=t,N=ti(t);let U,W;try{if(n.shapeFlag&4){const $=i||s,Q=$;U=vt(c.call(Q,$,u,h,_,f,g)),W=l}else{const $=e;U=vt($.length>1?$(h,{attrs:l,slots:o,emit:a}):$(h,null)),W=e.props?l:Uf(l)}}catch($){rs.length=0,Mi($,t,1),U=Ge(cn)}let B=U;if(W&&m!==!1){const $=Object.keys(W),{shapeFlag:Q}=B;$.length&&Q&7&&(r&&$.some(qr)&&(W=Bf(W,r)),B=kn(B,W,!1,!0))}return n.dirs&&(B=kn(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&so(B,n.transition),U=B,ti(N),U}const Uf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ti(n))&&((e||(e={}))[n]=t[n]);return e},Bf=(t,e)=>{const n={};for(const s in t)(!qr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Hf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?ll(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ki(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ll(s,o,c):!0:!!o;return!1}function ll(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ki(n,r))return!0}return!1}function Wf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const bc=t=>t.__isSuspense;function Vf(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):Zh(t)}const we=Symbol.for("v-fgt"),Li=Symbol.for("v-txt"),cn=Symbol.for("v-cmt"),tr=Symbol.for("v-stc"),rs=[];let et=null;function ee(t=!1){rs.push(et=t?null:[])}function jf(){rs.pop(),et=rs[rs.length-1]||null}let gs=1;function al(t,e=!1){gs+=t,t<0&&et&&e&&(et.hasOnce=!0)}function Cc(t){return t.dynamicChildren=gs>0?et||En:null,jf(),gs>0&&et&&et.push(t),t}function ie(t,e,n,s,i,r){return Cc(y(t,e,n,s,i,r,!0))}function os(t,e,n,s,i){return Cc(Ge(t,e,n,s,i,!0))}function Ec(t){return t?t.__v_isVNode===!0:!1}function Gn(t,e){return t.type===e.type&&t.key===e.key}const wc=({key:t})=>t??null,qs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||$e(t)||Z(t)?{i:st,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,s=0,i=null,r=t===we?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wc(e),ref:e&&qs(e),scopeId:Xa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:st};return l?(oo(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Re(n)?8:16),gs>0&&!o&&et&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&et.push(a),a}const Ge=zf;function zf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===pf)&&(t=cn),Ec(t)){const l=kn(t,e,!0);return n&&oo(l,n),gs>0&&!r&&et&&(l.shapeFlag&6?et[et.indexOf(t)]=l:et.push(l)),l.patchFlag=-2,l}if(td(t)&&(t=t.__vccOpts),e){e=qf(e);let{class:l,style:a}=e;l&&!Re(l)&&(e.class=rt(l)),Ee(a)&&(to(a)&&!Y(a)&&(a=We({},a)),e.style=Ni(a))}const o=Re(t)?1:bc(t)?128:nf(t)?64:Ee(t)?4:Z(t)?2:0;return y(t,e,n,s,i,o,r,!0)}function qf(t){return t?to(t)||ac(t)?We({},t):t:null}function kn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Gf(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&wc(c),ref:e&&e.ref?n&&r?Y(r)?r.concat(qs(e)):[r,qs(e)]:qs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==we?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kn(t.ssContent),ssFallback:t.ssFallback&&kn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&so(u,a.clone(u)),u}function Sc(t=" ",e=0){return Ge(Li,null,t,e)}function Ut(t="",e=!1){return e?(ee(),os(cn,null,t)):Ge(cn,null,t)}function vt(t){return t==null||typeof t=="boolean"?Ge(cn):Y(t)?Ge(we,null,t.slice()):Ec(t)?Ft(t):Ge(Li,null,String(t))}function Ft(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kn(t)}function oo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),oo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!ac(e)?e._ctx=st:i===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:st},n=32):(e=String(e),s&64?(n=16,e=[Sc(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=rt([e.class,s.class]));else if(i==="style")e.style=Ni([e.style,s.style]);else if(Ti(i)){const r=e[i],o=s[i];o&&r!==o&&!(Y(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function gt(t,e,n,s=null){Et(t,e,7,[n,s])}const Yf=rc();let Kf=0;function Qf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Yf,r={uid:Kf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ch(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uc(s,i),emitsOptions:vc(s,i),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=$f.bind(null,r),t.ce&&t.ce(r),r}let He=null,ii,Sr;{const t=Di(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ii=e("__VUE_INSTANCE_SETTERS__",n=>He=n),Sr=e("__VUE_SSR_SETTERS__",n=>ys=n)}const Ns=t=>{const e=He;return ii(t),t.scope.on(),()=>{t.scope.off(),ii(e)}},cl=()=>{He&&He.scope.off(),ii(null)};function Ic(t){return t.vnode.shapeFlag&4}let ys=!1;function Jf(t,e=!1,n=!1){e&&Sr(e);const{props:s,children:i}=t.vnode,r=Ic(t);Sf(t,s,r,e),Rf(t,i,n);const o=r?Xf(t,e):void 0;return e&&Sr(!1),o}function Xf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,_f);const{setup:s}=n;if(s){qt();const i=t.setupContext=s.length>1?ed(t):null,r=Ns(t),o=Ds(s,t,0,[t.props,i]),l=wa(o);if(Gt(),r(),(l||t.sp)&&!ss(t)&&Za(t),l){if(o.then(cl,cl),e)return o.then(a=>{ul(t,a)}).catch(a=>{Mi(a,t,0)});t.asyncDep=o}else ul(t,o)}else Tc(t)}function ul(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=qa(e)),Tc(t)}function Tc(t,e,n){const s=t.type;t.render||(t.render=s.render||bt);{const i=Ns(t);qt();try{mf(t)}finally{Gt(),i()}}}const Zf={get(t,e){return ke(t,"get",""),t[e]}};function ed(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Zf),slots:t.slots,emit:t.emit,expose:e}}function Fi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qa(Wh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in is)return is[n](t)},has(e,n){return n in e||n in is}})):t.proxy}function td(t){return Z(t)&&"__vccOpts"in t}const Bn=(t,e)=>Yh(t,e,ys),nd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ir;const hl=typeof window<"u"&&window.trustedTypes;if(hl)try{Ir=hl.createPolicy("vue",{createHTML:t=>t})}catch{}const xc=Ir?t=>Ir.createHTML(t):t=>t,sd="http://www.w3.org/2000/svg",id="http://www.w3.org/1998/Math/MathML",Tt=typeof document<"u"?document:null,fl=Tt&&Tt.createElement("template"),rd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Tt.createElementNS(sd,t):e==="mathml"?Tt.createElementNS(id,t):n?Tt.createElement(t,{is:n}):Tt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Tt.createTextNode(t),createComment:t=>Tt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{fl.innerHTML=xc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=fl.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},od=Symbol("_vtc");function ld(t,e,n){const s=t[od];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ri=Symbol("_vod"),Rc=Symbol("_vsh"),Hs={beforeMount(t,{value:e},{transition:n}){t[ri]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Yn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Yn(t,!0),s.enter(t)):s.leave(t,()=>{Yn(t,!1)}):Yn(t,e))},beforeUnmount(t,{value:e}){Yn(t,e)}};function Yn(t,e){t.style.display=e?t[ri]:"none",t[Rc]=!e}const ad=Symbol(""),cd=/(^|;)\s*display\s*:/;function ud(t,e,n){const s=t.style,i=Re(n);let r=!1;if(n&&!i){if(e)if(Re(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Gs(s,l,"")}else for(const o in e)n[o]==null&&Gs(s,o,"");for(const o in n)o==="display"&&(r=!0),Gs(s,o,n[o])}else if(i){if(e!==n){const o=s[ad];o&&(n+=";"+o),s.cssText=n,r=cd.test(n)}}else e&&t.removeAttribute("style");ri in t&&(t[ri]=r?s.display:"",t[Rc]&&(s.display="none"))}const dl=/\s*!important$/;function Gs(t,e,n){if(Y(n))n.forEach(s=>Gs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=hd(t,e);dl.test(n)?t.setProperty(pn(s),n.replace(dl,""),"important"):t[s]=n}}const pl=["Webkit","Moz","ms"],nr={};function hd(t,e){const n=nr[e];if(n)return n;let s=Vt(e);if(s!=="filter"&&s in t)return nr[e]=s;s=Ta(s);for(let i=0;i<pl.length;i++){const r=pl[i]+s;if(r in t)return nr[e]=r}return e}const _l="http://www.w3.org/1999/xlink";function ml(t,e,n,s,i,r=yh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(_l,e.slice(6,e.length)):t.setAttributeNS(_l,e,n):n==null||r&&!Ra(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ct(n)?String(n):n)}function gl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?xc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ra(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function tn(t,e,n,s){t.addEventListener(e,n,s)}function fd(t,e,n,s){t.removeEventListener(e,n,s)}const yl=Symbol("_vei");function dd(t,e,n,s,i=null){const r=t[yl]||(t[yl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=pd(e);if(s){const c=r[e]=gd(s,i);tn(t,l,c,a)}else o&&(fd(t,l,o,a),r[e]=void 0)}}const vl=/(?:Once|Passive|Capture)$/;function pd(t){let e;if(vl.test(t)){e={};let s;for(;s=t.match(vl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):pn(t.slice(2)),e]}let sr=0;const _d=Promise.resolve(),md=()=>sr||(_d.then(()=>sr=0),sr=Date.now());function gd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Et(yd(s,n.value),e,5,[s])};return n.value=t,n.attached=md(),n}function yd(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const bl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?ld(t,s,o):e==="style"?ud(t,n,s):Ti(e)?qr(e)||dd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bd(t,e,s,o))?(gl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ml(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Re(s))?gl(t,Vt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ml(t,e,s,o))};function bd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&bl(e)&&Z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return bl(e)&&Re(n)?!1:e in t}const oi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>js(e,n):e};function Cd(t){t.target.composing=!0}function Cl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Rn=Symbol("_assign"),ls={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Rn]=oi(i);const r=s||i.props&&i.props.type==="number";tn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Xs(l)),t[Rn](l)}),n&&tn(t,"change",()=>{t.value=t.value.trim()}),e||(tn(t,"compositionstart",Cd),tn(t,"compositionend",Cl),tn(t,"change",Cl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Rn]=oi(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Xs(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},El={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=xi(e);tn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Xs(li(o)):li(o));t[Rn](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Ya(()=>{t._assigning=!1})}),t[Rn]=oi(s)},mounted(t,{value:e}){wl(t,e)},beforeUpdate(t,e,n){t[Rn]=oi(n)},updated(t,{value:e}){t._assigning||wl(t,e)}};function wl(t,e){const n=t.multiple,s=Y(e);if(!(n&&!s&&!xi(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],l=li(o);if(n)if(s){const a=typeof l;a==="string"||a==="number"?o.selected=e.some(c=>String(c)===String(l)):o.selected=bh(e,l)>-1}else o.selected=e.has(l);else if(Ai(li(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function li(t){return"_value"in t?t._value:t.value}const Ed=["ctrl","shift","alt","meta"],wd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ed.some(n=>t[`${n}Key`]&&!e.includes(n))},Sd=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const l=wd[e[o]];if(l&&l(i,e))return}return t(i,...r)})},Id=We({patchProp:vd},rd);let Sl;function Td(){return Sl||(Sl=Nf(Id))}const xd=(...t)=>{const e=Td().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Dd(s);if(!i)return;const r=e._component;!Z(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Rd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Rd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Dd(t){return Re(t)?document.querySelector(t):t}const Nd={class:"header"},Ad=["onClick"],Od={__name:"Header",props:{activeIndex:{type:Number,default:0}},emits:["update:activeIndex"],setup(t,{emit:e}){const n=e,s=be(["首页","记仇本","纪念日","成长"]),i=r=>{n("update:activeIndex",r)};return(r,o)=>(ee(),ie("section",Nd,[(ee(!0),ie(we,null,at(s.value,(l,a)=>(ee(),ie("p",{class:rt(["title",[a===t.activeIndex?"active":""]]),key:a,onClick:c=>i(a)},xe(l),11,Ad))),128))]))}},Yt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Md={__name:"BgmPlayer",setup(t){const e=be(!1),n=be(null);function s(){e.value?n.value.pause():n.value.play(),e.value=!e.value}function i(){document.hidden?(n.value.pause(),e.value=!1):e.value&&n.value.play()}return _n(()=>{document.addEventListener("visibilitychange",i)}),io(()=>{document.removeEventListener("visibilitychange",i)}),(r,o)=>(ee(),ie("div",null,[y("audio",{ref_key:"audioPlayer",ref:n,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/ffseh7bfubfbps/bgm.mp3",loop:""},null,512),y("div",{class:rt(["bgm_icon",{rotate:e.value}]),onClick:s},null,2)]))}},Pd=Yt(Md,[["__scopeId","data-v-2cde0a74"]]),kd=""+new URL("yier_avatar-CSEOs6om.jpg",import.meta.url).href,Ld=""+new URL("bubu_avatar-DEQ1y__y.jpg",import.meta.url).href,Fd=""+new URL("card1-BjV9YNQd.png",import.meta.url).href,$d=""+new URL("card2-AYQs3wvw.png",import.meta.url).href,Ud=""+new URL("yierbubu1-B23mzmrk.gif",import.meta.url).href,Bd=""+new URL("yierbubu2-B7bgCKGJ.gif",import.meta.url).href,Hd=""+new URL("yierbubu3-CPNQMIDT.gif",import.meta.url).href,Wd=""+new URL("yierbubu4-CvyKPgHh.gif",import.meta.url).href,Vd=""+new URL("yierbubu5-BShqPsnc.gif",import.meta.url).href,jd=""+new URL("yierbubu6-DT3n0tNy.gif",import.meta.url).href,zd=""+new URL("yierbubu7-QHzcuu4f.gif",import.meta.url).href,Dc=""+new URL("yierbubu8-R6jPVSrt.gif",import.meta.url).href,qd=""+new URL("yierbubu9-CRF36ScZ.gif",import.meta.url).href,Gd=""+new URL("yierbubu10-DrkyPMO_.gif",import.meta.url).href,Yd=""+new URL("yierbubu11-vewBH8We.gif",import.meta.url).href,Kd=""+new URL("yierbubu12-DlyaiZpM.gif",import.meta.url).href,Qd=""+new URL("yierbubu13-BNA4hEOo.gif",import.meta.url).href,Nc=""+new URL("yierRole-kStJEXR8.gif",import.meta.url).href,Jd=""+new URL("youke-D8Qhs-IN.jpeg",import.meta.url).href,Il=[Nc,Fd,$d,Ud,Bd,Hd,Wd,Vd,jd,zd,Dc,qd,Gd,Yd,Kd,Qd],Dn=[Nc,Dc,Jd],Xd={class:"index-body"},Zd={class:"avatar"},ep={class:"days-container"},tp={class:"content"},np={class:"card_container"},sp=["src"],ip=2,rp={__name:"IndexBody",setup(t){const e=be(0);let n,s=0;const i=be([...Il,...Il]),r=be(null);let o=null;o=setInterval(()=>{Array.from({length:5}).forEach(()=>{var g;i.value.push(i.value[s]),(g=r.value[s])==null||g.remove(),s++,f.value-=120,c.value.style.transform=`translateX(-${f.value}px)`})},5e3);const l=()=>{const N=Math.abs(new Date-new Date("2023-12-07"));e.value=Math.ceil(N/(1e3*60*60*24))},a=Bn(()=>e.value.toString().split("")),c=be(null);let u,h=0;const f=be(0),_=()=>{u=setInterval(()=>{c.value&&(f.value+=ip,f.value>=h&&(f.value=0),c.value.style.transform=`translateX(-${f.value}px)`)},16)};return _n(()=>{l(),n=setInterval(l,60*1e3),setTimeout(()=>{if(c.value){h=c.value.offsetWidth;const g=c.value.querySelector(".card1");if(g){const m=window.getComputedStyle(g);g.offsetWidth+parseInt(m.marginRight)}_()}},0)}),nc(()=>{clearInterval(n),clearInterval(u),clearInterval(o)}),(g,m)=>(ee(),ie(we,null,[m[5]||(m[5]=y("section",{class:"banner"},null,-1)),y("div",Xd,[y("div",Zd,[m[2]||(m[2]=y("div",{class:"left container"},[y("img",{class:"img",src:kd,width:"84"}),y("div",{class:"img_name"},"王宇晴")],-1)),y("div",null,[m[1]||(m[1]=y("div",{class:"desc_container text"},"在一起",-1)),y("div",ep,[(ee(!0),ie(we,null,at(a.value,(N,U)=>(ee(),ie("div",{key:U,class:"digit-card"},xe(N),1))),128)),m[0]||(m[0]=y("div",{class:"digit-card text"},"Days",-1))])]),m[3]||(m[3]=y("div",{class:"right container"},[y("img",{class:"img",src:Ld,width:"84"}),y("div",{class:"img_name"},"刘云宇")],-1))]),y("div",tp,[m[4]||(m[4]=y("div",{class:"about_us"},[y("span",{class:"card_title"},"关于我们"),y("div",{class:"divider"}),y("div",{class:"about_us_content"},[y("div",null,"     一二布布相识于2017年12月湖里实验中学，在初一办公室见面，那时候一二带着陈伟诺小弟改英语作业，布布来数数学卷子，两天彼此对视，留下了深刻的印象，并成为了soulmate。但是好景不长......被一二的班主任发现了，一二布布被迫分开。 "),y("div",null,"     初中毕业后，一二布布来到不同的高中，布布去了最好的厦门一中，一二去了厦门仅此一所的松柏中学。中间虽然见了几次面，但最终抵不过时间的洪流，联系渐少，生活的轨迹似乎越行越远 。"),y("div",null,"     到了大学，醒悟的布布重新找到一二，互相诉说着这三年来各自的遭遇，在经历了这么多事情之后，两人决定再也不分开了。至此，一二和布布从soulmate变成lovers，开启了属于他们的爱情篇章...... ")])],-1)),y("div",np,[y("div",{class:"scroll-wrapper",ref_key:"scrollWrapper",ref:c},[(ee(!0),ie(we,null,at(i.value,(N,U)=>(ee(),ie("img",{key:N+U,src:N,class:"card card1",ref_for:!0,ref_key:"scrollImgRef",ref:r},null,8,sp))),128))],512)])])])],64))}},op=Yt(rp,[["__scopeId","data-v-6b018634"]]);function lo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ys={exports:{}},lp=Ys.exports,Tl;function ap(){return Tl||(Tl=1,function(t,e){(function(n,s){t.exports=s()})(lp,function(){var n=1e3,s=6e4,i=36e5,r="millisecond",o="second",l="minute",a="hour",c="day",u="week",h="month",f="quarter",_="year",g="date",m="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,U=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,W={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(V){var O=["th","st","nd","rd"],I=V%100;return"["+V+(O[(I-20)%10]||O[I]||O[0])+"]"}},B=function(V,O,I){var A=String(V);return!A||A.length>=O?V:""+Array(O+1-A.length).join(I)+V},$={s:B,z:function(V){var O=-V.utcOffset(),I=Math.abs(O),A=Math.floor(I/60),E=I%60;return(O<=0?"+":"-")+B(A,2,"0")+":"+B(E,2,"0")},m:function V(O,I){if(O.date()<I.date())return-V(I,O);var A=12*(I.year()-O.year())+(I.month()-O.month()),E=O.clone().add(A,h),z=I-E<0,K=O.clone().add(A+(z?-1:1),h);return+(-(A+(I-E)/(z?E-K:K-E))||0)},a:function(V){return V<0?Math.ceil(V)||0:Math.floor(V)},p:function(V){return{M:h,y:_,w:u,d:c,D:g,h:a,m:l,s:o,ms:r,Q:f}[V]||String(V||"").toLowerCase().replace(/s$/,"")},u:function(V){return V===void 0}},Q="en",k={};k[Q]=W;var P="$isDayjsObject",X=function(V){return V instanceof ue||!(!V||!V[P])},H=function V(O,I,A){var E;if(!O)return Q;if(typeof O=="string"){var z=O.toLowerCase();k[z]&&(E=z),I&&(k[z]=I,E=z);var K=O.split("-");if(!E&&K.length>1)return V(K[0])}else{var re=O.name;k[re]=O,E=re}return!A&&E&&(Q=E),E||!A&&Q},L=function(V,O){if(X(V))return V.clone();var I=typeof O=="object"?O:{};return I.date=V,I.args=arguments,new ue(I)},x=$;x.l=H,x.i=X,x.w=function(V,O){return L(V,{locale:O.$L,utc:O.$u,x:O.$x,$offset:O.$offset})};var ue=function(){function V(I){this.$L=H(I.locale,null,!0),this.parse(I),this.$x=this.$x||I.x||{},this[P]=!0}var O=V.prototype;return O.parse=function(I){this.$d=function(A){var E=A.date,z=A.utc;if(E===null)return new Date(NaN);if(x.u(E))return new Date;if(E instanceof Date)return new Date(E);if(typeof E=="string"&&!/Z$/i.test(E)){var K=E.match(N);if(K){var re=K[2]-1||0,le=(K[7]||"0").substring(0,3);return z?new Date(Date.UTC(K[1],re,K[3]||1,K[4]||0,K[5]||0,K[6]||0,le)):new Date(K[1],re,K[3]||1,K[4]||0,K[5]||0,K[6]||0,le)}}return new Date(E)}(I),this.init()},O.init=function(){var I=this.$d;this.$y=I.getFullYear(),this.$M=I.getMonth(),this.$D=I.getDate(),this.$W=I.getDay(),this.$H=I.getHours(),this.$m=I.getMinutes(),this.$s=I.getSeconds(),this.$ms=I.getMilliseconds()},O.$utils=function(){return x},O.isValid=function(){return this.$d.toString()!==m},O.isSame=function(I,A){var E=L(I);return this.startOf(A)<=E&&E<=this.endOf(A)},O.isAfter=function(I,A){return L(I)<this.startOf(A)},O.isBefore=function(I,A){return this.endOf(A)<L(I)},O.$g=function(I,A,E){return x.u(I)?this[A]:this.set(E,I)},O.unix=function(){return Math.floor(this.valueOf()/1e3)},O.valueOf=function(){return this.$d.getTime()},O.startOf=function(I,A){var E=this,z=!!x.u(A)||A,K=x.p(I),re=function(dt,Te){var St=x.w(E.$u?Date.UTC(E.$y,Te,dt):new Date(E.$y,Te,dt),E);return z?St:St.endOf(c)},le=function(dt,Te){return x.w(E.toDate()[dt].apply(E.toDate("s"),(z?[0,0,0,0]:[23,59,59,999]).slice(Te)),E)},Ie=this.$W,Ne=this.$M,Ve=this.$D,tt="set"+(this.$u?"UTC":"");switch(K){case _:return z?re(1,0):re(31,11);case h:return z?re(1,Ne):re(0,Ne+1);case u:var nt=this.$locale().weekStart||0,wt=(Ie<nt?Ie+7:Ie)-nt;return re(z?Ve-wt:Ve+(6-wt),Ne);case c:case g:return le(tt+"Hours",0);case a:return le(tt+"Minutes",1);case l:return le(tt+"Seconds",2);case o:return le(tt+"Milliseconds",3);default:return this.clone()}},O.endOf=function(I){return this.startOf(I,!1)},O.$set=function(I,A){var E,z=x.p(I),K="set"+(this.$u?"UTC":""),re=(E={},E[c]=K+"Date",E[g]=K+"Date",E[h]=K+"Month",E[_]=K+"FullYear",E[a]=K+"Hours",E[l]=K+"Minutes",E[o]=K+"Seconds",E[r]=K+"Milliseconds",E)[z],le=z===c?this.$D+(A-this.$W):A;if(z===h||z===_){var Ie=this.clone().set(g,1);Ie.$d[re](le),Ie.init(),this.$d=Ie.set(g,Math.min(this.$D,Ie.daysInMonth())).$d}else re&&this.$d[re](le);return this.init(),this},O.set=function(I,A){return this.clone().$set(I,A)},O.get=function(I){return this[x.p(I)]()},O.add=function(I,A){var E,z=this;I=Number(I);var K=x.p(A),re=function(Ne){var Ve=L(z);return x.w(Ve.date(Ve.date()+Math.round(Ne*I)),z)};if(K===h)return this.set(h,this.$M+I);if(K===_)return this.set(_,this.$y+I);if(K===c)return re(1);if(K===u)return re(7);var le=(E={},E[l]=s,E[a]=i,E[o]=n,E)[K]||1,Ie=this.$d.getTime()+I*le;return x.w(Ie,this)},O.subtract=function(I,A){return this.add(-1*I,A)},O.format=function(I){var A=this,E=this.$locale();if(!this.isValid())return E.invalidDate||m;var z=I||"YYYY-MM-DDTHH:mm:ssZ",K=x.z(this),re=this.$H,le=this.$m,Ie=this.$M,Ne=E.weekdays,Ve=E.months,tt=E.meridiem,nt=function(Te,St,d,p){return Te&&(Te[St]||Te(A,z))||d[St].slice(0,p)},wt=function(Te){return x.s(re%12||12,Te,"0")},dt=tt||function(Te,St,d){var p=Te<12?"AM":"PM";return d?p.toLowerCase():p};return z.replace(U,function(Te,St){return St||function(d){switch(d){case"YY":return String(A.$y).slice(-2);case"YYYY":return x.s(A.$y,4,"0");case"M":return Ie+1;case"MM":return x.s(Ie+1,2,"0");case"MMM":return nt(E.monthsShort,Ie,Ve,3);case"MMMM":return nt(Ve,Ie);case"D":return A.$D;case"DD":return x.s(A.$D,2,"0");case"d":return String(A.$W);case"dd":return nt(E.weekdaysMin,A.$W,Ne,2);case"ddd":return nt(E.weekdaysShort,A.$W,Ne,3);case"dddd":return Ne[A.$W];case"H":return String(re);case"HH":return x.s(re,2,"0");case"h":return wt(1);case"hh":return wt(2);case"a":return dt(re,le,!0);case"A":return dt(re,le,!1);case"m":return String(le);case"mm":return x.s(le,2,"0");case"s":return String(A.$s);case"ss":return x.s(A.$s,2,"0");case"SSS":return x.s(A.$ms,3,"0");case"Z":return K}return null}(Te)||K.replace(":","")})},O.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},O.diff=function(I,A,E){var z,K=this,re=x.p(A),le=L(I),Ie=(le.utcOffset()-this.utcOffset())*s,Ne=this-le,Ve=function(){return x.m(K,le)};switch(re){case _:z=Ve()/12;break;case h:z=Ve();break;case f:z=Ve()/3;break;case u:z=(Ne-Ie)/6048e5;break;case c:z=(Ne-Ie)/864e5;break;case a:z=Ne/i;break;case l:z=Ne/s;break;case o:z=Ne/n;break;default:z=Ne}return E?z:x.a(z)},O.daysInMonth=function(){return this.endOf(h).$D},O.$locale=function(){return k[this.$L]},O.locale=function(I,A){if(!I)return this.$L;var E=this.clone(),z=H(I,A,!0);return z&&(E.$L=z),E},O.clone=function(){return x.w(this.$d,this)},O.toDate=function(){return new Date(this.valueOf())},O.toJSON=function(){return this.isValid()?this.toISOString():null},O.toISOString=function(){return this.$d.toISOString()},O.toString=function(){return this.$d.toUTCString()},V}(),ae=ue.prototype;return L.prototype=ae,[["$ms",r],["$s",o],["$m",l],["$H",a],["$W",c],["$M",h],["$y",_],["$D",g]].forEach(function(V){ae[V[1]]=function(O){return this.$g(O,V[0],V[1])}}),L.extend=function(V,O){return V.$i||(V(O,ue,L),V.$i=!0),L},L.locale=H,L.isDayjs=X,L.unix=function(V){return L(1e3*V)},L.en=k[Q],L.Ls=k,L.p={},L})}(Ys)),Ys.exports}var cp=ap();const nn=lo(cp),up=()=>{};var xl={};/**
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
 */const Ac={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw Hn(e)},Hn=function(t){return new Error("Firebase Database ("+Ac.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Oc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ao={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Oc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new fp;const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mc=function(t){const e=Oc(t);return ao.encodeByteArray(e,!0)},ai=function(t){return Mc(t).replace(/\./g,"")},Tr=function(t){try{return ao.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dp(t){return Pc(void 0,t)}function Pc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pp(n)||(t[n]=Pc(t[n],e[n]));return t}function pp(t){return t!=="__proto__"}/**
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
 */function _p(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mp=()=>_p().__FIREBASE_DEFAULTS__,gp=()=>{if(typeof process>"u"||typeof xl>"u")return;const t=xl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tr(t[1]);return e&&JSON.parse(e)},kc=()=>{try{return up()||mp()||gp()||yp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vp=t=>{var e,n;return(n=(e=kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bp=t=>{const e=vp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Lc=()=>{var t;return(t=kc())===null||t===void 0?void 0:t.config};/**
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
 */class $i{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function co(t){return t.endsWith(".cloudworkstations.dev")}async function Cp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Ep(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ai(JSON.stringify(n)),ai(JSON.stringify(o)),""].join(".")}const as={};function wp(){const t={prod:[],emulator:[]};for(const e of Object.keys(as))as[e]?t.emulator.push(e):t.prod.push(e);return t}function Sp(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Rl=!1;function Fc(t,e){if(typeof window>"u"||typeof document>"u"||!co(window.location.host)||as[t]===e||as[t]||Rl)return;as[t]=e;function n(f){return`__firebase__banner__${f}`}const s="__firebase__banner",r=wp().prod.length>0;function o(){const f=document.getElementById(s);f&&f.remove()}function l(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="absolute",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function a(f,_){f.setAttribute("width","24"),f.setAttribute("id",_),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function c(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Rl=!0,o()},f}function u(f,_){f.setAttribute("id",_),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=Sp(s),_=n("text"),g=document.getElementById(_)||document.createElement("span"),m=n("learnmore"),N=document.getElementById(m)||document.createElement("a"),U=n("preprendIcon"),W=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const B=f.element;l(B),u(N,m);const $=c();a(W,U),B.append(W,g,N,$),document.body.appendChild(B)}r?(g.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Ip(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $c(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ip())}function Tp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xp(){return Ac.NODE_ADMIN===!0}function Rp(){try{return typeof indexedDB=="object"}catch{return!1}}function Dp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Np="FirebaseError";class As extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Np,Object.setPrototypeOf(this,As.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uc.prototype.create)}}class Uc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ap(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new As(i,l,s)}}function Ap(t,e){return t.replace(Op,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Op=/\{\$([^}]+)}/g;/**
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
 */function vs(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
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
 */const Bc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=vs(Tr(r[0])||""),n=vs(Tr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Mp=function(t){const e=Bc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Pp=function(t){const e=Bc(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ln(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ci(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ui(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Nl(r)&&Nl(o)){if(!ui(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Nl(t){return t!==null&&typeof t=="object"}/**
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
 */function kp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Lp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function uo(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Fp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ui=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Os(t){return t&&t._delegate?t._delegate:t}class bs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class $p{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new $i;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bp(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Up(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Up(t){return t===Zt?void 0:t}function Bp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Hp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $p(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const Wp={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},Vp=ye.INFO,jp={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},zp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=jp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hc{constructor(e){this.name=e,this._logLevel=Vp,this._logHandler=zp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const qp=(t,e)=>e.some(n=>t instanceof n);let Al,Ol;function Gp(){return Al||(Al=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yp(){return Ol||(Ol=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wc=new WeakMap,xr=new WeakMap,Vc=new WeakMap,ir=new WeakMap,ho=new WeakMap;function Kp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Bt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wc.set(n,t)}).catch(()=>{}),ho.set(e,t),e}function Qp(t){if(xr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});xr.set(t,e)}let Rr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jp(t){Rr=t(Rr)}function Xp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(rr(this),e,...n);return Vc.set(s,e.sort?e.sort():[e]),Bt(s)}:Yp().includes(t)?function(...e){return t.apply(rr(this),e),Bt(Wc.get(this))}:function(...e){return Bt(t.apply(rr(this),e))}}function Zp(t){return typeof t=="function"?Xp(t):(t instanceof IDBTransaction&&Qp(t),qp(t,Gp())?new Proxy(t,Rr):t)}function Bt(t){if(t instanceof IDBRequest)return Kp(t);if(ir.has(t))return ir.get(t);const e=Zp(t);return e!==t&&(ir.set(t,e),ho.set(e,t)),e}const rr=t=>ho.get(t);function e_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Bt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Bt(o.result),a.oldVersion,a.newVersion,Bt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const t_=["get","getKey","getAll","getAllKeys","count"],n_=["put","add","delete","clear"],or=new Map;function Ml(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(or.get(e))return or.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=n_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||t_.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return or.set(e,r),r}Jp(t=>({...t,get:(e,n,s)=>Ml(e,n)||t.get(e,n,s),has:(e,n)=>!!Ml(e,n)||t.has(e,n)}));/**
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
 */class s_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function i_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dr="@firebase/app",Pl="0.12.2";/**
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
 */const At=new Hc("@firebase/app"),r_="@firebase/app-compat",o_="@firebase/analytics-compat",l_="@firebase/analytics",a_="@firebase/app-check-compat",c_="@firebase/app-check",u_="@firebase/auth",h_="@firebase/auth-compat",f_="@firebase/database",d_="@firebase/data-connect",p_="@firebase/database-compat",__="@firebase/functions",m_="@firebase/functions-compat",g_="@firebase/installations",y_="@firebase/installations-compat",v_="@firebase/messaging",b_="@firebase/messaging-compat",C_="@firebase/performance",E_="@firebase/performance-compat",w_="@firebase/remote-config",S_="@firebase/remote-config-compat",I_="@firebase/storage",T_="@firebase/storage-compat",x_="@firebase/firestore",R_="@firebase/vertexai",D_="@firebase/firestore-compat",N_="firebase",A_="11.7.2";/**
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
 */const Nr="[DEFAULT]",O_={[Dr]:"fire-core",[r_]:"fire-core-compat",[l_]:"fire-analytics",[o_]:"fire-analytics-compat",[c_]:"fire-app-check",[a_]:"fire-app-check-compat",[u_]:"fire-auth",[h_]:"fire-auth-compat",[f_]:"fire-rtdb",[d_]:"fire-data-connect",[p_]:"fire-rtdb-compat",[__]:"fire-fn",[m_]:"fire-fn-compat",[g_]:"fire-iid",[y_]:"fire-iid-compat",[v_]:"fire-fcm",[b_]:"fire-fcm-compat",[C_]:"fire-perf",[E_]:"fire-perf-compat",[w_]:"fire-rc",[S_]:"fire-rc-compat",[I_]:"fire-gcs",[T_]:"fire-gcs-compat",[x_]:"fire-fst",[D_]:"fire-fst-compat",[R_]:"fire-vertex","fire-js":"fire-js",[N_]:"fire-js-all"};/**
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
 */const hi=new Map,M_=new Map,Ar=new Map;function kl(t,e){try{t.container.addComponent(e)}catch(n){At.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(Ar.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;Ar.set(e,t);for(const n of hi.values())kl(n,t);for(const n of M_.values())kl(n,t);return!0}function P_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function k_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const L_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new Uc("app","Firebase",L_);/**
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
 */class F_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const $_=A_;function fo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Nr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(n||(n=Lc()),!n)throw Ht.create("no-options");const r=hi.get(i);if(r){if(ui(n,r.options)&&ui(s,r.config))return r;throw Ht.create("duplicate-app",{appName:i})}const o=new Hp(i);for(const a of Ar.values())o.addComponent(a);const l=new F_(n,s,o);return hi.set(i,l),l}function U_(t=Nr){const e=hi.get(t);if(!e&&t===Nr&&Lc())return fo();if(!e)throw Ht.create("no-app",{appName:t});return e}function Nn(t,e,n){var s;let i=(s=O_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),At.warn(l.join(" "));return}fi(new bs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const B_="firebase-heartbeat-database",H_=1,Cs="firebase-heartbeat-store";let lr=null;function jc(){return lr||(lr=e_(B_,H_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Cs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ht.create("idb-open",{originalErrorMessage:t.message})})),lr}async function W_(t){try{const n=(await jc()).transaction(Cs),s=await n.objectStore(Cs).get(zc(t));return await n.done,s}catch(e){if(e instanceof As)At.warn(e.message);else{const n=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});At.warn(n.message)}}}async function Ll(t,e){try{const s=(await jc()).transaction(Cs,"readwrite");await s.objectStore(Cs).put(e,zc(t)),await s.done}catch(n){if(n instanceof As)At.warn(n.message);else{const s=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});At.warn(s.message)}}}function zc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const V_=1024,j_=30;class z_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new G_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>j_){const o=Y_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){At.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fl(),{heartbeatsToSend:s,unsentEntries:i}=q_(this._heartbeatsCache.heartbeats),r=ai(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return At.warn(n),""}}}function Fl(){return new Date().toISOString().substring(0,10)}function q_(t,e=V_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),$l(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$l(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class G_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rp()?Dp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await W_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ll(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ll(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $l(t){return ai(JSON.stringify({version:2,heartbeats:t})).length}function Y_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function K_(t){fi(new bs("platform-logger",e=>new s_(e),"PRIVATE")),fi(new bs("heartbeat",e=>new z_(e),"PRIVATE")),Nn(Dr,Pl,t),Nn(Dr,Pl,"esm2017"),Nn("fire-js","")}K_("");var Q_="firebase",J_="11.7.2";/**
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
 */Nn(Q_,J_,"app");var Ul={};const Bl="@firebase/database",Hl="1.0.16";/**
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
 */let qc="";function X_(t){qc=t}/**
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
 */class Z_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class em{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Gc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Z_(e)}}catch{}return new em},sn=Gc("localStorage"),tm=Gc("sessionStorage");/**
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
 */const An=new Hc("@firebase/database"),nm=function(){let t=1;return function(){return t++}}(),Yc=function(t){const e=Fp(t),n=new Lp;n.update(e);const s=n.digest();return ao.encodeByteArray(s)},Ms=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ms.apply(null,s):typeof s=="object"?e+=Me(s):e+=s,e+=" "}return e};let cs=null,Wl=!0;const sm=function(t,e){T(!0,"Can't turn on custom loggers persistently."),An.logLevel=ye.VERBOSE,cs=An.log.bind(An)},Fe=function(...t){if(Wl===!0&&(Wl=!1,cs===null&&tm.get("logging_enabled")===!0&&sm()),cs){const e=Ms.apply(null,t);cs(e)}},Ps=function(t){return function(...e){Fe(t,...e)}},Or=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ms(...t);An.error(e)},Ot=function(...t){const e=`FIREBASE FATAL ERROR: ${Ms(...t)}`;throw An.error(e),new Error(e)},Ye=function(...t){const e="FIREBASE WARNING: "+Ms(...t);An.warn(e)},im=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Fn="[MIN_NAME]",un="[MAX_NAME]",Wn=function(t,e){if(t===e)return 0;if(t===Fn||e===un)return-1;if(e===Fn||t===un)return 1;{const n=Vl(t),s=Vl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},om=function(t,e){return t===e?0:t<e?-1:1},Kn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},po=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Me(e[s]),n+=":",n+=po(t[e[s]]);return n+="}",n},Qc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Jc=function(t){T(!Kc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},lm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},am=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cm(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const um=new RegExp("^-?(0*)\\d{1,10}$"),hm=-2147483648,fm=2147483647,Vl=function(t){if(um.test(t)){const e=Number(t);if(e>=hm&&e<=fm)return e}return null},Vn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ye("Exception was thrown by user callback.",n),e},Math.floor(0))}},dm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},us=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class pm{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,k_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ye(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _m{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ye(e)}}class Ks{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ks.OWNER="owner";/**
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
 */const _o="5",Xc="v",Zc="s",eu="r",tu="f",nu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,su="ls",iu="p",Mr="ac",ru="websocket",ou="long_polling";/**
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
 */class lu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function au(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===ru)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ou)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mm(t)&&(n.ns=t.namespace);const i=[];return Ke(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class gm{constructor(){this.counters_={}}incrementCounter(e,n=1){kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dp(this.counters_)}}/**
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
 */const ar={},cr={};function mo(t){const e=t.toString();return ar[e]||(ar[e]=new gm),ar[e]}function ym(t,e){const n=t.toString();return cr[n]||(cr[n]=e()),cr[n]}/**
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
 */class vm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Vn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const jl="start",bm="close",Cm="pLPCommand",Em="pRTLPCB",cu="id",uu="pw",hu="ser",wm="cb",Sm="seg",Im="ts",Tm="d",xm="dframe",fu=1870,du=30,Rm=fu-du,Dm=25e3,Nm=3e4;class Cn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ps(e),this.stats_=mo(n),this.urlFn=a=>(this.appCheckToken&&(a[Mr]=this.appCheckToken),au(n,ou,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new vm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Nm)),rm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new go((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jl)this.id=l,this.password=a;else if(o===bm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[jl]="t",s[hu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[wm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Xc]=_o,this.transportSessionId&&(s[Zc]=this.transportSessionId),this.lastSessionId&&(s[su]=this.lastSessionId),this.applicationId&&(s[iu]=this.applicationId),this.appCheckToken&&(s[Mr]=this.appCheckToken),typeof location<"u"&&location.hostname&&nu.test(location.hostname)&&(s[eu]=tu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cn.forceAllow_=!0}static forceDisallow(){Cn.forceDisallow_=!0}static isAvailable(){return Cn.forceAllow_?!0:!Cn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lm()&&!am()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Mc(n),i=Qc(s,Rm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[xm]="t",s[cu]=e,s[uu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class go{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nm(),window[Cm+this.uniqueCallbackIdentifier]=e,window[Em+this.uniqueCallbackIdentifier]=n,this.myIFrame=go.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Fe("frame writing exception"),l.stack&&Fe(l.stack),Fe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Fe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cu]=this.myID,e[uu]=this.myPW,e[hu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+du+s.length<=fu;){const o=this.pendingSegs.shift();s=s+"&"+Sm+i+"="+o.seg+"&"+Im+i+"="+o.ts+"&"+Tm+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Dm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Am=16384,Om=45e3;let di=null;typeof MozWebSocket<"u"?di=MozWebSocket:typeof WebSocket<"u"&&(di=WebSocket);class lt{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ps(this.connId),this.stats_=mo(n),this.connURL=lt.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Xc]=_o,typeof location<"u"&&location.hostname&&nu.test(location.hostname)&&(o[eu]=tu),n&&(o[Zc]=n),s&&(o[su]=s),i&&(o[Mr]=i),r&&(o[iu]=r),au(e,ru,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sn.set("previous_websocket_failure",!0);try{let s;xp(),this.mySock=new di(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&di!==null&&!lt.forceDisallow_}static previouslyFailed(){return sn.isInMemoryStorage||sn.get("previous_websocket_failure")===!0}markConnectionHealthy(){sn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=vs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Qc(n,Am);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Om))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lt.responsesRequiredToBeHealthy=2;lt.healthyTimeout=3e4;/**
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
 */class Es{static get ALL_TRANSPORTS(){return[Cn,lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=lt&&lt.isAvailable();let s=n&&!lt.previouslyFailed();if(e.webSocketOnly&&(n||Ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[lt];else{const i=this.transports_=[];for(const r of Es.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Es.globalTransportInitialized_=!1;/**
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
 */const Mm=6e4,Pm=5e3,km=10*1024,Lm=100*1024,ur="t",zl="d",Fm="s",ql="r",$m="e",Gl="o",Yl="a",Kl="n",Ql="p",Um="h";class Bm{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ps("c:"+this.id+":"),this.transportManager_=new Es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=us(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Lm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>km?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ur in e){const n=e[ur];n===Yl?this.upgradeIfSecondaryHealthy_():n===ql?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Kn("t",e),s=Kn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ql,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Kn("t",e),s=Kn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Kn(ur,e);if(zl in e){const s=e[zl];if(n===Um){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Kl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Fm?this.onConnectionShutdown_(s):n===ql?this.onReset_(s):n===$m?Or("Server Error: "+s):n===Gl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Or("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_o!==s&&Ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),us(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Mm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):us(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Pm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ql,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class pu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class _u{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class pi extends _u{static getInstance(){return new pi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$c()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Jl=32,Xl=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new _e("")}function te(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jt(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function mu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Hm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function gu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function yu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function De(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new _e(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=te(t),s=te(e);if(n===null)return e;if(n===s)return ze(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function yo(t,e){if(jt(t)!==jt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ct(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(jt(t)>jt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Wm{constructor(e,n){this.errorPrefix_=n,this.parts_=gu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ui(this.parts_[s]);vu(this)}}function Vm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ui(e),vu(t)}function jm(t){const e=t.parts_.pop();t.byteLength_-=Ui(e),t.parts_.length>0&&(t.byteLength_-=1)}function vu(t){if(t.byteLength_>Xl)throw new Error(t.errorPrefix_+"has a key path longer than "+Xl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Jl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jl+") or object contains a cycle "+en(t))}function en(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class vo extends _u{static getInstance(){return new vo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Qn=1e3,zm=60*5*1e3,Zl=30*1e3,qm=1.3,Gm=3e4,Ym="server_kill",ea=3;class Nt extends pu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Nt.nextPersistentConnectionId_++,this.log_=Ps("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qn,this.maxReconnectDelay_=zm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Me(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new $i,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Nt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kt(e,"w")){const s=Ln(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Pp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Mp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Or("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gm&&(this.reconnectDelay_=Qn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Nt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Fe("getToken() completed but was canceled"):(Fe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Bm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ye(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ym)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ye(h),a())}}}interrupt(e){Fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dl(this.interruptReasons_)&&(this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>po(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ea&&(this.reconnectDelay_=Zl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ea&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qc.replace(/\./g,"-")]=1,$c()?e["framework.cordova"]=1:Tp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pi.getInstance().currentlyOnline();return Dl(this.interruptReasons_)&&e}}Nt.nextPersistentConnectionId_=0;Nt.nextConnectionId_=0;/**
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
 */class ne{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ne(e,n)}}/**
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
 */class Bi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ne(Fn,e),i=new ne(Fn,n);return this.compare(s,i)!==0}minPost(){return ne.MIN}}/**
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
 */let Ws;class bu extends Bi{static get __EMPTY_NODE(){return Ws}static set __EMPTY_NODE(e){Ws=e}compare(e,n){return Wn(e.name,n.name)}isDefinedOn(e){throw Hn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(un,Ws)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,Ws)}toString(){return".key"}}const On=new bu;/**
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
 */class Vs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Oe.RED,this.left=i??qe.EMPTY_NODE,this.right=r??qe.EMPTY_NODE}copy(e,n,s,i,r){return new Oe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oe.RED=!0;Oe.BLACK=!1;class Km{copy(e,n,s,i,r){return this}insert(e,n,s){return new Oe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,n=qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Oe.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vs(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new Km;/**
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
 */function Qm(t,e){return Wn(t.name,e.name)}function bo(t,e){return Wn(t,e)}/**
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
 */let Pr;function Jm(t){Pr=t}const Cu=function(t){return typeof t=="number"?"number:"+Jc(t):"string:"+t},Eu=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kt(e,".sv"),"Priority must be a string or number.")}else T(t===Pr||t.isEmpty(),"priority of unexpected type.");T(t===Pr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ta;class Ae{static set __childrenNodeConstructor(e){ta=e}static get __childrenNodeConstructor(){return ta}constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Eu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:te(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=te(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||jt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Jc(this.value_):e+=this.value_,this.lazyHash_=Yc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ae.VALUE_TYPE_ORDER.indexOf(n),r=Ae.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let wu,Su;function Xm(t){wu=t}function Zm(t){Su=t}class eg extends Bi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Wn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(un,new Ae("[PRIORITY-POST]",Su))}makePost(e,n){const s=wu(e);return new ne(n,new Ae("[PRIORITY-POST]",s))}toString(){return".priority"}}const Se=new eg;/**
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
 */const tg=Math.log(2);class ng{constructor(e){const n=r=>parseInt(Math.log(r)/tg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _i=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new Oe(f,h.node,Oe.BLACK,null,null);{const _=parseInt(u/2,10)+a,g=i(a,_),m=i(_+1,c);return h=t[_],f=n?n(h):h,new Oe(f,h.node,Oe.BLACK,g,m)}},r=function(a){let c=null,u=null,h=t.length;const f=function(g,m){const N=h-g,U=h;h-=g;const W=i(N+1,U),B=t[N],$=n?n(B):B;_(new Oe($,B.node,m,null,W))},_=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const m=a.nextBitIsOne(),N=Math.pow(2,a.count-(g+1));m?f(N,Oe.BLACK):(f(N,Oe.BLACK),f(N,Oe.RED))}return u},o=new ng(t.length),l=r(o);return new qe(s||e,l)};/**
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
 */let hr;const yn={};class Dt{static get Default(){return T(yn&&Se,"ChildrenNode.ts has not been loaded"),hr=hr||new Dt({".priority":yn},{".priority":Se}),hr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ln(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qe?n:null}hasIndex(e){return kt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==On,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ne.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=_i(s,e.getCompare()):l=yn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Dt(u,c)}addToIndexes(e,n){const s=ci(this.indexes_,(i,r)=>{const o=Ln(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===yn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(ne.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),_i(l,o.getCompare())}else return yn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new ne(e.name,l))),a.insert(e,e.node)}});return new Dt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ci(this.indexes_,i=>{if(i===yn)return i;{const r=n.get(e.name);return r?i.remove(new ne(e.name,r)):i}});return new Dt(s,this.indexSet_)}}/**
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
 */let Jn;class G{static get EMPTY_NODE(){return Jn||(Jn=new G(new qe(bo),null,Dt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Eu(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jn}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Jn:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ne(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Jn:this.priorityNode_;return new G(i,o,r)}}updateChild(e,n){const s=te(e);if(s===null)return n;{T(te(e)!==".priority"||jt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Se,(o,l)=>{n[o]=l.val(e),s++,r&&G.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cu(this.getPriority().val())+":"),this.forEachChild(Se,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Yc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ne(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ne.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ks?-1:0}withIndex(e){if(e===On||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===On||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Se),i=n.getIterator(Se);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===On?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sg extends G{constructor(){super(new qe(bo),G.EMPTY_NODE,Dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const ks=new sg;Object.defineProperties(ne,{MIN:{value:new ne(Fn,G.EMPTY_NODE)},MAX:{value:new ne(un,ks)}});bu.__EMPTY_NODE=G.EMPTY_NODE;Ae.__childrenNodeConstructor=G;Jm(ks);Zm(ks);/**
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
 */const ig=!0;function Pe(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,Pe(e))}if(!(t instanceof Array)&&ig){const n=[];let s=!1;if(Ke(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Pe(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new ne(o,a)))}}),n.length===0)return G.EMPTY_NODE;const r=_i(n,Qm,o=>o.name,bo);if(s){const o=_i(n,Se.getCompare());return new G(r,Pe(e),new Dt({".priority":o},{".priority":Se}))}else return new G(r,Pe(e),Dt.Default)}else{let n=G.EMPTY_NODE;return Ke(t,(s,i)=>{if(kt(t,s)&&s.substring(0,1)!=="."){const r=Pe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Pe(e))}}Xm(Pe);/**
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
 */class rg extends Bi{constructor(e){super(),this.indexPath_=e,T(!se(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Wn(e.name,n.name):r}makePost(e,n){const s=Pe(e),i=G.EMPTY_NODE.updateChild(this.indexPath_,s);return new ne(n,i)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,ks);return new ne(un,e)}toString(){return gu(this.indexPath_,0).join("/")}}/**
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
 */class og extends Bi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Wn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const s=Pe(e);return new ne(n,s)}toString(){return".value"}}const lg=new og;/**
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
 */function Iu(t){return{type:"value",snapshotNode:t}}function $n(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ws(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ss(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ag(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Co{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ws(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange($n(n,s)):o.trackChildChange(Ss(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Se,(i,r)=>{n.hasChild(i)||s.trackChildChange(ws(i,r))}),n.isLeafNode()||n.forEachChild(Se,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ss(i,r,o))}else s.trackChildChange($n(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Is{constructor(e){this.indexedFilter_=new Co(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Is.getStartPost_(e),this.endPost_=Is.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ne(n,s))||(s=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=G.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(G.EMPTY_NODE);const r=this;return n.forEachChild(Se,(o,l)=>{r.matches(new ne(o,l))||(i=i.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class cg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ne(n,s))||(s=G.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=G.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(G.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const a=new ne(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Ss(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ws(n,h));const m=l.updateImmediateChild(n,G.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange($n(f.name,f.node)),m.updateImmediateChild(f.name,f.node)):m}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ws(c.name,c.node)),r.trackChildChange($n(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,G.EMPTY_NODE)):e}}/**
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
 */class Eo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fn}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:un}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new Eo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ug(t){return t.loadsAllData()?new Co(t.getIndex()):t.hasLimit()?new cg(t):new Is(t)}function na(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Se?n="$priority":t.index_===lg?n="$value":t.index_===On?n="$key":(T(t.index_ instanceof rg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function sa(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
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
 */class mi extends pu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ps("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=mi.getListenId_(e,s),l={};this.listens_[o]=l;const a=na(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ln(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=mi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=na(e._queryParams),s=e._path.toString(),i=new $i;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+kp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=vs(l.responseText)}catch{Ye("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ye("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class hg{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function gi(){return{value:null,children:new Map}}function Tu(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=te(e);t.children.has(s)||t.children.set(s,gi());const i=t.children.get(s);e=ve(e),Tu(i,e,n)}}function kr(t,e,n){t.value!==null?n(e,t.value):fg(t,(s,i)=>{const r=new _e(e.toString()+"/"+s);kr(i,r,n)})}function fg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class dg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ke(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const ia=10*1e3,pg=30*1e3,_g=5*60*1e3;class mg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new dg(e);const s=ia+(pg-ia)*Math.random();us(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ke(e,(i,r)=>{r>0&&kt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),us(this.reportStats_.bind(this),Math.floor(Math.random()*2*_g))}}/**
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
 */var ut;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ut||(ut={}));function xu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function So(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class yi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ut.ACK_USER_WRITE,this.source=xu()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new yi(ce(),n,this.revert)}}else return T(te(this.path)===e,"operationForChild called for unrelated child."),new yi(ve(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ts{constructor(e,n){this.source=e,this.path=n,this.type=ut.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new Ts(this.source,ce()):new Ts(this.source,ve(this.path))}}/**
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
 */class hn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ut.OVERWRITE}operationForChild(e){return se(this.path)?new hn(this.source,ce(),this.snap.getImmediateChild(e)):new hn(this.source,ve(this.path),this.snap)}}/**
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
 */class xs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ut.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new hn(this.source,ce(),n.value):new xs(this.source,ce(),n)}else return T(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xs(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class fn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class gg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ag(o.childName,o.snapshotNode))}),Xn(t,i,"child_removed",e,s,n),Xn(t,i,"child_added",e,s,n),Xn(t,i,"child_moved",r,s,n),Xn(t,i,"child_changed",e,s,n),Xn(t,i,"value",e,s,n),i}function Xn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>bg(t,l,a)),o.forEach(l=>{const a=vg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function vg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bg(t,e,n){if(e.childName==null||n.childName==null)throw Hn("Should only compare child_ events.");const s=new ne(e.childName,e.snapshotNode),i=new ne(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Hi(t,e){return{eventCache:t,serverCache:e}}function hs(t,e,n,s){return Hi(new fn(e,n,s),t.serverCache)}function Ru(t,e,n,s){return Hi(t.eventCache,new fn(e,n,s))}function Lr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function dn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let fr;const Cg=()=>(fr||(fr=new qe(om)),fr);class Ce{static fromObject(e){let n=new Ce(null);return Ke(e,(s,i)=>{n=n.set(new _e(s),i)}),n}constructor(e,n=Cg()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(se(e))return null;{const s=te(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ve(e),n);return r!=null?{path:De(new _e(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=te(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new Ce(null)}}set(e,n){if(se(e))return new Ce(n,this.children);{const s=te(e),r=(this.children.get(s)||new Ce(null)).set(ve(e),n),o=this.children.insert(s,r);return new Ce(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=te(e),s=this.children.get(n);if(s){const i=s.remove(ve(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ce(null):new Ce(this.value,r)}else return this}}get(e){if(se(e))return this.value;{const n=te(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(se(e))return n;{const s=te(e),r=(this.children.get(s)||new Ce(null)).setTree(ve(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ce(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(De(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(se(e))return null;{const r=te(e),o=this.children.get(r);return o?o.findOnPath_(ve(e),De(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,s){if(se(e))return this;{this.value&&s(n,this.value);const i=te(e),r=this.children.get(i);return r?r.foreachOnPath_(ve(e),De(n,i),s):new Ce(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(De(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new Ce(null))}}function fs(t,e,n){if(se(e))return new ft(new Ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ze(i,e);return r=r.updateChild(o,n),new ft(t.writeTree_.set(i,r))}else{const i=new Ce(n),r=t.writeTree_.setTree(e,i);return new ft(r)}}}function ra(t,e,n){let s=t;return Ke(n,(i,r)=>{s=fs(s,De(e,i),r)}),s}function oa(t,e){if(se(e))return ft.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new ft(n)}}function Fr(t,e){return mn(t,e)!=null}function mn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function la(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(s,i)=>{e.push(new ne(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ne(s,i.value))}),e}function Wt(t,e){if(se(e))return t;{const n=mn(t,e);return n!=null?new ft(new Ce(n)):new ft(t.writeTree_.subtree(e))}}function $r(t){return t.writeTree_.isEmpty()}function Un(t,e){return Du(ce(),t.writeTree_,e)}function Du(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Du(De(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(De(t,".priority"),s)),n}}/**
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
 */function Io(t,e){return Mu(e,t)}function Eg(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=fs(t.visibleWrites,e,n)),t.lastWriteId=s}function wg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Sg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Ig(l,s.path)?i=!1:ct(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Tg(t),!0;if(s.snap)t.visibleWrites=oa(t.visibleWrites,s.path);else{const l=s.children;Ke(l,a=>{t.visibleWrites=oa(t.visibleWrites,De(s.path,a))})}return!0}else return!1}function Ig(t,e){if(t.snap)return ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ct(De(t.path,n),e))return!0;return!1}function Tg(t){t.visibleWrites=Nu(t.allWrites,xg,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xg(t){return t.visible}function Nu(t,e,n){let s=ft.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ct(n,o)?(l=ze(n,o),s=fs(s,l,r.snap)):ct(o,n)&&(l=ze(o,n),s=fs(s,ce(),r.snap.getChild(l)));else if(r.children){if(ct(n,o))l=ze(n,o),s=ra(s,l,r.children);else if(ct(o,n))if(l=ze(o,n),se(l))s=ra(s,ce(),r.children);else{const a=Ln(r.children,te(l));if(a){const c=a.getChild(ve(l));s=fs(s,ce(),c)}}}else throw Hn("WriteRecord should have .snap or .children")}}return s}function Au(t,e,n,s,i){if(!s&&!i){const r=mn(t.visibleWrites,e);if(r!=null)return r;{const o=Wt(t.visibleWrites,e);if($r(o))return n;if(n==null&&!Fr(o,ce()))return null;{const l=n||G.EMPTY_NODE;return Un(o,l)}}}else{const r=Wt(t.visibleWrites,e);if(!i&&$r(r))return n;if(!i&&n==null&&!Fr(r,ce()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ct(c.path,e)||ct(e,c.path))},l=Nu(t.allWrites,o,e),a=n||G.EMPTY_NODE;return Un(l,a)}}}function Rg(t,e,n){let s=G.EMPTY_NODE;const i=mn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Wt(t.visibleWrites,e);return n.forEachChild(Se,(o,l)=>{const a=Un(Wt(r,new _e(o)),l);s=s.updateImmediateChild(o,a)}),la(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Wt(t.visibleWrites,e);return la(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Dg(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=De(e,n);if(Fr(t.visibleWrites,r))return null;{const o=Wt(t.visibleWrites,r);return $r(o)?i.getChild(n):Un(o,i.getChild(n))}}function Ng(t,e,n,s){const i=De(e,n),r=mn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Wt(t.visibleWrites,i);return Un(o,s.getNode().getImmediateChild(n))}else return null}function Ag(t,e){return mn(t.visibleWrites,e)}function Og(t,e,n,s,i,r,o){let l;const a=Wt(t.visibleWrites,e),c=mn(a,ce());if(c!=null)l=c;else if(n!=null)l=Un(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Mg(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function vi(t,e,n,s){return Au(t.writeTree,t.treePath,e,n,s)}function To(t,e){return Rg(t.writeTree,t.treePath,e)}function aa(t,e,n,s){return Dg(t.writeTree,t.treePath,e,n,s)}function bi(t,e){return Ag(t.writeTree,De(t.treePath,e))}function Pg(t,e,n,s,i,r){return Og(t.writeTree,t.treePath,e,n,s,i,r)}function xo(t,e,n){return Ng(t.writeTree,t.treePath,e,n)}function Ou(t,e){return Mu(De(t.treePath,e),t.writeTree)}function Mu(t,e){return{treePath:t,writeTree:e}}/**
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
 */class kg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ss(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ws(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,$n(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ss(s,e.snapshotNode,i.oldSnap));else throw Hn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Lg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Pu=new Lg;class Ro{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new fn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:dn(this.viewCache_),r=Pg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Fg(t){return{filter:t}}function $g(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ug(t,e,n,s,i){const r=new kg;let o,l;if(n.type===ut.OVERWRITE){const c=n;c.source.fromUser?o=Ur(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=Ci(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===ut.MERGE){const c=n;c.source.fromUser?o=Hg(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Br(t,e,c.path,c.children,s,i,l,r))}else if(n.type===ut.ACK_USER_WRITE){const c=n;c.revert?o=jg(t,e,c.path,s,i,r):o=Wg(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ut.LISTEN_COMPLETE)o=Vg(t,e,n.path,s,r);else throw Hn("Unknown operation type: "+n.type);const a=r.getChanges();return Bg(e,o,a),{viewCache:o,changes:a}}function Bg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Lr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Iu(Lr(e)))}}function ku(t,e,n,s,i,r){const o=e.eventCache;if(bi(s,n)!=null)return e;{let l,a;if(se(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=dn(e),u=c instanceof G?c:G.EMPTY_NODE,h=To(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=vi(s,dn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=te(n);if(c===".priority"){T(jt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=aa(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ve(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=aa(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=xo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return hs(e,l,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function Ci(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=te(n);if(!a.isCompleteForPath(n)&&jt(n)>1)return e;const g=ve(n),N=a.getNode().getImmediateChild(_).updateChild(g,s);_===".priority"?c=u.updatePriority(a.getNode(),N):c=u.updateChild(a.getNode(),_,N,g,Pu,null)}const h=Ru(e,c,a.isFullyInitialized()||se(n),u.filtersNodes()),f=new Ro(i,h,r);return ku(t,h,n,i,f,l)}function Ur(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Ro(i,e,r);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=hs(e,c,!0,t.filter.filtersNodes());else{const h=te(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=hs(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=ve(n),_=l.getNode().getImmediateChild(h);let g;if(se(f))g=s;else{const m=u.getCompleteChild(h);m!=null?mu(f)===".priority"&&m.getChild(yu(f)).isEmpty()?g=m:g=m.updateChild(f,s):g=G.EMPTY_NODE}if(_.equals(g))a=e;else{const m=t.filter.updateChild(l.getNode(),h,g,f,u,o);a=hs(e,m,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ca(t,e){return t.eventCache.isCompleteForChild(e)}function Hg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=De(n,a);ca(e,te(u))&&(l=Ur(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=De(n,a);ca(e,te(u))||(l=Ur(t,l,u,c,i,r,o))}),l}function ua(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Br(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;se(n)?c=s:c=new Ce(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),g=ua(t,_,f);a=Ci(t,a,new _e(h),g,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const g=e.serverCache.getNode().getImmediateChild(h),m=ua(t,g,f);a=Ci(t,a,new _e(h),m,i,r,o,l)}}),a}function Wg(t,e,n,s,i,r,o){if(bi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(se(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ci(t,e,n,a.getNode().getChild(n),i,r,l,o);if(se(n)){let c=new Ce(null);return a.getNode().forEachChild(On,(u,h)=>{c=c.set(new _e(u),h)}),Br(t,e,n,c,i,r,l,o)}else return e}else{let c=new Ce(null);return s.foreach((u,h)=>{const f=De(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Br(t,e,n,c,i,r,l,o)}}function Vg(t,e,n,s,i){const r=e.serverCache,o=Ru(e,r.getNode(),r.isFullyInitialized()||se(n),r.isFiltered());return ku(t,o,n,s,Pu,i)}function jg(t,e,n,s,i,r){let o;if(bi(s,n)!=null)return e;{const l=new Ro(s,e,i),a=e.eventCache.getNode();let c;if(se(n)||te(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=vi(s,dn(e));else{const h=e.serverCache.getNode();T(h instanceof G,"serverChildren would be complete if leaf node"),u=To(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=te(n);let h=xo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ve(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,G.EMPTY_NODE,ve(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vi(s,dn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||bi(s,ce())!=null,hs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class zg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Co(s.getIndex()),r=ug(s);this.processor_=Fg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(G.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(G.EMPTY_NODE,l.getNode(),null),u=new fn(a,o.isFullyInitialized(),i.filtersNodes()),h=new fn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Hi(h,u),this.eventGenerator_=new gg(this.query_)}get query(){return this.query_}}function qg(t){return t.viewCache_.serverCache.getNode()}function Gg(t,e){const n=dn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function ha(t){return t.eventRegistrations_.length===0}function Yg(t,e){t.eventRegistrations_.push(e)}function fa(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function da(t,e,n,s){e.type===ut.MERGE&&e.source.queryId!==null&&(T(dn(t.viewCache_),"We should always have a full cache before handling merges"),T(Lr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Ug(t.processor_,i,e,n,s);return $g(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Lu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Kg(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(r,o)=>{s.push($n(r,o))}),n.isFullyInitialized()&&s.push(Iu(n.getNode())),Lu(t,s,n.getNode(),e)}function Lu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return yg(t.eventGenerator_,e,n,i)}/**
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
 */let Ei;class Qg{constructor(){this.views=new Map}}function Jg(t){T(!Ei,"__referenceConstructor has already been defined"),Ei=t}function Xg(){return T(Ei,"Reference.ts has not been loaded"),Ei}function Zg(t){return t.views.size===0}function Do(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),da(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(da(o,e,n,s));return r}}function ey(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=vi(n,i?s:null),a=!1;l?a=!0:s instanceof G?(l=To(n,s),a=!1):(l=G.EMPTY_NODE,a=!1);const c=Hi(new fn(l,a,!1),new fn(s,i,!1));return new zg(e,c)}return o}function ty(t,e,n,s,i,r){const o=ey(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Yg(o,n),Kg(o,n)}function ny(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=zt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(fa(c,n,s)),ha(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(fa(a,n,s)),ha(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!zt(t)&&r.push(new(Xg())(e._repo,e._path)),{removed:r,events:o}}function Fu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mn(t,e){let n=null;for(const s of t.views.values())n=n||Gg(s,e);return n}function $u(t,e){if(e._queryParams.loadsAllData())return Wi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Uu(t,e){return $u(t,e)!=null}function zt(t){return Wi(t)!=null}function Wi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let wi;function sy(t){T(!wi,"__referenceConstructor has already been defined"),wi=t}function iy(){return T(wi,"Reference.ts has not been loaded"),wi}let ry=1;class pa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=Mg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Bu(t,e,n,s,i){return Eg(t.pendingWriteTree_,e,n,s,i),i?Ls(t,new hn(xu(),e,n)):[]}function rn(t,e,n=!1){const s=wg(t.pendingWriteTree_,e);if(Sg(t.pendingWriteTree_,e)){let r=new Ce(null);return s.snap!=null?r=r.set(ce(),!0):Ke(s.children,o=>{r=r.set(new _e(o),!0)}),Ls(t,new yi(s.path,r,n))}else return[]}function Vi(t,e,n){return Ls(t,new hn(wo(),e,n))}function oy(t,e,n){const s=Ce.fromObject(n);return Ls(t,new xs(wo(),e,s))}function ly(t,e){return Ls(t,new Ts(wo(),e))}function ay(t,e,n){const s=Ao(t,n);if(s){const i=Oo(s),r=i.path,o=i.queryId,l=ze(r,e),a=new Ts(So(o),l);return Mo(t,r,a)}else return[]}function Hr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Uu(o,e))){const a=ny(o,e,n,s);Zg(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>zt(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=hy(f);for(let g=0;g<_.length;++g){const m=_[g],N=m.query,U=Vu(t,m);t.listenProvider_.startListening(ds(N),Si(t,N),U.hashFn,U.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ds(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(ji(f));t.listenProvider_.stopListening(ds(f),_)}))}fy(t,c)}return l}function cy(t,e,n,s){const i=Ao(t,s);if(i!=null){const r=Oo(i),o=r.path,l=r.queryId,a=ze(o,e),c=new hn(So(l),a,n);return Mo(t,o,c)}else return[]}function uy(t,e,n,s){const i=Ao(t,s);if(i){const r=Oo(i),o=r.path,l=r.queryId,a=ze(o,e),c=Ce.fromObject(n),u=new xs(So(l),a,c);return Mo(t,o,u)}else return[]}function _a(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const g=ze(f,i);r=r||Mn(_,g),o=o||zt(_)});let l=t.syncPointTree_.get(i);l?(o=o||zt(l),r=r||Mn(l,ce())):(l=new Qg,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=G.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,g)=>{const m=Mn(g,ce());m&&(r=r.updateImmediateChild(_,m))}));const c=Uu(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=ji(e);T(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=dy();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Io(t.pendingWriteTree_,i);let h=ty(l,e,n,u,r,a);if(!c&&!o&&!s){const f=$u(l,e);h=h.concat(py(t,e,f))}return h}function No(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ze(o,e),c=Mn(l,a);if(c)return c});return Au(i,e,r,n,!0)}function Ls(t,e){return Hu(e,t.syncPointTree_,null,Io(t.pendingWriteTree_,ce()))}function Hu(t,e,n,s){if(se(t.path))return Wu(t,e,n,s);{const i=e.get(ce());n==null&&i!=null&&(n=Mn(i,ce()));let r=[];const o=te(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Ou(s,o);r=r.concat(Hu(l,a,c,u))}return i&&(r=r.concat(Do(i,t,s,n))),r}}function Wu(t,e,n,s){const i=e.get(ce());n==null&&i!=null&&(n=Mn(i,ce()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Ou(s,o),u=t.operationForChild(o);u&&(r=r.concat(Wu(u,l,a,c)))}),i&&(r=r.concat(Do(i,t,s,n))),r}function Vu(t,e){const n=e.query,s=Si(t,n);return{hashFn:()=>(qg(e)||G.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?ay(t,n._path,s):ly(t,n._path);{const r=cm(i,n);return Hr(t,n,null,r)}}}}function Si(t,e){const n=ji(e);return t.queryToTagMap.get(n)}function ji(t){return t._path.toString()+"$"+t._queryIdentifier}function Ao(t,e){return t.tagToQueryMap.get(e)}function Oo(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function Mo(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Io(t.pendingWriteTree_,e);return Do(s,n,i,null)}function hy(t){return t.fold((e,n,s)=>{if(n&&zt(n))return[Wi(n)];{let i=[];return n&&(i=Fu(n)),Ke(s,(r,o)=>{i=i.concat(o)}),i}})}function ds(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(iy())(t._repo,t._path):t}function fy(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ji(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function dy(){return ry++}function py(t,e,n){const s=e._path,i=Si(t,e),r=Vu(t,n),o=t.listenProvider_.startListening(ds(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)T(!zt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!se(c)&&u&&zt(u))return[Wi(u).query];{let f=[];return u&&(f=f.concat(Fu(u).map(_=>_.query))),Ke(h,(_,g)=>{f=f.concat(g)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(ds(u),Si(t,u))}}return o}/**
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
 */class Po{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Po(n)}node(){return this.node_}}class ko{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new ko(this.syncTree_,n)}node(){return No(this.syncTree_,this.path_)}}const _y=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ma=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return my(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gy(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},my=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},gy=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},yy=function(t,e,n,s){return Lo(e,new ko(n,t),s)},ju=function(t,e,n){return Lo(t,new Po(e),n)};function Lo(t,e,n){const s=t.getPriority().val(),i=ma(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ma(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ae(l,Pe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ae(i))),o.forEachChild(Se,(l,a)=>{const c=Lo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Fo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function $o(t,e){let n=e instanceof _e?e:new _e(e),s=t,i=te(n);for(;i!==null;){const r=Ln(s.node.children,i)||{children:{},childCount:0};s=new Fo(i,s,r),n=ve(n),i=te(n)}return s}function jn(t){return t.node.value}function zu(t,e){t.node.value=e,Wr(t)}function qu(t){return t.node.childCount>0}function vy(t){return jn(t)===void 0&&!qu(t)}function zi(t,e){Ke(t.node.children,(n,s)=>{e(new Fo(n,t,s))})}function Gu(t,e,n,s){n&&e(t),zi(t,i=>{Gu(i,e,!0)})}function by(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Fs(t){return new _e(t.parent===null?t.name:Fs(t.parent)+"/"+t.name)}function Wr(t){t.parent!==null&&Cy(t.parent,t.name,t)}function Cy(t,e,n){const s=vy(n),i=kt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Wr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Wr(t))}/**
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
 */const Ey=/[\[\].#$\/\u0000-\u001F\u007F]/,wy=/[\[\].#$\u0000-\u001F\u007F]/,dr=10*1024*1024,Yu=function(t){return typeof t=="string"&&t.length!==0&&!Ey.test(t)},Ku=function(t){return typeof t=="string"&&t.length!==0&&!wy.test(t)},Sy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ku(t)},Iy=function(t,e,n,s){Uo(uo(t,"value"),e,n)},Uo=function(t,e,n){const s=n instanceof _e?new Wm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+en(s));if(typeof e=="function")throw new Error(t+"contains a function "+en(s)+" with contents = "+e.toString());if(Kc(e))throw new Error(t+"contains "+e.toString()+" "+en(s));if(typeof e=="string"&&e.length>dr/3&&Ui(e)>dr)throw new Error(t+"contains a string greater than "+dr+" utf8 bytes "+en(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ke(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Yu(o)))throw new Error(t+" contains an invalid key ("+o+") "+en(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vm(s,o),Uo(t,l,s),jm(s)}),i&&r)throw new Error(t+' contains ".value" child '+en(s)+" in addition to actual children.")}},Qu=function(t,e,n,s){if(!Ku(n))throw new Error(uo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ty=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qu(t,e,n)},Ju=function(t,e){if(te(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},xy=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Sy(n))throw new Error(uo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Ry{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!yo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Xu(t,e,n){Bo(t,n),Zu(t,s=>yo(s,e))}function Mt(t,e,n){Bo(t,n),Zu(t,s=>ct(s,e)||ct(e,s))}function Zu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Dy(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Dy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();cs&&Fe("event: "+n.toString()),Vn(s)}}}/**
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
 */const Ny="repo_interrupt",Ay=25;class Oy{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ry,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gi(),this.transactionQueueTree_=new Fo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function My(t,e,n){if(t.stats_=mo(t.repoInfo_),t.forceRestClient_||dm())t.server_=new mi(t.repoInfo_,(s,i,r,o)=>{ga(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ya(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Nt(t.repoInfo_,e,(s,i,r,o)=>{ga(t,s,i,r,o)},s=>{ya(t,s)},s=>{ky(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=ym(t.repoInfo_,()=>new mg(t.stats_,t.server_)),t.infoData_=new hg,t.infoSyncTree_=new pa({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Vi(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Wo(t,"connected",!1),t.serverSyncTree_=new pa({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Mt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Py(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ho(t){return _y({timestamp:Py(t)})}function ga(t,e,n,s,i){t.dataUpdateCount++;const r=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=ci(n,c=>Pe(c));o=uy(t.serverSyncTree_,r,a,i)}else{const a=Pe(n);o=cy(t.serverSyncTree_,r,a,i)}else if(s){const a=ci(n,c=>Pe(c));o=oy(t.serverSyncTree_,r,a)}else{const a=Pe(n);o=Vi(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=qi(t,r)),Mt(t.eventQueue_,l,o)}function ya(t,e){Wo(t,"connected",e),e===!1&&Fy(t)}function ky(t,e){Ke(e,(n,s)=>{Wo(t,n,s)})}function Wo(t,e,n){const s=new _e("/.info/"+e),i=Pe(n);t.infoData_.updateSnapshot(s,i);const r=Vi(t.infoSyncTree_,s,i);Mt(t.eventQueue_,s,r)}function eh(t){return t.nextWriteId_++}function Ly(t,e,n,s,i){Vo(t,"set",{path:e.toString(),value:n,priority:s});const r=Ho(t),o=Pe(n,s),l=No(t.serverSyncTree_,e),a=ju(o,l,r),c=eh(t),u=Bu(t.serverSyncTree_,e,a,c,!0);Bo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const g=f==="ok";g||Ye("set at "+e+" failed: "+f);const m=rn(t.serverSyncTree_,c,!g);Mt(t.eventQueue_,e,m),By(t,i,f,_)});const h=rh(t,e);qi(t,h),Mt(t.eventQueue_,h,[])}function Fy(t){Vo(t,"onDisconnectEvents");const e=Ho(t),n=gi();kr(t.onDisconnect_,ce(),(i,r)=>{const o=yy(i,r,t.serverSyncTree_,e);Tu(n,i,o)});let s=[];kr(n,ce(),(i,r)=>{s=s.concat(Vi(t.serverSyncTree_,i,r));const o=rh(t,i);qi(t,o)}),t.onDisconnect_=gi(),Mt(t.eventQueue_,ce(),s)}function $y(t,e,n){let s;te(e._path)===".info"?s=_a(t.infoSyncTree_,e,n):s=_a(t.serverSyncTree_,e,n),Xu(t.eventQueue_,e._path,s)}function va(t,e,n){let s;te(e._path)===".info"?s=Hr(t.infoSyncTree_,e,n):s=Hr(t.serverSyncTree_,e,n),Xu(t.eventQueue_,e._path,s)}function Uy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ny)}function Vo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Fe(n,...e)}function By(t,e,n,s){e&&Vn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function th(t,e,n){return No(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function jo(t,e=t.transactionQueueTree_){if(e||Gi(t,e),jn(e)){const n=sh(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Hy(t,Fs(e),n)}else qu(e)&&zi(e,n=>{jo(t,n)})}function Hy(t,e,n){const s=n.map(c=>c.currentWriteId),i=th(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ze(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Vo(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(rn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Gi(t,$o(t.transactionQueueTree_,e)),jo(t,t.transactionQueueTree_),Mt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Vn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ye("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}qi(t,e)}},o)}function qi(t,e){const n=nh(t,e),s=Fs(n),i=sh(t,n);return Wy(t,i,s),s}function Wy(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ze(n,a.path);let u=!1,h;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(rn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Ay)u=!0,h="maxretry",i=i.concat(rn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=th(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Uo("transaction failed: Data returned ",_,a.path);let g=Pe(_);typeof _=="object"&&_!=null&&kt(_,".priority")||(g=g.updatePriority(f.getPriority()));const N=a.currentWriteId,U=Ho(t),W=ju(g,f,U);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=W,a.currentWriteId=eh(t),o.splice(o.indexOf(N),1),i=i.concat(Bu(t.serverSyncTree_,a.path,W,a.currentWriteId,a.applyLocally)),i=i.concat(rn(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(rn(t.serverSyncTree_,a.currentWriteId,!0))}Mt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Gi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Vn(s[l]);jo(t,t.transactionQueueTree_)}function nh(t,e){let n,s=t.transactionQueueTree_;for(n=te(e);n!==null&&jn(s)===void 0;)s=$o(s,n),e=ve(e),n=te(e);return s}function sh(t,e){const n=[];return ih(t,e,n),n.sort((s,i)=>s.order-i.order),n}function ih(t,e,n){const s=jn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);zi(e,i=>{ih(t,i,n)})}function Gi(t,e){const n=jn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,zu(e,n.length>0?n:void 0)}zi(e,s=>{Gi(t,s)})}function rh(t,e){const n=Fs(nh(t,e)),s=$o(t.transactionQueueTree_,e);return by(s,i=>{pr(t,i)}),pr(t,s),Gu(s,i=>{pr(t,i)}),n}function pr(t,e){const n=jn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(rn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?zu(e,void 0):n.length=r+1,Mt(t.eventQueue_,Fs(e),i);for(let o=0;o<s.length;o++)Vn(s[o])}}/**
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
 */function Vy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function jy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ye(`Invalid query segment '${n}' in query '${t}'`)}return e}const ba=function(t,e){const n=zy(t),s=n.namespace;n.domain==="firebase.com"&&Ot(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ot("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||im();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new lu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new _e(n.pathString)}},zy=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Vy(t.substring(u,h)));const f=jy(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class qy{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class Gy{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Yy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class zo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return se(this._path)?null:mu(this._path)}get ref(){return new Kt(this._repo,this._path)}get _queryIdentifier(){const e=sa(this._queryParams),n=po(e);return n==="{}"?"default":n}get _queryObject(){return sa(this._queryParams)}isEqual(e){if(e=Os(e),!(e instanceof zo))return!1;const n=this._repo===e._repo,s=yo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Hm(this._path)}}class Kt extends zo{constructor(e,n){super(e,n,new Eo,!1)}get parent(){const e=yu(this._path);return e===null?null:new Kt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ii{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),s=Vr(this.ref,e);return new Ii(this._node.getChild(n),s,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ii(i,Vr(this.ref,s),Se)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bn(t,e){return t=Os(t),t._checkNotDeleted("ref"),e!==void 0?Vr(t._root,e):t._root}function Vr(t,e){return t=Os(t),te(t._path)===null?Ty("child","path",e):Qu("child","path",e),new Kt(t._repo,De(t._path,e))}function Ky(t){return Ju("remove",t._path),ln(t,null)}function ln(t,e){t=Os(t),Ju("set",t._path),Iy("set",e,t._path);const n=new $i;return Ly(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class qo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new qy("value",this,new Ii(e.snapshotNode,new Kt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Gy(this,e,n):null}matches(e){return e instanceof qo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Qy(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{va(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Yy(n,r||void 0),l=new qo(o);return $y(t._repo,t,l),()=>va(t._repo,t,l)}function oh(t,e,n,s){return Qy(t,"value",e,n,s)}Jg(Kt);sy(Kt);/**
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
 */const Jy="FIREBASE_DATABASE_EMULATOR_HOST",jr={};let Xy=!1;function Zy(t,e,n,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=co(r);t.repoInfo_=new lu(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function ev(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ot("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ba(r,i),l=o.repoInfo,a;typeof process<"u"&&Ul&&(a=Ul[Jy]),a?(r=`http://${a}?ns=${l.namespace}`,o=ba(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new _m(t.name,t.options,e);xy("Invalid Firebase Database URL",o),se(o.path)||Ot("Database URL must point to the root of a Firebase Database (not including a child path).");const u=nv(l,t,c,new pm(t,n));return new sv(u,t)}function tv(t,e){const n=jr[e];(!n||n[t.key]!==t)&&Ot(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Uy(t),delete n[t.key]}function nv(t,e,n,s){let i=jr[e.name];i||(i={},jr[e.name]=i);let r=i[t.toURLString()];return r&&Ot("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Oy(t,Xy,n,s),i[t.toURLString()]=r,r}class sv{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(My(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0,Fc("Database",this._repo.repoInfo_.emulatorOptions!==null)),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kt(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ot("Cannot call "+e+" on a deleted database.")}}function lh(t=U_(),e){const n=P_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=bp("database");s&&iv(n,...s)}return n}function iv(t,e,n,s={}){t=Os(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ui(s,r.repoInfo_.emulatorOptions))return;Ot("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Ot('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ks(Ks.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:Ep(s.mockUserToken,t.app.options.projectId);o=new Ks(l)}co(e)&&(Cp(e),Fc("Database",!0)),Zy(r,i,s,o)}/**
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
 */function rv(t){X_($_),fi(new bs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ev(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Nn(Bl,Hl,t),Nn(Bl,Hl,"esm2017")}Nt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};rv();const ov={class:"app-container"},lv={class:"form-group"},av={class:"form-group"},cv={class:"form-group"},uv={type:"submit",class:"btn primary-btn"},hv={class:"memo-list"},fv={class:"item-header"},dv={class:"item-meta"},pv={class:"date"},_v={class:"countdown"},mv={class:"actions"},gv=["onClick"],yv=["onClick"],vv={key:0,class:"empty-state"},bv={__name:"MemoryDay",setup(t){const n=fo({apiKey:"AIzaSyBEYS8UtnIdaYA4aZHsFCE3rnSya_DdS8o",authDomain:"yierbubu.firebaseapp.com",projectId:"yierbubu",storageBucket:"yierbubu.firebasestorage.app",messagingSenderId:"745521053033",appId:"1:745521053033:web:57602c1e935aa1cca811f8",measurementId:"G-7TF1KMZJBQ",databaseURL:"https://yierbubu-default-rtdb.asia-southeast1.firebasedatabase.app"}),s=lh(n),i=bn(s,"memos"),r=be([]),o=Pn({id:null,name:"",date:"",type:"纪念日",backgroundColor:""}),l=be(""),a=be(!0),c=be(null),u=be(!1),h=Bn(()=>(r.value.forEach(k=>{k.backgroundColor||(k.backgroundColor=N())}),r.value.filter(k=>k.name.toLowerCase().includes(l.value.toLowerCase())))),f=k=>{const P=nn(k),X=nn();return P.diff(X,"day")},_=k=>{const P=f(k);return P>0?`${P}天后`:P===0?"今天！":`${-P}天前`},g=k=>nn(k).format("YYYY年MM月DD日"),m=k=>k>7?"countdown-normal":k>0?"countdown-warning":k===0?"countdown-today":"countdown-past",N=()=>{const k=["rgba(163, 217, 0, 0.3)","rgba(0, 163, 224, 0.3)","rgba(255, 184, 28, 0.3)","rgba(0, 166, 172, 0.3)","rgba(214, 0, 28, 0.3)","rgba(143, 195, 31, 0.3)","rgba(0, 153, 68, 0.3)"],P=Math.floor(Math.random()*k.length);return k[P]},U=async()=>{if(!(!o.name||!o.date))try{const k={id:Date.now(),name:o.name,date:o.date,type:o.type,days:f(o.date),backgroundColor:N()};r.value.push(k),await ln(i,r.value),Q()}catch(k){c.value=k.message,console.error("添加失败:",k)}},W=k=>{const P=r.value[k];o.id=P.id,o.name=P.name,o.date=P.date,o.type=P.type,o.backgroundColor=P.backgroundColor,u.value=!0},B=async()=>{if(o.id)try{const k=r.value.findIndex(P=>P.id===o.id);k!==-1&&(r.value[k]={...r.value[k],name:o.name,date:o.date,type:o.type,days:f(o.date),backgroundColor:o.backgroundColor},await ln(i,r.value),Q(),u.value=!1)}catch(k){c.value=k.message,console.error("更新失败:",k)}},$=async k=>{if(confirm("确定要删除这个纪念日吗？"))try{r.value=r.value.filter(P=>P.id!==k),await ln(i,r.value)}catch(P){c.value=P.message,console.error("删除失败:",P)}},Q=()=>{o.id=null,o.name="",o.date="",o.type="纪念日",o.backgroundColor=""};return _n(()=>{try{oh(i,k=>{const P=k.val();r.value=P?Object.values(P):[],a.value=!1},k=>{c.value=k.message,a.value=!1,console.error("获取数据失败:",k)})}catch(k){c.value=k.message,a.value=!1,console.error("初始化失败:",k)}}),(k,P)=>(ee(),ie("div",ov,[y("form",{class:"memo-form",onSubmit:P[3]||(P[3]=Sd(X=>u.value?B():U(),["prevent"]))},[y("div",lv,[P[4]||(P[4]=y("label",null,"名称",-1)),ot(y("input",{type:"text","onUpdate:modelValue":P[0]||(P[0]=X=>o.name=X),placeholder:"请输入纪念日名称",required:""},null,512),[[ls,o.name,void 0,{trim:!0}]])]),y("div",av,[P[5]||(P[5]=y("label",null,"日期",-1)),ot(y("input",{type:"date","onUpdate:modelValue":P[1]||(P[1]=X=>o.date=X),required:""},null,512),[[ls,o.date]])]),y("div",cv,[P[6]||(P[6]=y("label",null,"类型",-1)),ot(y("input",{type:"text","onUpdate:modelValue":P[2]||(P[2]=X=>o.type=X),placeholder:"请输入纪念类型",required:""},null,512),[[ls,o.type,void 0,{trim:!0}]])]),y("button",uv,xe(u.value?"保存编辑":"添加纪念日"),1)],32),y("div",hv,[(ee(!0),ie(we,null,at(h.value,(X,H)=>(ee(),ie("div",{class:"memo-item",key:X.id},[y("div",fv,[y("p",{class:"item-name",style:Ni({backgroundColor:X.backgroundColor})},xe(X.name),5)]),y("div",dv,[y("span",{class:rt(["type-tag",X.type])},xe(X.type),3),y("span",pv,xe(g(X.date)),1)]),y("div",_v,[y("span",{class:rt(["countdown-text",m(X.days)])},xe(_(X.date)),3)]),y("div",mv,[y("button",{class:"btn edit-btn",onClick:L=>W(H)},P[7]||(P[7]=[y("span",{class:"icon-edit"},"编辑",-1)]),8,gv),y("button",{class:"btn delete-btn",onClick:L=>$(X.id)},P[8]||(P[8]=[y("span",{class:"icon-delete"},"删除",-1)]),8,yv)])]))),128)),r.value.length===0?(ee(),ie("div",vv,P[9]||(P[9]=[y("p",null,"暂无纪念日，点击上方按钮添加",-1)]))):Ut("",!0)])]))}},Cv=Yt(bv,[["__scopeId","data-v-12685bc5"]]);var Qs={exports:{}},Ev=Qs.exports,Ca;function wv(){return Ca||(Ca=1,function(t,e){(function(n,s){t.exports=s()})(Ev,function(){var n={year:0,month:1,day:2,hour:3,minute:4,second:5},s={};return function(i,r,o){var l,a=function(f,_,g){g===void 0&&(g={});var m=new Date(f),N=function(U,W){W===void 0&&(W={});var B=W.timeZoneName||"short",$=U+"|"+B,Q=s[$];return Q||(Q=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:U,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:B}),s[$]=Q),Q}(_,g);return N.formatToParts(m)},c=function(f,_){for(var g=a(f,_),m=[],N=0;N<g.length;N+=1){var U=g[N],W=U.type,B=U.value,$=n[W];$>=0&&(m[$]=parseInt(B,10))}var Q=m[3],k=Q===24?0:Q,P=m[0]+"-"+m[1]+"-"+m[2]+" "+k+":"+m[4]+":"+m[5]+":000",X=+f;return(o.utc(P).valueOf()-(X-=X%1e3))/6e4},u=r.prototype;u.tz=function(f,_){f===void 0&&(f=l);var g,m=this.utcOffset(),N=this.toDate(),U=N.toLocaleString("en-US",{timeZone:f}),W=Math.round((N-new Date(U))/1e3/60),B=15*-Math.round(N.getTimezoneOffset()/15)-W;if(!Number(B))g=this.utcOffset(0,_);else if(g=o(U,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(B,!0),_){var $=g.utcOffset();g=g.add(m-$,"minute")}return g.$x.$timezone=f,g},u.offsetName=function(f){var _=this.$x.$timezone||o.tz.guess(),g=a(this.valueOf(),_,{timeZoneName:f}).find(function(m){return m.type.toLowerCase()==="timezonename"});return g&&g.value};var h=u.startOf;u.startOf=function(f,_){if(!this.$x||!this.$x.$timezone)return h.call(this,f,_);var g=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return h.call(g,f,_).tz(this.$x.$timezone,!0)},o.tz=function(f,_,g){var m=g&&_,N=g||_||l,U=c(+o(),N);if(typeof f!="string")return o(f).tz(N);var W=function(k,P,X){var H=k-60*P*1e3,L=c(H,X);if(P===L)return[H,P];var x=c(H-=60*(L-P)*1e3,X);return L===x?[H,L]:[k-60*Math.min(L,x)*1e3,Math.max(L,x)]}(o.utc(f,m).valueOf(),U,N),B=W[0],$=W[1],Q=o(B).utcOffset($);return Q.$x.$timezone=N,Q},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(f){l=f}}})}(Qs)),Qs.exports}var Sv=wv();const Iv=lo(Sv);var Js={exports:{}},Tv=Js.exports,Ea;function xv(){return Ea||(Ea=1,function(t,e){(function(n,s){t.exports=s()})(Tv,function(){var n="minute",s=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(r,o,l){var a=o.prototype;l.utc=function(m){var N={date:m,utc:!0,args:arguments};return new o(N)},a.utc=function(m){var N=l(this.toDate(),{locale:this.$L,utc:!0});return m?N.add(this.utcOffset(),n):N},a.local=function(){return l(this.toDate(),{locale:this.$L,utc:!1})};var c=a.parse;a.parse=function(m){m.utc&&(this.$u=!0),this.$utils().u(m.$offset)||(this.$offset=m.$offset),c.call(this,m)};var u=a.init;a.init=function(){if(this.$u){var m=this.$d;this.$y=m.getUTCFullYear(),this.$M=m.getUTCMonth(),this.$D=m.getUTCDate(),this.$W=m.getUTCDay(),this.$H=m.getUTCHours(),this.$m=m.getUTCMinutes(),this.$s=m.getUTCSeconds(),this.$ms=m.getUTCMilliseconds()}else u.call(this)};var h=a.utcOffset;a.utcOffset=function(m,N){var U=this.$utils().u;if(U(m))return this.$u?0:U(this.$offset)?h.call(this):this.$offset;if(typeof m=="string"&&(m=function(Q){Q===void 0&&(Q="");var k=Q.match(s);if(!k)return null;var P=(""+k[0]).match(i)||["-",0,0],X=P[0],H=60*+P[1]+ +P[2];return H===0?0:X==="+"?H:-H}(m),m===null))return this;var W=Math.abs(m)<=16?60*m:m,B=this;if(N)return B.$offset=W,B.$u=m===0,B;if(m!==0){var $=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(B=this.local().add(W+$,n)).$offset=W,B.$x.$localOffset=$}else B=this.utc();return B};var f=a.format;a.format=function(m){var N=m||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return f.call(this,N)},a.valueOf=function(){var m=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*m},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var _=a.toDate;a.toDate=function(m){return m==="s"&&this.$offset?l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():_.call(this)};var g=a.diff;a.diff=function(m,N,U){if(m&&this.$u===m.$u)return g.call(this,m,N,U);var W=this.local(),B=l(m).local();return g.call(W,B,N,U)}}})}(Js)),Js.exports}var Rv=xv();const Dv=lo(Rv),Nv={class:"stats-container"},Av={class:"stats-table"},Ov={__name:"StatsComponent",props:{posts:Array},setup(t){const e=t,n=Bn(()=>{const s={};return e.posts.forEach(i=>{const r=i.timestamp.split(" ")[0];s[r]||(s[r]={yier:!1,bubu:!1}),i.user.name==="一二"?s[r].yier=!0:i.user.name==="布布"&&(s[r].bubu=!0)}),s});return(s,i)=>(ee(),ie("div",Nv,[i[1]||(i[1]=y("h2",null,"统计分析",-1)),y("div",Av,[y("table",null,[i[0]||(i[0]=y("thead",null,[y("tr",null,[y("th",null,"日期"),y("th",null,"一二"),y("th",null,"布布")])],-1)),y("tbody",null,[(ee(!0),ie(we,null,at(n.value,(r,o)=>(ee(),ie("tr",{key:o},[y("td",null,xe(o),1),y("td",{class:rt({active:r.yier})},null,2),y("td",{class:rt({active:r.bubu})},null,2)]))),128))])])])]))}},Mv=Yt(Ov,[["__scopeId","data-v-152414fc"]]),Pv={class:"filter-container"},kv={class:"filter-item"},Lv={class:"filter-item"},Fv=["value"],$v={__name:"FilterComponent",props:{posts:Array},setup(t,{expose:e}){const n=be(""),s=be(""),i=be([]),r=t,o=()=>{s.value="",a()},l=Bn(()=>r.posts.map(c=>c.timestamp.split(" ")[0]).filter((c,u,h)=>h.indexOf(c)===u)),a=()=>{n.value?i.value=l.value.filter(c=>r.posts.some(u=>u.user.name===n.value&&u.timestamp.includes(c))):i.value=[...new Set(l.value)]};return xn(()=>l.value,a,{immediate:!0}),e({selectedIdentity:n,selectedDate:s}),(c,u)=>(ee(),ie("div",Pv,[y("div",kv,[u[3]||(u[3]=y("label",{for:"identity"},"身份筛选：",-1)),ot(y("select",{"onUpdate:modelValue":u[0]||(u[0]=h=>n.value=h),id:"identity",onChange:o},u[2]||(u[2]=[y("option",{value:""},"全部",-1),y("option",{value:"一二"},"一二",-1),y("option",{value:"布布"},"布布",-1)]),544),[[El,n.value]])]),y("div",Lv,[u[5]||(u[5]=y("label",{for:"date"},"时间筛选：",-1)),ot(y("select",{"onUpdate:modelValue":u[1]||(u[1]=h=>s.value=h),id:"date"},[u[4]||(u[4]=y("option",{value:""},"全部",-1)),(ee(!0),ie(we,null,at(i.value,h=>(ee(),ie("option",{key:h,value:h},xe(h),9,Fv))),128))],512),[[El,s.value]])])]))}},Uv=Yt($v,[["__scopeId","data-v-80c044ae"]]),Bv={class:"app-container"},Hv={class:"app-main"},Wv={class:"tab-bar"},Vv={class:"post-area"},jv={class:"post-card"},zv={class:"post-header"},qv=["src"],Gv={class:"post-info"},Yv={class:"post-name"},Kv={class:"post-time"},Qv={class:"post-form"},Jv={class:"post-actions"},Xv={class:"image-upload"},Zv={key:0,class:"image-preview"},eb={class:"image-grid"},tb=["src"],nb={class:"feed-list"},sb={class:"feed-header"},ib=["src"],rb={class:"feed-user-info"},ob={class:"feed-actions"},lb=["onClick"],ab=["onClick"],cb={class:"feed-content"},ub={class:"feed-images"},hb=["src"],fb={class:"feed-footer"},db={class:"comment-section"},pb=["onClick"],_b={class:"comment-list"},mb={class:"comment-user"},gb={class:"comment-text"},yb={class:"comment-input"},vb=["onClick"],bb={class:"stats-area"},Cb={__name:"index",setup(t){const n=fo({apiKey:"AIzaSyBEYS8UtnIdaYA4aZHsFCE3rnSya_DdS8o",authDomain:"yierbubu.firebaseapp.com",projectId:"yierbubu",storageBucket:"yierbubu.firebasestorage.app",messagingSenderId:"745521053033",appId:"1:745521053033:web:57602c1e935aa1cca811f8",measurementId:"G-7TF1KMZJBQ",databaseURL:"https://yierbubu-default-rtdb.asia-southeast1.firebasedatabase.app"}),s=lh(n),i=be("home"),r=be({id:3,name:"访客",avatar:Dn[2]}),o=[{id:1,name:"一二",avatar:Dn[0]},{id:2,name:"布布",avatar:Dn[1]}],l=be([]),a=Pn({content:"",images:[],originalId:null}),c=Pn({content:""}),u=be(!1),h=be(null),f=be(null),_=Bn(()=>{var L,x;let H=l.value;if((L=f.value)!=null&&L.selectedIdentity&&(H=H.filter(ue=>ue.user.name===f.value.selectedIdentity)),(x=f.value)!=null&&x.selectedDate){const ue=new Date(f.value.selectedDate);H=H.filter(ae=>new Date(ae.timestamp).toLocaleString()===ue.toLocaleString())}return H}),g=()=>{u.value=!0};nn.extend(Dv),nn.extend(Iv),nn.tz.setDefault("Asia/Shanghai");const m=H=>nn.tz(H,"Asia/Shanghai").format("YYYY年MM月DD日 HH:MM");_n(()=>{oh(bn(s,"posts"),L=>{const x=L.val(),ue=x?Object.values(x).map(ae=>(ae.comments=ae.comments?Object.values(ae.comments):[],ae)):[];l.value=ue.reverse()},L=>{console.error("获取动态数据失败:",L)});const H=localStorage.getItem("yierbubu-role");H==="yier"?r.value=o[0]:H==="bubu"&&(r.value=o[1])});const N=H=>new Promise((L,x)=>{const ue=new FileReader;ue.onloadend=()=>L(ue.result),ue.onerror=x,ue.readAsDataURL(H)}),U=async H=>{const x=await(await fetch(H)).arrayBuffer();return new Blob([x],{type:"image/jpeg"})},W=async()=>{var ae,V;if(!a.content&&!a.images.length){alert("请输入内容或上传图片");return}const H=await U(r.value.avatar),L=await N(H),x=!!a.originalId,ue={id:x?a.originalId:Date.now(),user:{...r.value,avatar:L},content:a.content,images:a.images,comments:x?((ae=l.value.find(O=>O.id===a.originalId))==null?void 0:ae.comments)||[]:[],timestamp:x?new Date((V=l.value.find(O=>O.id===a.originalId))==null?void 0:V.timestamp).toLocaleString():new Date().toLocaleString(),forgiven:!1};try{x?await ln(bn(s,`posts/${a.originalId}`),ue):await ln(bn(s,`posts/${ue.id}`),ue),B(!0)}catch(O){console.error("发布动态失败:",O),alert("发布失败，请重试")}},B=(H=!1)=>{a.content="",a.images=[],a.originalId=null,u.value=!1,h.value=null,H||(c.content="")},$=H=>{const L=H.target.files;L&&(a.images=[],Array.from(L).forEach(x=>{const ue=new FileReader;ue.onload=ae=>{a.images.push(ae.target.result)},ue.readAsDataURL(x)}))},Q=H=>{a.content=H.content,a.images=(H==null?void 0:H.images)??[],a.originalId=H.id,h.value={...H}},k=async H=>{if(confirm("确定要删除这条动态吗？"))try{await Ky(bn(s,`posts/${H.id}`))}catch(L){console.error("删除动态失败:",L),alert("删除失败，请重试")}},P=async H=>{if(!c.content)return;const L={user:r.value,content:c.content,timestamp:new Date().toLocaleString()};try{await ln(bn(s,`posts/${H.id}/comments/${Date.now()}`),L),c.content=""}catch(x){console.error("添加评论失败:",x)}},X=H=>{H.showComments=!H.showComments};return(H,L)=>(ee(),ie("div",Bv,[y("main",Hv,[y("div",Wv,[y("button",{onClick:L[0]||(L[0]=x=>i.value="home"),class:rt({active:i.value==="home"})},"说说主页",2),y("button",{onClick:L[1]||(L[1]=x=>i.value="stats"),class:rt({active:i.value==="stats"})},"统计分析",2)]),Ge(Uv,{ref_key:"filterComponent",ref:f,posts:l.value},null,8,["posts"]),ot(y("div",null,[y("div",Vv,[y("div",jv,[y("div",zv,[y("img",{src:r.value.avatar,alt:"头像",class:"post-avatar"},null,8,qv),y("div",Gv,[y("div",Yv,xe(r.value.name),1),y("span",Kv,xe(m(new Date().toLocaleString())),1)])]),y("div",Qv,[ot(y("textarea",{"onUpdate:modelValue":L[2]||(L[2]=x=>a.content=x),placeholder:"今天有什么值得记录的事？",class:"post-textarea",onFocus:g},null,544),[[ls,a.content]]),y("div",Jv,[ot(y("div",Xv,[y("input",{type:"file",id:"post-image",onChange:$,multiple:"",class:"hidden-input"},null,32),L[4]||(L[4]=y("label",{for:"post-image",class:"upload-btn"},[y("i",{class:"fa fa-image"}),Sc(" 上传图片 ")],-1))],512),[[Hs,u.value]]),y("button",{onClick:W,class:"publish-btn"},"发布")]),a.images.length?(ee(),ie("div",Zv,[y("div",eb,[(ee(!0),ie(we,null,at(a.images,x=>(ee(),ie("img",{src:x,alt:"预览",class:"preview-img",key:x},null,8,tb))),128))])])):Ut("",!0)])])]),y("div",nb,[(ee(!0),ie(we,null,at(_.value,x=>{var ue;return ee(),ie("div",{class:"feed-card",key:x.id},[y("div",sb,[y("img",{src:x.user.avatar,alt:"头像",class:"feed-avatar"},null,8,ib),y("div",rb,[y("div",null,xe(x.user.name),1),y("span",null,xe(m(x.timestamp)),1)]),y("div",ob,[x.user.id===r.value.id?(ee(),ie("button",{key:0,onClick:ae=>Q(x)},L[5]||(L[5]=[y("i",{class:"fa fa-pen"},null,-1)]),8,lb)):Ut("",!0),x.user.id===r.value.id?(ee(),ie("button",{key:1,onClick:ae=>k(x)},L[6]||(L[6]=[y("i",{class:"fa fa-trash"},null,-1)]),8,ab)):Ut("",!0)])]),y("div",cb,[y("p",null,xe(x.content),1),y("div",ub,[(ee(!0),ie(we,null,at(x.images,ae=>(ee(),ie("img",{src:ae,alt:"动态图片",class:"feed-img",key:ae},null,8,hb))),128))])]),y("div",fb,[y("div",db,[y("button",{onClick:ae=>X(x)},xe(((ue=x.comments)==null?void 0:ue.length)||0)+"条留言，点击留言 ",9,pb),y("div",_b,[(ee(!0),ie(we,null,at(x.comments,(ae,V)=>(ee(),ie("div",{class:"comment",key:V},[y("span",mb,xe(ae.user.name)+":",1),y("span",gb,xe(ae.content),1)]))),128)),ot(y("div",yb,[ot(y("textarea",{"onUpdate:modelValue":L[3]||(L[3]=ae=>c.content=ae),placeholder:"留下你的评论...",class:"comment-textarea"},null,512),[[ls,c.content]]),y("button",{onClick:ae=>P(x)},"发表",8,vb)],512),[[Hs,x.showComments]])])])])])}),128))])],512),[[Hs,i.value==="home"]]),ot(y("div",bb,[Ge(Mv,{posts:l.value},null,8,["posts"])],512),[[Hs,i.value==="stats"]])])]))}},Eb=Yt(Cb,[["__scopeId","data-v-2587c2cb"]]),wb=["src"],Sb={class:"name"},Ib={class:"description"},Tb={__name:"RoleCard",props:{role:Object,selectedRole:String},emits:["select"],setup(t,{emit:e}){const n=t,s=e,i=()=>{s("select",n.role.id)};return(r,o)=>(ee(),ie("div",{class:rt(["role-card",[{selected:t.role.id===t.selectedRole}]]),onClick:i},[y("img",{src:t.role.icon,class:"icon",width:"36"},null,8,wb),y("div",Sb,xe(t.role.name),1),y("div",Ib,xe(t.role.description),1)],2))}},xb=Yt(Tb,[["__scopeId","data-v-e177fee1"]]),Rb={key:0,class:"modal-overlay"},Db={class:"role-selection-modal"},Nb={class:"modal-content"},Ab={class:"role-cards"},Ob={__name:"RoleSelect",setup(t){const e=be(!1),n=be([{id:"yier",name:"一二",icon:Dn[0],description:"公主专属身份"},{id:"bubu",name:"布布",icon:Dn[1],description:"王子专属身份"},{id:"guest",name:"访客",icon:Dn[2],description:"访客身份"}]),s=be(null);_n(()=>{const o=localStorage.getItem("yierbubu-role"),l=localStorage.getItem("yierbubu-role-time");o?o==="guest"?e.value=!1:l&&((new Date().getTime()-new Date(l).getTime())/(1e3*60*60*24)>7?(localStorage.removeItem("yierbubu-role"),localStorage.removeItem("yierbubu-role-time"),e.value=!0):e.value=!1):e.value=!0}),xn(e,o=>{o?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")});const i=o=>{s.value=o},r=()=>{s.value?(localStorage.setItem("yierbubu-role",s.value),localStorage.setItem("yierbubu-role-time",new Date().toISOString()),e.value=!1):alert("请选择一个身份")};return(o,l)=>e.value?(ee(),ie("div",Rb,[y("div",Db,[y("div",Nb,[l[0]||(l[0]=y("h3",{class:"modal-title"},"请选择您的身份",-1)),y("div",Ab,[(ee(!0),ie(we,null,at(n.value,a=>(ee(),os(xb,{key:a.id,role:a,selectedRole:s.value,onSelect:i},null,8,["role","selectedRole"]))),128))]),y("button",{class:"confirm-button",onClick:r},"确定")])])])):Ut("",!0)}},Mb=Yt(Ob,[["__scopeId","data-v-28cf2e2d"]]),Pb={__name:"App",setup(t){const e=be(0);return xn(e,n=>{localStorage.setItem("yierbubu-activeIndex",n)}),_n(()=>{e.value=Number(localStorage.getItem("yierbubu-activeIndex"))||0}),(n,s)=>(ee(),ie(we,null,[y("div",null,[Ge(Pd),Ge(Od,{activeIndex:e.value,"onUpdate:activeIndex":s[0]||(s[0]=i=>e.value=i)},null,8,["activeIndex"]),e.value===0?(ee(),os(op,{key:0})):Ut("",!0),e.value===1?(ee(),os(Eb,{key:1})):Ut("",!0),e.value===2?(ee(),os(Cv,{key:2})):Ut("",!0)]),Ge(Mb)],64))}};xd(Pb).mount("#app");
