import { useRouter } from "next/router";
import React from "react";

const Site = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return <div>Site</div>;
};

// export const getStaticPaths = async () => {
//   const paths = await getWorkspacePaths();
//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const { site } = params;
//   const siteWorkspace = await getSiteWorkspace(site, site.includes("."));
//   let workspace = null;

//   if (siteWorkspace) {
//     const { host } = new URL(process.env.APP_URL);
//     workspace = {
//       domains: siteWorkspace.domains,
//       name: siteWorkspace.name,
//       hostname: `${siteWorkspace.slug}.${host}`,
//     };
//   }

//   return {
//     props: { workspace },
//     revalidate: 10,
//   };
// };

export default Site;
