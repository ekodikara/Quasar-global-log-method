# Quasar global function with boot
Global log method which is using the local storage and better for debugging purpose

Change the quasar.conf.js

`
 boot: [
      'composition-api',
      'i18n',
      'axios',
      'notify-defaults',
      'console-logs' //<< add this line with quasar.conf.js
 ],
`
