import React from 'react'

import SelectInput from '../SelectInput'
import Input from '../Input'

import './style.scss'
import Button from '../Button'

const SearchBox: React.FC = () => {
  return (
    <div className="banner">
      <form className="form">
        <h1 className="form__title">A sua nova casa está aqui !</h1>
        <SelectInput nome="Negociação">
          <option value="Venda">Venda</option>
          <option value="Aluga">Aluga</option>
        </SelectInput>
        <SelectInput nome="Tipo">
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
        </SelectInput>
        <SelectInput nome="Cidade">
          <option value="Santo André">Santo André</option>
          <option value="São Bernardo">São Bernardo</option>
        </SelectInput>
        <SelectInput nome="Bairro">
          <option value="Utinga">Utinga</option>
          <option value="Parque da Nações">Parque da Nações</option>
        </SelectInput>
        <Input type="text" placeholder="Código" />
        <Button label="Buscar" type="submit" />
      </form>
    </div>
  )
}

export default SearchBox
