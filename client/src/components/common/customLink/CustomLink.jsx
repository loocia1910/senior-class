import { 
    useMatch, 
    useResolvedPath,
    Link
} from "react-router-dom";


const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match =  useMatch(`${resolved.pathname}/*`);

  return (
      <Link
        style={{ color: match ? "#ff7b30" : "#333" }}
        to={to}
        {...props}
      >
          {children}
      </Link>
  )
}  

export default CustomLink;