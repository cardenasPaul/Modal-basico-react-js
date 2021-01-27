import Modal from './components/Modal';
import ExampleModalContent from './components/ExampleModalContent';
import { Component } from 'react';
import './App.css';

class App extends Component {
  //estados de la pagina 
  constructor(props){
    super(props)
    this.state={
      modalIsActive:false  //estado de la ventana modal true=activa, false=inactiva
    }
  }

  //funcionamiento frontend
  toggleModal = (e) =>{
    e.preventDefault();
    this.setActiveModal(!this.state.modalIsActive)//se niega el estado actual de el modal, ej:pasa de true-->false
  };

  //getters and setters
  setActiveModal = (stateActive) =>{//se cambia el estado del modal sin modificar directamente la variable
    this.setState({modalIsActive: stateActive});
  }
  getModalState = () =>{
    return this.state.modalIsActive
  }

  //renderizado
  render(){
    return (
      <div className="App">
        <Modal active={this.getModalState()} toggle={this.toggleModal}>
          <ExampleModalContent toggleModal={this.toggleModal}/>
        </Modal>
        <button on onClick={this.toggleModal}>Abrir modal</button>
      </div>
    );
  }

}

export default App;
