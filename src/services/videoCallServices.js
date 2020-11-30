import { API_URL } from 'react-native-dotenv'
const signalR = require('@microsoft/signalr')

export const startWebSocket = (patientId, {
    onVideoCallEnd = () => { },
    onVideoCallCancelation = () => { },
}) => {
    const url = `${API_URL}/video-call-queue-hub`
    Object.defineProperty(WebSocket, 'OPEN', { value: 1, });
    const connection = new signalR.HubConnectionBuilder().withUrl(url).configureLogging(
        signalR.LogLevel.None
    )
        .withAutomaticReconnect()
        .build()

    connection.on("VideoCallEnd", onVideoCallEnd)
    connection.on("VideoCallCancelation", onVideoCallCancelation)

    connection.on("NewVideoCallQueue", () => { })
    connection.on("VideoCallExtension", () => { })
    connection.on("VideoCallRejection", () => { })
    connection.on("NewUser", () => { })

    connection.start().then(() => {
        connection.invoke("AddUserToGroup", patientId)
    })
}