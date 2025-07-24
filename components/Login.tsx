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
import { set, z } from 'zod'
import { api } from "@/lib/trpc"
import { useMutation } from "@tanstack/react-query"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
const zLogin = z.object({
    studentEmail: z.string(),
    password: z.string()

})

const zRegister = z.object({
    studentEmail: z.string(),
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
        ),
    name: z.string().min(1, "Name is required"),
    confirmPassword: z.string(),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Passwords do not match",
        })
    }
})

export function LoginCard() {
    const  router = useRouter()
    const [loginData, setLoginData] = useState({
        studentEmail: "",
        password: ""

    })
    const [registerData, setRegisterData] = useState({
        studentEmail: "",
        password: "",
        confirmPassword: "",
        name: ""
    })
    const [mode, setMode] = useState<"login" | "register">("login")
    const makeLoginMutation = useMutation({
        mutationFn: async (data: z.infer<typeof zLogin>) => {
            toast.loading("Logging in...", { id: "login" })
            await authClient.signIn.email({
                email: data.studentEmail,
                password: data.password,
                 
            },
                {
                    onError(context) {
                        toast.error(context.error.message || "Login failed", { id: "login" })
                    },
                    onSuccess: () => {
                        toast.success("Login successful", { id: "login" })
                        router.push("/home")

                    }
                })

        }
    })
    const makeRegisterMutation = useMutation({
        mutationFn: async (data: z.infer<typeof zRegister>) => {
            toast.loading("Registering...", { id: "register" })
             await authClient.signUp.email({
                name: data.name,
                email: data.studentEmail,
                password: data.password
            },
                {
                    onError(context) {
                        toast.error(context.error.message || "Registration failed", { id: "register" })
                    },
                    onSuccess: () => {
                        toast.success("Registration successful", { id: "register" })
                        setMode("login")
                    }
                })
        }
    })


    function Handle(identify: string, value: string, Type?: "number" | string) {
        setLoginData(pre => ({
            ...pre,
            [identify]: Type === "number" ? Number(value) : value
        }))
    }

    function SendForm() {

        if (mode === "register") {
            setRegisterData(pre => ({
                ...pre,
                studentEmail: registerData.name.toLowerCase() + "@douglas.ac.in"
            }))
            console.log(registerData);
            
            const vRegister = zRegister.safeParse(registerData)
            if (!vRegister.success) {
                vRegister.error.errors.forEach(err => {
                    toast.error(`[${err.path[0]}] ${err.message}`)
                })
                return
            }
            makeRegisterMutation.mutate(vRegister.data)


            return
        }



        const vLogin = zLogin.safeParse(loginData)
        if (!vLogin.success) {
            vLogin.error.errors.forEach(err => {
                toast.error(`[${err.path[0]}] ${err.message}`)
            })
            return
        }
        makeLoginMutation.mutate(loginData)
    }
    return (
        <Card className=" font-medium ">
            <CardHeader>
                <CardTitle className="text-xl">{mode === "login" ? "Login" : "Register"}</CardTitle>
                <CardDescription>
                    {mode === "login" ? "Login with your credentials" : "Register with your credentials"}
                </CardDescription>
                <CardAction>
                    <Button onClick={() => setMode(pre => pre === "login" ? "register" : "login")} variant="link">{mode === "login" ? "Register" : "Login"}</Button>
                </CardAction>
            </CardHeader>
            <CardContent>

                {mode === "register" && (<>
                    <div className="flex flex-col gap-6">
                        
                        <InputBox
                            label="password"
                            identify="password"
                            setValue={(e) => setRegisterData(pre => ({ ...pre, password: e.target.value }))}
                            value={registerData.password}
                            type="password"
                            isPassword

                        />
                        <InputBox
                            label="confirm password"
                            identify="confirmPassword"
                            setValue={(e) => setRegisterData(pre => ({ ...pre, confirmPassword: e.target.value }))}
                            value={registerData.confirmPassword}
                            type="password"
                            isPassword

                        /> 
                        <InputBox
                            label="name"
                            identify="name"
                            setValue={(e) => setRegisterData(pre => ({ ...pre, name: e.target.value }))}
                            value={registerData.name}
                            type="text"

                        />  
                    </div>

                </>)}





                {mode === "login" && (<>
                    <div className="flex flex-col gap-6">
                        <InputBox
                            label="student Number"
                            identify="studentNumber"
                            setValue={(e) => setLoginData(pre => ({ ...pre, studentEmail: e.target.value }))}
                            value={loginData.studentEmail}
                            type="text"

                        />

                        <InputBox
                            label="password"
                            identify="password"
                            setValue={(e) => setLoginData(pre => ({ ...pre, password: e.target.value }))}
                            value={loginData.password}
                            type="password"
                            isPassword

                        />
                    </div>

                </>)}




            </CardContent>
            <CardFooter className="flex-col gap-4">
                <Button onClick={SendForm} className="w-full">
                    {mode === "login" ? (makeLoginMutation.isPending ? "Logging in..." : "Login") : (makeRegisterMutation.isPending ? "Registering..." : "Register")}
                </Button>

            </CardFooter>
        </Card>
    )
}
