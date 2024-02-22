import { getDownloadURL, getStorage, ref } from "firebase/storage";

const downloadImage = async (destination: "avatar" | "theme") => {
  const storage = getStorage();

  // Create a reference under which you want to list
  const imageRef = ref(storage, destination);

  // Find all the prefixes and items.
  const downloadUrl = await getDownloadURL(imageRef);
  return downloadUrl;
};

export { downloadImage };
