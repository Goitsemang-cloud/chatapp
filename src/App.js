import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'; 
import LoginForm from './components/LoginForm';

import './App.css';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height="100vh"
            projectID="da413a3c-90b5-4bb7-b1c9-be757e791792"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;