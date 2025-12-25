export function Card({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6" {...props}>
      {children}
    </div>
  );
}
