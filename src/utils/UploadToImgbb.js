export async function UploadToImgbb(file) {
  const apiKey = process.env.REACT_APP_IMAGE_API_KEY;

  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (data.success) {
    return data.data.url;
  } else {
    throw new Error("Image upload failed!");
  }
}
