import{j as e,d as x}from"./index-7S1YI_WY.js";import{e as b,r as v,L as j}from"./vendor-react-D2XI2PP0.js";import{N as E,F as y}from"./Footer-BkaXL5t4.js";import{R as w}from"./RepairShopBanner-CMkoPsas.js";/* empty css               */import{d as C,u as D,q as O,h as g,w as S,j as N}from"./vendor-firebase-CAApZDyK.js";function T({handleClick:o,serviceName:n,imageUrl:h,priceStandard:p,isSelected:i}){return e.jsxs("div",{className:`serv-card ${i?"selected":""}`,onClick:o,children:[e.jsx("div",{className:"serv-card-top",children:e.jsx("img",{src:h,className:"serv-card-img"})}),e.jsxs("div",{className:"serv-card-bottom",children:[e.jsx("h1",{className:"serv-card-title",children:n}),e.jsx("h2",{children:"PRICE"}),e.jsx("p",{className:"serv-card-services1",children:p})]})]})}function B(){const{searchID:o}=b(),[n,h]=v.useState([]);v.useEffect(()=>{window.scrollTo(0,0)},[]);const p=async(a,r,c)=>{try{const t=C(x,"RepairShops",a,"Services",r);await D(t,{choice:!c}),console.log(`Service ${r} in shop ${a} updated successfully.`),h(l=>l.map(s=>s.id===a?{...s,services:s.services.map(d=>d.id===r?{...d,choice:!c}:d)}:s))}catch(t){console.log("Error updating service choice:",t)}};v.useEffect(()=>{(async()=>{try{const r=O(g(x,"RepairShops"),S("title",">=",o),S("title","<=",o+"")),c=await N(r);let t=[];for(const l of c.docs){const s=l.data(),d=await N(g(l.ref,"Services"));let u=[];for(const f of d.docs){const m=f.data();u.push({id:f.id,serviceTitle:m.title,servicePrice:m.price,priceText:m.subtitle,serviceImg:m.img,choice:!1})}t.push({id:l.id,img:s.img,rating:s.rating,service1:s.service1,service2:s.service2,service3:s.service3,star:s.star,subtitle:s.subtitle,title:s.title,services:u})}h(t)}catch(r){console.log("No data fetched, Error found :",r)}})()},[o]);const i=n.length>0?n[0]:null,R=i?`/payment/${i.title}`:"/payment";return e.jsxs("div",{children:[e.jsx(E,{}),i&&e.jsx(w,{title:i.title,rating:i.rating}),e.jsx("h2",{className:"services-heading",children:"SERVICES"}),e.jsx("div",{className:"shop-services-container",children:n.map((a,r)=>a.services.map((c,t)=>e.jsx(T,{handleClick:()=>p(a.id,c.id,c.choice),serviceName:c.serviceTitle,imageUrl:c.serviceImg,priceStandard:c.servicePrice,isSelected:c.choice},`${r}-${t}`)))}),e.jsxs("div",{className:"finishOrder-container",children:[e.jsx(j,{to:R,className:"finishOrder-btn",children:"ORDER"}),e.jsx(j,{target:"_blank",to:"https://wa.me/6282168682109?text=Hi%20I'd%20like%20help%20about%20OTOCARE",className:"finishOrder-btn",children:"CONTACT"})]}),e.jsx("div",{className:"Contact-btns"}),e.jsx(y,{})]})}export{B as default};