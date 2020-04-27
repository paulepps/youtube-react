import React from "react";
import "./Watch.scss";
import { RelatedVideos } from "../../components/RelatedVideos/RelatedVideos";
import { Video } from "../../components/Video/Video";
import { VideoMetadata } from "../../components/VideoMetadata/VideoMetadata";
import { Image, Button } from "semantic-ui-react";
import { VideoInfoBox } from "../../components/VideoInfoBox/VideoInfoBox";
import { Comments } from "../Comments/Comments";

export const Watch = () => {
    return (
        <div className="watch-grid">
            <Video className="video" id="-7fuHEEmEjs" />
            <VideoMetadata className="metadata" viewcount={1000} />
            <VideoInfoBox className="video-info-box" />
            <Comments className="comments" />
            <RelatedVideos className="relatedVideos" />
        </div>
    );
};
