import Image from "next/image";
import Link from "next/link";

// Helper to fetch data
async function getItems() {
  try {
    const res = await fetch("http://localhost:5000/api/articles", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch items");
    }
    return res.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();
  console.log(items);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Articles</h1>

      {items.length === 0 ? (
        <p className="text-red-500">
          No items found. Is the Express Backend running on port 5000?
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200 w-full object-cover flex items-center justify-center text-gray-500">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  "No Image"
                )}
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.article}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">${item.Author}</span>
                  <Link
                    href={`/articles/${item._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
