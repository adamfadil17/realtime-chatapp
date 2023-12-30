import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return(
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
                projectId="e23575c4-06b1-4be0-9e49-8d248e1a4cbd"
                username= {props.user.username}
                secret= {props.user.secret}
                style={{ height: '100vh', fontFamily: 'Poppins' }}
            />
        </div>
    )
}

export default ChatsPage