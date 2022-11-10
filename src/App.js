import './styles/App.css';
import './styles/PostForm.css';
import './styles/Feed.css';

import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';
import clockIcon from './images/clock.svg';
import emptyFolderIcon from './images/empty-folder.svg';

export default function App() {
  const posts = [
    {
      id: Math.random(),
      content: 'Conteúdo do post',
      userName: 'Reny',
      publishedAt: new Date(),
    },
  ];

  function handleSubmit(event) {
    event.preventDefault();

    posts.push({
      id: Math.random(),
      content: `Conteúdo do Post ${Math.random()}`,
      userName: 'Dora',
      publishedAt: new Date(),
    });

    console.log(posts);
  }

  return (
    <div className="wrapper">
      <form className="post-form" onSubmit={handleSubmit()}>
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
        {posts.length === 0 && (
          <div className="feed-status">
            <img src={emptyFolderIcon} alt="Empty Folder" />
            <h1>Não encontramos nada</h1>
            <h2>
              Parece que você e seus amigos não postaram nada. Comece a escrever
              uma nova história!
            </h2>
          </div>
        )}

        {posts.length > 0 && (
          <>
            {/* Esse "<>" é o react fragment, utilizado para que não seja necessário colocar nenhum pai para as tags header e section  */}
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
                        Publicado em{' '}
                        {post.publishedAt.toLocaleDateString('pt-br')}
                      </span>
                    </div>
                  </footer>
                </article>
              ))}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
