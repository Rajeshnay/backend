export default function handler(req, res) {
  res.json([
    {
      id: 1,
      name: "Course A",
      pdf: "http://10.204.75.101:3000/api/files/abcd123.pdf",
    },
    {
      id: 2,
      name: "Course B",
      pdf: "http://10.204.75.101:3000/api/files/Psychology_.pdf",
    },
    {
      id: 3,
      name: "Course C",
      pdf: "http://10.204.75.101:3000/api/files/vision_transformers.pdf",
    },
  ]);
}