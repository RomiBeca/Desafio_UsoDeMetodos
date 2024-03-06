
let radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9.878.782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15.345.241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16.445.345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17.666.419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14.989.389-K', prevision: 'FONASA' },
];

let traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15.554.774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15.444.147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17.879.423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1.547.423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16.554.741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9.747.535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '1.1254.785-5', prevision: 'ISAPRE' },
];

let dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '1.123.425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9.8787.89-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7.998.789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18.887.662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14.441.281-0', prevision: 'ISAPRE' },
];

// 1.Agregar nuevos pacientes a traumatologia

let newPacientesTraumatologia = [
    { hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13.123.329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12.221.451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10.112.348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13.453.234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14.345.656-6', prevision: 'FONASA' },
];
// concatenar arrays concat
traumatologia = traumatologia.concat(newPacientesTraumatologia);
const tableTraumatologia = document.querySelector("#tableTraumatologia")
tableTraumatologia.innerHTML = ""
traumatologia.forEach((item) => {
    // console.log(item)
    tableTraumatologia.innerHTML += `    
<tr>
    <th scope="row">${item.hora}</th>
    <td>${item.especialista}</td>
    <td>${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td>
</tr>`
})

// 2.eliminar el primer y ultimo arreglo de radiografia
document.write(`<hr>`)
document.write(`<h4>2.Eliminar primer y ultimo arreglo (visible en consola) </h4>`)
document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
radiologia.shift();
radiologia.pop();
console.log(radiologia)

// 3.imprimir en document horas dentales separadas por guion
document.write(`<hr>`)
document.write(`<h4>3.Horas Dentales separadas por - </h4>`)
document.write(`<p>${dental[0].hora} - ${dental[0].especialista}- ${dental[0].paciente} - ${dental[0].rut} - ${dental[0].prevision} </p>`);
document.write(`<p>${dental[1].hora} - ${dental[1].especialista}- ${dental[1].paciente} - ${dental[1].rut} - ${dental[1].prevision} </p>`);
document.write(`<p>${dental[2].hora} - ${dental[2].especialista}- ${dental[2].paciente} - ${dental[2].rut} - ${dental[2].prevision} </p>`);
document.write(`<p>${dental[3].hora} - ${dental[3].especialista}- ${dental[3].paciente} - ${dental[3].rut} - ${dental[3].prevision} </p>`);
document.write(`<p>${dental[4].hora} - ${dental[4].especialista}- ${dental[4].paciente} - ${dental[4].rut} - ${dental[4].prevision} </p>`);
document.write(`<p>${dental[5].hora} - ${dental[5].especialista}- ${dental[5].paciente} - ${dental[5].rut} - ${dental[5].prevision} </p>`);

// 4. listado de nombre de todos los pacientes del centro medico
document.write(`<hr>`)
document.write(`<h4>4.Todos los pacientes del Centro Medico</h4>`)
let todosLosPacientesCentroMedico = radiologia.concat(traumatologia, dental, newPacientesTraumatologia);
todosLosPacientesCentroMedico.forEach((paciente) => {
    // console.log(todosLosPacientes) 
    document.write(`<p>${paciente.paciente}</p>`);
})

// 5.Filtrar pacientes-isapre de Dental
document.write(`<hr>`)
document.write(`<h4>5.Dental filtrado </h4>`)
document.write(`<h6>Paciente-Isapre </h6>`)
const isapreDentalPaciente = dental.filter((paciente) => paciente.prevision === 'ISAPRE');
isapreDentalPaciente.forEach((paciente) => {
    document.write(`<p>${paciente.paciente} - ${paciente.prevision}</p>`);
})
//6.filtrar pacientes-fonasa Traumatologia
document.write(`<hr>`)
document.write(`<h4>6. Traumatologia filtrado </h4>`)
document.write(`<h6> Paciente-Fonasa</h6>`)
const fonasaTraumatologiaPacientes = traumatologia.filter((paciente) => paciente.prevision === 'FONASA');
fonasaTraumatologiaPacientes.forEach((paciente) => {
    document.write(`<p>${paciente.paciente}- ${paciente.prevision}</p>`);
})

