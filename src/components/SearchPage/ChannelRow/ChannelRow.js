import React from 'react';
import "./channelrow.css";
import {Avatar} from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({image, channel, subs, verified, noOfVideos, description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow_logo"
            alt={channel} src = {image} />
            <div className="channelRow_text">
                <h4>
                    {channel} {verified && <CheckCircleOutlineOutlinedIcon/>}
                </h4>
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ChannelRow
