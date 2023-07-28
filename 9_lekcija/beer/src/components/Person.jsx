export function Person({ name, age }) {
  return (
    <div className="border-2 rounded-md p-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-xs">{age}</p>
    </div>
  );
}
