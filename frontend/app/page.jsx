import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header/Header";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card"
import Menu from "./components/Menu/Menu"

export default function Home() {
  return (
    <main className={styles.main}>
    <Menu></Menu>
    </main>
  );
}
