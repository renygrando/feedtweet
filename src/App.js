import './styles/App.css';
import './styles/PostForm.css';
import './styles/Feed.css';

import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';
import clockIcon from './images/clock.svg';

export default function App() {
  const posts = [
    {
      id: Math.random(),
      content: 'Conteúdo do post',
      userName: 'Reny',
      publishedAt: new Date(),
    },
    {
      id: Math.random(),
      content: 'Este é o post 2',
      userName: 'Toddy',
      publishedAt: new Date(),
    },
  ];

  return (
    <div className="wrapper">
      <form
        className="post-form"
        onSubmit={() => alert('Formulário Submetido')}
      >
        <input placeholder="Escreva uma nova história..." />
        <div>
          <img src={userIcon} alt="user" />
          <input placeholder="Digite seu nome..." />
          <button type="submit">
            <img src={paperPlaneIcon} alt="Paper plane" />
            Publicar
          </button>
        </div>
      </form>
      <main>
        <header>
          <h1> Seu Feed</h1>
          <h2>Acompanhe o que seus amigos estão pensando em tempo real</h2>
        </header>

        <section className="feed">
          {posts.map((post) => (
            <article key={post.id}>
              <p>{post.content}</p>
              <footer>
                <div className="user-details">
                  <img src={userIcon} alt="user" />
                  <strong>{post.userName}</strong>
                </div>
                <div className="time">
                  <img src={clockIcon} alt="Clock" />
                  <span>
                    Publicado em {post.publishedAt.toLocaleDateString('pt-br')}
                  </span>
                </div>
              </footer>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
