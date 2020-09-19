import React from 'react'

import Information from '../Information'
import RhegionalLogo from '../../assets/RhegionalLogo.svg'
import MenuButton from '../../assets/MenuButton.svg'
import Mobile from '../../assets/mobile.svg'
import Clock from '../../assets/clock.svg'
import Mail from '../../assets/envelope.svg'

import './style.scss'

const Header: React.FC = () => {
  const toggleMenuBar = () => {
    const menu = document.querySelector('.nav')
    return menu.classList.toggle('hide')
  }

  return (
    <header className="header">
      <div className="imgInfo">
        <img className="imgInfo__img" src={RhegionalLogo} alt="Logo" />
        <div className="imgInfo__info">
          <Information
            img={Mobile}
            title={'Telefone'}
            description={'(11) 4479-3799'}
          />
          <Information
            img={Clock}
            title={'Funcionamento'}
            description={'SEG A SEX, Das 9h As 18h, SAB, Das 9h As 13h'}
          />
          <Information
            img={Mail}
            title={'E-Mail'}
            description={'Rhegional@Rhegional.com.br'}
          />
          <a href="#">Linkedin</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
        <button onClick={toggleMenuBar} className="imgInfo__button">
          <img className="imgInfo__menu" src={MenuButton} alt="MenuButton" />
        </button>
      </div>

      <nav className="nav hide">
        <ul className="list">
          <li className="list__item">Início</li>
          <li className="list__item">Sobre</li>
          <li className="list__item">Alugar</li>
          <li className="list__item">Vender</li>
          <li className="list__item">Favoritos</li>
          <li className="list__item">Blog</li>
          <li className="list__item">Contato</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
