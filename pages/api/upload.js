import multer from "multer";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

// storage config (IMPORTANT)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // ✅ keep original name
  },
});

const upload = multer({ storage });

export default function handler(req, res) {
  upload.single("file")(req, res, function (err) {
    if (err) {
      return res.status(500).json({ error: "Upload failed" });
    }

    return res.status(200).json({
      message: "File uploaded successfully",
      file: req.file,
    });
  });
}