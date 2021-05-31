import React, { Component } from 'react';
import Anime_Detail from './Anime_Detail';

class OnePiece_Detail extends Component {
    render() {
        return (
            <div>
                <Anime_Detail 
          bg = "img/trending/one-piece.jpg"
          comment = "5920   "
          name="One Piece"
          author ="Oda Eiichiro"
          votes = "1.021.213 Votes"
          intro = "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về ngườ..."
          type ="TV Series"
          studio = "Lerche"
          date= "Oct 02, 2017 to ?"
          status = "Airing"
          genre = " Action, Adventure, Fantasy, Magic"
          scores = "7.31 / 1,515"
          rating = "9.5 / 161 times"
          duration = "24 min/ep"
          quality = "HD"
          views = "30 milion"
        />
            </div>
        );
    }
}

export default OnePiece_Detail;
