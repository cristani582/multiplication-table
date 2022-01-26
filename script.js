function calcular() {
    let num = window.document.getElementById('txtn')
    let n = Number(num.value)
    let t = window.document.getElementById('tab')
    if (num.value.length == 0) {
        window.alert('[ERROR] Plase, enter a number')
    } else {
        t.innerHTML = ''
        for (let c = 1; c <= 100; c++) {
            let op = document.createElement('option')
            op.text = `${n} x ${c} = ${n * c}`
            t.value = `t${c}`
            t.appendChild(op)
        }
    }
}
