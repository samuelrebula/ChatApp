import React, { useState, useEffect, useRef } from "react";
import './ChatWindow.css';

import MessageItem from "./MessageItem";

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

export default ({user}) => {

    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author:123, body: 'teste teste teste teste teste teste '},
        {author:123, body: 'teste teste teste'},
        {author:1234, body: 'teste'},
        {author:123, body: 'teste teste teste teste teste teste '},
        {author:123, body: 'teste teste teste'},
        {author:1234, body: 'teste'},
        {author:123, body: 'teste teste teste teste teste teste '},
        {author:123, body: 'teste teste teste'},
        {author:1234, body: 'teste'},
        {author:123, body: 'teste teste teste teste teste teste '},
        {author:123, body: 'teste teste teste'},
        {author:1234, body: 'teste'},
        {author:123, body: 'teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '},
        {author:123, body: 'teste teste teste'},
        {author:1234, body: 'teste'},
        {author:123, body: 'teste teste teste teste teste teste'},
        {author:123, body: 'teste teste teste'},
        {author:1234, body: 'teste'},
        {author:123, body: 'teste teste teste teste teste teste '},
        {author:123, body: 'teste teste teste'},
        {author:1234, body: 'teste'},
        {author:123, body: 'teste teste teste teste teste teste '},
        {author:123, body: 'teste teste teste'},
        {author:1234, body: 'teste'},
        {author:123, body: 'teste teste teste teste teste teste '},
        {author:123, body: 'teste teste teste'},
        {author:1234, body: 'teste'},
    ]);

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list]);

    const handleMicClick = () => {
        if(recognition !== null) {

            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript );
            }
            
            recognition.start();

        }
    }

    const handleSendClick = () => {

    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg" alt="" />
                    <div className="chatWindow--name">Teste</div>
                </div>

                <div className="chatWindow--headerbuttons">

                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>

                </div>

            </div>
            <div ref={body} className="chatWindow--body">
                {list.map((item, key)=>(
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>

            <div className="chatWindow--footer">
                <div className="chatWindow--pre">

                    <div className="chatWindow--btn">
                        <CloseIcon style={{color: '#919191'}} />
                    </div>

                    <div className="chatWindow--btn">
                        <InsertEmoticonIcon style={{color: '#919191'}} />
                    </div>

                </div>
                <div className="chatWindow--inputarea">
                    <input 
                        className="chatWindow--input" 
                        type="text" 
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow--pos">

                    {text === '' &&
                        <div className="chatWindow--btn">
                            <MicIcon onClick={handleMicClick} style={{color: listening ? '#126ECE' : '#919191'}} />
                        </div>
                    }
                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindow--btn">
                            <SendIcon style={{color: '#919191'}} />
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}