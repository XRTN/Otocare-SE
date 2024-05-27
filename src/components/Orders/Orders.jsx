import React, { useState, useEffect } from "react"; // Ensure useEffect is imported
import "../Orders/Orders.css";
import Navbar from "../../UniversalComponents/Navbar/Navbar";
import Footer from "../../UniversalComponents/Footer/Footer";
import { collection, getDocs,query, orderBy } from "firebase/firestore";  
import { db } from "../../firebase"; 
import OrderCardContainer from "./OrderCardContainer";

function Orders() {
    const [orders, setOrders] = useState([]);  

    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const collectionRef = collection(db, "Orders");
          const q = query(collectionRef, orderBy("orderDate", "desc"));
          const snapshot = await getDocs(q);
          let items = [];
  
          snapshot.forEach((doc) => {
            items.push(doc.id); 
          });
  
          setOrders(items);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchOrders();
    }, []);
  
  return (
    <>
      <Navbar />
      <div className="orders-container">
        <div className="orders-wrapper">
          <div className="orders-title">
            <h1>YOUR ORDERS (NEWEST TO OLDEST) </h1>
          </div>

          <div className="cards-container">
            <div className="cards-wrapper">
              {orders.map((orderId) => (
                <OrderCardContainer key={orderId} docId={orderId} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Orders;
