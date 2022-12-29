import { useState } from "react";
import { Usecvcontext } from "../Context/Cv"
function Feilds({color1,color2,c1,c2}){
    const {
        HangdaleUpdate,
        Onchange_inputs,
        info,
        uploadcvimage,
        setimage,
        progimg,
        done,
        setdone,
        Onchange_inputs_download,
        cv
    } = Usecvcontext()
    const [filename,setfilename] = useState(null)
    // const [c01,setc01] = useState("")
    function onchange({target}){
        let file = target.files[0];
        if(file){
            let file_name = file.name.substring(0,30);
            //let file_zise = file.size / 1024 / 1024
            //let file_time = file.duration;
            const arrsplited = []
            arrsplited.push(file_name.split("."))
            console.log(arrsplited.length)
            setfilename(file_name.substring(0,10))
        }
        setimage(file)
    }

    console.log(info)
    return (
        <>
            <div className="container_feilds">
            <form className="f_feilds">
                <div className="Feilds_part profile_in">
                <h2 className="ciwaan_feilds">Unlimited colors</h2>
                <div className="colors unlimited_color">
                <input className="feilds_inputs color_input" onChange={function(e){
                    color1(e.target.value)
                }} type="color" id="favcolor" name="favcolor" value={c1} />
                <input className="feilds_inputs color_input" onChange={function(e){
                    color2(e.target.value)
                }} type="color" id="favcolor2" name="favcolor2" value={c2} />
                </div>
                <h2 className="ciwaan_feilds">Colors chosen for you</h2>
                <div className="colors">
                    {/*-------1aad -------*/}
                    <div onClick={
                        function(e){
                            color1(e.target.attributes.color1.value)
                            color2(e.target.attributes.color2.value)
                        }

                    } className="color" color1="#226C69" color2="#003B39">
                        <div className="color1" color1="#226C69" color2="#003B39" style={{backgroundColor:"#226C69"}}>
                        </div>
                        <div className="color1" color1="#226C69" color2="#003B39" style={{backgroundColor:"#003B39"}}>
                        </div>
                    </div>
                    {/*-------2aad -------*/}
                    <div onClick={
                        function(e){
                            color1(e.target.attributes.color1.value)
                            color2(e.target.attributes.color2.value)
                        }

                    } className="color" color1="#B26F38" color2="#612C01" >
                        <div className="color1" color1="#B26F38" color2="#612C01" style={{backgroundColor:"#B26F38"}}>
                        </div>
                        <div className="color1" color1="#B26F38" color2="#612C01" style={{backgroundColor:"#612C01"}}>
                        </div>
                    </div>
                    {/*-------3aad -------*/}
                    <div  onClick={
                        function(e){
                            color1(e.target.attributes.color1.value)
                            color2(e.target.attributes.color2.value)
                        }

                    } className="color" color1="#5A2A77" color2="#b946ff">
                        <div className="color1" color1="#5A2A77" color2="#b946ff" style={{backgroundColor:"#5A2A77"}}>
                        </div>
                        <div className="color1" color1="#5A2A77" color2="#b946ff" style={{backgroundColor:"#b946ff"}}>
                        </div>
                    </div>
                    {/*-------4aad -------*/}
                    <div  onClick={
                        function(e){
                            color1(e.target.attributes.color1.value)
                            color2(e.target.attributes.color2.value)
                        }

                    } className="color" color1="#AA383E" color2="#5F1F22">
                        <div className="color1" color1="#AA383E" color2="#5F1F22" style={{backgroundColor:"#AA383E"}}>
                        </div>
                        <div className="color1" color1="#AA383E" color2="#5F1F22" style={{backgroundColor:"#5F1F22"}}>
                        </div>
                    </div>
                    {/*-------5aad -------*/}
                    <div  onClick={
                        function(e){
                            color1(e.target.attributes.color1.value)
                            color2(e.target.attributes.color2.value)
                        }

                    } className="color" color1="#289717" color2="#134C0A">
                        <div className="color1" color1="#289717" color2="#134C0A" style={{backgroundColor:"#289717"}}>
                        </div>
                        <div className="color1" color1="#289717" color2="#134C0A" style={{backgroundColor:"#134C0A"}}>
                        </div>
                    </div>
                    {/*-------6aad -------*/}
                    <div  onClick={
                        function(e){
                            color1(e.target.attributes.color1.value)
                            color2(e.target.attributes.color2.value)
                        }

                    } className="color" color1="#001d3d" color2="#4361ee">
                        <div className="color1" color1="#001d3d" color2="#4361ee" style={{backgroundColor:"#001d3d"}}>
                        </div>
                        <div className="color1" color1="#001d3d" color2="#4361ee" style={{backgroundColor:"#4361ee"}}>
                        </div>
                    </div>
                    {/*-------7aad -------*/}
                    <div  onClick={
                        function(e){
                            color1(e.target.attributes.color1.value)
                            color2(e.target.attributes.color2.value)
                        }

                    } className="color" color1="#e06d00" color2="#252425">
                        <div className="color1" color1="#e06d00" color2="#252425" style={{backgroundColor:"#e06d00"}}>
                        </div>
                        <div className="color1" color1="#e06d00" color2="#252425" style={{backgroundColor:"#252425"}}>
                        </div>
                    </div>
                    {/*-------8aad -------*/}
                    <div  onClick={
                        function(e){
                            color1(e.target.attributes.color1.value)
                            color2(e.target.attributes.color2.value)
                        }

                    } className="color" color1="#212529" color2="#0077b6">
                        <div className="color1" color1="#212529" color2="#0077b6" style={{backgroundColor:"#212529"}}>
                        </div>
                        <div className="color1" color1="#212529" color2="#0077b6" style={{backgroundColor:"#0077b6"}}>
                        </div>
                    </div>
                    {/*-------9aad -------*/}
                    <div  onClick={
                        function(e){
                            color1(e.target.attributes.color1.value)
                            color2(e.target.attributes.color2.value)
                        }

                    } className="color" color1="#000" color2="#c88300">
                        <div className="color1" color1="#000" color2="#c88300" style={{backgroundColor:"#000"}}>
                        </div>
                        <div className="color1" color1="#000" color2="#c88300" style={{backgroundColor:"#c88300"}}>
                        </div>
                    </div>
                     {/*-------10aad -------*/}
                    <div  onClick={
                        function(e){
                            color1(e.target.attributes.color1.value)
                            color2(e.target.attributes.color2.value)
                        }

                    } className="color" color1="#470061" color2="#009AFA">
                        <div className="color1" color1="#470061" color2="#009AFA" style={{backgroundColor:"#009AFA"}}>
                        </div>
                        <div className="color1" color1="#470061" color2="#009AFA" style={{backgroundColor:"#001D26"}}>
                        </div>
                    </div>
                    {/*-------11aad -------*/}
                    <div  onClick={
                        function(e){
                            color1(e.target.attributes.color1.value)
                            color2(e.target.attributes.color2.value)
                        }

                    } className="color" color1="#470061" color2="#718f0c">
                        <div className="color1" color1="#333d29" color2="#718f0c" style={{backgroundColor:"#333d29"}}>
                        </div>
                        <div className="color1" color1="#333d29" color2="#718f0c" style={{backgroundColor:"#718f0c"}}>
                        </div>
                    </div>
                     {/*-------12aad -------*/}
                    <div  onClick={
                        function(e){
                            color1(e.target.attributes.color1.value)
                            color2(e.target.attributes.color2.value)
                        }

                    } className="color" color1="#402a2c" color2="#c88300">
                        <div className="color1" color1="#402a2c" color2="#c88300" style={{backgroundColor:"#402a2c"}}>
                        </div>
                        <div className="color1" color1="#402a2c" color2="#c88300" style={{backgroundColor:"#c88300"}}>
                        </div>
                    </div>
                </div>
                <h2 className="ciwaan_feilds">Macluumaadka Bilowga</h2>
                <div className="image_uploader">
                    <div className="upload_btn">
                        {done ?
                        <>
                        <label htmlFor="Image" className={done ? "compuleted": ""}>
                        <p><i className="fa-solid fa-circle-check"></i> Upload Done</p>
                        </label>
                        <span className="cancel_upload" onClick={function(){
                            setdone(false)
                            setfilename(null)
                        }}>
                        <i className="fa-solid fa-trash-can"></i>
                        </span> 
                        </>
                        :
                        <label htmlFor="Image" className={done ? "compuleted": ""}>
                        {filename ?
                        <p>{filename}... | {progimg}%</p>
                        :done && filename ?
                        <p><i className="fa-solid fa-circle-check"></i> Upload Done</p>
                        :<p>Upload Your Image</p>
                        }
                        </label>
                        }

                    </div>
                </div>
                <input onInput={onchange} onChange={function(e){
                    setimage(`${e.target.files[0].name}`)
                    uploadcvimage()
                }} id="Image" autoComplete="off" name="Image" className="feilds_inputs" type="file" required  hidden accept="image/*"/>
                <label className="label_feilds" htmlFor="Name">Full Name</label>
                <input value={info.Name} onChange={Onchange_inputs} onInput={Onchange_inputs_download} autoComplete="off" name="Name" className="feilds_inputs" id="name" type="text" required />
                <label className="label_feilds" htmlFor="Job Title">Job Title</label>
                <input value={info.Jobtitle} onChange={Onchange_inputs} autoComplete="off" name="Jobtitle" className="feilds_inputs" id="Job Title" type="text" required />
                </div>
                <div className="Feilds_part content_info_feilds">
                <h2 className="ciwaan_feilds">Content Info</h2>
                <label className="label_feilds" htmlFor="Name">Tell</label>
                <input value={info.Tell} onChange={Onchange_inputs} autoComplete="off" name="Tell" className="feilds_inputs" id="name" type="text" required />
                <label className="label_feilds" htmlFor="Name">email</label>
                <input value={info.Cvemail} onChange={Onchange_inputs} autoComplete="off" name="Cvemail" className="feilds_inputs" id="name" type="text" required />
                <label className="label_feilds" htmlFor="Name">Location</label>
                <input value={info.Location} onChange={Onchange_inputs} autoComplete="off" name="Location" className="feilds_inputs" id="name" type="text" required />
                </div>
                <div className="Feilds_part edecation_feilds">
                <h2 className="ciwaan_feilds">Edecation</h2>
                {/* ------------------------Part One Edaction--------------------------- */}
                <label className="label_feilds" htmlFor="Name">Part One Edaction</label>
                <input value={info.Edyear1} onChange={Onchange_inputs} autoComplete="off" name="Edyear1" className="feilds_inputs" id="name" type="text" required placeholder="Year" />
                <input value={info.Eddesc1} onChange={Onchange_inputs} autoComplete="off" name="Eddesc1" className="feilds_inputs" id="name" type="text" required placeholder="Description" />
                <input value={info.Edunivername1} onChange={Onchange_inputs} autoComplete="off" name="Edunivername1" className="feilds_inputs" id="name" type="text" required placeholder="Universaty Or Scholl Name" />
                {/* ------------------------Part two Edaction--------------------------- */}
                <label className="label_feilds" htmlFor="Name">Part two Edaction</label>
                <input value={info.Edyear2} onChange={Onchange_inputs} autoComplete="off" name="Edyear2" className="feilds_inputs" id="name" type="text" required placeholder="Year" />
                <input value={info.Eddesc2} onChange={Onchange_inputs} autoComplete="off" name="Eddesc2" className="feilds_inputs" id="name" type="text" required placeholder="Description" />
                <input value={info.Edunivername2} onChange={Onchange_inputs} autoComplete="off" name="Edunivername2" className="feilds_inputs" id="name" type="text" required placeholder="Universaty Or Scholl Name" />
                {/* ------------------------Part three Edaction--------------------------- */}
                <label className="label_feilds" htmlFor="Name">Part three Edaction</label>
                <input value={info.Edyear3} onChange={Onchange_inputs} autoComplete="off" name="Edyear3" className="feilds_inputs" id="name" type="text" required placeholder="Year" />
                <input value={info.Eddesc3} onChange={Onchange_inputs} autoComplete="off" name="Eddesc3" className="feilds_inputs" id="name" type="text" required placeholder="Description" />
                <input value={info.Edunivername3} onChange={Onchange_inputs} autoComplete="off" name="Edunivername3" className="feilds_inputs" id="name" type="text" required placeholder="Universaty Or Scholl Name" />
                </div>

                <div className="Feilds_part profile_in">
                <h2 className="ciwaan_feilds">Languages</h2>
                <label className="label_feilds" htmlFor="Name">Languge and Progress</label>
                <input value={info.Langname1} onChange={Onchange_inputs} autoComplete="off" name="Langname1" className="feilds_inputs" id="name" type="text" required placeholder="Name Language" />
                <input value={info.Langprog1} onChange={Onchange_inputs} autoComplete="off" name="Langprog1" className="feilds_inputs" id="name" type="number" required placeholder="Progress" />
                <input value={info.Langname2} onChange={Onchange_inputs} autoComplete="off" name="Langname2" className="feilds_inputs" id="name" type="text" required placeholder="Name Language" />
                <input value={info.Langprog2} onChange={Onchange_inputs} autoComplete="off" name="Langprog2" className="feilds_inputs" id="name" type="number" required placeholder="Progress" />
                <input value={info.Langname3} onChange={Onchange_inputs} autoComplete="off" name="Langname3" className="feilds_inputs" id="name" type="text" required placeholder="Name Language" />
                <input value={info.Langprog3} onChange={Onchange_inputs} autoComplete="off" name="Langprog3" className="feilds_inputs" id="name" type="number" required placeholder="Progress" />
                </div>

                <div className="Feilds_part profile_in">
                <h2 className="ciwaan_feilds">Person Profile</h2>
                <label className="label_feilds" htmlFor="Name">Shor Descripton Your self</label>
                <textarea value={info.Profile} onChange={Onchange_inputs} className="Text_area"   placeholder="Desc Here" name="Profile">
                </textarea>
                </div>
                <div className="Feilds_part profile_in">
                <h2 className="ciwaan_feilds">Exprians</h2>
                    {/* ------------------------Part three Edaction--------------------------- */}
                <label className="label_feilds" htmlFor="Name">Exprians Part One</label>
                <input value={info.Exyear1} onChange={Onchange_inputs} autoComplete="off" name="Exyear1" className="feilds_inputs" id="name" type="text" required placeholder="Start Year And End Year" />
                <input value={info.Excompnay1} onChange={Onchange_inputs} autoComplete="off" name="Excompnay1" className="feilds_inputs" id="name" type="text" required placeholder="Company Name" />
                <input value={info.Exjob1} onChange={Onchange_inputs} autoComplete="off" name="Exjob1" className="feilds_inputs" id="name" type="text" required placeholder="Job Title" />
                <input value={info.Exdesc1} onChange={Onchange_inputs} autoComplete="off" name="Exdesc1" className="feilds_inputs" id="name" type="text" required placeholder="Description of Job" />
                {/* ------------------------Part three Edaction--------------------------- */}
                <label className="label_feilds" htmlFor="Name">Exprians Part two</label>
                <input value={info.Exyear2} onChange={Onchange_inputs} autoComplete="off" name="Exyear2" className="feilds_inputs" id="name" type="text" required placeholder="Start Year And End Year" />
                <input value={info.Excompnay2} onChange={Onchange_inputs} autoComplete="off" name="Excompnay2" className="feilds_inputs" id="name" type="text" required placeholder="Company Name" />
                <input value={info.Exjob2} onChange={Onchange_inputs} autoComplete="off" name="Exjob2" className="feilds_inputs" id="name" type="text" required placeholder="Job Title" />
                <input value={info.Exdesc2} onChange={Onchange_inputs} autoComplete="off" name="Exdesc2" className="feilds_inputs" id="name" type="text" required placeholder="Description of Job" />
                {/* ------------------------Part three Edaction--------------------------- */}
                <label className="label_feilds" htmlFor="Name">Exprians Part three</label>
                <input value={info.Exyear3} onChange={Onchange_inputs} autoComplete="off" name="Exyear3" className="feilds_inputs" id="name" type="text" required placeholder="Start Year And End Year" />
                <input value={info.Excompnay3} onChange={Onchange_inputs} autoComplete="off" name="Excompnay3" className="feilds_inputs" id="name" type="text" required placeholder="Company Name" />
                <input value={info.Exjob3} onChange={Onchange_inputs} autoComplete="off" name="Exjob3" className="feilds_inputs" id="name" type="text" required placeholder="Job Title" />
                <input value={info.Exdesc3} onChange={Onchange_inputs} autoComplete="off" name="Exdesc3" className="feilds_inputs" id="name" type="text" required placeholder="Description of Job" />
                </div>

                <div className="Feilds_part profile_in">
                <h2 className="ciwaan_feilds">Your Skills</h2>
                {/* ------------------------Skill One--------------------------- */}
                <label className="label_feilds" htmlFor="Name">Skill 01</label>
                <input value={info.Skillname} onChange={Onchange_inputs} autoComplete="off" name="Skillname" className="feilds_inputs" id="name" type="text" required placeholder="Skill Name" />
                <input value={info.Skillprog} onChange={Onchange_inputs} autoComplete="off" name="Skillprog" className="feilds_inputs" id="name" type="Number" required placeholder="Progress" />
                {/* ------------------------Skill 01--------------------------- */}
                <label className="label_feilds" htmlFor="Name">Skill 02</label>
                <input value={info.Skillname1} onChange={Onchange_inputs} autoComplete="off" name="Skillname1" className="feilds_inputs" id="name" type="text" required placeholder="Skill Name" />
                <input value={info.Skillprog1} onChange={Onchange_inputs} autoComplete="off" name="Skillprog1" className="feilds_inputs" id="name" type="Number" required placeholder="Progress" />
                {/* ------------------------Skill 02--------------------------- */}
                <label className="label_feilds" htmlFor="Name">Skill 03</label>
                <input value={info.Skillname2} onChange={Onchange_inputs} autoComplete="off" name="Skillname2" className="feilds_inputs" id="name" type="text" required placeholder="Skill Name" />
                <input value={info.Skillprog2} onChange={Onchange_inputs} autoComplete="off" name="Skillprog2" className="feilds_inputs" id="name" type="Number" required placeholder="Progress" />
                {/* ------------------------Skill 03--------------------------- */}
                <label className="label_feilds" htmlFor="Name">Skill 04</label>
                <input value={info.Skillname3} onChange={Onchange_inputs} autoComplete="off" name="Skillname3" className="feilds_inputs" id="name" type="text" required placeholder="Skill Name" />
                <input value={info.Skillprog3} onChange={Onchange_inputs} autoComplete="off" name="Skillprog3" className="feilds_inputs" id="name" type="Number" required placeholder="Progress" />
                {/* ------------------------Skill 04--------------------------- */}
                <label className="label_feilds" htmlFor="Name">Skill 05</label>
                <input value={info.Skillname4} onChange={Onchange_inputs} autoComplete="off" name="Skillname4" className="feilds_inputs" id="name" type="text" required placeholder="Skill Name" />
                <input value={info.Skillprog4} onChange={Onchange_inputs} autoComplete="off" name="Skillprog4" className="feilds_inputs" id="name" type="Number" required placeholder="Progress" />
                {/* ------------------------Skill 05--------------------------- */}
                <label className="label_feilds" htmlFor="Name">Skill 06</label>
                <input value={info.Skillname5} onChange={Onchange_inputs} autoComplete="off" name="Skillname5" className="feilds_inputs" id="name" type="text" required placeholder="Skill Name" />
                <input value={info.Skillprog5} onChange={Onchange_inputs} autoComplete="off" name="Skillprog5" className="feilds_inputs" id="name" type="Number" required placeholder="Progress" />
                {/* ------------------------Skill 06--------------------------- */}
                <label className="label_feilds" htmlFor="Name">Skill 07</label>
                <input value={info.Skillname6} onChange={Onchange_inputs} autoComplete="off" name="Skillname6" className="feilds_inputs" id="name" type="text" required placeholder="Skill Name" />
                <input value={info.Skillprog6} onChange={Onchange_inputs} autoComplete="off" name="Skillprog6" className="feilds_inputs" id="name" type="Number" required placeholder="Progress" />
                </div>
                <div className="Feilds_part profile_in">
                <h2 className="ciwaan_feilds">Intersting</h2>
                <label className="label_feilds" htmlFor="Name">Interst Name</label>
                <input value={info.Inters1} onChange={Onchange_inputs} autoComplete="off" name="Inters1" className="feilds_inputs" id="name" type="text" required placeholder="Interst Name" />
                <label className="label_feilds" htmlFor="Name">Interst Name</label>
                <input value={info.Inters2} onChange={Onchange_inputs} autoComplete="off" name="Inters2" className="feilds_inputs" id="name" type="text" required placeholder="Interst Name" />
                <label className="label_feilds" htmlFor="Name">Interst Name</label>
                <input value={info.Inters3} onChange={Onchange_inputs} autoComplete="off" name="Inters3" className="feilds_inputs" id="name" type="text" required placeholder="Interst Name" />
                <label className="label_feilds" htmlFor="Name">Interst Name</label>
                <input value={info.Inters4} onChange={Onchange_inputs} autoComplete="off" name="Inters4" className="feilds_inputs" id="name" type="text" required placeholder="Interst Name" />
                <input value={cv && cv.Price} onChange={Onchange_inputs_download} autoComplete="off" name="Lacagta" className="feilds_inputs" id="name" type="text" required placeholder="Interst Name"/>
                </div>
                <div className="Feilds_part profile_in">
                    <button className="save_data" onClick={HangdaleUpdate}>
                    <i className="fa-solid fa-cloud"></i> save
                    </button>
                </div>
            </form>
            </div>
        </>
    )
}

export default Feilds