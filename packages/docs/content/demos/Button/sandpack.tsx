import { Sandpack } from "@codesandbox/sandpack-react";
import fs from "fs";
import path from "path";

export default async function ButtonDemoSandpack() {
  const fileContent = fs.readFileSync(
    path.join(process.cwd(), "content", "demos", "Button", "index.tsx"),
    "utf-8"
  );
  const nxUiIndexJs = fs.readFileSync(
    path.join(process.cwd(), "node_modules", "nx-ui", "dist", "index.js"),
    "utf-8"
  );

  return (
    <Sandpack
      template="react"
      options={{
        externalResources: [
          "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4",
        ],
      }}
      files={{
        "/App.js": {
          code: fileContent,
          active: true,
        },
        "/node_modules/nx-ui/package.json": {
          hidden: true,
          code: JSON.stringify({
            name: "@nx-ui",
            main: "./index.js",
          }),
        },
        "/node_modules/nx-ui/index.js": {
          hidden: true,
          code: nxUiIndexJs,
        },
      }}
    />
  );
}
