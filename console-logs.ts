import Vue from 'vue';
/*
* this function we can use for debugging perpose.
* from the google chrome we can set those keys to enable/disable the logs
*
* ==================================================================
* minimal usage : [open cdt and type this commands]
*
* localStorage.setItem("logs","true");
*
* also try this[to format messages as json str, good for javascript
* objects if you are trying to log arrays]
* localStorage.setItem("logasjson","true");
*
* then you can use from the vue file this.$l("my nice console log")
* ==================================================================
*
* ex:   if we open the Google CDT (Chrome Development Tool) under Inspect elements(F12)->Storage->Local Storage
*       then you have to set the key as "logs" and value "true" it will show the the debug values
*       you can use logformat key with "timestamp & nothing" to format the log messages.
*
*       asgardlogtype:timestamp   => will show the timestamp
*       asgardlogtype:nothing     => will show just the message without any formattings
*       asgardlogtype:full        => will show the full date string with the formatted message
*       asgardlogtype:[empty string = ""] => short date format
*
*       if the asgardlogformat is empty it will use default log format. Which is log just the local time.
*
*       asgardlogasjson property will use all the parameters parse to the this.$log as a json object.
*       this$.log(a,b,c,d,e) and format as an array of object, if this value is not set, it will use clear text. Better
*       to use this if you are trying to output the strings and javascript objects together like this.$l("this is my variable",jsObject)
*       otherwise it will log as "this is my vairable [Object object]" on the console
*
*       function usage => this.$log("your message or javascript object goes here");
*       Elshan | 2021.9.17
* */


/**
 * Log the values to console log if localstorage key set with "logs=true"
 * also this not support multiple parameters ex : this.$l(a,b,c,d,e,f)
 *
 * @param message
 */
const log = (message: any) => {
    if (localStorage.getItem('logs') === 'true') {
        if(localStorage.getItem('logasjson') === 'true') {
            // @ts-ignore
            var args = Array.prototype.slice.call(arguments);
            message = JSON.stringify(args, null, 1);
        }
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
* we can use $__ something other than $l if we need :) I would preffer that way but need to becareful with lodash pluggin
* because it's also use _ or $_
* */
Vue.prototype.$l = log;
