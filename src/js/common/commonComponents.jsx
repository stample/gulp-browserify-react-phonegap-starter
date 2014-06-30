/** @jsx React.DOM */

var React = require("react");



var Footer = React.createClass({
  render: function() {
    return (
        <div className="reactComponentContainer">
            <div className="footer">
                By <a href="http://www.stample.co">www.stample.co</a>
            </div>
        </div>
    );
  }
});
exports.Footer = Footer;
