import{S as Q,i as w,s as x,K as S,U as F,k as A,a as $,l as L,m as H,c as ee,h as R,V as M,b as te,C as U,W as k,D as O,L as W,M as D,N as y,X as G,Y as P,f as j,t as B,Z as ne,_ as q,$ as le,a3 as ae,o as ie,a0 as se,H as N}from"./index-0280c2c9.js";import{_ as re,a as T,M as ue,c as V,u as K,f as oe}from"./useActions-d72238ee.js";import{p as X,e as Y}from"./prefixFilter-4c6b67e2.js";/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var fe={ROOT:"mdc-form-field"},ce={LABEL_SELECTOR:".mdc-form-field > label"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var de=function(n){re(t,n);function t(a){var s=n.call(this,T(T({},t.defaultAdapter),a))||this;return s.click=function(){s.handleClick()},s}return Object.defineProperty(t,"cssClasses",{get:function(){return fe},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var a=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){a.adapter.deactivateInputRipple()})},t}(ue);const _e=n=>({}),Z=n=>({});function me(n){let t,a,s,m,b,p,o,h,v;const I=n[13].default,r=S(I,n,n[12],null),g=n[13].label,u=S(g,n,n[12],Z);let d=[{for:n[4]},X(n[10],"label$")],_={};for(let e=0;e<d.length;e+=1)_=F(_,d[e]);let c=[{class:b=V({[n[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":n[2]==="end","mdc-form-field--nowrap":n[3]})},Y(n[10],["label$"])],f={};for(let e=0;e<c.length;e+=1)f=F(f,c[e]);return{c(){t=A("div"),r&&r.c(),a=$(),s=A("label"),u&&u.c(),this.h()},l(e){t=L(e,"DIV",{class:!0});var i=H(t);r&&r.l(i),a=ee(i),s=L(i,"LABEL",{for:!0});var E=H(s);u&&u.l(E),E.forEach(R),i.forEach(R),this.h()},h(){M(s,_),M(t,f)},m(e,i){te(e,t,i),r&&r.m(t,null),U(t,a),U(t,s),u&&u.m(s,null),n[14](s),n[15](t),o=!0,h||(v=[k(m=K.call(null,s,n[5])),k(p=K.call(null,t,n[0])),k(n[9].call(null,t)),O(t,"SMUIGenericInput:mount",n[16]),O(t,"SMUIGenericInput:unmount",n[17])],h=!0)},p(e,[i]){r&&r.p&&(!o||i&4096)&&W(r,I,e,e[12],o?y(I,e[12],i,null):D(e[12]),null),u&&u.p&&(!o||i&4096)&&W(u,g,e,e[12],o?y(g,e[12],i,_e):D(e[12]),Z),M(s,_=G(d,[(!o||i&16)&&{for:e[4]},i&1024&&X(e[10],"label$")])),m&&P(m.update)&&i&32&&m.update.call(null,e[5]),M(t,f=G(c,[(!o||i&14&&b!==(b=V({[e[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":e[2]==="end","mdc-form-field--nowrap":e[3]})))&&{class:b},i&1024&&Y(e[10],["label$"])])),p&&P(p.update)&&i&1&&p.update.call(null,e[0])},i(e){o||(j(r,e),j(u,e),o=!0)},o(e){B(r,e),B(u,e),o=!1},d(e){e&&R(t),r&&r.d(e),u&&u.d(e),n[14](null),n[15](null),h=!1,ne(v)}}}let pe=0;function ge(n,t,a){const s=["use","class","align","noWrap","inputId","label$use","getElement"];let m=q(t,s),{$$slots:b={},$$scope:p}=t;const o=oe(le());let{use:h=[]}=t,{class:v=""}=t,{align:I="start"}=t,{noWrap:r=!1}=t,{inputId:g="SMUI-form-field-"+pe++}=t,{label$use:u=[]}=t,d,_,c,f;ae("SMUI:generic:input:props",{id:g}),ie(()=>(_=new de({activateInputRipple:()=>{f&&f.activateRipple()},deactivateInputRipple:()=>{f&&f.deactivateRipple()},deregisterInteractionHandler:(l,C)=>{c.removeEventListener(l,C)},registerInteractionHandler:(l,C)=>{c.addEventListener(l,C)}}),_.init(),()=>{_.destroy()}));function e(){return d}function i(l){N[l?"unshift":"push"](()=>{c=l,a(7,c)})}function E(l){N[l?"unshift":"push"](()=>{d=l,a(6,d)})}const z=l=>a(8,f=l.detail),J=()=>a(8,f=void 0);return n.$$set=l=>{t=F(F({},t),se(l)),a(10,m=q(t,s)),"use"in l&&a(0,h=l.use),"class"in l&&a(1,v=l.class),"align"in l&&a(2,I=l.align),"noWrap"in l&&a(3,r=l.noWrap),"inputId"in l&&a(4,g=l.inputId),"label$use"in l&&a(5,u=l.label$use),"$$scope"in l&&a(12,p=l.$$scope)},[h,v,I,r,g,u,d,c,f,o,m,e,p,b,i,E,z,J]}class ve extends Q{constructor(t){super(),w(this,t,ge,me,x,{use:0,class:1,align:2,noWrap:3,inputId:4,label$use:5,getElement:11})}get getElement(){return this.$$.ctx[11]}}export{ve as F};
