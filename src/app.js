console.log('App.js is running')
// var app={
//     title: 'first Try',
//     subtitle: 'never give up'
// }
let count = 0;
 const minusButton = () => {
  count--;
  renderComponent()

}
function rest(){
    count=0 ;
    renderComponent()

}
const app = {
    title: 'My Option App',
    options:['one','two']

}
var Root2 = document.getElementById('app2')

const submitForm = (e) =>{
    console.log('pppp')
    e.preventDefault();
    let option = e.target.elements.option.value
    if(option){
        app.options.push(option)
        e.target.elements.option.value = '';
        appForm();
    } 
}
const addoption = ()=>{
   return  app.options.map(option=>{
        <li>
        option 
        </li>
    })
}
// const onMakeDecision = () =>{
//     const randNom
// }
const removeAll = () =>{
    app.options = []
    appForm();
}
const appForm = () => {
    const temp = (
        <div>
        <p>{app.title}</p>
        <p>{app.options.length}</p>
        <p>{app.options.length > 0 ?'Here are your option':'No Options'}</p>
        <ul>{
            app.options.map(option=><li key={option}>{option}</li>)
        }
        </ul>
        <form onSubmit={submitForm}>
            <input type="text" name="option"></input>
            <button className="button">AddOption</button>
            <button onClick={removeAll}>Remove</button>
        </form>
        </div>     
    );
    ReactDOM.render(temp,Root2)
}

appForm();
// const renderComponent = () => {
//     var template2 = (
//         <div>
//             <h1>count:{count}</h1>
//             <button className="button">+1/</button>
//             <button className="button" onClick={minusButton}>-1</button>
//             <button className="button" onClick={rest}>Reset</button>
//         </div>
//     )
// ReactDOM.render(template2,Root2)
// }
// renderComponent();


