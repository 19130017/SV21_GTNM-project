import React, { Component } from 'react';
import Anime_Detail from './Anime_Detail';

class Bleach_Detail extends Component {
    render() {
        return (
            <div>
                 <Anime_Detail 
          bg = "img/trending/bleach.jpg"
          comment = "1438"
          name="Bleach (2018)"
          author ="Tite Kubo"
          votes = "1.021.213 Votes"
          intro = "Ichigo Kurosaki là một thiếu niên có khả năng nhìn thấy linh hồn. Cuộc sống của anh thay đổi nhanh chóng bởi sự xuất hiện đột ngột của một Shinigami - một trong những người điều chỉnh dòng chảy của linh hồn giữa thế giới con người và thế giới bên kia, tên là Kuchiki Rukia, người đến thế giới con người để tìm diệt Hollow, một linh hồn lạc lối rất nguy hiểm. Khi Rukia bị thương nặng vì bảo vệ Ichigo khỏi Hollow, cô cố gắng chuyển một nửa trong số Linh lực của mình cho Ichigo để anh có thể đánh bại Hollow."
          type ="TV Series"
          studio = "Lerche"
          date= "Oct 02, 2018 to ?"
          status = "Airing"
          genre = " Action, Adventure, Fantasy, Magic, Comedy"
          scores = "7.31 / 1,515"
          rating = "9.5 / 161 times"
          duration = "24 min/ep"
          quality = "HD"
          views = "15 milion"
        />
            </div>
        );
    }
}

export default Bleach_Detail;
