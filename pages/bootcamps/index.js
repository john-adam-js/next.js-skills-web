import Head from "next/head";
import styles from "@/styles/Bootcamps.module.css";
import Item from "@/components/Item";
import { FaNodeJs } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact, FaPython } from "react-icons/fa";
import { GiTriangleTarget } from "react-icons/gi";
import Showcase from "@/components/Showcase";

function BootcampsPage() {
  return (
    <>
      <Head>
        <title>Knowledge</title>
        <meta name="description" content="Bootcamps I've worked with" />
      </Head>
      <Showcase image="/images/code_008.jpg" position="top" />
      <main className={styles.bootcamp}>
        <div className={styles.bootcamp_container}>
          <h2>bootcamps..</h2>
          <Item
            img="/images/pandas2.jpeg"
            title="Python Pandas Jul 2020"
            subtitle="Python Pandas Data Analysis Course by Corey Schafer"
            icon={<FaPython size={45} color="#0751a5" />}
            link="https://www.youtube.com/watch?v=ZyhVh-qRZPA&list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS"
          />
          <Item
            img="/images/react3.png"
            title="React.js Oct 2020"
            subtitle="React.js & Redux - The Complete Guide 2021"
            icon={<FaReact size={45} color="#0fb0e6" />}
            link="https://academind.com/"
          />
          <Item
            img="/images/javascript.jpg"
            title="JavaScript Jan 2021"
            subtitle="The Complete JavaScript Bootcamp 2021"
            icon={<DiJavascript1 size={45} color="gold" />}
            link="https://codingheroes.io/"
          />
          <Item
            img="/images/next.png"
            title="Next.js May 2021"
            subtitle="Next.js & React.js - The Complete Guide 2021"
            icon={<GiTriangleTarget size={45} color="black" />}
            link="https://academind.com/"
          />
          <Item
            img="/images/node.png"
            title="Node.js Jun 2021"
            subtitle="The Node.js Express Complete Bootcamp 2021"
            icon={<FaNodeJs size={45} color="green" />}
            link="https://codingheroes.io/"
          />
        </div>
      </main>
    </>
  );
}

export default BootcampsPage;
