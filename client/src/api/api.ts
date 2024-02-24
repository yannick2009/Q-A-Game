import axios from "axios";

const API_URL: string = `${import.meta.env.VITE_API_URL}`;

export const GetQuestion = async () => {
  try {
    const res = await axios.get(API_URL + "/question");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const RealoadGame = async (): Promise<JSON | undefined> => {
  try {
    const res = await axios.get(API_URL + "/reload");
    return res.data;
  } catch (error) {
    console.error(error);
  }
  return undefined;
};

export const UploadFile = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post(API_URL + "/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
