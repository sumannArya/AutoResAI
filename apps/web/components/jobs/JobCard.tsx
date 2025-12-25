export function JobCard({ job }: { job?: any }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="font-semibold">Job Title</h3>
      <p className="text-gray-600">Company Name</p>
    </div>
  );
}
