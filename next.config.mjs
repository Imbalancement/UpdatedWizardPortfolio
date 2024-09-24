/** @type {import('next').NextConfig} */
const nextConfig = {
  // Custom output directory for build
  distDir: 'build',
  
  // For static export
  //output: 'export',

  // Custom image loader setup
  /*images: {
    loader: 'custom',
    loaderFile: './src/loader.js',  // Correct relative path to loader.js
  },*/
};

export default nextConfig;
