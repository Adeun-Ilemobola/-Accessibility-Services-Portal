'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import DouglasLogo from './DouglasLogo'
import { authClient } from '@/lib/auth-client'
import { Button } from './ui/button'
import { UserRound } from 'lucide-react'

export default function Nav() {
    const [mounted, setMounted] = useState(false)
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    const logout = authClient.signOut

    useEffect(() => {
        setMounted(true)
    }, [])

    // Don’t render anything until hydration + valid session
 

    return (
        <nav className="flex flex-row h-17 items-center px-4">
            {mounted && session?.user && (<>
            {/* logo */}
            <Link href="/home" className="flex items-center">
                <DouglasLogo size="xlsm" showFullName={false} colors={["#7be3da", "#7be3da", "#7be3da", "#7be3da"]} />
            </Link>

            {/* spacer */}
            <div className="flex-1" />

            {/* user + logout */}
            <div className="flex flex-row items-center gap-1.5">
                <div className="flex flex-row items-center gap-1.5">
                    <UserRound />
                    <h1 className="font-semibold text-lg">{session.user.name} . </h1>
                </div>

                <Button variant="destructive" onClick={() => {
                    logout()
                    window.location.reload()
                }}>
                    Logout
                </Button>
            </div></>)}
        </nav>
    )
}
