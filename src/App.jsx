import { FaLocationDot } from "react-icons/fa6";

function App() {
  
  return (
    <div className={`bg-background pt-6 pb-4`}>
        <div className={`text-primary-text  text-3xl font-semibold text-center`}>
          รายละเอียด
        </div>
        <div className={`whitespace-nowrap border-2 rounded-2xl border-primary-text mx-auto w-min mt-4 text-center p-4`}>
          <div className={`underline`}>
            วันที่ 09 มิถุนายน 2567
          </div>
          <div className={`flex items-center gap-2 justify-center`}>
            <div><FaLocationDot color='#388A61' /></div>
            <a href="https://maps.app.goo.gl/n9G3tiHJepbgTg3K7" target='_blank'>
              ณ วัดจำปา
            </a>
          </div>
          <div className={`mt-4 flex items-center gap-2 justify-center`}>
            <div className={`w-2 h-2 bg-[#D25354] rounded-full`}></div>
            <div>
              06:00 - 07:00
            </div>
          </div>
          <div>
            โกนผมนาค
          </div>
          <div className={`flex items-center justify-center gap-2`}>
            <div className={`w-2 h-2 bg-[#D25354] rounded-full`}></div>
            <div>            
              08:00 - 09:00
            </div>
          </div>
          <div className={``}> 
            แห่นาครอบโบสถ์ และเข้าบวชเป็นพระ
          </div>
          <div className={`flex justify-center items-center gap-2`}>
            <div className={`w-2 h-2 bg-[#D25354] rounded-full`}></div>
            <div>
              10:00 เป็นต้นไป
            </div>
          </div>
          <div>
            ขึ้นศาลาเลี้ยงเพล จบพิธี
          </div>
        </div>
        <div className={`mx-4 mt-4 rounded-2xl overflow-hidden`}>
          <iframe width={"100%"} height={"450"} src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7671482062487!2d100.74007417614317!3d14.555304085925643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311df0e499d67433%3A0x1b5fd2cb66687c3c!2z4Lin4Lix4LiU4LiI4Liz4Lib4Liy!5e0!3m2!1sth!2sth!4v1717468440922!5m2!1sth!2sth"} style={{border: '0'}} allowfullscreen={""} loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}></iframe>
        </div>
        <div className={` mx-4 mt-4 text-center`}>
          <div className={`text-sm space-x-2`}>
            <span>
              หากใครไม่สะดวกเดินทางมา และมีกำลังอยากร่วมทำบุญ
            </span>
            <span className={`underline font-semibold`}>ตามกำลังศรัทธา</span>
          </div>
          <div className={`w-[300px] mx-auto rounded-2xl overflow-hidden mt-4`}>
            <img src="./qrcode.jpeg" alt="" />
          </div>
        </div>
    </div>
  )
}

export default App
