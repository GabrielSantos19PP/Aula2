import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";

export default function FormCadastroCliente(props) {
    const [validado, setValidado] = useState(false);

    function manipularSubmissao(evento) {
        evento.preventDefault(); 
        const form = evento.currentTarget;

        if (form.checkValidity() === false) {
            evento.stopPropagation();
            setValidado(true);
        } else {
            alert("Formulário enviado com sucesso!"); 
            setValidado(true);
        }
    }

    return (
        <>
            <div className="border text-center">
                <h3>Formulário de Cadastro de Cliente</h3>
            </div>
            <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                        <Form.Label>ID computador</Form.Label>
                        <Form.Control
                            required
                            id="id"
                            name="id"
                            type="text"
                            placeholder="ID"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">
                            Informe o ID do computador
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Modelo computador</Form.Label>
                        <Form.Control
                            required
                            id="modelo"
                            name="modelo"
                            type="text"
                            placeholder="Modelo computador"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">
                            Informe o modelo do computador
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Usuario</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Usuario"
                                id="usuario"
                                name="usuario"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, insira um usuario.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Placa de Vídeo</Form.Label>
                        <Form.Control
                            required
                            id="placaDeVideo"
                            name="placaDeVideo"
                            type="text"
                            placeholder="Placa de vídeo"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">
                            Informe a placa de vídeo
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Processador</Form.Label>
                        <Form.Control
                            required
                            id="processador"
                            name="processador"
                            type="text"
                            placeholder="Processador"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">
                            Informe o processador
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Placa Mãe</Form.Label>
                        <Form.Control
                            required
                            id="placaMae"
                            name="placaMae"
                            type="text"
                            placeholder="Placa mãe"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">
                            Informe a placa mãe
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Memória RAM</Form.Label>
                        <Form.Control
                            required
                            id="memoriaRam"
                            name="memoriaRam"
                            type="text"
                            placeholder="Memória RAM"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">
                            Informe a memória RAM
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Fonte</Form.Label>
                        <Form.Control
                            required
                            id="fonte"
                            name="fonte"
                            type="text"
                            placeholder="Fonte"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">
                            Informe a fonte
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            required
                            id="senha"
                            name="senha"
                            type="password"
                            placeholder="Senha"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">
                            Informe uma senha
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Button type="submit">Cadastrar</Button>
                <Button type="reset">Limpar</Button>
            </Form>
        </>
    );
}
