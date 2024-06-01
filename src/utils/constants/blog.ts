import image1 from "../../assets/image 29 (1).jpg"
import image2 from "../../assets/image 29.jpg"
import image3 from "../../assets/image 30 (1).jpg"
import image4 from "../../assets/image 30.jpg"
import image5 from "../../assets/image 31 (1).jpg"
import image6 from "../../assets/image 31.jpg"

import avatar1 from "../../assets/avatar-1.png"
import avatar2 from "../../assets/avatar-2.png"

import {IBlog} from "../../types/blog"

export const BLOGS: IBlog[] = [
   {
      id: 1,
      name: "Илья Бессонов дал интервью для телеканала Россия-1",
      description:
         "Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал методики своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и ...Читать больше",
      images: [image4, image1, image2, image3, image6, image5],
      todo: "Спортивная Борьба 12 марта, 2024 в 16:03",
      viewCount: 4100,
      comments: [
         {
            id: 2,
            user: {
               avatar: avatar1,
               name: "Вадим Давыдов"
            },
            comment: "Наконец-то! Рад, что он вернулся в спорт",
            created: "15 минут назад",
            answer: [
               {
                  id: 1,
                  user: {
                     avatar: avatar2,
                     name: "Артем Еременко"
                  },
                  answer: [],
                  comment: "Вадим, согласен! Уже давно ждал интервью!",
                  created: "30 секунд назад"
               }
            ]
         }
      ]
   }
]

export function intlFormat(num: number) {
   return new Intl.NumberFormat("en-EN", {
      notation: "compact",
      compactDisplay: "short"
   }).format(Math.round(num * 10) / 10)
}
