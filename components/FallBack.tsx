import React from 'react'
import Loading from './Loading';
interface DropBackProps {
    is: boolean;
    children: React.ReactNode;


}

export default function FallBack({ is, children }: DropBackProps) {
    if (is) {
        return (<Loading fullscreen />)

    }
    return (
        <>
            {children}
        </>
    )
}
