export default function AffiliatePage() {
  return (
    <div className="bg-white min-h-screen pt-[72px] md:pt-[80px]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Affiliate Program
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Join our affiliate program and earn commission by promoting our products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Commission Structure */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            <h3 className="text-xl font-semibold mb-4">Commission Structure</h3>
            <ul className="space-y-2">
              <li>• 30% commission on all sales</li>
              <li>• Lifetime cookies</li>
              <li>• Monthly payouts</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            <h3 className="text-xl font-semibold mb-4">Benefits</h3>
            <ul className="space-y-2">
              <li>• Marketing materials provided</li>
              <li>• Dedicated support team</li>
              <li>• Real-time tracking</li>
            </ul>
          </div>

          {/* How to Join */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            <h3 className="text-xl font-semibold mb-4">How to Join</h3>
            <ul className="space-y-2">
              <li>• Create an account</li>
              <li>• Complete verification</li>
              <li>• Start promoting</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/dashboard"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
          >
            Join Our Affiliate Program
          </a>
        </div>
      </div>
    </div>
  )
}