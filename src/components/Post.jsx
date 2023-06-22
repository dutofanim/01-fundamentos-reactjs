import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'


export function Post(props) {
    console.log(props)
    
    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                    <Avatar
                        src="https://github.com/dutofanim.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Carlos Eduardo Tofanim</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='20 de Junho às 14:15' dateTime='2023-06-20 14:15:00' className={styles.headerTime}>Públicado à 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 {'  '}<a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe aqui seu feedback'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}