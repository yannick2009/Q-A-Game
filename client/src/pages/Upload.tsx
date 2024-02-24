import { ReactElement, useState } from "react";
import "./styles/Upload.scss";
import { useMutation } from "@tanstack/react-query";
import { UploadFile } from "../api/api";
import { Link } from "react-router-dom";

export default function Upload(): ReactElement {
  const [file, setFile] = useState<File | null>(null);
  const [ok, setOk] = useState(false);

  const upload = useMutation({
    mutationKey: ["upload"],
    mutationFn: async () => {
      if (file) {
        await UploadFile(file);
      }
    },
    onSuccess: () => setOk(true),
  });

  const HandleUpload = () => {
    upload.mutate();
  };

  return (
    <div className="upload">
      <h1>questions game</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis
        quos provident architecto,
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        {!ok && (
          <input
            onChange={(e) => setFile(e.target.files?.item(0) || null)}
            type="file"
            accept=".txt, .text"
          />
        )}
        {!ok && (
          <button disabled={!file} onClick={HandleUpload}>
            CHARGER
          </button>
        )}
        {ok && (
          <Link to="/game">
            <button>Commencer</button>
          </Link>
        )}
      </form>
    </div>
  );
}
