import MyPage from "../components/myPage";
import MusicHall from "../components/musicHall";
import FindPage from "../components/findPage";


export const router = {
    routes: [{
        path: "/my",
        components: MyPage
    }, {
        path: "/musichall",
        components: MusicHall
    }, {
        path: "/find",
        components: FindPage
    }]
}