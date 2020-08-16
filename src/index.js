import Circulo from './Circulo.js'
import Rectangulo from './Rectangulo.js'
import Triangulo from './Triangulo.js'
import Octagono from './Octagono.js'
import Decagono from './Decagono.js'

//eventListener que acciona al cambiar el selector.
document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
  //Se declaran dos variables, un arreglo de clases para iterar y el valor de select(poligono seleccionado por usuario).
  const clasesPoligonos = [Circulo, Rectangulo, Triangulo, Octagono, Decagono]
  let poligono = e.target.value
  
  //Filtro mi arreglo clasesPoligonos, con la condicion de que poligono(valor del select) sea igual al "identificadorClase" de mi nueva instancia de poligono.
  const [seleccion] = clasesPoligonos.filter(clasePoligono => poligono === new clasePoligono().id)
  
  
  //Para que quede más oredenado y legible, guardo en variables la nueva instancia generada y el nombre de la nueva instancia.
  const instanciaSeleccion = new seleccion()
  const nombreSeleccion = instanciaSeleccion.name
  console.log(`Perímetro del ${nombreSeleccion} ===> ${instanciaSeleccion.perimetro()}`)
  console.log(`Área del ${nombreSeleccion} ===> ${instanciaSeleccion.area()}`)

})
