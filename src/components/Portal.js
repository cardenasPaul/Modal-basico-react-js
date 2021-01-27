import {Component} from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('modal');//por medio de esta funcion se buscara la etiqueta con id=modal guardada
// en public/index.html la cual nos permitira renderizar elementos aparte de la raiz de nuestra aplicacion donde se renderiza nuestra aplicacion

export default class Portal extends Component{
    //el portal se encarga de crear una etiqueta por defecto vacia que a la hora de renderizar el componente agrege el codigo html heredado de la clase modal.
    constructor(){
        super();
        this.tagBase = document.createElement('div');
    }
    componentDidMount = () =>{
        portalRoot.appendChild(this.tagBase);
    }
    componentWillUnmount = () =>{
        portalRoot.removeChild(this.tagBase);
    }
    
    render(){
        const {children} = this.props;
        return ReactDOM.createPortal(children, this.tagBase);
    }
}