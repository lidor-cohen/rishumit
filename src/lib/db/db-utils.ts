import prisma from "@/lib/db/prisma";

export const getClients = () => {
  return prisma.client.findMany();
};
