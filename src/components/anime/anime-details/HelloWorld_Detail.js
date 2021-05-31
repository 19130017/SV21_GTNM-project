import React, { Component } from 'react';
import Anime_Detail from './Anime_Detail';

class HelloWorld_Detail extends Component {
    render() {
        return (
            <div>
                 <Anime_Detail 
          bg = "img/trending/hello-world.jpg"
          comment = "528"
          name="Hello World "
          author ="Ito Tomohiko"
          votes = "1.021.213 Votes"
          intro = "Tương lai ko xa, con người chế tạo được 1 hệ thống giúp ghi lại và tái hiện toàn bộ các sự kiện của thế giới qua từng cột mốc thời gian. Đây là câu chuyện về 1 thanh niên từ tương lai du hành thời gian ngược về năm 2027 để sửa chữa sai lầm trong quá khứ..."
          type ="TV Series"
          studio = "Lerche"
          date= "Nov 07, 2019 to ?"
          status = "Airing"
          genre = " Action, Love, Drama, Romantic"
          scores = "7.31 / 1,515"
          rating = "9.5 / 161 times"
          duration = "97 min"
          quality = "HD"
          views = "10 milion"
        />
            </div>
        );
    }
}

export default HelloWorld_Detail;
