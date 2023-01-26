import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import styles from "../styles/grid.module.css";

const Tienda = ({ guitarras }) => {
  return (
    <Layout
      title={"Tienda Virtual"}
      description={"Tienda virtual, venta de guitarras"}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <div className={styles.grid}>
          {guitarras?.map((guitarra) => (
            <Guitarra guitarra={guitarra.attributes} key={guitarra.id} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Tienda;

export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );

  const { data: guitarras } = await respuesta.json();

  return {
    props: { guitarras },
  };
}
