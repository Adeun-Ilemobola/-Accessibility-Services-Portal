import { z } from 'zod';
import { protectedProcedure, createTRPCRouter , baseProcedure } from '../init';

// Root API router, aggregate your subrouters here
export const appRouter = createTRPCRouter({
  
  // Example protected mutation
  testM: protectedProcedure
    .input(z.object({ name: z.string().min(1, "Name is required") }))
    .mutation(async ({ ctx, input }) => {
      return {
        message: 'Hello from the test mutation! NAME HERE: ' + input.name,
        user: ctx.user,
      };
    }),


    testMB: baseProcedure
    .input(z.object({ name: z.string().min(1, "Name is required") }))
    .mutation(async ({  input }) => {
      return {
        message: 'Hello from the test mutation! NAME HERE: ' + input.name,
       
      };
    }),
});
// Export type definition for tRPC hooks
export type AppRouter = typeof appRouter;
