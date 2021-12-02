/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./css/footer.css";

function Foot() {
    return (
        <>
            <div className="titulo-final">
                <h2>&copy; Delfos369 | V1</h2>
            </div>
            <div className="contenedor-footer">
                <div className="content-foo">
                    <h4>
                        <a href="link" target="_blank" rel="noreferrer">
                         <i className="bi bi-telephone-fill"></i>
                        </a>
                    </h4>

                    <p></p>
                </div>
                <div className="content-foo">
                    <h4>               
                        <a href={"link"} target="_blank" rel="noreferrer">                
                            <i className="bi bi-geo-alt-fill"></i>{" "}
                        </a>
                    </h4>
                    <p></p>
                </div>
                <div className="content-foo black" aria-hidden="false">
                    <h4>
                        <a href={"link"} target="_blank" rel="noreferrer">                        
                            <i className="bi bi-envelope-fill"></i>
                        </a>
                        <a href={"link"} target="_blank" rel="noreferrer">
                           
                            <i className="bi bi-linkedin"></i>{" "}
                        </a>
                    </h4>
                    <p></p>

                    <section className="footer__contact">
                        <div className="footer__icons"></div>
                    </section>
                </div>
            </div>
        </>
    );
}
export default Foot;
