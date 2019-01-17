'use strict';

var Root = document.getElementById('app2');
var visibility = false;
var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'showhText' : 'Hide Details'
        ),
        visibility && React.createElement(
            'p',
            null,
            'Show text here'
        )
    );
    ReactDOM.render(template, Root);
};
render();
