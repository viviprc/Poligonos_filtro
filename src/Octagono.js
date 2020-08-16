import Poligono from './Poligono'

//Clase Octágono con herencia de polígono y constructor de id y name.
class Octagono extends Poligono {
  constructor(id, name) {
    super()
    this.id = "4"
    this.name = "Octágono"
  }   
  //Este método calcula el área de la nueva instancia.
  area() {
    return (this.lado * 8) * this.apotema /2
  }
  //Este método calcula el perímetro de la nueva instancia.
  perimetro() {
    console.log(this)
    return this.lado * 8
  }
}

export default Octagono
