import React, { Component } from 'react';
import Anime_Detail from './Anime_Detail';

class JujutsuKaisen_Detail extends Component {
    render() {
        return (
            <div>
                 <Anime_Detail 
          bg = "img/trending/jujutsu-kaisen.jpg"
          comment = "3269"
          name="Jujutsu Kaisen"
          author =" Gege Akutami"
          votes = "1.021.213 Votes"
          intro = "Vì một lý do kỳ lạ nào đó, Yuji Itadori, mặc dù với thể chất hoàn hảo nhưng anh lại đâm đầu vào tham gia CLB Huyền Bí. Tuy nhiên, họ đã sớm phát hiện ra là những câu chuyện huyền bí hoàn toàn có thật khi các thành viên trong CLB lần lượt bị tấn công! Trong khi đó, Megumi Fushiguro 'bí ẩn' lại đang truy tìm một đối tượng bị nguyền rủa cấp đặc biệt và cuộc tìm kiếm này đã đưa nhóm bạn đến Itadori..."
          type ="TV Series"
          studio = "Lerche"
          date= "March 01, 2021 to ?"
          status = "Airing"
          genre = "Action, Demons, Horror, School, Shounen, Supernatural"
          scores = "7.31 / 1,515"
          rating = "9.5 / 161 times"
          duration = "24 min/ep"
          quality = "HD"
          views = "17 milion"
        />
            </div>
        );
    }
}

export default JujutsuKaisen_Detail;
