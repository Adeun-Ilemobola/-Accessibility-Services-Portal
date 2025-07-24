import DouglasLogo from '@/components/DouglasLogo';
import React from 'react'

export default function page() {
    return (
        <div className="p-8 space-y-12 bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-8">Douglas Logo Examples</h1>

            {/* Basic Usage */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">1. Basic Usage</h2>
                <div className="bg-white p-4 rounded-lg shadow">
                    <DouglasLogo />
                </div>
                <code className="block bg-gray-800 text-green-400 p-2 rounded text-sm">
                    &lt;DouglasLogo /&gt;
                </code>
            </section>

            {/* Size Variations */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">2. Size Variations</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Small</h3>
                        <DouglasLogo size="sm" />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Medium</h3>
                        <DouglasLogo size="md" />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Large</h3>
                        <DouglasLogo size="lg" />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Extra Large</h3>
                        <DouglasLogo size="xl" />
                    </div>
                </div>
                <code className="block bg-gray-800 text-green-400 p-2 rounded text-sm">
                    &lt;DouglasLogo size="sm" /&gt;<br />
                    &lt;DouglasLogo size="md" /&gt;<br />
                    &lt;DouglasLogo size="lg" /&gt;<br />
                    &lt;DouglasLogo size="xl" /&gt;
                </code>
            </section>

            {/* Custom Dimensions */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">3. Custom Dimensions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Custom 300x150</h3>
                        <DouglasLogo width={300} height={150} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Wide 500x200</h3>
                        <DouglasLogo width={500} height={200} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Square 250x250</h3>
                        <DouglasLogo width={250} height={250} />
                    </div>
                </div>
                <code className="block bg-gray-800 text-green-400 p-2 rounded text-sm">
                    &lt;DouglasLogo width={300} height={150} /&gt;<br />
                    &lt;DouglasLogo width={500} height={200} /&gt;<br />
                    &lt;DouglasLogo width={250} height={250} /&gt;
                </code>
            </section>

            {/* Single Color Variations */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">4. Single Color Variations</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Navy Blue</h3>
                        <DouglasLogo size="md" color="#1e3a8a" />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Forest Green</h3>
                        <DouglasLogo size="md" color="#166534" />
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2 text-white">White on Dark</h3>
                        <DouglasLogo size="md" color="white" />
                    </div>
                </div>
                <code className="block bg-gray-800 text-green-400 p-2 rounded text-sm">
                    &lt;DouglasLogo size="md" color="#1e3a8a" /&gt;<br />
                    &lt;DouglasLogo size="md" color="#166534" /&gt;<br />
                    &lt;DouglasLogo size="md" color="white" /&gt;
                </code>
            </section>

            {/* Multi-Color Examples */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">5. Multi-Color Examples</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Brand Colors</h3>
                        <DouglasLogo
                            size="md"
                            colors={['#003366', '#0066cc', '#3399ff', '#666666']}
                        />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Rainbow</h3>
                        <DouglasLogo
                            size="md"
                            colors={['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']}
                        />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Warm Tones</h3>
                        <DouglasLogo
                            size="md"
                            colors={['#dc2626', '#ea580c', '#d97706', '#65a30d']}
                        />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Cool Gradient</h3>
                        <DouglasLogo
                            size="md"
                            colors={['#1e40af', '#3b82f6', '#60a5fa', '#93c5fd']}
                        />
                    </div>
                </div>
                <code className="block bg-gray-800 text-green-400 p-2 rounded text-sm">
                    &lt;DouglasLogo colors={['#003366', '#0066cc', '#3399ff', '#666666']} /&gt;<br />
                    &lt;DouglasLogo colors={['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']} /&gt;<br />
                    &lt;DouglasLogo colors={['#dc2626', '#ea580c', '#d97706', '#65a30d']} /&gt;<br />
                    &lt;DouglasLogo colors={['#1e40af', '#3b82f6', '#60a5fa', '#93c5fd']} /&gt;
                </code>
            </section>

            {/* Without Full Name */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">6. Logo Only (No Full Name)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Compact Black</h3>
                        <DouglasLogo size="sm" showFullName={false} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Compact Blue</h3>
                        <DouglasLogo size="md" showFullName={false} color="#2563eb" />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Compact Multi-Color</h3>
                        <DouglasLogo
                            size="lg"
                            showFullName={false}
                            colors={['#7c3aed', '#a855f7', '#c084fc']}
                        />
                    </div>
                </div>
                <code className="block bg-gray-800 text-green-400 p-2 rounded text-sm">
                    &lt;DouglasLogo size="sm" showFullName={false} /&gt;<br />
                    &lt;DouglasLogo size="md" showFullName={false} color="#2563eb" /&gt;<br />
                    &lt;DouglasLogo showFullName={false} colors={['#7c3aed', '#a855f7', '#c084fc']} /&gt;
                </code>
            </section>

            {/* With Tailwind Classes */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">7. With Tailwind CSS Classes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Drop Shadow + Hover</h3>
                        <DouglasLogo
                            size="md"
                            className="drop-shadow-lg hover:scale-105 transition-transform cursor-pointer"
                            color="#1f2937"
                        />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h3 className="text-sm font-medium mb-2">Rounded + Border</h3>
                        <DouglasLogo
                            size="md"
                            className="rounded-lg border-2 border-gray-200 p-2"
                            colors={['#059669', '#10b981', '#34d399', '#6ee7b7']}
                        />
                    </div>
                </div>
                <code className="block bg-gray-800 text-green-400 p-2 rounded text-sm">
                    &lt;DouglasLogo className="drop-shadow-lg hover:scale-105 transition-transform" /&gt;<br />
                    &lt;DouglasLogo className="rounded-lg border-2 border-gray-200 p-2" /&gt;
                </code>
            </section>

            {/* Practical Use Cases */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">8. Practical Use Cases</h2>
                <div className="space-y-6">
                    {/* Header Logo */}
                    <div className="bg-white border rounded-lg">
                        <div className="flex items-center justify-between p-4 border-b">
                            <DouglasLogo size="sm" showFullName={false} color="#374151" />
                            <nav className="flex space-x-4">
                                <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                            </nav>
                        </div>
                        <div className="p-4 text-center text-gray-500">Header with compact logo</div>
                    </div>

                    {/* Footer Logo */}
                    <div className="bg-gray-900 text-white rounded-lg p-6 text-center">
                        <DouglasLogo size="md" color="white" className="mx-auto mb-4" />
                        <p className="text-gray-300">© 2024 Douglas College. All rights reserved.</p>
                    </div>

                    {/* Business Card Style */}
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 max-w-sm">
                        <DouglasLogo size="sm" showFullName={false} colors={['#1e40af', '#3b82f6', '#60a5fa']} />
                        <div className="mt-4">
                            <h3 className="font-semibold">John Smith</h3>
                            <p className="text-gray-600 text-sm">Student Services</p>
                            <p className="text-gray-600 text-sm">john.smith@douglascollege.ca</p>
                        </div>
                    </div>
                </div>
                <code className="block bg-gray-800 text-green-400 p-2 rounded text-sm">
                    {`// Header
<DouglasLogo size="sm" showFullName={false} color="#374151" />

// Footer  
<DouglasLogo size="md" color="white" className="mx-auto mb-4" />

// Business Card
<DouglasLogo size="sm" showFullName={false} colors={['#1e40af', '#3b82f6', '#60a5fa']} />`}
                </code>
            </section>
        </div>
    );
}
