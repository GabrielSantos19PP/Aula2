import Pagina from "../templates/Pagina";
import FormCadastroCliente from "./formulario/FormCadastroCliente";

export default function TelaCadastroCliente(props) {
    return (
        <Pagina titulo="Tela de Cadastro de Maquina">
            <FormCadastroCliente/>
        </Pagina>
    )
}