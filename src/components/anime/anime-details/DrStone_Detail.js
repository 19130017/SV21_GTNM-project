import React, { Component } from 'react';
import Anime_Detail from './Anime_Detail';

class DrStone_Detail extends Component {
    render() {
        return (
            <div>
                 <Anime_Detail 
          bg = "img/trending/dr-stone.jpg"
          comment = "6199"
          name="Dr Stone "
          author ="Inagaki Riichirō"
          votes = "1.021.213 Votes"
          intro = "Một ngày thứ ánh sáng xanh thần bí biến mọi vật trên Trái đất hoá đá. Ngàn năm sau, cậu học sinh trung học Taiju thoát khỏi lớp hoá thạch và tìm cách hồi sinh toàn thế giới bằng niềm tin của khoa học."
          type ="TV Series"
          studio = "Lerche"
          date= "July 5, 2019  to Now"
          status = "Airing"
          genre = " Action, Adventure, Fantasy, Magic"
          scores = "7.31 / 1,515"
          rating = "9.5 / 161 times"
          duration = "24 min/ep"
          quality = "HD"
          views = "18 milion"
        />
            </div>
        );
    }
}

export default DrStone_Detail;
