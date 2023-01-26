import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/nosotros.module.css";
const Nosotros = () => {
  return (
    <Layout
      title={"Nosotros"}
      description={
        "Blog de musica, nosotros, venta de guitarras cursos de guitarra para principiantes"
      }
    >
      <main>
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            alt="imagen sobre nosotros"
            width={1000}
            height={800}
          />
          <div className="contenido">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              bibendum eleifend tellus, id vestibulum justo pulvinar ut. Donec
              in mauris non felis pharetra auctor. Nunc commodo lacinia neque,
              non rutrum dolor pellentesque ut. Morbi a eleifend libero, ac
              pretium arcu. Vestibulum ante ipsum primis in
            </p>
            <p>
              gravida. Pellentesque et massa magna. In porta sit amet nisi sit
              amet efficitur. Praesent blandit, turpis et vehicula tempus, elit
              elit posuere mi, eu molestie velit dui non odio. Duis nec iaculis
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
