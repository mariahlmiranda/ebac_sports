import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useGetProdutosQuery } from './store/api'

import { GlobalStyle } from './styles'

function App() {
  const { data: produtos } = useGetProdutosQuery()

  if (!produtos) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos} />
      </div>
    </>
  )
}

export default App