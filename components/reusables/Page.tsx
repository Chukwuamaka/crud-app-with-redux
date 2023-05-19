import Head from "next/head";
import { FC } from "react";
import { PageProps } from "../../types/components/reusables/page";
import Navbar from "./Navbar";

const Page: FC<PageProps> = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content='/preview_image.webp' />
        <meta property="og:image:alt" content="The top banner of the homepage with a young African lady holding books in her hands" /> */}
      </Head>
      <Navbar />
      
      <main>
        {children}
      </main>
    </div>
  )
}
export default Page;