import React, { Component } from 'react';
import Anime_Detail from './Anime_Detail';

class YourName_Detail extends Component {
    render() {
        return (
            <div>
                 <Anime_Detail 
          bg = "img/trending/your-name.jpg"
          comment = "1235"
          name="Your Name "
          author ="Shinkai Makoto"
          votes = "1.021.213 Votes"
          intro = "Mitsuha là cô nữ sinh sống tại vùng quê yên bình trong một thị trấn nhỏ được bao bọc xung quanh bởi núi rừng, cô có một cô em gái và gia đình cô kế thừa nghi lễ truyền thống của đền Shinto. Sau khi mẹ cô mất thì cha của cô không chịu nối nghiệp gia đình mà quyết định theo con đường chính trị. Cuộc sống thôn quê êm đềm khiến Mitsuha cảm thấy buồn tẻ và chán nản khi ở đây chẳng có bóng đèn sáng nguyên đêm, hiệu sách hay quán cà phê cũng không có, tàu chỉ đến mỗi 2 tiếng còn các cửa hàng thì 9 giờ đã đóng cửa. Cô từng mơ ước kiếp sau có thể trở thành chàng trai Tokyo thành thị."
          type ="TV Series"
          studio = "Lerche"
          date= "2016"
          status = "Airing"
          genre = "Drama, Love, Romantic"
          scores = "7.31 / 1,515"
          rating = "9.5 / 161 times"
          duration = "112 min"
          quality = "HD"
          views = "12 milion"
        />
            </div>
        );
    }
}

export default YourName_Detail;
