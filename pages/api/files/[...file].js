import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { file } = req.query;

  const filePath = path.join(process.cwd(), "uploads", ...file);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("Not found");
  }

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
}