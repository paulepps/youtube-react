import React from "react";
import "./Watch.scss";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";

export const Watch = () => {
    return (
        <>
            <VideoPreview horizontal={true} />
            <VideoPreview />
        </>
    );
};
