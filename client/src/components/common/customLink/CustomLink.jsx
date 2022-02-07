import { 
    useMatch, 
    useResolvedPath,
    Link
} from "react-router-dom";


export const CustomLink = ({ children, to, ...props }) => {
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

export const CustomMypageLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match =  useMatch({path: `${resolved.pathname}`, end: true});


  return (
      <Link
        style={{ color: match ? "#ff7b30" : "#333" }}
        to={to}
        {...props}
      >
          {children}
      </Link>
  )
} ;