
var React = require("react");
var HomeComponents = require("home/homeComponents");

var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        console.log("Device ready, will try to render React component!");

        var mountNode = document.getElementById('reactAppContainer');

        var mountComponent = HomeComponents.Home({
            name: "Dear user!"
        });

        React.renderComponent(mountComponent,mountNode);

        console.log("React should now be loaded");
    }

};

app.initialize();

