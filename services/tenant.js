import axios from "axios";
export const getTenantData = async (tenant) => {
  const res = await axios.get(
    `https://lux-commerce-demo-server-development-dot-bubbly-polygon-305519.ew.r.appspot.com/tenant/${tenant}`
  );

  return res.data;
};
