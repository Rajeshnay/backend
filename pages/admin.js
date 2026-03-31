import { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    await axios.post("/api/upload", formData);

    alert("Uploaded successfully!");
  };

  return (
    <div style={{ padding: 50 }}>
      <h2>Upload PDF</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <br /><br />

      <button onClick={uploadFile}>Upload</button>
    </div>
  );
}