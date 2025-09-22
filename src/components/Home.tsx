import { Calendar, Edit, Eye, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch posts from the API
    const fetchPosts = async () => {
      try {
        const result = await fetch(`${BASE_URL}/posts?_limit=5`);
        const data = await result.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  // Function to get excerpt of the post body
  const getExcerpt = (text: string, alpha: number) => {
    text = text.charAt(0).toUpperCase() + text.slice(1);
    return text.length > alpha ? text.substring(0, alpha) + "..." : text;
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* welcome section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
          Welcome to Mini Blog
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          Discover amazing stories, insights, and ideas from our community of
          writers.
        </p>
      </section>

      {/* posts section */}
      <section className="mt-12 space-y-5 md:mt-16">
        {posts.map((post) => (
          <article className="group rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-shadow duration-200 ease-in-out hover:shadow-blue-100 md:mt-16 md:p-8">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-xl font-semibold text-gray-800 transition-colors duration-200 ease-in-out group-hover:text-blue-500 md:text-2xl">
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </h2>
              <div className="mt-2 mb-4 flex items-center">
                <Calendar className="size-4" />
                <span className="ml-2 text-sm md:text-base">June 20, 2024</span>
              </div>
              <p className="md:text-lg">{getExcerpt(post.body, 100)}</p>
            </div>
            {/* Post footer */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex cursor-pointer items-center gap-1.5 text-blue-500 transition-colors duration-200 ease-in-out hover:text-blue-600">
                <Eye className="inline size-4" />
                <span>Read More</span>
              </div>
              <div className="flex gap-1.5">
                <button className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-200 sm:text-base">
                  <Edit className="inline size-4" />
                  <span>Edit</span>
                </button>
                <button className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-red-200 sm:text-base">
                  <span className="sr-only">Delete</span>
                  <Trash2 className="inline size-4 text-red-500" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
