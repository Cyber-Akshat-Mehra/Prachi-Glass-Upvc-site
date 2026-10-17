export const unwrap = (response) => response.data?.data ?? response.data;
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const httpError = (status, message) => Object.assign(new Error(message), { status });
