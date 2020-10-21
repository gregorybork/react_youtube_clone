import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow/ChannelRow";
import VideoRow from "./VideoRow/VideoRow";

import "./searchpage.css";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon/>
                <h2>Filter</h2>
                
            </div>  
            <hr/>     

            <ChannelRow 
                image = "https://yt3.ggpht.com/a/AATXAJypmsq9zPUSv7x5BrQLQ4yR8w-R8-2e-3qeCfK3=s88-c-k-c0xffffffff-no-rj-mo"
                channel = "Stuff Made Here"
                verified
                subs = "1.31M"
                noOfVideos = {382}
                description = "If you want stuff.. this is where I make it"
            />
            <hr/>
            <VideoRow 
                views="2.6M"
                subs = "1.31M"
                description = "Check out http://KiwiCo.com/stuffmadehere to get your first month's subscription 50% off!"
                timestamp = "2 seconds ago"
                channel = "Stuff Made Here"
                title = "Explosive Bat: crushing MLB records. Ft: Smarter Every Day"
                image = "https://i.ytimg.com/an_webp/Puo6Vgcbxps/mqdefault_6s.webp?du=3000&sqp=CLDuvfwF&rs=AOn4CLAfNMUrxygVjKBPkovXj_vV3Autug"
            />
            <VideoRow 
                views="1.4M"
                subs = "1.31M"
                description = "Thanks to Keeps for sponsoring this video! Head to https://keeps.com/stuffmadehere to learn more and get 50% off your first order of hair loss treatment."
                timestamp = "1 month ago"
                channel = "Stuff Made Here"
                title = "Moving hoop won't let you miss"
                image = "https://i.ytimg.com/vi/myO8fxhDRW0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDHuVgTJl0okke298dEeCdvlEV8ZQ"
            />
            <VideoRow 
                views="1.4M"
                subs = "1.31M"
                description = "I made a baseball bat that (pretty much) always hits home runs. It uses explosive charges to put an enormous amount of power into your swing. "
                timestamp = "2 months ago"
                channel = "Stuff Made Here"
                title = "World's most powerful bat goes boom. Made on my new Tormach 24r"
                image = "https://i.ytimg.com/an_webp/B3CsOx5U9Gs/mqdefault_6s.webp?du=3000&sqp=CI_WvfwF&rs=AOn4CLAugQhn_eRXlQ6MBqoYaISDKe2SSg"
            />

            <VideoRow 
                views="4.3M"
                subs = "1.31M"
                description = "My hair is getting too long so I decided to build a robot to cut it for me. To support future projects like this check out my patreon: http://patreon.com/stuffmadehere"
                timestamp = "3 months ago"
                channel = "Stuff Made Here"
                title = "I made a hair cutting machine"
                image = "https://i.ytimg.com/an_webp/Puo6Vgcbxps/mqdefault_6s.webp?du=3000&sqp=CLDuvfwF&rs=AOn4CLAfNMUrxygVjKBPkovXj_vV3Autug"
            />
            <VideoRow 
                views="2.1M"
                subs = "1.31M"
                description = "Thanks to Keeps for sponsoring this video! Head to https://keeps.com/stuffmadehere to learn more and get 50% off your first order of hair loss treatment."
                timestamp = "4 months ago"
                channel = "Stuff Made Here"
                title = "See in complete darkness with touch"
                image = "https://i.ytimg.com/an_webp/8Au47gnXs0w/mqdefault_6s.webp?du=3000&sqp=CMigvvwF&rs=AOn4CLACwJXi4BhmAIvcACJmejeT072DSA"
            />
            <VideoRow 
                views="1.4M"
                subs = "1.31M"
                description = "I wanted to see if I could make myself a better golfer by combining robotic engineering and golf."
                timestamp = "4 months ago"
                channel = "Stuff Made Here"
                title = "I made a self correcting golf club"
                image = "https://i.ytimg.com/an_webp/o5Cv9fvajrc/mqdefault_6s.webp?du=3000&sqp=CMm4vvwF&rs=AOn4CLBNxgcBmvXwfycXZ7Y9MogcEP4XeQ"
            />            

        </div>
    )
}

export default SearchPage
