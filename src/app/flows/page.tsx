"use client"
import { FlowFragtal } from "@/components/p5/flow-fragtal"
import styles from "./page.module.css"
import { Fragtal } from "@/components/p5/fragtal"

export default function Flows() {

	return (
        <main className={styles.container}>
            {/* <FlowFragtal /> */}
            <Fragtal/>
        </main>
	)
}
