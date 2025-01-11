import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

	const body = await req.json()
	try {
		await setDoc(doc(db, "analytics", "visit-counter"), {
			// @ts-ignore
			visits: body.visits
		});

		return NextResponse.json({
			status: 200,
			message: 'Visit counter updated',
		})

	} catch (e) {
		return NextResponse.json({
			status: 500,
			message: 'Error updating visit counter',
		})
	}
}

export async function GET(req: Request) {
	try {
		const docRef =  await getDoc(doc(db, "analytics", "visit-counter"))

		if (docRef.exists()) {
			return NextResponse.json({
				status: 200,
				visits: docRef?.data().visits
			})
		}
	} catch (e) {
		return NextResponse.json({
			status: 500,
			message: 'Error getting visit counter',
		})
	}
}