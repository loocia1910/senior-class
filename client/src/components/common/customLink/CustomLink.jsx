import { 
    useMatch, 
    useResolvedPath,
    Link
} from "react-router-dom";


const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match =  useMatch({ path: resolved.pathname, end: true });

  return (
      <li>
          <Link
            style={{ color: match ? "#ff7b30" : "#333" }}
            to={to}
            {...props}
          >
              {children}
          </Link>
      </li>
  )
}  

export default CustomLink;