import React from 'react'
import Rest from './rest'

const baseUrl = 'https://mymoney-devpleno-eri.firebaseio.com/'

const { useGet, usePost, useDelete } = Rest(baseUrl)

function App() {
  const data = useGet('movimentacoes/2019-08')
  const [postData, post] = usePost('movimentacoes/2019-08')
  const [deleteData, remove] = useDelete()

  const saveNew = () => {
    post({ valor: 10, descricao: 'Refrigerante' })
  }

  const doRemove = () => {
    remove('movimentacoes/2019-08/-LuZ7vhzSD3MHVkdCKLP')
  }

  return (
    <div>
      <h1>MyMoney</h1>
      {data.loading && <p>Carregando...</p>}
      {JSON.stringify(data)}
      <button onClick={saveNew}>Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
      <button onClick = {doRemove}>Deletar</button>
      <pre>{JSON.stringify(deleteData)}</pre>
    </div>
  )
}

export default App
