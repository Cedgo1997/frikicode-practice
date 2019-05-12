function check(e) {
    var ch = e.target.firstElementChild.checked
    document.querySelectorAll(".inputs").forEach(e => e.checked = false)
    if (!ch) {
        e.target.firstElementChild.checked = true
    } else {
        e.target.firstElementChild.checked = false 
    }
}