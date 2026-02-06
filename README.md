## Rishumit - Invoicing Platform
### Tech
Zod, Server Actions, useActionState, useFormStatus, useTransition, Neon, Prisma, Better Auth, IAM

### Description
A multi-tenant invoicing app for Israeli freelancers. Users sign up, create clients, generate invoices in Hebrew, and manage payment status. Include role-based access (admin, accountant, viewer). This alone will drill Server Actions + Zod validation into muscle memory because every form — create client, create invoice line items, update status — needs it.

### What makes it hard
Multi-tenant data isolation with Prisma, complex Zod schemas for nested invoice line items, optimistic UI updates with useTransition when changing invoice status, permission checks on every Server Action.