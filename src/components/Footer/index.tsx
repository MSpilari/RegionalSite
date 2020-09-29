import React from 'react'
import Information from '../Information'
import SocialLinks from '../SocialLinks'

import RhegionalLogo from '../../assets/RhegionalLogo.svg'

import './style.scss'

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <img className="Footer__img" src={RhegionalLogo} alt="Logo" />
      <div className="Info">
        <Information
          tag={'fas fa-mobile-alt'}
          title={'Telefone'}
          description={'(11) 4479-3799'}
        />
        <Information
          tag={'far fa-clock'}
          title={'Funcionamento'}
          description={'SEG A SEX, Das 9h As 18h,\nSAB, Das 9h As 13h'}
        />
        <Information
          tag={'far fa-envelope'}
          title={'E-Mail'}
          description={'Rhegional@Rhegional.com.br'}
        />
        <div className="Info__social">
          <SocialLinks
            tag="fab fa-facebook-square"
            path="https://www.facebook.com.br"
          />
          <SocialLinks
            tag="fab fa-instagram-square"
            path="https://www.instagram.com.br"
          />
          <SocialLinks
            tag="fab fa-linkedin"
            path="https://www.linkedin.com.br"
          />
        </div>
        <div>
          <p>
            2020 Rhegional Imóveis - Todos os direitos reservados|
            <br />
            Criado por MSpilari
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
