import * as React from "react";
import './home.css';
import {Button, Card} from 'react-bootstrap';
import { history } from '../../history';
import refreshPage from '../../components/common';

export default function Home() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {  //busca na api a lista de usuarios
    const res = await fetch("https://reqres.in/api/users?page=2");
    const json = await res.json();
    return setUsers(json.data);
  };
  
  async function deletar(){
    const res = await fetch("https://reqres.in/api/users/2"); //delete. Não finalizada
    const json = await res.json();
    return setUsers(json.data);
  }

  async function criar(){
    const res = await fetch("https://reqres.in/api/users"); // create. Não finalizada
    const json = await res.json();
    return setUsers(json.data);
  }

  async function ver(){
    const res = await fetch("https://reqres.in/api/users/2"); //single user. Não finalizada
    const json = await res.json();
    return setUsers(json.data);
  }

  async function editar(){
    const res = await fetch("https://reqres.in/api/users/2"); //update. Não finalizada
    const json = await res.json();
    setUsers(json.data);
  }

  
  function sair(){ //função de logout
    localStorage.clear();
    history.push('/');
    refreshPage();
  }


  React.useEffect( () => {f();} ,[] );
  return (
    <div className="App">
      <h1>Bem vindo!</h1> 
      <h2>Estes são os perfis cadastrados no momento</h2>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <Card style={{ width: '18rem' }}>
              <Card.Img id="imagem" variant="top" key={user.avatar} src={user.avatar}/>
              <Card.Body>
                <Card.Title><strong>{user.first_name}</strong></Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <div >
                  <Button variant="primary" onClick={editar}>Editar</Button>
                  <Button variant="danger" onClick={deletar}>Deletar</Button>
                  <Button variant="success" onClick={ver}>Visualizar</Button>
                </div>
              </Card.Body>
            </Card>
            );
            
          })}
      </div>
      <Button className="botoes" variant="primary" size="lg" onClick={criar}>Criar novo Perfil</Button>
      <Button className="botoes" variant="primary" size="lg" onClick={sair}>Sair</Button>
    </div>
  );
}