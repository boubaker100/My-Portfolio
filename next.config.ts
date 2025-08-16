/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next'


const nextConfig = {   
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"cdn.sanity.io"
            }
        ]
    }

};

export default nextConfig;
