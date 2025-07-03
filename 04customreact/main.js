// function customcreater(element,container){
//     const domelement=document.createElement(element.type);
//     domelement.innerHTML=element.Children;
    
//     domelement.setAttribute('href',element.props.href)
//     domelement.setAttribute('target',element.props.target)

//     container.appendChild(domelement)
// }

function customcreator(element,container) {
    const domelement = document.createElement(element.type);
    domelement.innerHTML=element.Children

    for (const prop in element.props) {
         domelement.setAttribute(prop,element.props[prop])
     
        }
        container.appendChild(domelement)
    }

const maincontainer = document.querySelector("#root");

const element = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank',
    }, 
    Children : 'click here to go to the google bro'
}

customcreator(element,maincontainer);