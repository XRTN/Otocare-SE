import{j as r,d as m}from"./index-7S1YI_WY.js";import{r as t}from"./vendor-react-D2XI2PP0.js";import{d as u,b as x}from"./vendor-firebase-CAApZDyK.js";function j({orderId:d,orderShop:e,orderPrice:s,orderPaymentMethod:o,orderDate:c}){return r.jsx(r.Fragment,{children:r.jsx("div",{className:"orderCard-container",children:r.jsxs("div",{className:"orderCard-wrapper",children:[r.jsx("div",{className:"orderCard-top",children:r.jsxs("h1",{className:"orderCard-title",children:["ORDER ID : ",d]})}),r.jsxs("div",{className:"orderCard-bottom",children:[r.jsxs("div",{className:"orderCard-bottom-left",children:[r.jsx("h1",{className:"orderCard-shop",children:e}),r.jsxs("p",{className:"orderCard-status",children:[" STATUS : PAYMENT CONFIRMED (",o,")"]}),r.jsxs("p",{className:"orderCard-date",children:["Date : ",c]})]}),r.jsx("div",{className:"orderCard-bottom-mid",children:r.jsxs("p",{children:["RP. ",s]})}),r.jsx("div",{className:"orderCard-bottom-right",children:r.jsx("button",{className:"orderCard-btn",children:"MESSAGE MECHANIC"})})]})]})})})}function N({docId:d}){const[e,s]=t.useState(null),[o,c]=t.useState(!0),[i,l]=t.useState(null);return t.useEffect(()=>{(async()=>{try{const n=u(m,"Orders",d),h=await x(n);if(h.exists()){const a=h.data();s({orderShop:a.orderShop,orderPrice:a.orderPrice,orderPaymentMethod:a.orderPaymentMethod,orderDate:a.orderDate.toDate().toLocaleString(),userUID:a.userUID})}else l("No such document!")}catch(n){l("Error fetching document: "+n.message)}c(!1)})()},[d]),o?r.jsx("div",{children:"Loading..."}):i?r.jsx("div",{children:i}):e?r.jsx(j,{orderId:d,orderShop:e.orderShop,orderPrice:e.orderPrice,orderPaymentMethod:e.orderPaymentMethod,orderDate:e.orderDate,userUID:e.userUID}):r.jsx("div",{children:"No data"})}export{N as O};