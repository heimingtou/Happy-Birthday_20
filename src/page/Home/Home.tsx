
import { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import CardBirthDay from "../../assets/CardChucMung.png"
import Happy from "../../assets/Birthday Celebration Card.png";
import Birthday from "../../Component/CardBirthDay/CardBirthday";
import img1 from "../../assets/1789921017091_273137736408370596_2740818683692346215_51ff7ce4f707e44210bda328f96b25c4.jpg";
import im2 from "../../assets/1789921017475_273137736408370596_2740818683692346215_bbfe44e92d6491b3af7e873ce8f9e543.jpg";
import im3 from "../../assets/1789921017694_273137736408370596_2740818683692346215_fc87d07bc21d6c21a8bddbae74db66ea.jpg";
import im4 from  "../../assets/1789921017831_273137736408370596_2740818683692346215_e95db07e7f2d2722867af044aab18975.jpg";
import im5 from "../../assets/1789923794107_273137736408370596_2740818683692346215_4728832ce06a54ff329407073696e392.jpg"
import im6 from "../../assets/1789923794309_273137736408370596_2740818683692346215_36658727dad5ebc70eee6570ae67d781.jpg";
import im7 from "../../assets/1789923794464_273137736408370596_2740818683692346215_aae7266a6cd37009b77bb13bda9540dd.jpg"
import im8 from "../../assets/1789923794631_273137736408370596_2740818683692346215_a8096686fbfd08329df999ba578ba53a.jpg";
import im9 from "../../assets/1789923794977_273137736408370596_2740818683692346215_a475198346ca663801206809899f4a83.jpg";
import audioBirthday from "../../assets/the_mountain-happy-birthday-576570.mp3"


import './Home.css';
import { FaGift } from "react-icons/fa";

export default function Home(){
    const [tab, setTab]=useState('gif')
  const audioRef = useRef<HTMLAudioElement | null>(null);
   
  const handleStartExperience = () => {

    if (audioRef.current) {
      audioRef.current.loop = true; // Phát lặp lại
      audioRef.current.play().catch((err) => {
        console.log("Play failed:", err);
      });
    }
  };
   const PlayAudio=()=>{
        handleStartExperience()
        setTab("menu")
    }
    return (
        <div>
            <audio ref={audioRef} src={audioBirthday} preload="auto" />
            {tab=="gif"&&<div className="min-h-screen w-full bg-gradient-to-r from-violet-200 to-pink-200 ">
                <button className="mt-50 animate-gift-fall" onClick={PlayAudio} > <FaGift size={
                    300} color="Red"/> </button>
            </div>}
            {tab=="menu"&&<div className="min-h-screen w-full bg-gradient-to-r from-teal-400 to-yellow-200 p-18  ">
                <div>
                    <h1 className="text-6xl! text-amber-950! mt-0!" >Unlock tuổi 20</h1>
                </div>
                <div className="button flex flex-row justify-around">
                    <button className="w-fit h-fit " onClick={()=>setTab("tab1")}> <MdEmail size={151} color="red"/> </button>
                    <button className="w-fit h-fit " onClick={()=>setTab("tab2")}> <MdEmail size={151} color="red"/> </button>
                    <button className="w-fit h-fit " onClick={()=>setTab("tab3")}> <MdEmail size={151} color="red"/> </button>
                </div>
            </div>}
           
           {tab=="tab1"&& <div className="min-h-screen w-full bg-gradient-to-r from-violet-200 to-pink-200 pt-8 pb-8">
                <Birthday CardBirthDays={CardBirthDay } />
                <div className="m-5">
                        <button className="text-3xl bg-gradient-to-r from-slate-900 to-slate-700 text-amber-50 p-3 rounded-lg" onClick={()=>setTab("menu")}> Return</button>
                </div>
            </div>}
            {tab=="tab2"&&<div className="min-h-screen w-full bg-gradient-to-r from-slate-500 to-slate-800 pt-8 pb-8 ">
                <Birthday CardBirthDays={Happy } />
                <div className="m-5">
                        <button className="text-3xl bg-pink-200 text-black p-2 rounded-lg" onClick={()=>setTab("menu")}> Return</button>
                </div>
            </div> }
            {tab == "tab3" && (
                <div className="min-h-screen w-full bg-gradient-to-r from-red-300 to-red-100 pt-11">
                    <div className="flex flex-col justify-center ">
    {[
        { type: 'split', left: [img1,im9], right: [ im3,im9] },
        { type: 'split', left: [img1, im2,im9], right: [im2, im3,im9] },
        { type: 'flat', imgs: [img1, im3, im2, im9, im3, im4, im5] },
        { type: 'flat', imgs: [im5, im2, im8, im3, im7, im2, im6] },
        { type: 'flat', imgs: [im3, im7, im2, im5, im9, im8] },
        { type: 'flat', imgs: [im3, im2, img1, im9] },
        { type: 'flat', imgs: [im6, im8] },
        { type: 'flat', imgs: [im3] },
    ].map((row, rowIndex, rowsArray) => {
      // Tính tổng số ảnh xuất hiện ở các hàng trước đó để cộng dồn delay chính xác
      const prevCount = rowsArray.slice(0, rowIndex).reduce((acc, r) => {
        return acc + (r.type === 'split'
          ? (r.left?.length ?? 0) + (r.right?.length ?? 0)
          : (r.imgs?.length ?? 0));
      }, 0);
      if (row.type === 'split') {
        return (
          <div key={rowIndex} className="flex flex-row justify-center gap-10">
            <div className="flex flex-row">
              {row.left?.map((img, i) => (
                <img
                  key={`l-${i}`}
                  src={img}
                  className="w-15 animate-pop-in-seq"
                  style={{ animationDelay: `${(prevCount + i) * 70}ms` }}
                />
              ))}
            </div>
            <div className="flex flex-row">
              {row.right?.map((img, i) => (
                <img
                  key={`r-${i}`}
                  src={img}
                  className="w-15 animate-pop-in-seq"
                  style={{ animationDelay: `${(prevCount + (row.left?.length ?? 0) + i) * 70}ms` }}
                />
              ))}
            </div>
            
          </div>
        );
      }
      if (row.type === 'split') {
        return (
          <div key={rowIndex} className="flex flex-row justify-center gap-5">
            <div className="flex flex-row">
              {row.left?.map((img, i) => (
                <img
                  key={`l-${i}`}
                  src={img}
                  className="w-15 animate-pop-in-seq"
                  style={{ animationDelay: `${(prevCount + i) * 70}ms` }}
                />
              ))}
            </div>
            <div className="flex flex-row">
              {row.right?.map((img, i) => (
                <img
                  key={`r-${i}`}
                  src={img}
                  className="w-15 animate-pop-in-seq"
                  style={{ animationDelay: `${(prevCount + (row.left?.length ?? 0) + i) * 70}ms` }}
                />
              ))}
            </div>
            
          </div>
        );
      }

      return (
        <div key={rowIndex} className="flex flex-row justify-center">
          {row.imgs?.map((img, i) => (
            <img
              key={`row-${rowIndex}-${i}`}
              src={img}
              className="w-15 animate-pop-in-seq"
              style={{ animationDelay: `${(prevCount + i) * 70}ms` }}
            />
          ))}
        </div>
      );
    })}
  </div>
   <div className="m-5">
                        <button className="text-3xl bg-gradient-to-r from-blue-800 to-indigo-900 text-cyan-50 p-2 rounded-lg" onClick={()=>setTab("menu")}> Return</button>
                </div>
                </div>
  
)}
           
        </div>
        
    )
}