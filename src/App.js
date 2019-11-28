import React from 'react'
import Rest from './rest'
import Header from './elements/Header'
import Meses from './elements/Meses'
import AdicionarMes from './AdicionarMes'

const baseUrl = 'https://mymoney-devpleno-eri.firebaseio.com/'

const { useGet, usePost, useDelete } = Rest(baseUrl)

function App() {
  // const data = useGet('movimentacoes/2019-08')
  const data = useGet('meses')
  // const [postData, post] = usePost('movimentacoes/2019-08')
  // const [deleteData, remove] = useDelete()

  const saveNew = () => {
    // post({ valor: 10, descricao: 'Refrigerante' })
  }

  const doRemove = () => {
    // remove('movimentacoes/2019-08/-LuZ7vhzSD3MHVkdCKLP')
  }

  return (
    <div>
      <Header />
      <div className='container'>
        <AdicionarMes />
        <Meses />
      </div>
    </div >
  )
}

export default App
