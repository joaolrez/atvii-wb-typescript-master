/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import './app.css'


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        return (
            <> 
                <div className="container">
                    
                    <main>
                        
                            <br />
                            <div className='col s12 m12 l6 estilo'>
                                <div className="containeTable">
                                    <h5>Masculino</h5>
                                    <table className="responsive-table highlight">
                                        <thead>
                                            <tr>    
                                                <th>Nome</th>
                                                <th>E-mail</th>
                                                <th>Telefone</th>
                                                <th>Editar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Pedro Seraggi</td>
                                                <td>Pedrofseraggi@gmail.com</td>
                                                <td>12 99725-3005</td>
                                                <td><i className="material-icons">edit</i><i className="material-icons">delete</i></td>
                                            </tr>
                                            <tr>
                                                <td>João Pedro Lopes</td>
                                                <td>JPlopes@gmail.com</td>    
                                                <td>12 1323-7231</td>
                                                <td><i className="material-icons">edit</i><i className="material-icons">delete</i></td>
                                            </tr>
                                            <tr>
                                                <td>Rafael Barbosa</td>
                                                <td>RafaelBarbosaa@gmail.com</td>
                                                <td>12 3456-7890</td>
                                                <td><i className="material-icons">edit</i><i className="material-icons">delete</i></td>
                                            </tr>
                                            <tr>
                                                <td>Gabriel Ferreira</td>
                                                <td>GabrielFerreira@gmail.com</td>
                                                <td>12 2323-8787</td>
                                                <td><i className="material-icons">edit</i>
                                                <i className="material-icons">delete</i></td>
                                 
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <br />
                            <div className='col s12 m12 l6 estilo'>
                                <div className="containeTable">
                                    <h5>Feminino</h5>
                                    <table className="responsive-table highlight">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>E-mail</th>
                                                <th>Telefone</th>
                                                <th>Editar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Marcela Duarte</td>
                                                <td>MahDuarte@gmail.com</td>
                                                <td>12 9876-5432</td>
                                                <td><i className="material-icons">mode_edit</i><i className="material-icons">delete</i></td>
                                            </tr>
                                            <tr>
                                                <td>Julia Das Silva</td>
                                                <td>JuliaSilvanaa@gmail.com</td>
                                                <td>12 1232-3221</td>
                                                <td><i className="material-icons">mode_edit</i><i className="material-icons">delete</i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        
                        <br />
                    </main>
                    
                 
                </div>

            </>
        )
    }
}