"use client"
import { useEffect } from "react";
import { Landing } from "./component/Landing";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "@/utils/firebase";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import { userAtom } from "@/store/atoms/user";
import { useRouter } from "next/navigation";



export default function Home() {
  return <StoreApp />
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom)
  const router = useRouter();
  
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, function (user) {
      if (user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email
          }
        })
      } else {
        setUser({
          loading: false
        })
        console.log("There is no logged in user");
      }
    });

    return () => unsub()
  }, [])

  useEffect(() => {
    if (!user.loading && !user.user) {
      router.push("/signin"); // 👈 no BACKEND_URL
    }
  }, [user.loading, user.user, router]);

  if (user.loading) {
    return <div>
      loading ...
    </div>
  }

  if (!user.user) {
    return null
  }
  return (
    <div>
      you logged in as {user.user?.email}
    </div>
  );
}