import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../store/auth';

 function LoginPage() {
    const [username, setUsername] = useState('demo@example.com');
    const [password, setPassword] = useState('password');
    const dispatch = useDispatch();

    const currentId = useSelector(state => state.auth.id)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password));
        // redirect
    }

    if(currentId) return <Redirect to="/"/>

    return (
        <div className="background">
            <div className="adjust">
                <div className="ui middle aligned center aligned grid">
                    <div className="column">
                        <h2 className="ui blue image header">
                            <div className="content">Log-in to your account</div>
                        </h2>
                        <form onSubmit={handleSubmit} className="ui large form">
                            <div className="ui stacked segment">
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <input type="text" name="username" value={username} placeholder="Demo@example.com" onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"></i>
                                        <input type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <button type='submit'>Log-in</button>
                            </div>
                        </form>
                        <div className="ui message">
                            New to us?
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
