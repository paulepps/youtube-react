import React from "react";
import "./Home.scss";
import { VideoGrid } from "../../components/VideoGrid/VideoGrid";
import { SideBar } from '../SideBar/SideBar';

export const Home = () => {
    return (
        <>
        <SideBar />
            <div className="home">
                    <VideoGrid title="Trending" />
                    <VideoGrid title="Autos & Vehicles" hideDivider={true} />
            </div>
        </>
    );
};
