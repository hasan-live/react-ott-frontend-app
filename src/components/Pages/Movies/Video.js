import React from 'react';
import videojs from "video.js";
const Video = () => {
    componentDidMount() {
        // instantiate video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log("onPlayerReady", this);
        });

        if (this.videoNode) {
            this.videoNode.setAttribute("webkit-playsinline", true);
            this.videoNode.setAttribute("playsinline", true);
        }
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    return (
        <>
            <div data-vjs-player>
                <video ref={node => (this.videoNode = node)} className="video-js" />
            </div>
        </>
    );
};

export default Video;