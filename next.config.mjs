import NextBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = NextBundleAnalyzer({
   enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   compress: true,
   poweredByHeader: false,
   devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-right',
   },
   logging: {
      fetches: {
         fullUrl: true,
      },
   },
};

export default withBundleAnalyzer(nextConfig);
