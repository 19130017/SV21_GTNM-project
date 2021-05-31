import React, { Component } from 'react';
import Anime_Detail from './Anime_Detail';

class CaptainTsubasa_Detail extends Component {
    render() {
        return (
            <div>
                 <Anime_Detail 
          bg = "img/trending/captain-tsubasa.jpg"
          comment = "1808"
          name="Captain Tsubasa"
          author ="Tomioka Atsuhiro"
          votes = "1.021.213 Votes"
          intro = "Captain Tsubasa là câu chuyện đam mê của một học sinh trường tiểu học có những suy nghĩ và ước mơ xoay quanh hầu hết tình yêu bóng đá. Tsubasa Oozora 11 tuổi bắt đầu chơi bóng ở độ tuổi rất trẻ, và trong khi đó nó chỉ là một môn thể thao giải trí cho bạn bè của mình, đối với anh, nó đã phát triển thành một cái gì đó ám ảnh. Để theo đuổi ước mơ của mình với khả năng tốt nhất của trường tiểu học, Tsubasa đã cùng mẹ mình đến thành phố Nankatsu, nơi nổi tiếng với các đội bóng đá trường tiểu học xuất sắc."
          type ="TV Series"
          studio = "Lerche"
          date= "April 02, 2018 to April 01, 2019"
          status = "Airing"
          genre = " Anime, Sport"
          scores = "7.31 / 1,515"
          rating = "9.5 / 161 times"
          duration = "24 min/ep"
          quality = "HD"
          views = "9 milion"
        />
            </div>
        );
    }
}

export default CaptainTsubasa_Detail;
