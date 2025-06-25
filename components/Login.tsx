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

export function LoginCard() {
    const [loginData, setLoginData] = useState({
        studentNumber: "",
        password: ""

    })
    function Handle(identify: string, value: string, Type?: "number" | string) {
        setLoginData(pre => ({
            ...pre,
            [identify]: Type === "number" ? Number(value) : value
        }))


    }

    function SendForm() {
        console.log("dfdfdf");
        
        toast.success("all good")
        setLoginData({
            password:"",
            studentNumber:""
        })
        
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
                <Button onClick={SendForm}  className="w-full">
                    Login
                </Button>
            </CardFooter>
        </Card>
    )
}
