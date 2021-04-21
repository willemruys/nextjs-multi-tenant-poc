import { getCategory } from "../../services/categories";

export default function Category({ categoryData }) {
  if (error) {
    return <p>Tenant not found</p>;
  }
  return <>{JSON.stringify(categoryData)}</>;
}

export async function getServerSideProps({ req, res, query }) {
  const tenant = req.headers.host.split(".")[0];
  const { id } = query;

  let categoryData;
  let error;
  try {
    categoryData = await getCategory(id, tenant);
    error = false;
  } catch (err) {
    if (err) {
      return {
        redirect: {
          permanent: false,
          destination: "/500",
        },
      };
    }
  }
  return {
    props: {
      categoryData: categoryData,
      error: error,
    },
  };
}
