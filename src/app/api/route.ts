import { addDoc, collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { Article, ArticleState } from "@/types/types";
import { NextResponse } from "next/server";

export async function GET() {
	const articlesRef = collection(db, "articles")
	const q = query(articlesRef, orderBy("publishedDate", "desc"), where("author.id", "==", "z7N9PDPdk10f19juqkAT"))
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

//articles/z7N9PDPdk10f19juqkAT/EqoxJwj9GJjDMerCO3JA
export async function POST() {
	try {
		await addDoc(collection(db, "articles"), {
			author: {
				id: "z7N9PDPdk10f19juqkAT",
				alias: "Izius"
			},
			title: "Ilustración y capitalismo: un matrimonio feliz",
				contentFile: {
					id: "",
					path: "articles/z7N9PDPdk10f19juqkAT/EqoxJwj9GJjDMerCO3JA" ,
					url: ""
				},
				publishedDate: new Date("2024-02-06"),
				editedDates: [],
				state: ArticleState.PUBLISHED,
				main_photo_url: ""
		})
	} catch(e) {
		console.log("Error", JSON.stringify(e))
	}
}


export const config = {
	api: {
	  bodyParser: false, // Defaults to true. Setting this to false disables body parsing and allows you to consume the request body as stream or raw-body.
	  responseLimit: false, // Determines how much data should be sent from the response body. It is automatically enabled and defaults to 4mb.
	  externalResolver: true, // Disables warnings for unresolved requests if the route is being handled by an external resolver like Express.js or Connect. Defaults to false.
	},
  }