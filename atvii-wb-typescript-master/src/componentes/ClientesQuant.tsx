/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import './app.css'


type props = {
    tema: string
}


export default class ClientesQuant extends Component<props> {
    render() {
        let estilo = ``

        return (

            <section>
            <br />
        <div className="container">

            <div className='col s12 m12 l4 estilo'>
                <div className="containeTable">
                    <h5>Top 10 que mais consumiram (Quant.)</h5>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Gabriel Ferreira</td>
                                <td>33</td>
                            </tr>
                            <tr>
                                <td>Pedro</td>
                                <td>23</td>
                            </tr>
                            <tr>
                                <td>Joao</td>
                                <td>21</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <br />
            <div>
                <div className='col s12 m12 l4 estilo'>
                    <div className="containeTable">
                        <h5>Top 10 que menos consumiram (Quant.)</h5>
                        
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rafael Barbosa</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Julia Das Silva</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br />
                <div className='col s12 m12 l4 estilo'>
                     <div className="containeTable">
                        <h5>Top 10 que mais consumiram (Valor.)</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Gabriel Ferreira</td>
                                    <td>R$ 1023,67</td>
                                </tr>
                                <tr>
                                    <td>Pedro</td>
                                    <td>R$ 895,12</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </section>
        )

    }
}