import { BookOpen, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 border-b border-gray-200 bg-transparent px-4 py-5 shadow-sm backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-2">
          <div className="bg-gradient-primary rounded-xl p-2 text-white">
            <BookOpen />
          </div>
          <p className="text-lg font-bold text-gray-800 sm:text-xl">
            Mini Blog
          </p>
        </div>
        <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-600 sm:text-base">
          <Plus className="size-4 md:size-5" /> <span>New Post</span>
        </button>
      </div>
    </header>
  );
}
