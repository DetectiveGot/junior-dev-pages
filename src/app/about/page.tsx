"use client";

import React from "react";
import Header from '../../components/header';
import Footer from "../../components/footer";
import "../../styles/about.css";

export default function About() {
    return (
        <> 
            <Header />
            <div className="hero">
                <div className="aurora-container">
                    <h1 className="aurora-text2">About</h1>
                </div>
            </div>
            <div className="main" style={{alignItems:"center"}}>
                <div className="desc">
                    <div style={{textAlign:"center"}}>
                        <p className="desctext"><span className="aurora-text2">Junior dev</span> is an organization for hosting <span className="aurora-text3">contests</span> on various topics for people to practice doing problems ranging from <span style={{color:"#00ff00"}}>basic coding</span> to beyond <span style={{color:"#ed143d"}}>IOI</span></p>
                        <p>made with ❤ by junior dev team members and friends</p>
                        <p>those who contributed to this project:</p>
                    </div>
                    <div className="listww">
                        <p className="person">1. Detective conan (The CEO of the Junior Dev organization)</p>
                        <p className="person">2. Nagorn (Starter of the junior dev website)</p>
                        <p className="person">3. kaopj (Has contributed in helping Nagorn making the website, has created problems for contests)</p>
                        <p className="person">4. opal_Inwza007x (Has contributed in helping Nagorn making the website)</p>
                        <p className="person">5. MisterO (Has created problems for contests.)</p>
                        <p className="person">6. ()</p>
                        <p className="person">7. ()</p>
                        <p className="person">8. ()</p>
                        <p className="person">9. ()</p>
                        <p className="person">10. ()</p>
                        <p className="person">11. ()</p>
                        <p className="person">12. ()</p>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </>
    );
}
