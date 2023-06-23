import PropTypes from 'prop-types'
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/dutofanim.png" 
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.commentHeader}>
                        <div className={styles.authorAndTime}>
                            <strong>Carlos Eduardo Tofanim</strong>
                            <time title='20 de Junho às 14:15' dateTime='2023-06-20 14:15:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário" className={styles.commentBtn}>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir<span> 20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

Comment.propTypes = {
    content: PropTypes.string
}