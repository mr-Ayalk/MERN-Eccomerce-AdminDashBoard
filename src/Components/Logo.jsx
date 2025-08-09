// import { cn } from "@/lib/utils";
// import { Link } from "react-router-dom";

// const Logo = (props) => {
//   return (
//     <Link to={"/"}>
//       <h2
//         className={cn(
//           "text-2xl text-shop-darkGreen font-black tracking-wider uppercase hover:text-shop-lightGreen hoverEffect group font-sans",
//           props.className
//         )}
//       >
//         <span
//           className={cn(
//             "text-shop-lightGreen group-hover:text-shop-darkGreen hoverEffect",
//             props.spanDesign
//           )}
//         >
//           G
//         </span>
//         ebeya
//       </h2>
//     </Link>
//   );
// };

// export default Logo;
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <Link to="/">
      <h2
        className={`w-[60%] mx-auto justify-center text-2xl text-[#063c28] font-black tracking-wider uppercase hover:text-[#309c3c] hoverEffect group font-sans ${props.className}`}
      >
        <span
          className={` text-[#309c3c] group-hover:text-[#063c28] hoverEffect ${props.spanDesign}`}
        >
          G
        </span>
        ebeya
      </h2>
    </Link>
  );
};

export default Logo;
