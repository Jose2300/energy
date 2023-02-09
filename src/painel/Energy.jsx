import React, {Component} from "react";
import './Energy.css'
import Display from "../componentes/Display";
import Form from "../componentes/Form";
import Button from "../componentes/Button";
import Tabela from "../componentes/Tabela";
export default class Energy extends Component {
    render() {
        return(
            <div className="energy">
                <Display value="100"/>
                 <Form/>
                 <Button/>
                 <Tabela/>


            </div>
        )
    }
}