let infoPaciente = {
    
    "paciente": [
    {
        "id": 1,
        "nombre": "Juan",
        "apellido": "Gomez"
    },
    {
        "id": 2,
        "nombre": "Maria",
        "apellido": "Lopez"       
    }
    ],
    "medico": [ 
    {
         "id": 1,
         "nombre": "Ana",
         "apellido": "perez",
         "especialidad": "clinica"
    },    
    {
         "id": 2,
         "nombre": "juan",
         "apellido": "Rodriguez",
         "especialidad": "pediatra"
    }
    ],
    "tratamiento": [ 
    {
             "id": 1,
             "nombre": "tratamiento 1",
             "duracion": "5 meses",
    },    
    {
             "id": 2,
             "nombre": "tratamiento 2",
             "apellido": "12 meses",
    }
    ]
    
}


module.exports.infoPaciente = require('./pacientes.js');