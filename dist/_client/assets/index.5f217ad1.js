import{h as l,j as a,R as d,B as f,u as p,a as m}from"./vendor.4e76ed17.js";const h=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};h();function s(...i){const o=s.route;return l(...i,o)}s.route={trigger:{type:"HTTP",method:"GET",path:"/api/getDate"},functionId:"getDate",useInputMetadata:!1};const r=a.exports.jsx,g=()=>r("div",{children:"A"}),y=()=>r("div",{children:"B"}),R=()=>r("div",{children:"C"}),v=[{path:"/",element:r(g,{})},{path:"/b",element:r(y,{})},{path:"/c",element:r(R,{})}];function B(){return p(()=>s()),m(v)}d.render(r(f,{children:r(B,{})}),document.getElementById("root"));
