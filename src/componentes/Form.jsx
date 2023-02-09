import React from "react"
import './Form.css'

function Form(){
    return (
        
       <form>
        <label>Quantidade de Eletros</label>
       <select id="select">
     
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    
      
     
  </form>)

}
function selecionado() {
    var select = document.getElementById("marcas");
    
        
}

export default Form;


