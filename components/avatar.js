export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="avatar__posts" alt={name} />
      {/* <div className="text-xl font-bold">{name}</div> */}
    </div>
  );
}
