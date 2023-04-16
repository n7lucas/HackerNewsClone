
import Stories from "./pages/stories.js"
import Item from "./pages/item.js"
import Favorites from "./pages/favorite.js"
const router = new Navigo(null, true, '#')
console.log(router)

export default class RouterHandler {
    constructor () {
        this.createRoutes()
    } 

    //Forneco o path e a pagina no array routes, depois percorro a lista de routes e verifico qual esta ativa na url
    //através da funcao route.on() that accepts 2 parameter, the first is the path in the URL, and the second what will be executed,, and in this case
    // is a simple console.log
    createRoutes() {
        const routes = [
            { path: '/', page: Stories},
            {path: '/new', page: Stories},
            {path: '/ask', page: Stories},
            {path: '/show', page: Stories},
            {path: '/item', page: Item},
            {path: '/favorites', page: Favorites}
        ];


        routes.forEach(({path,page}) => { 
            router.on(path, () => { 
                page(path);
            }).resolve();
        })
    }
}
