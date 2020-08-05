import React from 'react';

import './styles.css';

import whatsappIcon from '../../images/icons/whatsapp.svg';
import api from '../../services/api';

interface TeacherItemProps {
    teacher: {
        id: number;
        subject: string;
        cost: number;
        user_id: number;
        name: string;
        avatar: string;
        whatsapp: string;
        bio: string;
    };
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher: { user_id, avatar, name, subject, bio, cost, whatsapp } }) => {

    function createNewConnection() {
        api.post('/connection', {
            user_id
        });
    }

    return (
        <main>
            <article className="teacher-item">
                <header>
                    <img src={avatar} alt="William Candillon" />
                    <div>
                        <strong>{name}</strong>
                        <span>{subject}</span>
                    </div>
                </header>
                <p>{bio}</p>
                <footer>
                    <p>
                        Preço/hora
                    <strong>R$ {cost.toFixed(2)}</strong>
                    </p>
                    <a onClick={createNewConnection} href={`https://wa.me/${whatsapp}`} target="_blank">
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </a>
                </footer>
            </article>
        </main>
    )
}

export default TeacherItem;