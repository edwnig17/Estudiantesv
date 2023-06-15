import { getEstudiantes  } from "./API.js";

addEventListener('DOMContentLoaded' ,cargarEstudiantes);

 async function cargarEstudiantes (){
    const tablaEstudiantes = document.querySelector('#tabla');
    const estudiantes = await getEstudiantes()
    console.log(estudiantes);
    estudiantes.forEach(element => {
        tablaEstudiantes.innerHTML+=`

        <tr class = "cards" nombre ="${element.nombre}"
        imagen ="${element.imagen}"
        edad ="${element.edad}"
        promedio ="${element.promedio}"
        nievelCAmpus ="${element.nivelCAmpus}"
        nivelIngles="${element.nivelIngles}"
        especialidad ="${element.especialidad}"
        direccion ="${element.direccion}"
        celular ="${element.celular}"
        Ser ="${element.Ser}"
        review ="${element.review}"
        Skills ="${element.Skills}"
        ingles ="${element.ingles}"
        Asitencia ="${element.Asitencia}"
        >
        <th scope="row" id = "${element.id}">${element.id}</th>
        <td id = "${element.id}">${element.nombre}</td>
        <td id = "${element.id}">${element.especialidad}</td>
        <td id = "${element.id}"><img src="images/${element.imagen}" alt="" id = "${element.id}"></td>
        <td id = "${element.id}" ><button type="button" class="btn btn-info">notas</button> </td>
       </tr>`
        
    });
}
detalles()

function detalles(){
    const tablaEstudiantes = document.querySelector('#tabla');
    tablaEstudiantes.addEventListener('click', e =>{
        console.log(e.target);
        if (e.target.getAttribute('id')) {
            const atributos = e.target.getAttribute('id')
            const elementos =document.getElementById(atributos)
            const padre =elementos.parentNode
            console.log(padre);

            const imagen = padre.getAttribute('imagen');
            const nombre = padre.getAttribute('nombre')
            const edad = padre.getAttribute('edad');
            const promedio = padre.getAttribute('promedio');
            const nievelCAmpus = padre.getAttribute('nievelCAmpus');
            const nivelIngles = padre.getAttribute('nivelIngles');
            const especialidad = padre.getAttribute('especialidad');
            const direccion = padre.getAttribute('direccion');
            const celular = padre.getAttribute('celular');
           
            const Ser = padre.getAttribute('Ser');
            const review = padre.getAttribute('review');
            const Skills = padre.getAttribute('Skills');
            const Asitencia = padre.getAttribute('Asitencia');


            const detalles = document.querySelector('#detalles')
            detalles.innerHTML=``
            detalles.innerHTML=`
            <div class="contanerDetalles">
    <div class="datos">
    <div class="d-flex"><img src="images/${imagen}" alt"" class="m-2">
    <img src="" alt="" class="m-2">
    <button class="btn btn-danger" style="height: 40px;">Eliminar</button></div>
    <h5>${nombre}</h5>
    <h5>${edad}</h5>
    <h5>${promedio}</h5>
    <h5>${nievelCAmpus}</h5>
    <h5>${nivelIngles}</h5>
    <h5>${especialidad}</h5>
    <h5>${direccion}</h5>
    <h5 style="background-color: rgb(255, 196, 0);">${celular}</h5>
    

  </div>
</div>

<div id="charts1" class="charts"></div>
            `
            const getOptionCharts1 = () =>{
                let value1=  ingles*1
                let value2=  review*1
                let value3=  Skills*1
                let value4= Asitencia*1
                let value5= Ser*1

                return {
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      // doesn't perfectly work with our tricks, disable it
                      selectedMode: false
                    },
                    series: [
                      {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '70%'],
                        // adjust the start angle
                        startAngle: 180,
                        label: {
                          show: true,
                          formatter(param) {
                            // correct the percentage
                            return param.name + ' (' + param.percent * 2 + '%)';
                          }
                        },
                        data: [
                          { value: value1, name: 'ingles' },
                          { value: value2, name: 'asistencia' },
                          { value: value3, name: 'Review' },
                          { value: value4, name: 'Skills' },
                          { value: value5, name: 'Ser' },
                          {
                            // make an record to fill the bottom 50%
                            value: value1 + value2+ value3+ value4 + value5,
                            itemStyle: {
                              // stop the chart from rendering this piece
                              color: 'none',
                              decal: {
                                symbol: 'none'
                              }
                            },
                            label: {
                              show: false
                            }
                          }
                        ]
                      }
                    ]
                  };
            }

            const chart1 =  echarts. init (document.getElementById('charts1'))
            chart1.setOption(getOptionCharts1()) 
        }
    })
}