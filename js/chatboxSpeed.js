define([
    'coreJS/adapt'
], function(Adapt) {

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
        //$('.toggle.chatboxSpeed label').toggleClass('selected', switchOn);
        chatboxSpeed();
    }

    Adapt.on('devtools:chatboxSpeed', toggleSpeed);

})
