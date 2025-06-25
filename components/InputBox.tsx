"use client"
import { Label } from './ui/label'
import clsx from 'clsx';
import { Input } from './ui/input';
import { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { Button } from './ui/button';

type InputType = React.HTMLInputTypeAttribute
interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string | React.ReactNode;
    type?: InputType;
    placeholder?: string;
    disabled?: boolean;
    value: string;
    setValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    identify: string;
    className?: string;
    isPassword?: boolean
}

export default function InputBox({ isPassword = false, label, type = "text", placeholder, disabled = false, setValue, value, identify, className, ...all }: InputBoxProps) {
    const [showPass, setShowPass] = useState(false)
    return (
        <div className={clsx("flex flex-col gap-0.5", className)}>
            <Label htmlFor={identify} className="text-[1em]  font-semibold ">
                {label}
            </Label>
            <div className=' flex flex-row items-center gap-1'>
                <Input
                    id={identify}
                    name={identify}
                    type={isPassword ? (showPass? "text": "password") : type}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    onChange={(e) => setValue && setValue(e)}
                    size={45}
                    {...all}

                />
                {(isPassword && type === "password" ) && (
                    <>
                        <Button variant={"outline"} size={"icon"} onClick={()=>setShowPass(val=>!val)}>
                            {showPass ? (<EyeClosed/>): (<Eye/>)}
                        </Button>

                    </>
                )}

            </div>


        </div>
    )
}