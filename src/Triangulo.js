import Poligono from './Poligono'

//Clase Triángulo con herencia de polígono y constructor de id y name.
class Triangulo extends Poligono {
  constructor(id, name) {
    super()
    this.id = "3"
    this.name = "Triángulo"
  }
  //Este método calcula el área de la nueva instancia.
  area() {
    return (this.base * this.altura) /2
  }
  //Este método calcula el perímetro de la nueva instancia.
  perimetro() {
    console.log(this)
    return this.lado * 3
  }
}

export default Triangulo
