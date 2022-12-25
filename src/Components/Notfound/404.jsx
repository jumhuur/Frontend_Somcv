import NotFound from "./notFound";
import NotFoundAr from "./notFoundAr";
import NotFoundSo from "./notFoundSo";

function Unuvalibe(){
    const lang = localStorage.getItem('Lan');
    return (
        <>
        {lang === "Ar" ?
        <NotFoundAr/>
        :lang === "So" ? 
        <NotFoundSo />
        :
        <NotFound />
        }
        </>
    )
}


export default Unuvalibe