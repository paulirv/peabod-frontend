export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-center text-gray-500 text-sm">
          &copy; {currentYear} Peabod. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
