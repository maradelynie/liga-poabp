import { Html, Head, Main, NextScript } from "next/document";

import { Theme } from "@radix-ui/themes";

export default function Document() {
  return (
    <Html>
      <Head />
      <Theme appearance="dark" accentColor="lime" grayColor="slate">
        <body>
          <Main />
          <NextScript />
        </body>
      </Theme>
    </Html>
  );
}
