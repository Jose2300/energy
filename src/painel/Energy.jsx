import React, {Component} from "react";
import './Energy.css'
import Form from "../componentes/Form";
import Display from "../componentes/Display";
import Tabela from "../componentes/Tabela";
export default class Energy extends Component {
    render() {
        return(
            <div className="energy">
                <Display value="100"/>
                 <Form/>
                 <Tabela/>


            </div>
        )
    }
}