import React from 'react'
import Button from '../Button'

import Input from '../Input'
import TextArea from '../TextArea'

import './style.scss'

const Form: React.FC = () => {
  return (
    <div className="Wrapper">
      <form className="Form">
        <div className="FormDiv">
          <h1 className="FormDiv__title">Entre em contato conosco</h1>
          <Input name="nome" placeholder="Nome" />
          <Input name="email" placeholder="Email" />
          <Input name="telefone" placeholder="Telefone" />
          <TextArea name="mensagem" placeholder="Mensagem" />
          <Button label="Enviar" />
        </div>
      </form>
    </div>
  )
}

export default Form
