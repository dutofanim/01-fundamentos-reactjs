/* Components Imports */
import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

/* Styles Imports (CSS) */
import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/dutofanim.png',
      name: 'Carlos Eduardo Tofanim',
      role: 'Student @RocketSeat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'hashTags', content: ['#novoprojeto','#nlw','#rocketseat']}
    ],
    publishedAt: new Date('2023-06-21 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @RocketSeat'
    },
    content: [
      {type: 'paragraph', content: 'Falaaaa Dev 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'hashTags', content: ['#novoprojeto','#nlw','#rocketseat']}
    ],
    publishedAt: new Date('2023-06-19 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'CCO @RocketSeat'
    },
    content: [
      {type: 'paragraph', content: 'Falaaaa Dev 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'hashTags', content: ['#novoprojeto','#nlw','#rocketseat']}
    ],
    publishedAt: new Date('2023-06-18 20:00:00'),
  }
] 

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

