import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore";
import { db } from "@/firebase";
import { Article } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

	const articlesRef = collection(db, "articles")
	const searchParams = req.nextUrl.searchParams
	const cursorId = searchParams.get("cursorId") || null
	const cursorDoc =  await getDoc(doc(db, "articles",`${cursorId}`))
	
	let q = query(articlesRef, orderBy("publishedDate", "desc"), where("author.id", "==", "z7N9PDPdk10f19juqkAT"), limit(8))
	if(cursorDoc?.exists()) {
		q = query(articlesRef, orderBy("publishedDate", "desc"), where("author.id", "==", "z7N9PDPdk10f19juqkAT"), startAfter(cursorDoc), limit(8))
	}
	const querySnapshot = await getDocs(q)
	const data: Article[] = querySnapshot?.docs?.map((doc) => ({
		id: doc?.id,
		title: doc.data()?.title,
		contentFile: doc.data()?.contentFile,
		publishedDate: doc.data()?.publishedDate,
		editedDates: doc.data()?.editedDates,
		state: doc.data()?.state,
		main_photo_url: doc.data()?.main_photo_url
	}))

	return NextResponse.json(data)
}