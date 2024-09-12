import React, { useState } from 'react';
import './Home.css';

export default function Username() {  // Changed from 'username' to 'Username'
    const [username, setUsername] = useState('Enter Username');
    const updateUsername = (evt) => {
        setUsername(evt.target.value);
    };
    
    return (
        <div className="section_text">
            <p className="section_text_p1">Hello, I'm</p>
            <h1 className="title">{username}</h1>
            <p className="section_text_p2">Software Engineer</p>
            <div className="username">
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    id="usernameInput"
                    onChange={updateUsername}
                />
            </div>
        </div>
    );
}
