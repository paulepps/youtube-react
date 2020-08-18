import React from "react";
import { bindActionCreators } from "redux";
import * as watchActions from "../../store/actions/watch";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import { getSearchParam } from "../../services/url";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import WatchContent from "./WatchContent/WatchContent";

export class Watch extends React.Component {
  render() {
    const videoId = this.getVideoId();
    return (
      <WatchContent videoId={videoId} />
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
