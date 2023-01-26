import Layout from "@/components/layout";
import Link from "next/link";
import styles from "../styles/404.module.css";

const Pagina404 = () => {
  return (
    <Layout title="Not found 404">
      <p className={styles.error}>Pagina no enontrada</p>
      <Link href="/" className={styles.errorEnlace}>
        Ir a Inicio
      </Link>
    </Layout>
  );
};

export default Pagina404;
