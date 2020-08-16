import Poligono from './Poligono'

//Clase Rectángulo con herencia de polígono y constructor de id y name.
class Rectangulo extends Poligono {
  constructor(id, name) {
    super()
    this.id = "2"
    this.name = "Rectángulo"
  }
  //Este método calcula el área de la nueva instancia.
  area() {
    return (this.base * this.altura)
  }
  //Este método calcula el perímetro de la nueva instancia.
  perimetro() {
    console.log(this)
    return (this.base + this.altura) * 2
  }
}

export default Rectangulo

