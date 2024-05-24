import React, { useEffect, useState } from "react";
import Navbar from "../../UniversalComponents/Navbar/Navbar";
import Footer from "../../UniversalComponents/Footer/Footer.jsx";
import "./ShopServices.css";
import ServiceBox from "./ServiceBox";
import RepairShopBanner from "../Payment/RepairShopBanner.jsx";
import { useParams } from "react-router-dom";
import { db } from "../../firebase.js";
import { collection, getDocs, where, query } from "firebase/firestore";


function ShopServices() {
  const { searchID } = useParams();
  const [searchResult, setSearchResult] = useState([]);

  //bikin function onclick disini

  useEffect(() => {
    const searchData = async () => {
      try {
        const dbQuery = query(
          collection(db, "RepairShops"),
          where("title", ">=", searchID),
          where("title", "<=", searchID + "\uf8ff")
        );
        const dbFound = await getDocs(dbQuery);
        let shops = [];

        for (const doc of dbFound.docs) {
          const shop = doc.data();
          const shopServicesRef = await getDocs(
            collection(doc.ref, "Services")
          );
          let shopServices = [];

          for (const shopDoc of shopServicesRef.docs) {
            const service = shopDoc.data();
            shopServices.push({
              serviceTitle: service.title,
              servicePrice: service.price,
              priceText: service.subtitle,
              choice:service.choice,
            });
          }

          shops.push({
            img: shop.img,
            rating: shop.rating,
            service1: shop.service1,
            service2: shop.service2,
            service3: shop.service3,
            star: shop.star,
            subtitle: shop.subtitle,
            title: shop.title,
            services: shopServices,
          });
        }

        setSearchResult(shops);
      } catch (e) {
        console.log("No data fetched, Error found :", e);
      }
    };

    searchData();
  }, [searchID]);

  const firstShop = searchResult.length > 0 ? searchResult[0] : null;

  return (
    <div>
      <Navbar />
      {firstShop && (
        <RepairShopBanner
          title={firstShop.title}
          rating={firstShop.rating}
        />
      )}
      <h2 className="services-heading">SERVICES</h2>
      <div className="shop-services-container">
        {searchResult.map((shop, shopIndex) =>
          shop.services.map((service, serviceIndex) => (
            <ServiceBox
              //panggil function onclick disini
              serviceName={service.serviceTitle}
              imageUrl="/gambarservices/OilService.jpg"
              priceStandard={service.servicePrice}
              key={`${shopIndex}-${serviceIndex}`}
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ShopServices;
