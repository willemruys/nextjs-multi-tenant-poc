import { getCategory } from "../../services/categories";

function Category({ categoryData }) {
  return <>{JSON.stringify(categoryData)}</>;
}

export async function getServerSideProps({ req, res, query }) {
  const tenant = req.headers.host.split(".")[0];
  const { id } = query;
  const categoryData = await getCategory(id, tenant);

  return {
    props: {
      categoryData: categoryData,
    },
  };
}

export default Category;
