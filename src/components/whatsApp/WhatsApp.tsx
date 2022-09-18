import { Linking } from 'react-native';
import React from 'react';

export const WhatsApp = () => {

    const rederWhatsApp = () => {
        let url =
            "whatsapp://send?text=" +
            // message 
            'HI'
            +
            "&phone=91" + 7022209375
        // mobileNo;
        Linking.openURL(url)
            .then(data => {
                console.log("WhatsApp Opened successfully " + data);
            })
            .catch(() => {
                alert("Make sure WhatsApp installed on your device");
            });
    }

    return <>{
        rederWhatsApp()
    }</>
};

