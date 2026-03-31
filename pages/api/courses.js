export default function handler(req, res) {
  res.json([
    {
      id: 1,
      name: "Course A",
      pdf: "https://backend-tawny-seven-63.vercel.app/api/files/abcd123.pdf",
    },
    {
      id: 2,
      name: "Course B",
      pdf: "https://backend-tawny-seven-63.vercel.app/api/files/Psychology_.pdf",
    },
    {
      id: 3,
      name: "Course C",
      pdf: "https://backend-tawny-seven-63.vercel.app/api/files/vision_transformers.pdf",
    },
  ]);
}