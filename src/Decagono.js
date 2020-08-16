import Poligono from './Poligono'

//Clase Decágono con herencia de polígono y constructor de id y name.
class Decagono extends Poligono {
  constructor(id, name) {
    super()
    this.id = "5"
    this.name = "Decágono"
  }
  //Este método calcula el área de la nueva instancia.
  area() {
    return (this.lado * 10) * this.apotema /2
  }
  //Este método calcula el perímetro de la nueva instancia.
  perimetro() {
    console.log(this)
    return this.lado * 10
  }
}

export default Decagono
