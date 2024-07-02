export class Router{
    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event){
        event = event || window.event
        event.preventDefault()
        window.history.pushState({}, "", event.target.href)
        this.handle()
    }

    handle(){
        const { pathname } = window.location

        const route = this.routes[pathname] || this.routes[404]
        if(route == "/pages/exploration.html"){
           // document.body.classList.remove
            //document.body.classList.add('tema1')
            document.body.style.backgroundImage = "url('/img/exploration.png')";
          // document.body.classList.add('dimensaoImagem')
            
        }else if (route == "/pages/universe.html"){
            document.body.style.backgroundImage = "url('/img/universe.png')";
        }else{
            document.body.style.backgroundImage = "url('/img/home.svg')";
        }
        fetch(route).then(data => data.text()).then(html => {document.querySelector('#app').innerHTML = html})
    }
}