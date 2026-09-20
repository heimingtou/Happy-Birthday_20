

type CardBirthDayProp ={
    CardBirthDays:string;
}

export default function CartBirthday({ CardBirthDays}: CardBirthDayProp){
    return (
        <div>
                    <div className="image border rounded-2xl overflow-hidden ml-auto mr-auto w-[45rem] animate-fade-in-up  ">
                        <img src={CardBirthDays} alt="birthday" className="w-[45rem] "/>
                    </div>
                   
                </div>
    )
}