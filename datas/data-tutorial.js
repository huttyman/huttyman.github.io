export const TUTORIAL = [
    {
        "id": "move",
        "title": "Move",
        "page": "34",
        "detail": [
            {
                "desc": "You must to declare where to go before mesure (mesure with stat MOV in inch and mesure front base to front base)",
                "descTH": "ผู้เล่นจะต้องประกาศว่าจะเดินไปไหนก่อนที่จะวัดเสมอ (วัดโดย Stat MOV ว่าเดินได้กี่นิ้ว โดยวัดจากปลายฐานฝั่งไหนให้จบด้วยปลายฐานฝั่งนั้น)",
                "image": "move1.PNG",
                "imageSize": {"width":300,"height":199}
            },
            {
                "desc": "Trooper can move through narrow path if path is larger than half of Trooper base and you have space at end of action larger than Trooper base",
                "descTH": "ตัวทหารจะสามารถเดินผ่านพื้นที่แคบได้ หากพื้นที่นั้นกว้างกว่าครึ่งหนึ่งของฐานตัวทหารนั้นๆ และสามารถวางฐานที่ปลายทางการเดินโดยพื้นที่การวางต้องใหญ่กว่าฐานของทหาร",
                "image": "move2.PNG",
                "imageSize": {"width":300,"height":751}
            },
            {
                "desc": "Trooper can move through stair and ladder as normal move",
                "descTH": "ตัวทหารสามารถเดินขึ้นบันไดบนกำแพงหรือบันไดขึ้นบ้านได้ด้วยเงื่อนไขวิธีเดินปรกติ",
                "image": "move3.PNG",
                "imageSize": {"width":302,"height":366}
            },
            {
                "desc": "Trooper can move over obstacle but your Trooper must be higher than obstacle before and at the end of move",
                "descTH": "ตัวทหารสามารถเดินข้ามสิ่งกีดขวางได้ แต่ตัวทหารจะต้องมีความสูงมากกว่าสิ่งกิดขวางนั้นทั้งก่อนข้ามและหลังข้าม",
                "image": "move4.PNG",
                "imageSize": {"width":300,"height":365}
            },
            {
                "desc": "Advance Technique:  \nTrooper can move as first action and use second action as shoot during your first move. In this example\n\t    ►  You use first action move only 2inch for be able to see your opponent and Then move back 2inch (total of 4 inch)\n\t     ►  Your opponent see you in your first action and declare a shoot as ARO\n\t   ►  You use your second action to shoot your opponent between seeing enemy and comeback\n\t    ►  As result you got hit by enemy and become unconcious at the end of move action (you minus all damage at the end of all action even if you got hit and unconcious at first action)",
                "descTH": "เทคนิคขั้นเทพ: \n ตัวทหารสามารถใช้เดินเป็น Actionแรก และใช้ Actionที่สอง เป็นการยิงระหว่างเดินในActionแรกได้ เช่นในตัวอย่าง \n\t ► ผู้เล่นใช้ Actionแรก ในการเดินแค่2นิ้วเพื่อให้ตัวทหารสามารถมองเห็นและยิงทหารฝั่งตรงข้ามได้ จากนั้นเดินกลับ2นิ้ว(รวมเดินทั้งหมด4นิ้ว) \n\t  ►  ทหารฝั่งตรงข้ามเห็นผู้เล่นในการเดิน Actionแรก ของผู้เล่น และได้ประกาศ ARO เพื่อใช้ในการยิงผู้เล่น \n\t   ► ผู้เล่นประกาศใช้ actionที่สอง เพื่อยิงทหารฝั่งตรงข้ามในจังหวะที่ผู้เล่นเห็นศัตรูก่อนจะเดินกลับ \n\t  ►  สรุปตอนสุดท้ายทหารฝั่งผู้เล่นโดนยิงจากศัตรูและเข้าสถาณะ unconcious ที่จุดสุดท้ายของ move (ผู้เล่นจะคำนวนค่าความเสียหายและลดเลือด ที่ชั้นตอนสุดท้ายของturn ถึงแม้ว่าตัวละครคุณจะโดนยิงและตายตั้งแต่ Actionแรกก็ตาม) ",
                "image": "move5.PNG",
                "imageSize": {"width":399,"height":860}
            }
        ]
    },
    {
        "id": "jump",
        "title": "Jump",
        "page": "37",
        "detail": [
            {
                "desc": "You can jump up to First MOV value in inche and space is equal or larger than base (if declare already but distance is more then your MOV, your stay at same place and skip action)",
                "image": "jump1.PNG",
                "imageSize": {"width":399,"height":1345}
            },
        ]
    },
    {
        "id": "cover",
        "title": "Cover",
        "page": "43",
        "detail": [
            {
                "desc": "The term Cover refers to all pieces of scenery that partially or completely obstruct LoF, thus preventing the attacker from making a clean BS Attack. \n \n This case is no cover which mean all unit can shoot as normal",
                "image": "cover1.PNG",
                "imageSize": {"width":399,"height":250}
            },
            {
                "desc": "► If the target is in Total Cover, the attacker may not declare a BS Attack with Weapons, Special Skills, or Equipment, that requires LoF. \n\n Total cover block all area of unit you want to shoot in this case you cannot declare BS(range attack)",
                "image": "cover2.PNG",
                "imageSize": {"width":399,"height":300}
            },
            {
                "desc": "Partial cover is when there are something block some part of unit you want to shoot. Partial cover give you effect of \n\n - -3 BS for attacker \n - +3 ARM for defender(if got hit)",
                "image": "cover3.PNG",
                "imageSize": {"width":399,"height":320}
            },
            {
                "desc": "Tips. Partial cover can count even if your unit got block by a little bit. In this example unit above building got partial cover because building is block his base",
                "image": "cover4.PNG",
                "imageSize": {"width":399,"height":440}
            },
        ]
    },
    {
        "id": "aro",
        "title": "ARO (Automatic reaction order)",
        "page": "22",
        "detail": [
            {
                "descTH": "ARO (Automatic Reaction Order) เป็นAction ที่เราจะได้ทำเมื่อเป็น Turnของฝ่ายตรงข้าม (ฝ่ายตรงข้ามเป็นฝ่านเล่น) โดยที่เราจะสามารถให้ทุกตัวละครเราใช้ ARO(เช่น ยิง,หลบ, อื่นๆ)ได้ตัวละ1ครั้งทุกOrderที่ฝั่งตรงข้ามใช้ใหม่",
                "desc": "ARO (Automatic Reaction Order) is Action that you can do when it is your oppent active turn. Your every unit will each have 1 ARO action in every order your opponet use (which mean when your opponent begin new order your unit will regen ARO)",
            },
            {
                "descTH": "เงื่อนไขที่จะใช้ AROได้ เมื่อตรงตามเงื่อนไขอย่างไดอย่างหนึ่ง \n ► ตัวละครสามารถเห็นศัตรูได้(Line of fire) \n ► ตัวละครศัตรูอยู่ Zone of control (รอบตัว8นิ้ว) (ใช้ยิงกลับไม่ได้ ได้แค่หลบและไม่กี่อย่าง) \n ► โดนอาวุธtemplate(พวกอาวุธกว้าง) หรืออาวุธHack  \n ► หากมีskillพิเศษ",
                "desc": "You unit can do ARO if your unit follow one of these condition \n ► Unit have lof(Line of fire) \n ► Unit have Zone of control (8 inched around unit) (can't attack back but can dodge or some action) \n ► got attacked from template weapon or Hack  \n ► Have special skill",
            },
            {
                "descTH": "Zone of control คือพื้นที่รอบตัว8นิ้ว(สามารถใช้หลบเวลาศัตรูยิงเราตอนที่เราไม่เห็นศัตรูได้ แต่ph-3)",
                "desc": "Zone of control is 8 inches around unit(can use dodge when you got attacked but your unit don't have line of fire with mod ph-3)",
                "image": "aro4.PNG",
                "imageSize": {"width":399,"height":270}
            },
            {
                "descTH": "*Tips ถ้าตัวเราใช้ARO แล้วunitเราเห็นตัวศัตรูตั้งแต่ก่อนวิ่งเข้า Cover จะสามารถเลือกยิงตั้งแต่unitฝั่งตรงข้ามก่อนเข้าcoverได้ (ทำให้ฝั่งตรงข้ามใช้ประโยชน์ของcoverไม่ได้) ",
                "desc": "*Tips when you use ARO for attack and your unit saw opponent unit before move to Cover. You can choose to attack that unit before they reach cover (make your opponent unable to use cover benefit) ",
                "image": "aro3.PNG",
                "imageSize": {"width":399,"height":320}
            },
            {                
                "descTH": "Example of play ARO,  Left team(Orange) is Active player. Our team is Right team(Blue) reactive player \n\t1. Orange team use Order for top unit and use first action for move to building corner\n\t2. end of first action then they will ask blue team for any ARO. Right team(blue) have 2 unit that can see oppent active unit and have those 2 unit use ARO for shooting\n\t3. Orange team use second action for shoot(Combi rifle 3b) by using 2dice to top blue unit and 1 dice for middle blue unit (see more information at Face-off)",
                "desc": "ยกตัวอย่างARO ฝั่งซ้าย(สีส้ม) เป็นฝ่ายเล่น  ส่วนเราเป็นฝ่ายขวา(สีน้ำเงิน)ฝั่งรอเล่น \n\t1. ฝ่ายส้มใช้ order ให้ตัวบนและใช้ actionแรกไปกับการเดินโผล่ขอบตึกออกมา \n\t2. จบactionของฝั่งตรงข้ามเขาจะถามเราว่า AROไหม ซึ่งฝั่งเรา(สีฟ้า) มีตัวunit2ตัวที่เห็นunitของฝ่ายตรงข้าม และสั่งให้ทั้งสองunitใช้AROในการยิง\n\t3. ฝั่งตรงข้าม(สีส้ม) ใช้action ที่2 ในการยิง(Combi rifle 3b) 2ลูกไปที่ตัวบนและ1ลูกยิงไปที่ตัวล่าง (ดูวิธียิงที่ range combat และ face-off)",
                "image": "aro1.PNG",
                "imageSize": {"width":399,"height":330}
            },
            {
                "descTH": "\t4. (ต่อจากเมื่อกี้)  orderต่อไปของสีส้ม ให้unitตรงกลาง  เดินไปยังcoverข้างหน้า\n\t5. พอฝั่งตรงข้ามใช้actionแรกเสร็จก็จะถามว่าเราจะAROไหม ซึ่งเรามี unit สีฟ้า1ตัวที่เห็น จึงให้ตัวนั้นใช้ARO ในการยิง unitฝั่งตรงข้าม(สีส้ม ) ซึ่งเนื่องจากunitเราเห็นตัวศัตรูตั้งแต่ก่อนเข้าcoverใหม่ เราจึงเลือกยิงตั้งแต่ฝั่งตรงข้ามยังไม่เข้าcover\n\t6. ฝั่งสีส้มใช้ actionที่2ในการยิงสวนเรากับ เข้าสู่การ face-off  ",
                "desc": "\t4. (Continue)  Orange team(Left) use next order for middle unit and use first action to move at middle cover\n\t5. After first action it's time for ARO, Blue team(right) have 1 unit that can see active unit and use ARO for shoot him which can see orange unit since before he reach cover. So blue unit can shoot orange unit before reach cover\n\t6. Orange team use second action for shoot back and begin face-off  ",
                "image": "aro2.PNG",
                "imageSize": {"width":399,"height":330}
            },
            {
                "descTH": "***สำคัญมาก ในOrderเดียวกัน หากตัวunitเราเห็นคู่ต่อสู้ใน actionแรกของฝั่งตรงข้าม แล้วเราไม่เลือกทำARO จะถือว่าตัวunitนั้น สละสิทAROใน turnนั้นไป  มีเงื่อนไขเดียวที่จะทำ AROในactionที่2ของศัตรูได้ ก็คือเมื่อ unit เรานั้นไม่เห็นฝั่งตรงข้ามตั้งแต่ actionแรก\n\n\tเช่นตัวอย่างด้านบนข้อ4 หลังจากฝ่ายตรงข้าม(สีส้ม)ใช้actionในการเดินเข้าcover ถ้าเรา(ฝ่ายน้ำเงิน)ตัดสินใจไม่ใช้AROในactionนั้น(อาจจะเพราะอยากดูคู่ต่อสู้จะทำอะไรต่อหรืออะไรก็แล้วแต่)   เมื่อฝ่ายตรงข้ามใช้actionที่สองในการยิง เราจะใช้AROในการหลบหรือยิงกลับไม่ได้",
                "desc": "***Important In same order if your unit can see opponent unit since their first action but choose not to do ARO. It's mean that you will loose ARO for the rest of the turn. The only reason for your unit to be able to use ARO in opponent second turn is when your unit not see opponent unit at first action.\n\n\t For example in above example number 4. after orange team use action for move to cover and if we not use ARO for shoot (maybe because you want to see what he will do next or some reason). Then for orange team shoot your unit. you will not able to shoot back or dodge because you loose ARO.",
            },
        ]
    },
    {
        "id": "download",
        "title": "Download app to your mobile",
        "detail": [
            {
                "descTH": "กดที่ปุ่มตั้งค่าที่มุมขวาบนของโปรแกรม Chrome หรือ Safari (ปุ่ม3จุดแนวตั้ง)",
                "desc": "press on option button(3 vertical dot right top of chrome or safari)",
                "image": "download1.png",
                "imageSize": {"width":350,"height":670}
            },
            {
                "descTH": "เลือก 'Add to home screen' หรือ 'เพิ่มที่หน้าจอหลัก' ",
                "desc": "choose 'Add to home screen' from the menu",
                "image": "download2.png",
                "imageSize": {"width":350,"height":670}
            },
            {
                "descTH": "Iconโปรแกรมจะขึ้นมาบนจอมือถือ เรียบร้อย!!",
                "desc": "The Icon will show in your mobile app. DONE!",
                "image": "download3.png",
                "imageSize": {"width":350,"height":670}
            },
        ]
    },

];