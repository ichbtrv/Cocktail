/* eslint-disable import/no-extraneous-dependencies */
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPWA(
  withBundleAnalyzer({
    eslint: {
      dirs: ['.'],
    },
    pwa: {
      dest: 'public',
    },
    images: {
      domains: ['www.thecocktaildb.com'],
    },
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
  })
);
