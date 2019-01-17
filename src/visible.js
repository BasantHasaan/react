
const Root = document.getElementById('app2');
let visibility = false;
const toggleVisibility = ()=>{
    visibility = !visibility;
    render()
}
const render =  () =>{
    const template = (
        <div>
            <p>visibility Toggle</p>
            <button onClick={toggleVisibility}>{visibility ? 'showhText':'Hide Details'}</button>
           { visibility && (<p>Show text here</p>)}
        </div>
    )
    ReactDOM.render(template,Root);
}
render();

