export function Card({ beer }) {
  return (
    <div className="w-80 border-2 rounded-md p-4">
      <img
        className="w-40 max-h-[400px] mx-auto"
        src={beer.image_url}
        alt={beer.name}
      />
      <h2 className="text-xl font-bold mt-4">{beer.name}</h2>
      <p className="text-xs text-gray-500">{beer.description}</p>
    </div>
  );
}
