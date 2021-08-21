const TheirMessage = ({ lastMessage, message }) =>{
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username === message.sender.username;
    
    return(
        <div className="message-row">
            {isFirstMessageByUser &&(
                <div
                    className="messsage-avatar"
                    style={{ backgroundImage: message.sender && `url(${message?.sender?.avatar})`}}
                />
            )}
            {message?.attachments?.length > 0
            ?(
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachmnet"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px': '48px' }}
                    />
                ) :
                (
                    <div className="message" 
                        style={{ float: 'left', backgroundColor: '#CABCDC'}}>
                        {message.text}
                    </div>
                )
            }
        </div>
    );

}
export default TheirMessage;