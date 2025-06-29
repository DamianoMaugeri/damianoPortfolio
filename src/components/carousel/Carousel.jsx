// import { useEffect, useState } from "react";
// import styles from "./Carousel.module.css";
// import TecnologyCard from "../TecnologyCard/TecnologyCard";


// const children =[{
//     name:'js.png',
//     color :'#445566'
// },
// {
//     name:'html.webp',
//     color :'#445566'
// },
// {
//     name:'css.jpg',
//     color :'#445566'
// },
// ]



// function Carousel({ interval = 3000 }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const total = children.length;

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % total);
//     }, interval);

//     return () => clearInterval(timer);
//   }, [interval, total]);

//   return (
//     <div className={styles.carousel}>
//       <div
//         className={styles.track}
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {children.map((child, index) => (
//           <div className='col-3 gap-4' key={index}>
//             <TecnologyCard element={child} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;


import styles from "./Carousel.module.css";
import TecnologyCard from "../TecnologyCard/TecnologyCard";

const children = [
    { name: "javascript.png" },
    { name: "whtml.png" },
    { name: "github.png" },
    { name: "node-js.png" },
    { name: "mysql-logo.png" },
    { name: "bootstrap.png" },
    { name: "wcss.png" },
    { name: "php-logo.png" },
    { name: "react.png" },
    { name: "hire-laravel-hero.webp" },
    { name: "ex.png" },
];

// Duplico gli elementi per creare effetto loop
const items = [...children, ...children,...children, ...children];

function Carousel() {
    return (
        <div className={`${styles.carouselWrapper} container-fluid my-3`}>
            <div className={`row flex-nowrap ${styles.track}`}>
                {items.map((child, i) => (
                    <div className="col-4 col-sm-3  col-md-2  col-xl-1  px-2" key={i}>
                        <TecnologyCard element={child} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;


