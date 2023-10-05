// pages/api/location.ts

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Set the CORS headers to allow access from your frontend
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Get the user's IP country code from the Vercel header
  const countryCode = req.headers["x-vercel-ip-country"] as string;

  // You can also access other headers to get more information
  // const city = req.headers["x-vercel-ip-city"] as string;

  // You can return any information you want here, such as city and country
  res.json({ countryCode });
};
