import { PencilSimpleLine } from 'phosphor-react'
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjE5fHxkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <Avatar
                    src="https://github.com/dutofanim.png"
                />
                <strong>Carlos Eduardo Tofanim</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} margin={16}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}