import type { NextApiRequest, NextApiResponse } from "next";

// use https://randomuser.me/api/?results=20
// !NOTE! The mock API has some bugs, I recommend using email as key because ID sometimes is null

type User = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json({ name: "John Doe" });
}
