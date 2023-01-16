function Fillters(){
    return (
        <>
        <div className="filters">
            <form action="" className="selet_qayb">
                <h2><i class="fa-solid fa-filter"></i> Kala shaandhaynta</h2>
                <input className="qayb" type={"search"} required name="search" placeholder="Web Developer ..."/> 
                <div className="qayb_filter">
                    <h2><i className="fa-solid fa-list-ul"></i> Dooro Wakhtiga</h2>
                    <div className="doorasho">
                    <input type={"checkbox"} name="Time" id="All"/>
                    <label htmlFor="All"> All</label>
                    </div>
                    <div className="doorasho">
                    <input type={"checkbox"} name="Time" id="full"/>
                    <label htmlFor="full"> full-time</label>
                    </div>
                    <div className="doorasho">
                    <input type={"checkbox"}  name="Time" id="part1"/>
                    <label htmlFor="part1"> Morrning</label>
                    </div>
                    
                    <div className="doorasho">
                    <input type={"checkbox"} name="Time" id="part2"/>
                    <label htmlFor="part2"> afternoun</label>
                    </div>
                    <div className="doorasho">
                    <input type={"checkbox"} name="Time" id="Temporary"/>
                    <label htmlFor="Temporary"> Temporary</label>
                    </div>
                    <div className="doorasho">
                    <input type={"checkbox"} name="Time" id="Freelance"/>
                    <label htmlFor="Freelance"> Freelance</label>
                    
                    </div>
                    <div className="doorasho">
                    <input type={"checkbox"} name="Time" id="Internship"/>
                    <label htmlFor="Internship"> Internship</label>
                    </div>
                    </div>
                    <div className="qayb_filter">
                    <h2><i className="fa-solid fa-list-ul"></i> Dooro Wakhtiga</h2>
                    <div className="doorasho">
                    <input type={"checkbox"} name="Time" id="full"/>
                    <label htmlFor="full"> full-time</label>
                    </div>
                    <div className="doorasho">
                    <input type={"checkbox"}  name="Time" id="part1"/>
                    <label htmlFor="part1"> Morrning</label>
                    </div>
                    <div className="doorasho">
                    <input type={"checkbox"} name="Time" id="part2"/>
                    <label htmlFor="part2"> afternoun</label>
                    </div>
                    </div>
                    <div id="country" name="country" className="qayb_filter">
                        <h2><i className="fa-solid fa-list-ul"></i> Wadanka</h2>
                        <div className="doorasho">
                        <input type={"checkbox"} id="" />
                        <label value="SML">Soomaliland</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} id="" />
                        <label value="SO">Soomaaliya</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} id="" />
                        <label value="DJ">Jabuuti</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} id="" />
                        <label value="ET">Itoobiya</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} id="" />
                        <label value="ER">Ereteriya</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} id="" />
                        <label value="KE">Kenya</label>
                        </div>
                        </div>
                    <div className="qayb_filter">
                    <h2><i className="fa-solid fa-list-ul"></i> Dooro Magaalada</h2>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Hargeisa</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Muqdiso</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Boorama</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Burco </label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Berbera</label>  
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Gabilay</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Boosaaso</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Jigjiga</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Garoowe</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Addis abab</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Gaalkacayo</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Ood Wayne</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>lawyo caddo</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>buuhoodle</label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>sheekh </label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Salaxlay </label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>kalabaydh </label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>baligubadle </label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>Dila </label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>caynabo </label>
                        </div>
                        <div className="doorasho">
                        <input type={"checkbox"} />
                        <label>saylac </label>
                        </div>
                    </div>
            </form>
        </div>
        </>
    )
}


export default Fillters