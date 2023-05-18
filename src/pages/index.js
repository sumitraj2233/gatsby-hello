import * as React from "react";
import Layout from "../components/Layout";
// import { Link } from "gatsby"
// import { Section } from "../components/Section";

// export default function Home() {
//   return (
//     <Layout>
//       {/* <h1>Hello, world!</h1>
//       <p>Welcome to gatsby task </p> */}
//       <ul>
//         <li><Link to="#product">Product</Link></li>
//         <li><Link to="#brand">Brand</Link></li>
//         <li><Link to="#host">Host</Link></li>
//         <li><Link to="#telo">Telo</Link></li>
//       </ul>
//       <main>
//         <section id="product" style={{
//           border: "1px solid black",
//           padding: "100px"
//         }}>
//           {/* Content for the product section */}
//           {/* <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate exercitationem molestias temporibus obcaecati ipsum illum, accusantium in, ab ducimus non perspiciatis doloremque facilis iusto aspernatur fugit nobis quam distinctio laudantium.</div> */}
//           <Section />
//         </section>
//         <section id="brand" style={{
//           border: "1px solid black",
//           padding: "100px"
//         }}>
//           {/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit enim voluptatum reprehenderit libero debitis vitae ut alias laboriosam corrupti dolorem culpa autem vel harum, molestias eaque ducimus, voluptas blanditiis.</div> */}
//           {/* Content for the brand section */}
//           <Section />
//         </section>
//         <section id="host" style={{
//           border: "1px solid black",
//           padding: "100px"
//         }}>
//           {/* <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit numquam voluptatibus reprehenderit nisi ex harum, nobis adipisci delectus temporibus similique voluptate quaerat quae obcaecati repellendus quis error, ipsam nesciunt quasi?</div> */}
//           {/* Content for the host section */}
//           <Section />
//         </section>
//         <section id="telo" style={{
//           border: "1px solid black",
//           padding: "100px"
//         }}>
//           {/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut officia amet qui rem quasi consequuntur provident dolorem voluptatum. Officiis necessitatibus omnis delectus culpa corrupti itaque fuga distinctio deleniti veniam?</div> */}
//           {/* Content for the telo section */}

//         </section>
//       </main>
//     </Layout>
//   );
// }


import { Link } from "gatsby"
import { Section } from "../components/Section";
import { useState } from "react"


export default function Home() {
  const [activeSection, setActiveSection] = useState("product")

  const handleSectionChange = (section) => {
    setActiveSection(section)
  }

  return (
    <div>
      <ul>
        <li>
          <Link to="/" onClick={() => handleSectionChange("product")}>
            Product
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleSectionChange("brand")}>
            Brand
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleSectionChange("host")}>
            Host
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleSectionChange("telo")}>
            Telo
          </Link>
        </li>
      </ul>
      <main>
        {activeSection === "product" && (
          <section id="product">
            {/* Content for the product section */}
            product
          </section>
        )}
        {activeSection === "brand" && (
          <section id="brand">
            brand
            {/* Content for the brand section */}
          </section>
        )}
        {activeSection === "host" && (
          <section id="host">
            host
            {/* Content for the host section */}
          </section>
        )}
        {activeSection === "telo" && (
          <section id="telo">
            telo
            {/* Content for the telo section */}
          </section>
        )}
      </main>
    </div>
  )
}
