Este proyecto lo cree a forma de elemento reciclable a futuro, de tal forma que si deseo lo pueda adaptar 
a cualquier pagina del tipo react js que vaya a hacer en un futuro, nuestro modal contara con las funciones basicas de recibir los elementos a renderizar dentro suyo, hacerce o no visible y hacerce invisible al clicker fuera de ste o sobre un boton "X" en la esquina superior derecha, ademas de claro renderizarce sobre nuestro contenido general de forma semi-transparente sin eliminar este contenido sobre el cual se renderizo.

Para la creacion del modal segui el proceso de crear 2 componentes base:
El primer Componente de mi modal es una clase que "Portal" creada como un componente de react, esta se va a encargar de buscar un id="modal", creado anteriormente en public/index.html en forma de etiqueta <div id="modal"></div>, esto nos permite renderizar nuestro modal aparte de la etiqueta raiz(root), tal que el renderizado de nuestro ventana modal no se interponga con el renderizado base de nuestra pagina creando un renderizado paralelo al nuestro. En resumen, el componente "Portal" se encarga de crear una etiqueta generica que se renderizara fuera de nuestro arbol de renderizado general para la pagina, para esto el componente administra esa etiqueta generica cargando y eliminando contenido que nosotros le entregemos como parametros en forma de props.
El segundo elemento de nuestro modal es llamado "Modal", este se encarga de cargar el frontend base del modal, tal que el tomara todo el contenido que agregemos dentro de su etiqueta en forma de children y lo enviara a el componente "portal" para renderizarlo fuera de la raiz de ejecucion de la pagina principal. Ademas de recibir los etiquetas generadas dentro de el nuestro componente "Modal" recibira por medio de props una variable booleana que indicara si debe o no renderizar el contenido nuestro "portal" y un metodo toggle desde la ejecucion de nuestra pagina para que nuestro Modal envie cambios de visibilidad a la aplicacion, dotando la capasidad de que nuestro modal envie una señal de validacion a la pagina que hara visible o no-visible nuestro modal, por lo cual se creara un canal de comunicacion hijo-padre para nuestro modal.

Finalmente queda resaltar pequeños datos del proyecto como que cree un componente de prueba /componentes/ExampleModalContent.js para probar la versatilidad del codigo, y en caso de querer recrear mi codigo se debe copiar la carpeta componentes con la clase modal y portal, y dentro de public/index.html agregar justo debajo de la etiqueta <div id="root"> </div> una etiqueta <div id="modal"></div> para poder renderizar el modal aparte de la raiz(root) de ejecucion.
Y si leiste hasta aca cualquier feedback es bienvenido.