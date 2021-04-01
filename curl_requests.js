
// Get Started

curl -X POST -H "Content-Type: application/json" -d '{
    "get_started":{
        "payload":"Would you like to play a game?"
    }
 }' "https://graph.facebook.com/v10.0/me/messenger_profile?access_token=EAAHAwt4HYh8BAFMNnWFVpN2Lnz5uUSEe4EG6DplLBN3xLMDxDpf7rID1RrQSiZBqjUEECz7DDLTPRXQc0vL6hwnUujYjuFdEOddUwUiPMiXos2yKmCiXLBdcWGFwQOnQWTV84hIE7rzBrqs8KUmNKt8us3hZAzYmHcYWgFcZAUJKyE64PCFYGLcD1IYj8AZD"

// Create persistent menu

curl -X POST -H "Content-Type: application/json" -d '{
    "persistent_menu": [
        {
            "locale": "default",
            "composer_input_disabled": true,
            "call_to_actions": [
                {
                    "type": "web_url",
                    "title": "Play now!",
                    "url": "https://fb.gg/play/493418157924895",
                }
            ]
        }
    ]
}' "https://graph.facebook.com/v10.0/me/messenger_profile?access_token=EAAHAwt4HYh8BAFMNnWFVpN2Lnz5uUSEe4EG6DplLBN3xLMDxDpf7rID1RrQSiZBqjUEECz7DDLTPRXQc0vL6hwnUujYjuFdEOddUwUiPMiXos2yKmCiXLBdcWGFwQOnQWTV84hIE7rzBrqs8KUmNKt8us3hZAzYmHcYWgFcZAUJKyE64PCFYGLcD1IYj8AZD"


// Icebreakers

curl -X POST -H "Content-Type: application/json" -d '{
  "ice_breakers":[
     {
        "question": ".",
        "payload": "."
     }
  ]
}' "https://graph.facebook.com/v10.0/me/messenger_profile?access_token=EAAHAwt4HYh8BAFMNnWFVpN2Lnz5uUSEe4EG6DplLBN3xLMDxDpf7rID1RrQSiZBqjUEECz7DDLTPRXQc0vL6hwnUujYjuFdEOddUwUiPMiXos2yKmCiXLBdcWGFwQOnQWTV84hIE7rzBrqs8KUmNKt8us3hZAzYmHcYWgFcZAUJKyE64PCFYGLcD1IYj8AZD"



// Delete

curl -X DELETE -H "Content-Type: application/json" -d '{
  "fields": [ "ice_breakers" ],
}' "https://graph.facebook.com/v10.0/me/messenger_profile?access_token=EAAHAwt4HYh8BAFMNnWFVpN2Lnz5uUSEe4EG6DplLBN3xLMDxDpf7rID1RrQSiZBqjUEECz7DDLTPRXQc0vL6hwnUujYjuFdEOddUwUiPMiXos2yKmCiXLBdcWGFwQOnQWTV84hIE7rzBrqs8KUmNKt8us3hZAzYmHcYWgFcZAUJKyE64PCFYGLcD1IYj8AZD"
