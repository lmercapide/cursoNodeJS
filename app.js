const  express = require ('express');
const app = express();   //aplicacion del tipo express

const {infoPaciente} = require('./pacientes.js');

//rutas
// get es el metodo de enrutamiento http que estoy usando y lo que esta entre parentesis es el camino y una funcion flecha
app.get('/',(req, res) => {

    res.send('Mi primer servicio');


});

app.get('/pacientes',(req, res) => {
    //res.send(infoPaciente);
    res.send('Servicio General de pacientes');

});

app.get('/pacientes/paciente',(req, res) => {
    //res.send(infoPaciente.paciente);
    res.send('Servicio de pacientes');
});

app.get('/pacientes/medico',(req, res) => {
    //res.send(infoPaciente.medico);
    res.send('Servicio de medicos');
    
});

app.get('/pacientes/tratamiento',(req, res) => {
    //res.send(infoPaciente.tratamiento);
    res.send('Servicio de tratamientos');

});


const PUERTO = process.env.PORT || 5000;
app.listen(PUERTO, () =>{

    console.log('El servidor esta escuchando en el puerto 5000...');
});