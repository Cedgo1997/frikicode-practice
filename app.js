function check(e) {
    console.log(e.target.firstElementChild)
    var ch = e.target.firstElementChild.checked
    document.querySelectorAll(".inputs").forEach(e => e.checked = false)
    if (!ch) {
        e.target.firstElementChild.checked = true
    } else {
        e.target.firstElementChild.checked = false 
    }
}