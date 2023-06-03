
export const goToHomePage = (navigate) => {
    navigate("/")
}
export const goToProfilePage = (navigate) => {
    navigate("/profile")
}
export const goToProd = (navigate,id) => {
    navigate(`/product/${id}`)
}