import Feed from '../components/Feed';

export default function MostViwed() {
  const posts = [
    {
      id: Math.random(),
      content: 'content',
      userName: 'Mateus',
      publishedAt: new Date(),
    },
  ];

  return (
    <main className="most-viwed">
      <Feed
        posts={posts}
        title="Mais vistos"
        subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
      />
    </main>
  );
}
