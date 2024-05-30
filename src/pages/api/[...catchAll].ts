import { NextApiRequest, NextApiResponse } from "next";
import Main from "@/server/main";

// Do not modify this code.
const catchAll = async (req: NextApiRequest, res: NextApiResponse) => {
  const listener = await Main.getListener();
  listener(req, res);
  return new Promise<void>((resolve) => {
    res.on("finish", resolve);
  });
};

export default catchAll;
