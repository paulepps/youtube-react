import React from "react";
import { bindActionCreators } from "redux";
import * as watchActions from "../../store/actions/watch";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import { getSearchParam } from "../../services/url";
import "./Watch.scss";
import { RelatedVideos } from "../../components/RelatedVideos/RelatedVideos";
import { Video } from "../../components/Video/Video";
import { VideoMetadata } from "../../components/VideoMetadata/VideoMetadata";
import { VideoInfoBox } from "../../components/VideoInfoBox/VideoInfoBox";
import { Comments } from "../Comments/Comments";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export class Watch extends React.Component {
  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="-7fuHEEmEjs" />
        <VideoMetadata className="metadata" viewcount={1000} />
        <VideoInfoBox className="video-info-box" />
        <Comments className="comments" />
        <RelatedVideos className="relatedVideos" />
      </div>
    );
  }
  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  getVideoId() {
    return getSearchParam(this.props.location, "v");
  }

  fetchWatchContent() {
    const videoId = this.getVideoId();
    console.log("V", videoId)
    if (!videoId) {
      this.props.history.push("/");
    }
    this.props.fetchWatchDetails(videoId, this.props.channelId);
  }
}

function mapStateToProps(state, props) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchWatchDetails = watchActions.details.request;
  return bindActionCreators(
    { fetchWatchDetails },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));
