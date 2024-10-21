/** @type {import('next').NextConfig} */
const nextConfig = {
    /**
     * 意図しない副作用を検出するために2度レンダリングを行う。デフォルトはtrue
     * https://www.ey-office.com/blog_archive/2021/06/30/i-found-out-why-the-component-is-drawn-twice-in-the-react/
     */
    reactStrictMode: true,
};

export default nextConfig;
