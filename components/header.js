import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
          <Image
            src="/img/logo.svg"
            width={300}
            height={40}
            alt="iamgen logotipo"
          />
        </Link>
        <nav className={styles.navegacion}>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
            Inicio
          </Link>

          <Link
            className={router.pathname === "/nosotros" ? styles.active : ""}
            href="/nosotros"
          >
            Nosotros
          </Link>

          <Link
            className={router.pathname === "/tienda" ? styles.active : ""}
            href="/tienda"
          >
            Tienda
          </Link>

          <Link
            className={router.pathname === "/blog" ? styles.active : ""}
            href="/blog"
          >
            Blog
          </Link>
          <Link href="/carrito">
            <Image
              width={30}
              height={25}
              src="/img/carrito.png"
              alt="imagen carrito"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
