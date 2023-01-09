function FilltersAr(){
    return (
        <>
                <div className="filters">
                    <form action="" className="selet_qayb">
                        <h2><i class="fa-solid fa-filter"></i> عمليات تصفية الوظيفة</h2>
                        <input className="qayb" type={"search"} required name="search" placeholder="سائق ..."/> 
                        <div className="qayb_filter">
                            <h2><i className="fa-solid fa-list-ul"></i> حسب الوقت </h2>
                            <div className="doorasho">
                            <input type={"checkbox"} name="Time" id="All"/>
                            <label htmlFor="All"> جميع الأوقات </label>
                            </div>
                            <div className="doorasho">
                            <input type={"checkbox"} name="Time" id="full"/>
                            <label htmlFor="full">دوام كامل </label>
                            </div>
                            <div className="doorasho">
                            <input type={"checkbox"}  name="Time" id="part1"/>
                            <label htmlFor="part1"> دام صباححي </label>
                            </div>
                            
                            <div className="doorasho">
                            <input type={"checkbox"} name="Time" id="part2"/>
                            <label htmlFor="part2"> دوام مسائي </label>
                            </div>
                            <div className="doorasho">
                            <input type={"checkbox"} name="Time" id="Temporary"/>
                            <label htmlFor="Temporary"> مؤقت</label>
                            </div>
                            <div className="doorasho">
                            <input type={"checkbox"} name="Time" id="Freelance"/>
                            <label htmlFor="Freelance"> مستقل</label>
                            
                            </div>
                            <div className="doorasho">
                            <input type={"checkbox"} name="Time" id="Internship"/>
                            <label htmlFor="Internship"> تدريب</label>
                            </div>
                            </div>
                            <div className="qayb_filter">
                            <h2><i className="fa-solid fa-list-ul"></i> حسب الدوام </h2>
                            <div className="doorasho">
                            <input type={"checkbox"} name="Time" id="full"/>
                            <label htmlFor="full"> جميع الأنواع </label>
                            </div>
                            <div className="doorasho">
                            <input type={"checkbox"}  name="Time" id="part1"/>
                            <label htmlFor="part1"> ذكر </label>
                            </div>
                            <div className="doorasho">
                            <input type={"checkbox"} name="Time" id="part2"/>
                            <label htmlFor="part2"> الأنثى</label>
                            </div>
                            </div>
                            <div id="country" name="country" className="qayb_filter">
                                <h2><i className="fa-solid fa-list-ul"></i> حسب البلد </h2>
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
                            <h2><i className="fa-solid fa-list-ul"></i> حسب المدينة </h2>
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


export default FilltersAr