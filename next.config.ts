import type { NextConfig } from "next";
import { i18n } from './i18n-config';

const nextConfig: NextConfig = {
  i18n,
  srcDir: './src',
};

export default nextConfig;
