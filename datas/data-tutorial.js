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

];