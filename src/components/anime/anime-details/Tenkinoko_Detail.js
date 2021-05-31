import React, { Component } from 'react';
import Anime_Detail from './Anime_Detail';

class Tenkinoko_Detail extends Component {
    render() {
        return (
            <div>
                <Anime_Detail 
          bg = "img/trending/tenki-no-ko.jpg"
          comment = "779"
          name="Tenkinoko (Đứa con của thời tiết) "
          author =" Shinkai Makoto"
          votes = "1.021.213 Votes"
          intro = "Một movie cùng cha đẻ với siêu phẩm Your Name. Trong bộ phim, một học sinh Cao trung có tên là Hodaka đã bỏ nhà ra đi ở trên một hòn đảo bị tách biệt và chuyển đến Tokyo sống, nhưng ngay sau đó mộng ước của Hodaka đã bị phá vỡ. Cậu ta phải sống những ngày tháng cô đơn, nhưng cuối cùng cậu cũng đã tìm được một công việc là làm nhà văn cho một tạp chí ngầm. Sau khi bắt đầu công việc, thì thời tiết ngày nào cũng mưa, từ ngày này qua ngày khác. Ở một góc khác của thành phố đông đúc và bận rộn, Hodaka đã gặp một người phụ nữ trẻ có tên là Hina. Do một số hoàn cảnh nên Hina và em trai đã sống cùng nhau trong một cuộc sống vui vẻ, mạnh khỏe. Hina cũng có sức mạnh: sức mạnh dừng mưa và làm sạch bầu trời."
          type ="TV Series"
          studio = "Lerche"
          date= "August 30, 2019 to ?"
          status = "Airing"
          genre = " Action, Adventure, Fantasy, Magic"
          scores = "7.31 / 1,515"
          rating = "9.5 / 161 times"
          duration = "111 min"
          quality = "HD"
          views = "11 milion"
        />
            </div>
        );
    }
}

export default Tenkinoko_Detail;
