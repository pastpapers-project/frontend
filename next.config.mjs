/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
      outputFileTracingRoot: undefined,
      appDir: true
    },
    // Disable tracing to prevent the trace file issue
    outputFileTracing: false,
    // Add this to change build directory if needed
    distDir: 'build'
  }
  
  export default nextConfig;