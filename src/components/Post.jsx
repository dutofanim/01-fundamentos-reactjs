import PropTypes from 'prop-types'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {

    let keyNumber = 0;

    const titleDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={titleDate} dateTime={publishedAt.toISOString()} className={styles.headerTime}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(item => {
                    
                    if (item.type === 'paragraph') {
                        keyNumber += 1;
                        return <p key={keyNumber}>{item.content}</p>
                    } else if (item.type === 'link') {
                        keyNumber += 1;
                        return <p key={keyNumber}><a href='#'>{item.content}</a></p>
                    }
                })}
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

Post.propTypes = {
    id: PropTypes.number,
    author: PropTypes.object,
    content: PropTypes.array,
    publishedAt: PropTypes.any
}