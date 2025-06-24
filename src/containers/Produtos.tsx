import ProdutoComponent from '../components/Produto'
import { Produto } from '../types'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

import * as S from './styles'

type Props = {
  produtos: Produto[]
}

const ProdutosContainer = ({ produtos }: Props) => {
  const { favoritos } = useSelector((state: RootState) => state.cart)

  const produtoEstaNosFavoritos = (produto: Produto) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <ProdutoComponent
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosContainer