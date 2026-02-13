import prisma from "@/lib/db/prisma";

export const getClients = () => {
  return prisma.client.findMany();
};

export const getInvoices = () => {
  return prisma.invoice.findMany();
};

export const getProducts = () => {
  return prisma.product.findMany();
};
