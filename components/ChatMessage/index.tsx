import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import { Message } from '../../types';
import styles from './style'

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {

    const { message } = props;

    // Condition to check if its users message
    const isMyMessage = () => { 
        return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox,{
                backgroundColor: isMyMessage() ? '#DCF8C5' : '#FAFAFA',
                marginLeft: isMyMessage() ? 50 : 0,
                marginRight: isMyMessage() ? 0 : 50,
            }
            ]}>
                {/* If check passes then proceed */}
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;
