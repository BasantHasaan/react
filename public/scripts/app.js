console.log('App.js is running')

// var template = <p>From App.js</p>
var Root = document.getElementById('app')
var template = React.createElement(
  "p",
  { id: "j" },
  "From App.js"
);



ReactDOM.render(template,Root)

