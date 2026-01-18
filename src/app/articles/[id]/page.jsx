// app/items/[id]/page.js

export default async function ItemDetailsPage({ params }) {
  // 1. You MUST await params before destructuring
  const resolvedParams = await params;
  const id = resolvedParams.id;

  console.log("Fetching item with ID:", id);

  const res = await fetch(`http://localhost:5000/api/articles/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="p-20 text-center text-red-500">
        Item {id} not found in database.
      </div>
    );
  }

  const article = await res.json();

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white shadow mt-10 rounded">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-2xl text-green-600 font-bold my-4">${article.likeCount}</p>
      <p className="text-gray-600">{article.article}</p>
    </div>
  );
}
