import { useEffect, useState } from "react";


const useInfiniteScroll = () :number =>{
    const [page, setpage] = useState<number>(1);
    const handleScroll = ():void => {
        const scrollTop : number = document.documentElement.scrollTop;
       
        const innerHeigt : number = window.innerHeight;
       
        const scrollHeight : number = document.documentElement.scrollHeight;
    
        if(scrollTop + innerHeigt + 50 >= scrollHeight){
        setpage((prevPage) => prevPage+1)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);

        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        };
    }, []);
    return page;
}

export default useInfiniteScroll;