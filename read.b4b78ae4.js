function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequireb7c0;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequireb7c0=a),a.register("kyEFX",(function(t,r){var n,a;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"2zqmF":"read.b4b78ae4.js","kqMTO":"icon.a66ccba6.svg","j7NJQ":"favorite.facb35d0.js"}')),a("iNfi8"),a("6m6bG"),a("dvsPb"),a("dvsPb"),a("c4a1C");var o=a("2ltYP"),s=a("h5mQC"),l=a("idTct");const i="readNews",d="favoriteNews",c=document.querySelector(".date-block"),u=document.querySelector(".errorRequest");var f;f=new URL(a("kyEFX").resolve("kqMTO"),import.meta.url).toString();const g=new URL(f);function v(e){let t=(0,s.loadLS)(e),r="0000/00/00";if(!t)return;o.arrLastData.length=0,o.arrLastData.push(...t),u.classList.add("visually-hidden"),c.classList.remove("visually-hidden"),r=t[0].readDate,t.push({readDate:"0"});const n=[];t.forEach((e=>{if(r!==e.readDate){const t=document.createElement("div");t.innerHTML=`<span class="btn-span">${r}</span>\n                                    <svg class="icon-down-read-pg icon-rotate" width="15" height="15">\n                                         <use href="${g}#icon-arrow-down"></use>\n                                    </svg>`,c.append(t);const a=document.createElement("UL");t.classList.add("date-title"),a.classList.add("gallery"),a.classList.add("visually-hidden"),a.innerHTML=n.map(o.createCard).join(""),c.append(a),r=e.readDate,n.length=0}n.push(e)})),(0,l.checkFavorites)(d),t.pop(),(0,s.loadLS)(i,t)}window.addEventListener("load",(()=>{v(i)}));document.querySelector("#readNews").addEventListener("click",l.togleFaforite);const m=document.getElementById("readNews");console.log("🚀 ~ dateBlockContainer:",m),m.addEventListener("click",(function(e){e.target.classList.contains("date-title")&&(e.target.nextSibling.classList.toggle("visually-hidden"),console.log(e.target.nextSibling),console.log("Hello"),e.target.classList.toggle("rotate"))}));const p="readNews",h="foundNews",L=JSON.parse(localStorage.getItem(p)),y=document.querySelector(".errorRequest"),w=document.querySelector(".search-form"),b=document.querySelector(".date-block");w.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.searchQuery.value.trim();if(!Boolean(t))return console.log("єто ф-ция onSearch"),b.innerHTML="",void v(p);let r=[];if(L.map((({id:e,section:n,imgUrl:a,title:o,abstract:s,newDateStr:l,url:i,readDate:d})=>{o.toLowerCase().includes(t.toLowerCase())&&r.push({id:`${e}`,url:`${i}`,title:`${o}`,section:`${n}`,abstract:`${s}`,newDateStr:`${l}`,imgUrl:`${a}`,readDate:`${d}`})})),r.length>0){b.innerHTML="",localStorage.setItem(h,JSON.stringify(r)),v(h);const e=document.querySelector(".gallery"),t=document.querySelector(".date-title");e.classList.remove("visually-hidden"),t.classList.add("rotate")}0===r.length&&(y.classList.remove("visually-hidden"),b.classList.add("visually-hidden"))}));
//# sourceMappingURL=read.b4b78ae4.js.map
