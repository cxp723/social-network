export const required = (data: string) => {
  return data ? undefined : "Field is required";
};
export const maxLength = (length: number) => {
  return (data: string) => {
    return !data
      ? undefined
      : data.length > length
      ? `Max length is ${length} symbols`
      : undefined;
  };
};
export const isWebSite = (data: string) => {
  if (!data) return undefined;
  return (data.includes("https://") || data.includes("http://")) &&
    data.indexOf(".") > 8 &&
    data.indexOf(".") < data.length - 2
    ? undefined
    : "Incorrect website name";
};
