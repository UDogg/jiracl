import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next';

export type Context = {
  prisma: PrismaClient;
}

export async function createContext({ req, res }: { req: NextApiRequest, res: NextApiResponse }): Promise<Context> {
  return {
    prisma,
  };
}
