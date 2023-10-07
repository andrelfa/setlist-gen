export default async function handler(req, res) {
  try {
    const artistName = req.query.artistName || "Sleep Token"; // You can customize this
    const response = await fetch(
      `https://api.setlist.fm/rest/1.0/search/setlists?artistName=${encodeURIComponent(
        artistName,
      )}`,
      {
        headers: {
          "x-api-key": "8DAekOpIf022OX8ZpAjQcde_HrNEMc5gFgyM",
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      res.status(response.status).json({ error: "Failed to fetch data" });
      return;
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
