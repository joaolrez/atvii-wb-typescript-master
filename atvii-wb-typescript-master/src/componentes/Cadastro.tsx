import { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type props = {
    tema: string
}



export default class FormularioCadastroCliente extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light botao_cadastrar botao ${this.props.tema}`
        return (
            <div className="container">
                <div className="row containeTable" id="cadastro">
                    <div className="row">
                        <form className="col s12">
                            <h4 >Cadastro de Cliente</h4>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="icon_prefix " type="text" className="validate" required />
                                    <label htmlFor="icon_prefix">Nome Completo</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="icon_telephone" type="tel" className="validate" required />
                                    <label htmlFor="icon_telephone">Nome Social</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate " required />
                                    <label htmlFor="email">E-Mail</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="telefone" type="text" className="validate" required />
                                    <label htmlFor="telefone">Telefone</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="icon_telephone" type="tel" className="validate" required />
                                    <label htmlFor="icon_telephone">CPF</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="icon_telephone" type="date" className="validate" required />
                                    <label htmlFor="icon_telephone">Data Emissão</label>
                                </div>
                                <div className="input-field col s12">
                                    <input type="text" className="validate" />
                                    <label htmlFor="email">RG</label>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <button className={estiloBotao} type="submit" name="action">Cadastrar
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <br />
                <div className="row containeTable" id="cadastro">
                    <form className="col s12">
                        <h4>Cadastro de Produtos & Serviços</h4>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="nome" type="text" className="validate" />
                                <label htmlFor="nome">Nome</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="quantidade" type="text" className="validate" />
                                <label htmlFor="quantidade">Quantidade</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="preco" type="text" className="validate" />
                                <label htmlFor="preco">Preço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className={estiloBotao} type="submit" name="action">Cadastrar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}