import Vue from 'vue';
/*
* this function we can use for debugging perpose.
* from the google chrome we can set those keys to enable/disable the logs
*
* ex:   if we open the Google CDT (Chrome Development Tool) under Inspect elements(F12)->Storage->Local Storage
*       then you have to set the key as "logs" and value "true" it will show the the debug values
*       you can use logformat key with "timestamp & nothing" to format the log messages.
*
*       logtype:timestamp   => will show the timestamp
*       logtype:nothing     => will show just the message without any formattings
*       logtype:full        => will show the full date string with the formatted message
*       logtype:[empty string = ""] => short date format
*
*       if the logformat is empty it will use default log format.
*
*
*       function usage => this.$log("your message or javascript object goes here");
*       Elshan | 2021.9.17
* */

/**
 * Log the values to console log if localstorage key set with "logs=true"
 * @param message
 */
const log = (message: any) => {
    if (localStorage.getItem('logs') === 'true') {
        /**
         * formatting colors
         */
        const appname = "APP-NAME:";
        const green = 'color:green;font-weight:bold;';
        const blue = 'color:blue';
        const black = 'color:black';
        /**
         * getting the log format types and check
         */
        let timestamp_type = localStorage.getItem('logformat');
        switch (timestamp_type) {
            case 'full':
                console.log("%c%s%c [%s]%c %s", green, appname, blue, new Date(), black, message);
                break;
            case 'timestamp':
                console.log("%c%s%c [%s]%c %s", green, appname, blue, Date.now(), black, message);
                break;
            case 'nothing':
                console.log("%c%s%c %s", green, appname, black, message);
                break;
            default:
                console.log("%c%s%c [%s]%c %s", green, appname, blue, new Date().toLocaleTimeString(), black, message);
        }
    }
};
/*
* we can use $___ something other than $log if we need :) I would preffer that way
* */
Vue.prototype.$log = log;
