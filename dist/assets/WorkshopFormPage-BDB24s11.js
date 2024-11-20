import{a as j,d as u,j as e}from"./index-7S1YI_WY.js";import{b as g,r as n}from"./vendor-react-D2XI2PP0.js";import{N as y,F as N}from"./Footer-BkaXL5t4.js";import{b as S,d as f,f as P,h as k}from"./vendor-firebase-CAApZDyK.js";function D(){const i=g(),[d,m]=n.useState(null),[t,c]=n.useState({orderShop:"",orderList:[{serviceTitle:"",servicePrice:0}],orderPaymentMethod:"Pay at Merchant"});n.useEffect(()=>{const s=j.onAuthStateChanged(async r=>{if(r)try{const a=(await S(f(u,"Users",r.uid))).data();if((a==null?void 0:a.Role)!=="Workshop"){alert("Access denied. Only workshop accounts can access this page."),i("/");return}m(r),a!=null&&a.UserName&&c(x=>({...x,orderShop:a.UserName}))}catch(o){console.error("Error checking user role:",o),i("/")}else i("/login")});return()=>s()},[i]);const l=(s,r,o)=>{const a=[...t.orderList];a[s]={...a[s],[r]:r==="servicePrice"?Number(o):o},c({...t,orderList:a})},p=()=>{c({...t,orderList:[...t.orderList,{serviceTitle:"",servicePrice:0}]})},v=s=>{if(t.orderList.length>1){const r=t.orderList.filter((o,a)=>a!==s);c({...t,orderList:r})}},h=()=>t.orderList.reduce((s,r)=>s+Number(r.servicePrice),0),b=async s=>{if(s.preventDefault(),!!d)try{const r={orderShop:t.orderShop,orderList:t.orderList.map(o=>({serviceTitle:o.serviceTitle,servicePrice:Number(o.servicePrice)})),orderPrice:h(),orderPaymentMethod:t.orderPaymentMethod,orderDate:new Date,userUID:d.uid};console.log("Submitting order:",r),await P(k(u,"Orders"),r),alert("Order created successfully!"),i("/workshopOrder")}catch(r){console.error("Error creating order:",r),alert("Error creating order: "+r.message)}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(y,{})}),e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"background"}),e.jsx("div",{className:"background-image"}),e.jsx("div",{className:"workshop-form-wrapper",children:e.jsxs("div",{className:"workshop-form-box",children:[e.jsx("h2",{children:"Create New Order"}),e.jsxs("form",{onSubmit:b,children:[e.jsx("label",{htmlFor:"workshopName",children:"Workshop Name"}),e.jsx("input",{type:"text",id:"workshopName",value:t.orderShop,onChange:s=>c({...t,orderShop:s.target.value}),required:!0,placeholder:"Enter workshop name"}),e.jsxs("div",{className:"services-section",children:[e.jsx("label",{children:"Services"}),t.orderList.map((s,r)=>e.jsxs("div",{className:"service-input-group",children:[e.jsx("input",{type:"text",value:s.serviceTitle,onChange:o=>l(r,"serviceTitle",o.target.value),placeholder:"Service name",required:!0}),e.jsx("input",{type:"number",value:s.servicePrice,onChange:o=>l(r,"servicePrice",o.target.value),placeholder:"Price",required:!0}),t.orderList.length>1&&e.jsx("button",{type:"button",onClick:()=>v(r),className:"remove-btn",children:"Remove"})]},r)),e.jsx("button",{type:"button",onClick:p,className:"add-btn",children:"Add Service"})]}),e.jsx("label",{htmlFor:"paymentMethod",children:"Payment Method"}),e.jsxs("select",{id:"paymentMethod",value:t.orderPaymentMethod,onChange:s=>c({...t,orderPaymentMethod:s.target.value}),children:[e.jsx("option",{value:"Pay at Merchant",children:"Pay at Merchant"}),e.jsx("option",{value:"QRIS",children:"QRIS"}),e.jsx("option",{value:"Debit/Credit",children:"Debit/Credit"})]}),e.jsx("div",{className:"total-section",children:e.jsxs("p",{children:["Total: Rp ",h()]})}),e.jsx("button",{type:"submit",className:"submit-btn",children:"Create Order"})]})]})})]}),e.jsx(N,{})]})}export{D as default};