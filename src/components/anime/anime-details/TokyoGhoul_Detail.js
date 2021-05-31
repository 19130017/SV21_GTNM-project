import React, { Component } from 'react';
import Anime_Detail from './Anime_Detail';

class TokyoGhoul_Detail extends Component {
    render() {
        return (
            <div>
                <Anime_Detail 
          bg = "img/trending/tokyo-ghoul.jpg"
          comment = "596"
          name="Tokyo Ghoul "
          author ="Sui Ishida"
          votes = "1.021.213 Votes"
          intro = " Hàng loạt những vụ giết người kỳ lạ đang xảy ra ở Tokyo, và nhờ chất lỏng bằng chứng tại hiện trường, cảnh sát kết luận thủ phạm chính là ghoul- quỷ ăn thịt người. Kaneki, một sinh viên đại học thích đọc sách bị một con ghoul tấn công, và từ đó, số phận của chàng trai bắt đầu thay đổi..."
          type ="TV Series"
          studio = "Lerche"
          date= "Oct 02, 2014 to ?"
          status = "Airing"
          genre = " Action, Adventure, Fantasy, Magic"
          scores = "7.31 / 1,515"
          rating = "9.5 / 161 times"
          duration = "24 min/ep"
          quality = "HD"
          views = "10 milion"
        />
            </div>
        );
    }
}

export default TokyoGhoul_Detail;