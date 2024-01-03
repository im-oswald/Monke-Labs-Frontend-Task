type LocalStorageKeys = "cart" | "favourites";

export function getLocalStorageItems(key: LocalStorageKeys) {
  const storedKeyItems = localStorage.getItem(key);

  return storedKeyItems ? JSON.parse(storedKeyItems) : [];
}
