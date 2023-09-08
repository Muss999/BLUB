import React from "react";
import GetPremium from "../components/buy_form/GetPremium";
import SideBar from "../components/sideBar/SideBar";

const GetPremiumPage = () => {
    return (
        <>
            <div style={{ display: "flex" }}>
                <SideBar />
                <div style={{ marginLeft: "200px" }}>
                    <GetPremium />
                </div>
            </div>
        </>
    );
};

export default GetPremiumPage;
