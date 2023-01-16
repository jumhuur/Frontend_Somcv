import "./sklatons.css"
function SklatonElemet({type}){
    const classs = `skl_ton ${type}`
    return(
        <>
        <div className={classs}>
        </div>
        </>
    )
}


export default SklatonElemet