export default function handler(req, res) {
  const id = req.query?.Id;

  res.status(200).json({
    owner: id || null,
    progress: {},
    flags: {}
  });
}