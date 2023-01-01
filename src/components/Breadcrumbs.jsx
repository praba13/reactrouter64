import { useLocation, Link } from "react-router-dom";


const Breadcrumbs = () => {
    const location = useLocation();
    //console.log(location);
    let currentLink = ''; // Array og crumbs

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`;
            return (
                <div className="crumb" key={crumb}> {/*crumb key is help or cantcat etc*/}
                    <Link to={currentLink} >{crumb}</Link>
                </div>
            );
        });
    //console.log(crumbs);
    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    );
};

export default Breadcrumbs;