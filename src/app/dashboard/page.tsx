"use client";
import { app } from "@/config/firebaseConfig";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function DashboardPage() {
  const router = useRouter();
  const { user } = useKindeBrowserClient();
  const db = getFirestore(app);

  const [loading, setLoading] = useState(true);

  const isBussinessRegistered = async () => {
    const docRef = doc(db, "Bussiness", user?.email as string);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data: ", docSnap.data());
      setLoading(false);
    } else {
      console.log("No such Document exists");
      setLoading(false);
      router.replace("/create-bussiness");
    }
  };

  useEffect(() => {
    user && isBussinessRegistered();
  }, [user]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return <div>DashboardPage</div>;
}

export default DashboardPage;
