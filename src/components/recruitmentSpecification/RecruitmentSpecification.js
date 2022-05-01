import {Card, Typography} from "@mui/material";

const RecruitmentSpecification = () => {
    const cardStyle = {
        width: '100%',
        height: '100%',
        margin: ' 68px 101px 56px 10px',
        padding: '34px 20px 43px 130px',
        borderRadius: '15px',
        borderColor: 'rgba(112, 112, 112, 0.25)',
        backgroundColor: '#fff'
    }
    const textStyle = {
        marginBottom:'15px',
        fontFamily: 'BYekan+',
        fontSize: '30px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.43,
        letterSpacing: 'normal',
        textAlign: 'right',
        color: '#4166b7',
    }
    return (
        <Card sx={cardStyle}>
            <Typography sx={textStyle}>مشخصات آگهی</Typography>
            <Typography sx={{...textStyle,fontSize:'21px',color:'#33334c'}}>شرح موقعیت شغلی</Typography>
            <Typography sx={{...textStyle,fontSize:'18px',color:'#33334c',marginBottom:'40px'}}>برای تکمیل کادر فنی تیم خود به دنبال همکار توسعه دهنده در بخش UI & UX هستیم. اگر از چالش های استارت آپی و رشد مداوم لذت میبرید، جای شما در دلینو خالیست...</Typography>
            <Typography sx={{...textStyle,fontSize:'21px',color:'#33334c'}}>شرح شغلی</Typography>
            <Typography sx={{...textStyle,fontSize:'18px',color:'#33334c',marginBottom:'30px'}}>شرکت کردن در ساخت طرح های کاربر-محور از طریق درک الزامات کسب و کار و بازخورد کاربر
                همکاری موثر با تیم های محصول، فنی و مدیریت
                استفاده از بازخورد مشتری، متریکهای استفاده، داده های استفاده کاربران از سرویسها در طراحی به منظور بهبود تجربه کاربر
                به تصویر کشیدن ایده های طراحی با استفاده از استوری بورد (Storyboards)، جریان های فرآیند (Process Flows) و نقشه سایت (Site maps)
                توسعه UI Mockup و  Prototypeها که به وضوح نحوه عملکرد و ظاهر محصولات را نشان می‌دهند.
                تهیه و ارائه طرحهای خام و اولیه به تیم های داخلی و ذینفعان کلیدی
                شرکت در فرآیند کشف (Discovery Phase) برای کمک به شناسایی و عیب یابی مشکلات UX
                رعایت استانداردهای دیزاین شرکت در فونت ها، رنگ ها و تصاویر

                شرایط احراز

                +2 سال سابقه طراحی وب و موبایل
                نمونه کارهای آنلاین که مهارت های طراحی و حل مسئله را به نمایش می گذارد
                جزئیات گرا اما در عین حال توانا در دیدن کلیات مهم محصول
                آشنایی با مفاهیم رابط کاربری، تجربه کاربری و تفکر طراحی
                آشنا با فرآیند طراحی تکرار پذیر (Iterative design process)
                داشتن مهارت ارتباطی عالی و بیان ایده ها، طرح ها و پیشنهادات
                داشتن تجربه کار با ابزارهای طراحی Figma، Adobe XD، Illustrator، Photoshop
                مدیریت راحت چندین پروژه به طور همزمان، از ایده تا اجرا
                مشارکت موثر در همکاری با تیم های داخلی و خارجی
                کنجکاو و با انگیزه
                توانایی یادگیری راحت و سریع در محیطی سریع

                مزیت های استخدامی

                تجربه توسعه چابک نرم افزار
                تجربه کار با HTML، CSS و جاوا اسکریپت
                مهارت های ساخت پروتوتایپ و طرح اولیه

                مزایای کار در دلینو

                پرداخت حقوق پیش از موعد
                پرداخت پاداش و کارانه بر اساس عملکرد
                امکان همکاری طولانی مدت
                امکان پیشرفت و فضای ارتقای شغلی
                ساعت کاری شناور
                امکان کار به صورت هیبرید</Typography>
        </Card>
    )
}
export default RecruitmentSpecification