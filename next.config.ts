import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit",
    DB_URI: "",

    CLOUDINARY_CLOUD_NAME: "dqpon9vyj",
    CLOUDINARY_API_KEY: "328692149314358",
    CLOUDINARY_API_SECRET: "foP10jIBux896hfSzphuYZ70aYw",
    
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "KSDFJKLSDJFLKSDFJSLDKF934KJLDJGDLKGFJDF",
  },
  // images: {
  //   domains: ['res.cloudinary.com']
  // }
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        // port: '',
        // pathname: '',
        // search: '',
      },
    ],
  },
};

export default nextConfig;
