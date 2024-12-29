let NavWomenOpened: boolean = false

const SetNavWomenOpened = (value:boolean) => {
    NavWomenOpened = value
}
const GetNavWomenOpened = () => {
    return NavWomenOpened 
}

export {
    SetNavWomenOpened,GetNavWomenOpened
}