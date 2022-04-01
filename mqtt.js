import mqtt from 'mqtt'

const {
    MQTT_USERNAME,
    MQTT_PASSWORD
} = process.env

export const client = mqtt.connect({
    protocol: 'mqtt',
    port: 1883,
    host: 'skirthooks.chatengineers.com',
    username: MQTT_USERNAME,
    password: MQTT_PASSWORD
});
