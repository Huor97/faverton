export function useCloudinaryUpload() {
  const config = useRuntimeConfig();
  const uploadStatus = ref(``);
  const api_key = config.public.cloudinary.apiKey;
  const cloudName = config.public.cloudinary.cloudName;

  const uploadImage = async (file: File) => {
    if (!file) return;

    const formData = new FormData();
    formData.append(`file`, file);

    try {
      uploadStatus.value = `Téléchargement en cours...`;
      const { signature, timestamp } = await $fetch<{ signature: string, timestamp: string }>(`/api/get-signature`);

      formData.append(`signature`, signature);
      formData.append(`timestamp`, timestamp);
      formData.append(`api_key`, api_key);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: `POST`,
        body: formData,
      });

      const result = await response.json();
      uploadStatus.value = `Téléchargement réussi!`;
      return result;
    }
    catch (error) {
      uploadStatus.value = `Échec du téléchargement`;
      console.error(`Erreur de téléchargement:`, error);
      throw error;
    }
  };

  return {
    uploadStatus,
    uploadImage,
  };
}
