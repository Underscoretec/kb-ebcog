// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import seedData from "@/__server__/utils/seedData";
import type { NextApiRequest, NextApiResponse } from "next";

const { SEED_DATA } = process.env
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const salt = await bcrypt.genSalt(12);
  // const passwordHash = await bcrypt.hash("Alembic@098765", salt);
  // console.log(passwordHash, "<-- password")
  if (SEED_DATA === 'enabled') {
    seedData()
    res.status(200).json({ result: 'Seeding complete' })
  }
  else {
    res.status(400).json({ result: "Seeding isn't allowed" })
  }
}
