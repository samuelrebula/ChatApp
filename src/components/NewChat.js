import React, { useState } from "react";
import './NewChat.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default ({user, chatlist, show, setShow}) => {
    const [list, setList] = useState([
        {id: 123, avatar: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg', name: 'vitor'},
        {id: 123, avatar: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg', name: 'vitor'},
        {id: 123, avatar: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg', name: 'vitor'},
        {id: 123, avatar: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg', name: 'vitor'},
    ]);

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="newChat" style={{left: show ? 0 : -415}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#FFF'}} />
                </div>
                <div className="newChat--headtitle">Nova conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key)=>(
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}