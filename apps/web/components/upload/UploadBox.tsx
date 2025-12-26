"use client";

export default function UploadBox() {
  return (
    <div className="mx-auto max-w-3xl rounded-xl border-2 border-dashed border-purple-400 p-10 text-center">
      <p className="text-gray-700">
        Drag and drop a resume file or click to upload
      </p>

      <button className="mt-6 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 text-white">
        Upload
      </button>

      <p className="mt-3 text-xs text-gray-500">
        PDF, DOC, DOCX (maximum 5 files)
      </p>
    </div>
  );
}
