export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">
              Logo
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-gray-900">
                About
              </a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}