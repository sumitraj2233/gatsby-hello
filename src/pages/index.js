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


// export default function Home() {
//   const [activeSection, setActiveSection] = useState("product")

//   const handleSectionChange = (section) => {
//     setActiveSection(section)
//   }

//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/" onClick={() => handleSectionChange("product")}>
//             Product
//           </Link>
//         </li>
//         <li>
//           <Link to="/" onClick={() => handleSectionChange("brand")}>
//             Brand
//           </Link>
//         </li>
//         <li>
//           <Link to="/" onClick={() => handleSectionChange("host")}>
//             Host
//           </Link>
//         </li>
//         <li>
//           <Link to="/" onClick={() => handleSectionChange("telo")}>
//             Telo
//           </Link>
//         </li>
//       </ul>
//       <main>
//         {activeSection === "product" && (
//           <section id="product">
//             {/* Content for the product section */}
//             <Section />
//           </section>
//         )}
//         {activeSection === "brand" && (
//           <section id="brand">
//             <Section />
//             {/* Content for the brand section */}
//           </section>
//         )}
//         {activeSection === "host" && (
//           <section id="host">
//             <Section />
//             {/* Content for the host section */}
//           </section>
//         )}
//         {activeSection === "telo" && (
//           <section id="telo">
//             <Section />
//             {/* Content for the telo section */}
//           </section>
//         )}
//       </main>
//     </div>
//   )
// }

import { useRef } from "react"
// import { graphql } from "gatsby"

export default function Home() {
  // const { product, brand, host, telo } = data
  const productRef = useRef(null)
  const brandRef = useRef(null)
  const hostRef = useRef(null)
  const teloRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      <ul>
        <li>
          <button onClick={() => scrollToSection(productRef)}>Product</button>
        </li>
        <li>
          <button onClick={() => scrollToSection(brandRef)}>Brand</button>
        </li>
        <li>
          <button onClick={() => scrollToSection(hostRef)}>Host</button>
        </li>
        <li>
          <button onClick={() => scrollToSection(teloRef)}>Telo</button>
        </li>
      </ul>
      <main>
        <section ref={productRef} key="productRef">
          <h2>Product</h2>
          <div >
            <h3>title</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum fugiat, culpa tenetur, nisi ab modi vero ut aliquid itaque, tempore asperiores voluptate voluptates rem inventore magni sint molestiae sunt cupiditate!</p>
          </div>

        </section>
        <section ref={brandRef}>
          <h2>Brand</h2>
          <div >
            <h3>title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis alias, perspiciatis aut eveniet quasi tempora fugiat at esse placeat eos ut error, magnam sequi inventore et quos. Porro, voluptas esse!</p>
          </div>
        </section>
        <section ref={hostRef}>
          <h2>Host</h2>
          <div >
            <h3>title</h3>
            <p>lorem</p>
          </div>
        </section>
        <section ref={teloRef}>
          <h2>Telo</h2>
          <div >
            <h3>title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores dolorem officiis non vero, libero sed cum minus. Quae vitae, obcaecati sequi delectus sint, perspiciatis ullam doloribus a voluptatibus amet nisi!</p>
          </div>
        </section>
      </main>
    </div>
  )
}

