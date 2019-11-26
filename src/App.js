import React from 'react'
import useGet from './useGet'
import usePost from './usePost'
import useDelete from './useDelete'

import useDelete from './useDelete'


const url = 'https://mymoney-devpleno-eri.firebaseio.com/movimentacoes/2019-08.json'

function App() {
  const data = useGet(url)
  const [postData, post] = usePost(url)
  const[deleteData, remove] = useDelete()

  const saveNew = () => {
    post({ valor: 10, descricao: 'Refrigerante' })
  }

  return (
    <div>
      <h1>MyMoney</h1>
      {data.loading && <p>Carregando...</p>}
      {JSON.stringify(data)}
      <button onClick={saveNew}>Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
    </div>
  )
}

export default App
