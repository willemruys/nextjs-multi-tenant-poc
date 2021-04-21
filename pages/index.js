import Head from "next/head";
import Layout from "../Layout";
import { getCategories } from "../services/categories";
import Link from "next/link";
export default function Home({ error, tenant, categories }) {
  if (error) {
    return <p>Tenant not found</p>;
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-y-50">
        <h1 className="text-2xl">Hi {tenant}</h1>
        {categories.map((category) => {
          return <Link href={`/category/${category.id}`}>{category.id}</Link>;
        })}
      </main>
      <button className="button">goo</button>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1, stale-while-revalidate=59"
  );

  const tenant = req.headers.host.split(".")[0];

  let categories;
  let error;
  try {
    categories = await getCategories(tenant);

    error = false;
  } catch (err) {
    categories = [];
    error = true;
  }

  return {
    props: {
      error: error,
      tenant: tenant,
      categories: categories,
    },
  };
}
