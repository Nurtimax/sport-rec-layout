import BagIcon from "../../theme/icons/BagIcon"
import BuildingIcon from "../../theme/icons/BuildingIcon"
import HomeIcon from "../../theme/icons/HomeIcon"
import TrophyIcon from "../../theme/icons/TrophyIcon"
import UsersIcon from "../../theme/icons/UsersIcon"

export const PAGES = [
   {
      id: 1,
      name: "Лента",
      icon: <HomeIcon />
   },
   {
      id: 2,
      name: "Маркетплейс",
      icon: <BagIcon />
   },
   {
      id: 3,
      name: "Рейтинги",
      icon: <UsersIcon />
   },
   {
      id: 4,
      name: "Cоревнования",
      icon: <TrophyIcon />
   },
   {
      id: 5,
      name: "Организации",
      icon: <BuildingIcon />
   }
]

export const settings = ["Profile", "Account", "Dashboard", "Logout"]
