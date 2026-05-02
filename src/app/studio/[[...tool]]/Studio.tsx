"use client";

import dynamic from "next/dynamic";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          fontFamily: "system-ui, sans-serif",
          color: "#666",
        }}
      >
        Studio cargando…
      </div>
    ),
  },
);

import config from "../../../../sanity.config";

export function Studio() {
  return <NextStudio config={config} />;
}
