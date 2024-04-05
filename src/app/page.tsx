import Image from "next/image";
import styles from "./page.module.css";
import { FormWrapper } from "@/components/formWrapper";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Multi Form App</h1>
            <FormWrapper />
        </main>
    );
}
