define(function(require) {

    var Adapt = require('coreJS/adapt');
    var Router = require('coreJS/router');

    var chatbox = Adapt.componentStore.chatbox;
    if (!chatbox) return;

    var switchOn = false;
    var orig = chatbox.view.prototype.typingTime;

    function chatboxSpeed() {
        chatbox.view.prototype.typingTime = function () { 
            if (!switchOn) return orig.apply(this, arguments);
            return 0;
        };
    }

 
     function toggleSpeed() {
        switchOn = !switchOn;
        $('.toggle.chatboxSpeed label').toggleClass('selected', switchOn);
        chatboxSpeed();
    }

    Adapt.on('devtools:chatboxSpeed', toggleSpeed);


});
