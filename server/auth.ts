import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../lib/prisma";
import { username } from "better-auth/plugins"

export const auth = betterAuth({
    //...your config
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    user: {
		// changeEmail: {
		// 	enabled: true,
		// 	sendChangeEmailVerification: async ({ user, newEmail, url, token }) => {
		// 		// Send change email verification
		// 	}
		// },
		deleteUser: {
			enabled: true,
			sendDeleteAccountVerification: async ({ user, url, token }) => {
				// Send delete account verification
			},
			beforeDelete: async (user) => {
				// Perform actions before user deletion
			},
			afterDelete: async (user) => {
				// Perform cleanup after user deletion
			}
		}
	},

    emailAndPassword: {
        enabled: true
    },
    plugins: [nextCookies() , username()] // make sure this is the last plugin in the array
})