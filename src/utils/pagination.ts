// export const paginate = (query = null, { page, pageSize }) => {
export const paginate = (page, pageSize) => {
  const offset = page * pageSize;
  const limit = pageSize;
  return {
    // ...query,
    offset,
    limit,
  };
};
