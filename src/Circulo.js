import Poligono from './Poligono'

//Clase Circulo con herencia de polígono y constructor de id y name.
class Circulo extends Poligono {
  constructor(id, name) {
    super()
    this.id = "1"
    this.name = "Círculo"
  }
  //Este método calcula el área de la nueva instancia.
  area() {
    return Math.pow(this.radio, 2) * Math.PI
  }
  //Este método calcula el perímetro de la nueva instancia.
  perimetro() {
    console.log(this)
    return Math.PI * 2 * this.radio
  }
}

export default Circulo
