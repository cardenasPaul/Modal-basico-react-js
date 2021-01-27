import {Component} from 'react';
import '../hoja_estilos/css_exampleContent.css';

export default class ExampleModalContent extends Component{
    /*este es un ejemplo con un simple formulario para demostrar tanto el 
    funcionamiento del modal como que este puede contener
    dentro suyo multiples elementos personalizables*/
    constructor(props){
        super(props)
        this.state = {
            password: '',
            email: ''
        };
        this.toggleModal = props.toggleModal;// se hereda la funcion para cerrar el modal
    }
    handleChangePassword = (e) => {
        this.setState({password: e.target.value});  
    }
    handleChangeEmail = (e) => {
        this.setState({email: e.target.value});  
    }
    showAlert = (e) =>{
        e.preventDefault();
        if(this.validatePassword() && this.validateIsEmptyEmail()){//se valida si el email no es nulo y la contraseña contiene mas de 8 caracteres
            alert("your logged.");
            this.state.password = '';//se elimina el valor almacenado de la contraseña y email para evitar superposicion de datos
            this.state.email = '';
        }


    }
    validatePassword = () =>{
        if(this.state.password.length < 8){//valido si la contraseña tiene mas de 8 caracteres
            alert("Your password is too short, add another character.");
            return false;
        }else{
            return true;
        }
    }
    validateIsEmptyEmail = () =>{//se verifica que el email no sea nulo
        if(this.state.email.length > 0){
            return true;
        }else{
            alert("Your email is empty, please fill it.");
            return false;
        }
    }
    //renderizado
    render(){
        return(
            <form className="example_form" onSubmit={this.showAlert}>
                <p>Log in</p>
                <input type="email" name="" id="" placeholder="Email" onChange={this.handleChangeEmail}/>
                <input type="password" name="" id="" placeholder="Password" onChange={this.handleChangePassword}/>
                <input type="button" value="Cancel" onClick={this.toggleModal}/>
                <input type="submit" value="Log in"/>
            </form>
        )
    }
}