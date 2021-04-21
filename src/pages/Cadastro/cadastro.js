import React, {useState} from 'react';
import './cadastro.css';
import {Formik, Form, Field } from 'formik';
import { history } from '../../history'
import refreshPage from '../../components/common';



const Cadastro = () => {

    const [email, setEmail]=useState("");
    const [password, setSenha]=useState("");

    async function registrar(){
        console.log(email, password);
        if (email === "" || password === ""){
            alert('Por favor, precisa preencher todos os campos');
        } else {
            let item = {email, password};

            const res = await fetch("https://reqres.in/api/register", item);

            localStorage.setItem('user=info', JSON.stringify(res));
            history.push('/');
            refreshPage();
            }
        
    }


    return (
        <>
            <Formik initialValues={{}} >
                <Form>
                    <h1>Fasitecando</h1>
                    <h3>Cadastro</h3>

                    <div className="form-group">
                        <Field
                            type="email"
                            name="email"
                            className="form-control" 
                            placeholder="Digite o email" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
       
                    </div>

                    <div className="form-group">
                        <Field
                            type="password"
                            name="senha"
                            className="form-control" 
                            placeholder="Digite a senha" 
                            onChange={(e) => setSenha(e.target.value)}
                        />
                   </div>

                    <button 
                        type="submit"
                        className="btn btn-primary btn-block btn-lg"
                        onClick={registrar}>
                        Cadastrar
                    </button>
                </Form>
            </Formik>    
        </>
    );
}
export default Cadastro;