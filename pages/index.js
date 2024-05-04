import Link from "next/link";

export default function index() {
  return (
    <div className="container">
      <h1 className="title">Home</h1>
      <div className="cardContainer">
        <h2 className="cardTitle">Lisez les articles</h2>
        <h3 className="text-md font-semibold text-slate-900">
          Maximisez votre culture web
        </h3>
        <p className="paragraph">
          Chaque auteur tente de vous apporter le plus de valeur possible par
          article.
        </p>
        <Link href="/blog" className="lien">
          Visiter le blog
        </Link>
      </div>
      <div className="cardContainer">
        <h2 className="cardTitle">Faitez un tour vers la liste des membres</h2>
        <h3 className="text-md font-semibold text-slate-900">
          Faitez vous des amis
        </h3>
        <p className="paragraph">
          Ajoutez,invitez et discutez avec les différents membres.
        </p>
        <Link href="/users" className="lien">
          Découvrez la liste des membres
        </Link>
      </div>
    </div>
  );
}
