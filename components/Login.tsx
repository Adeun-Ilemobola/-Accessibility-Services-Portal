"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import InputBox from "./InputBox"
import { useState } from "react"
import { toast } from "sonner"
import { z } from 'zod'
import { api } from "@/lib/trpc"
const zLogin = z.object({
    studentNumber: z.string().min(5).max(5),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .max(100, { message: "Password must be no more than 100 characters." })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
        .regex(/[0-9]/, { message: "Password must contain at least one digit." })
        .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character." })
        .refine(
            (val) => !val.toLowerCase().includes("password"),
            { message: "Password should not contain the word 'password'." }
        )
})

export function LoginCard() {
    const [loginData, setLoginData] = useState({
        studentNumber: "",
        password: ""

    })
    const test = api.testMB.useMutation({
        onSuccess(data, variables, context) {
            console.log(data, variables, context);
            toast.success(data.message)


        },
        onError(error, variables, context) {
            console.log(error, variables, context);
            toast.error(error.message)

        },
    })
    function Handle(identify: string, value: string, Type?: "number" | string) {
        setLoginData(pre => ({
            ...pre,
            [identify]: Type === "number" ? Number(value) : value
        }))


    }

    function SendForm() {
        const vLogin = zLogin.safeParse(loginData)
        if (!vLogin.success) {
            vLogin.error.errors.forEach(err => {
                toast.error(`[${err.path[0]}] ${err.message}`)
            })
            return
        }



    }
    return (
        <Card className=" font-medium ">
            <CardHeader>
                <CardTitle className="text-xl">Login to your account</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
                <CardAction>
                    <Button variant="link">Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>

                <div className="flex flex-col gap-6">
                    <InputBox
                        label="student Number"
                        identify="studentNumber"
                        setValue={(e) => Handle("studentNumber", e.target.value, e.type)}
                        value={loginData.studentNumber}
                        type="text"

                    />


                    <InputBox
                        label="password"
                        identify="password"
                        setValue={(e) => Handle("password", e.target.value, e.type)}
                        value={loginData.password}
                        type="password"
                        isPassword

                    />
                </div>

            </CardContent>
            <CardFooter className="flex-col gap-4">
                <Button onClick={SendForm} className="w-full">
                    Login
                </Button>
                <Button variant={"ghost"} onClick={() => test.mutate({ name: "jskdf" })} className="w-full">
                    {test.isPending ? "Loading" : "test"}
                </Button>
            </CardFooter>
        </Card>
    )
}
