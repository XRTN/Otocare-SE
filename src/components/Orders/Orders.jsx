import React, { useState, useEffect } from "react";
import "../Orders/Orders.css";
import Navbar from "../../UniversalComponents/Navbar/Navbar";
import Footer from "../../UniversalComponents/Footer/Footer";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db, auth } from "../../firebase";
import OrderCardContainer from "./OrderCardContainer";

function Orders() {
    const [orders, setOrders] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            if (user) {
                fetchOrders(user.uid);
            }
        });
        return () => unsubscribe();
    }, []);

    const fetchOrders = async (uid) => {
        try {
            const collectionRef = collection(db, "Orders");
            const q = query(
                collectionRef,
                where("userUID", "==", uid),
                orderBy("orderDate", "desc")
            );
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

    if (!currentUser) {
        return (
            <>
                <Navbar />
                <div className="orders-container">
                    <div className="orders-wrapper">
                        <div className="orders-title">
                            <h1>Please login to view your orders</h1>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="orders-container">
                <div className="orders-wrapper">
                    <div className="orders-title">
                        <h1>YOUR ORDERS (NEWEST TO OLDEST)</h1>
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