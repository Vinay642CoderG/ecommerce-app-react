export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
