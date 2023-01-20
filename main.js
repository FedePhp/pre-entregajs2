//simulador pedido de servicios

const contratarServicio = () => {
    let servicio = '';
    let contacto= '';
    let validarServicio = false;
    let seguirContratando = false;
    let aceptarServicio = false;
    
    do{
    //Formulario datos de nuevo cliente
    function Cliente(nombre, email, numeroDeTelefono,empleados,rubro,calle) {
        this.nombre = nombre;
        this.email = email;
        this.numeroDeTelefono = numeroDeTelefono;
        this.empleados = empleados;
        this.rubro = rubro;
        this.calle = calle;
    }
    
    const nombre = prompt('Ingrese su nombre:')
    const email = parseInt(prompt('Ingrese su email:'))
    const numeroDeTelefono = prompt('Ingrese su numero de telefono:')
    const rubro = prompt('Ingrese el rubro de su empresa:')
    const empleados = parseInt(prompt('Cuantos empleados tiene tu empresa?'));
        if (empleados <= 100) {
            alert('Eres una Pyme y tienes el 10% de descuento en todos nuestros servicios');
        } else{
            alert('Eres en empresa de mas de 100 empleados por eso tenemos beneficios exclusivos para nuestros clientes premium');
        }

    const calle = prompt('Ingrese su direccion:')
    
    const cliente1 = new Cliente(nombre, email, numeroDeTelefono, empleados, rubro, calle);

    const clientes = [];
    clientes.push(cliente1)

    console.log(clientes)
    
        confirmarDatos = confirm('Quieres modificar algun dato ingresado?');
    } while (confirmarDatos);

};
contratarServicio();


const servicioPedido = () =>{
    let listaServicios = '';
    let finalizarElPedido = '';
    let aceptarServicio = false;

do  {
    const servicioAContratar =  parseInt(prompt('Que servicio deseas adquirir?:\n 1. Desarrollo Web\n 2. Consultoria Impositiva\n3. Marketing & Publicidad'));
    if (servicioAContratar === 1) {
        listaServicios = serviciosIt.map(serviciosIt => {
            return +serviciosIt.id+'- '+serviciosIt.nombre+' $'+serviciosIt.precio
            });
        };
    if (servicioAContratar === 2) {
        listaServicios = serviciosContables.map(serviciosContables => {
            return +serviciosContables.id+'- '+serviciosContables.nombre+' $'+serviciosContables.precio
            });
        };
    if (servicioAContratar === 3) {
        listaServicios = serviciosMarketing.map(serviciosMarketing => {
            return +serviciosMarketing.id+'- '+serviciosMarketing.nombre+' $'+serviciosMarketing.precio
            });
        };
    if ((servicioAContratar <=0) || ( servicioAContratar >=4 )) {
        alert('Por favor elige una opcion correcta')
        servicioPedido();
        };

        console.log(listaServicios)

    // finalizarElPedido = prompt('Elija el servicio a contratar '+('\n')+listaServicios.join('\n'))
    aceptarServicio = confirm('Quieres agregar otro servicio?')
}while (aceptarServicio);

};
servicioPedido();


const confirmarServicio = (pedidoConfirmado) => { confirm('Ingresaste los siguientes datos: '+ nombre +' '+ email +' '+ numeroDeTelefono+' Servicio a contratar '+listaServicios);
        if (pedidoConfirmado) {
            alert('Su pedido a sido registrado con exito');
        } else {
            contratarServicio();
        };

    contacto =  parseInt(prompt('Como deseas ser contacto?:\n 1. Email\n 2. Llamada'));
    if (contacto === 1) {
            alert('Te vamos a contactar al email: ' + email + ' en menos de 24 horas');
        } else{
            alert('Un agente de atencion al cliente te estara llamando ala brevedad posible');
        };
};
confirmarServicio();