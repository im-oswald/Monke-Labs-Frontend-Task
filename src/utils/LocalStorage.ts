type LocalStorageKeys = "cart" | "favourites" | "user";

export function getLocalStorageItems(key: LocalStorageKeys) {
  const storedKeyItems = localStorage.getItem(key);

  return storedKeyItems ? JSON.parse(storedKeyItems) : [];
}
