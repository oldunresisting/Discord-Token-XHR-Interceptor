// Paste this into your console, click around to some channels, token should popup. 
// This content has been made available for informational and educational purposes only. I am not responsible for any consequences.

!function(t){var e=XMLHttpRequest.prototype,o=e.send,s=e.open;e.open=function(){this._method=arguments[0],this._url=arguments[1],s.apply(this,arguments)},e.send=function(){"post"===this._method.toLowerCase()&&"https://discord.com/api/v8/science"===this._url&&alert("Your token is "+JSON.parse(arguments[0]).token),o.apply(this,arguments)}}();
