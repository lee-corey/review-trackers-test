function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return `${("0" + (date.getMonth() + 1)).slice(-2)}/${(
    "0" + date.getDate()
  ).slice(-2)}/${date.getFullYear()}`;
}

export { formatDate };
