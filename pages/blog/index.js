import Link from "next/link";

export default function blog(props) {
  console.log(props.results.map((item) => item.title));
  return (
    <div className="container">
      <h1 className="title">Blog</h1>
      {props.results.map((item, index) => (
        <div key={index} className="cardContainer">
          <h2 className="cardTitle">{item.title}</h2>
          <p className="paragraph">{item.body.substr(0, 50) + "..."}</p>
          <Link href={`/blog/${item.id}`} className="lien">
            Lire cet article
          </Link>
        </div>
      ))}
    </div>
  );
}
// https://jsonplaceholder.typicode.com/posts
// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },

export async function getServerSideProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const results = await data.json();
  return {
    props: { results },
  };
}
