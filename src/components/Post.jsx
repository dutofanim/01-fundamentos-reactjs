import PropTypes from 'prop-types'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({ author, publishedAt, content }) {

    const titleDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [comments, setComments] = useState([
        'Post muito bacana, hein!!'
    ])

    const [newCommentText, setNewCommentText] = useState('')
    
    function handleCreateNewContent() {
        event.preventDefault();
        setComments([...comments, newCommentText])
        setNewCommentText('');   
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

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
                        return (<p key={item.content}>
                                    {item.content}
                                </p>)
                    } else if (item.type === 'link') {
                        return (<p key={item.content}>
                                    <a href='#'>
                                        {item.content}
                                    </a>
                                </p>)
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewContent} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe aqui seu feedback'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment
                                key={comment}
                                content={comment}
                            />
                })}
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