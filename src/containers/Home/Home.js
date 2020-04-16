import React from "react";
import "./Home.scss";
import { VideoGrid } from "../../components/VideoGrid/VideoGrid";

export const Home = () => {
    return (
        <>
            <div className="home">
                    <VideoGrid title="Trending" />
                    <VideoGrid title="Autos & Vehicles" hideDivider={true} />
            </div>
        </>
    );
};
