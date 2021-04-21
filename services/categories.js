import axios from "axios";

export const getCategories = async (tenant) => {
  const res = await axios.get(
    `https://lux-commerce-demo-server-development-dot-bubbly-polygon-305519.ew.r.appspot.com/category`,
    {
      headers: {
        "X-tenant-host": tenant,
      },
    }
  );

  return res.data;
};

export const getCategory = async (categoryId, tenant) => {
  const res = await axios.get(
    `https://lux-commerce-demo-server-development-dot-bubbly-polygon-305519.ew.r.appspot.com/category/${categoryId}`,
    {
      headers: {
        "X-tenant-host": tenant,
      },
    }
  );

  return res.data;
};
