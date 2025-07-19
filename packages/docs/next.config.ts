import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // Nextra 会自动检测 theme.config.tsx 并处理 MDX 文件
});

// Export the final Next.js config with Nextra included
export default withNextra({
});
