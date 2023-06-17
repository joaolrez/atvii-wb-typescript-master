import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./Cadastro";
import ListaCliente from "./listagem";
import ProdutosServicos from "./produtos_servicos";
import MelhoresClientes from "./ClientesQuant";


type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Clientes','Melhores Clientes', 'Cadastros', 'Produtos & Serviços']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Melhores Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <MelhoresClientes tema="purple lighten-4" />
                </>
            )

        } else if (this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        } else {
            return (
                <>
                    {barraNavegacao}
                    <ProdutosServicos tema="purple lighten-4" />
                </>
            )
        }

    }
}