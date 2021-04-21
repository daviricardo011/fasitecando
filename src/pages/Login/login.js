import React from 'react';
import './login.css';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { history } from '../../history';
import refreshPage from '../../components/common';



const Login = () => {
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    });

    


    const handleSubmit = values => {
        axios.post('https://reqres.in/api/login', values)
        .then(resp => {
            const {data} = resp;
            if (data) {
                localStorage.setItem('app-token', data);
                    history.push('/home');
                    refreshPage();
            } 
        });
    }

    

    return (
        <>
            
            <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                <Form>
                    <h1>Fasitecando</h1>
                    <h3>Entrar</h3>

                    <div className="form-group">
                        <Field
                            type="email"
                            name="email"
                            className="form-control" 
                            placeholder="Digite o email"
                        />
                        
                        <ErrorMessage 
                            component="span"
                            name="email"
                            className="alert-danger .container-sm"
                        />
                        
                        
                    </div>

                    <div className="form-group">
                        <Field
                            type="password"
                            name="password"
                            className="form-control" 
                            placeholder="Digite a senha"
                        />
                        <ErrorMessage 
                            component="span"
                            name="password"
                            className="alert-danger .container-sm"
                        />
                   </div>

                    <button type="submit" className="btn btn-primary btn-block btn-lg">Entrar</button>
                    <p className="forgot-password text-right"><a href="/cadastro">Cadastrar novo usuario</a></p>
                </Form>
            </Formik>
            <p>Email: eve.holt@reqres.in</p>  
            <p>Senha: cityslicka</p>    
        </>
    );
}

export default Login