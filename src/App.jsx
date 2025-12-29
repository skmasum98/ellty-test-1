import { useState } from "react";

export default function App() {
  const [pages, setPages] = useState({
    all: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
    page5: false,
    page6: false,
  });

  const handleAllChange = () => {
    const newValue = !pages.all;
    const updated = Object.fromEntries(
      Object.keys(pages).map((key) => [key, newValue])
    );
    setPages(updated);
  };

  const handlePageChange = (page) => {
    const updated = { ...pages, [page]: !pages[page] };
    const allChecked = Object.keys(updated)
      .filter((key) => key !== "all")
      .every((key) => updated[key]);
    updated.all = allChecked;
    setPages(updated);
  };

  const handleDone = () => {
  const selected = Object.keys(pages)
    .filter((key) => key !== "all" && pages[key])
    .map((p) => p.replace("page", "Page "));
  console.log("Selected:", selected);
  alert(`Selected pages: ${selected.join(", ") || "None"}`);
};


  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white w-80 p-4 rounded-lg shadow-md border-t border-gray-200">
        <div
          className="overflow-y-scroll mb-4 pr-1 space-y-2 no-scrollbar"
          style={{ maxHeight: "140px" }}
        >
          <label className="flex justify-between items-center sticky top-0 bg-white pb-1">
            <span className="text-gray-700 text-sm">All pages</span>
            <input
              type="checkbox"
              checked={pages.all}
              onChange={handleAllChange}
              className="w-4 h-4 accent-yellow-400"
            />
          </label>

          {["page1", "page2", "page3", "page4", "page5", "page6"].map(
            (page, i) => (
              <label
                key={page}
                className="flex justify-between items-center transition-all"
              >
                <span className="text-gray-700 text-sm">Page {i + 1}</span>
                <input
                  type="checkbox"
                  checked={pages[page]}
                  onChange={() => handlePageChange(page)}
                  className="w-4 h-4 accent-yellow-400"
                />
              </label>
            )
          )}
        </div>

        <button
          onClick={handleDone}
          className="w-full bg-yellow-400 text-sm font-medium py-2 rounded hover:bg-yellow-500 transition"
        >
          Done
        </button>
      </div>
    </div>
  );
}
