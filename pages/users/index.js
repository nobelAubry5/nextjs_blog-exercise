import Link from "next/link";

export default function users(props) {
  return (
    <div className="container">
      <h1 className="title">Users</h1>
      {props.results.map((item, index) => (
        <div key={index} className="cardContainer">
          <h2 className="cardTitle">{item.name}</h2>
          <Link href={`/users/${item.id}`} className="lien">
            Contacter
          </Link>
        </div>
      ))}
    </div>
  );
}
export async function getServerSideProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const results = await data.json();
  return {
    props: { results },
  };
}
// https://jsonplaceholder.typicode.com/users
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },
