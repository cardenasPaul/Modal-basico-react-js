import React, {Component} from 'react';
import Portal from './Portal';

export default class Modal extends Component{
    
    render(){
        const {children, toggle, active} = this.props;
        /*se asignan los parametros de entrada del componente
        children = este es el contenido dentro de mi etiqueta modal <Modal>children</Modal> 
        toggle = En este caso pasa por parametro referencia a la funcion toggle de tal manera que pueda controlar si hago o no visible este componente desde mi componente padre
        active = esta es una variable booleana que me indica en caso de true que el modal esta activo y en caso falso inactivo
        */
        return(
            <Portal>
                {active &&  (//si en caso que haya recibido un parametro con valor true renderizara este contenido
                    <div style={styles.wrapper}>
                        <div style={styles.window}>
                            <button style={styles.closeBtn} onClick={toggle}>X</button>
                            <div>{children}</div>
                        </div>
                        <div onClick={toggle} style={styles.background}>
                        </div>
                    </div>
                )}
            </Portal>
        )
    }
}
//opte por incluir los estilos en el codigo para incluir funciones fuera del css
const styles = {
    wrapper:    {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    window:     {
        position:   'relative',
        height: 'max-content',
        background: '#fff',
        borderRadius:   5,
        padding:    15,
        boxShadow:  '2px 2px 10px rgba(0,0,0,0.3)',
        zIndex: 10,
        minWidth:   320,
    },
    closeBtn:   {
        position: 'absolute',
        right:  15,
    },
    background:   {
        position: 'absolute',
        width:  '100%',
        height: '100%',
        top:    '0',
        left:   '0',
        background: '#000',
        opacity:    '0.4',
    }
}