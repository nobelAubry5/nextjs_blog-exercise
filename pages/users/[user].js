export default function user(props) {
  console.log(props.user.name);
  return (
    <div className="container">
      <div className="border border-slate-700 rounded-md py-6 px-2 my-6">
        <h1 className="title">{props.user.name}</h1>
        <h2 className="font-semibold text-lg text-slate-700">
          Username: {props.user.username}
        </h2>
        <p className="text-sm border border-slate-600 rounded-t-md p-3">
          Username: {props.user.username}
        </p>
        <p className=" text-sm border border-slate-600  p-3">
          Email: {props.user.email}
        </p>
        <p className="text-sm border border-slate-600  p-3">
          Site Web: {props.user.email}
        </p>
        <p className=" text-sm border border-slate-600 rounded-b-md p-3">
          Téléphone: {props.user.email}
        </p>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const id = context.params.user;
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();
  return {
    props: { user },
  };
}
export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  const paths = users.map((item) => ({ params: { user: item.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}
