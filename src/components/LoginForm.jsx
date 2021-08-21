import { useState } from 'react';
import axios from 'axios';



const LoginForm = () =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmbit = async (e)=>{
      e.preventDefault();

    const authObject = { 
        'Project-ID':"da413a3c-90b5-4bb7-b1c9-be757e791792", 
        'User-Name': username, 
        'User-Secret': password 
    } 

    try {
        await axios.get('https://api.chatengine.io/chats', { headers: authObject });

        localStorage.setItem('username',username);
        localStorage.setItem('password',password);

        window.location.reload();
        setError('');
    } catch(error){
        setError('Oops, incorrect credentials.')
    }


  }

  return (
    <div className="wrapper">
        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form  onSubmit={handleSubmbit}>
                <input 
                    type="text" 
                    className="input"
                    placeholder="Username"
                    value={username} onChange={(e) => setUsername(e.target.value)} 
                    required
                />
              <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="input" placeholder="Password" required 
                    
                />
                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
            </form>
        </div>
    </div>
  )
}

export default LoginForm;