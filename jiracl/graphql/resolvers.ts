import prisma from '../lib/prisma';
import { NexusGenRootTypes } from '../generated/nexus';

export const resolvers = {
  Query: {
    tasks: async (
      _parent: any,
      args: any,
      ctx: { prisma: typeof prisma }
    ): Promise<NexusGenRootTypes['Task'][]> => {
      return ctx.prisma.task.findMany();
    },
  },
};
