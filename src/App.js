import React, { useState } from 'react';

function App() {

const [tarefas, setTarefas] = useState([
  'Pagar a conta de luz',
  'Estudar React Hooks'
]);
const [nome, setNome] = useState('Lucas');

  return (
    <div>
        <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
        <h1>{nome}</h1>
    </div>
  );
}

export default App;
