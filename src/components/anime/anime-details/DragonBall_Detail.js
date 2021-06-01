import React, { Component } from 'react';
import Anime_Detail from './Anime_Detail';

class DragonBall_Detail extends Component {
    render() {
        return (
            <div>
                 <Anime_Detail
          bg = "img/trending/dragonballsuper.jpg"
          name="Dragon Ball Super (2015) "
          comment= "100"
          author =" Kimitoshi Chioka"
          votes = "1.221.213 Votes"
          intro = " Bối cảnh của phim Bảy Viên Ngọc Rồng Siêu Cấp là sau khi Goku đánh bại Majin Buu nguy hiểm, hòa bình đã trở về trái đất một lần nữa. Vài năm sau, Chi Chi muốn Goku có được một công việc ổn định, vì vậy Goku đã làm việc như một nông dân. Trong khi đó, Goten cùng với Trunks đang tìm kiếm một món quà cho Videl mà sau này sẽ là chị dâu của mình, Gohan sẽ đính hôn với Videl."
          type ="TV Series"
          studio = "Lerche"
          date= "July 5, 2015 to March 25, 2018"
          status = "Airing"
          genre = " Action, Adventure, Fantasy, Magic"
          scores = "7.31 / 1,515"
          rating = "10 / 161 times"
          duration = "24 min/ep"
          quality = "HD"
          views = "11 milion"
        />
            </div>
        );
    }
}

export default DragonBall_Detail;