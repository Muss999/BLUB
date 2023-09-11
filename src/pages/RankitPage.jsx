import React from "react";
import Rankit from "../components/rankit/Rankit";
import SideBar from "../components/sideBar/SideBar";

const RankitPage = () => {
    return (
        <div style={{ display: "flex" }}>
            <SideBar />
            <div style={{ width: "70vw", marginLeft: "20vw" }}>
                <Rankit />
            </div>
        </div>
    );
};

export default RankitPage;
