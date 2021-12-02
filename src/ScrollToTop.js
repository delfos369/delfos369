import { useEffect } from "react";
import { useLocation } from "react-router";
const x = 0;

let y = 0;


  /*******desplazamiento de la pantalla en el eje Y********/


export default function ScrollToTop(){
    const screen = window.screen.width
    const {pathname}=useLocation();


    if(screen >0){
        if (pathname === "/inicio" || pathname === "/" )
        {     
            y=0;
        }
     
     if ( pathname === "/nosotros" || pathname === "/servicios" || pathname === "/portafolio" || pathname === "/cotiza"  || pathname === "/cloud"
     || pathname === "/precios"  )
     {
        
        y = 560;
     }

    }

   



    if(screen < 768){
        if (pathname === "/inicio" || pathname === "/" )
        {     
            y=0;
        }
       
     if ( pathname === "/nosotros" || pathname === "/servicios" || pathname === "/portafolio" || pathname === "/cotiza"  || pathname === "/cloud"
     || pathname === "/servicios"
     )
     {
        
        y =520;
     }


   }


    useEffect(()=>  {
        window.scrollTo(x,y);

    },[pathname]);

    return null;
    
    
}