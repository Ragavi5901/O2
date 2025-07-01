// src/pages/sections/CMSManagement.jsx
import { Card, CardContent } from "@/components/ui/card";

export default function CMSManagement() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">CMS Management</h2>

      <Card>
        <CardContent className="space-y-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Banner Title
              </label>
              <input
                type="text"
                placeholder="Enter banner title"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Upload Banner Image
              </label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded px-3 py-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Promotional Content
              </label>
              <textarea
                placeholder="Write festive or promotional content..."
                rows={4}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
              >
                Update CMS
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
