"use client"
import { app, auth } from "@/utils/firebase";
import { getAuth, sendSignInLinkToEmail, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const provider = new GoogleAuthProvider();

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000',
    // This must be true.
    handleCodeInApp: true,
};

export default function Signin() {
    const [email, setEmail] = useState("")

    async function onSignin() {
        await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (!credential) return;
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }

    return <div className="">
        <div className="flex justify-center m-50 h-50 items-center">
            <img src="/logo-without-bg.png" alt="" className="h-80" />
            <Card className="w-[20vw] bg-blue-100">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>login with google or github</CardDescription>
                    <CardAction>
                        <Button variant='ghost'>Login</Button>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full" onClick={() => { onSignin() }}>
                        Login with Google
                    </Button>
                    <Button className="w-full">
                        Login with Github
                    </Button>
                </CardFooter>
            </Card>
            {/* <button onClick={() => {
            onSignin()
        }}>
            Login with google
        </button> */}
        </div>
    </div>
}