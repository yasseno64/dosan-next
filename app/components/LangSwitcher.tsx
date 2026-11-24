import Link from "next/link"

type props = {lang: "ar"|"en"};

export default function LangSwitcher({lang}:props){
    const active = "text-white font-semibold";
    const inactive = "text-white/50 font-normal"
    
    return(
        <span className="flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.8px] text-white">
      <Link href="/en" className={lang === "en" ? active : inactive}>
        {lang === "ar" ? "English" : "EN"}
      </Link>
      <Link href="/ar" className={lang === "ar" ? active : inactive}>
        {lang === "ar" ? "العربية" : "AR"}
      </Link>
    </span>
    )

}