import{ag as h,d as A,ad as m,I as g,N as o,ac as _}from"./entry.63243375.js";const w=["p","h1","h2","h3","h4","h5","h6","li"];function f(r,e){return r.type===e||typeof r.type=="object"&&r.type.tag===e||r.tag===e}function a(r){return f(r,"text")||f(r,h)}function p(r){var e;return Array.isArray(r.children)||typeof r.children=="string"?r.children:typeof((e=r.children)==null?void 0:e.default)=="function"?r.children.default():[]}function l(r){if(!r)return"";if(Array.isArray(r))return r.map(l).join("");if(a(r))return r.children||r.value||"";const e=p(r);return Array.isArray(e)?e.map(l).filter(Boolean).join(""):""}function c(r,e=["p"]){if(Array.isArray(r))return r.flatMap(n=>c(n,e));let t=r;return e.some(n=>n==="*"||f(r,n))&&(t=p(r)||r,!Array.isArray(t)&&w.some(n=>f(r,n))&&(t=[t])),t}function y(r,e=["p"]){return r=Array.isArray(r)?r:[r],e.length?r.flatMap(t=>y(c(t,[e[0]]),e.slice(1))).filter(t=>!(a(t)&&l(t).trim()==="")):r}function T(r,e=["p"]){return y(r,e).reduce((t,n)=>(a(n)?typeof t[t.length-1]=="string"?t[t.length-1]+=n.children:t.push(n.children):t.push(n),t),[])}const x=A({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(r){const{parent:e}=_(),{default:t}=m(),n=g(()=>typeof r.unwrap=="string"?r.unwrap.split(" "):["*"]);return{fallbackSlot:t,tags:n,parent:e}},render({use:r,unwrap:e,fallbackSlot:t,tags:n,parent:i}){var s;try{let u=r;return typeof r=="string"&&(u=(i==null?void 0:i.slots[r])||((s=i==null?void 0:i.parent)==null?void 0:s.slots[r]),console.warn(`Please set :use="$slots.${r}" in <MDCSlot> component to enable reactivity`)),u?e?T(u(),n):[u()]:t?t():o("div")}catch{return o("div")}}}),S=x;export{S as _,T as f,c as u};
