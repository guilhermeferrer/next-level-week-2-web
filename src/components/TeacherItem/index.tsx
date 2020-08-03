import React from 'react';

import './styles.css';

import whatsappIcon from '../../images/icons/whatsapp.svg';

export default function TeacherItem() {
    return (
        <main>
            <article className="teacher-item">
                <header>
                    <img src="https://pbs.twimg.com/profile_images/1155077242936053760/hfkFd7AL_400x400.jpg" alt="William Candillon" />
                    <div>
                        <strong>William Candillon</strong>
                        <span>React Native</span>
                    </div>
                </header>
                <p>
                    Maker of the “Can it be done in React Native?” YouTube series http://youtube.com/wcandillon
                <br /><br />
                    Zürich | Ingressou em abril de 2008
            </p>
                <footer>
                    <p>
                        Preço/hora
                    <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                </button>
                </footer>
            </article>
        </main>
    )
}