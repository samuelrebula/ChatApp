import React from "react";
import './ChatListItem.css';

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://i.pinimg.com/originals/59/15/e8/5915e871e9a464dcac6bcf331a29d174.jpg" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Luffy</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}