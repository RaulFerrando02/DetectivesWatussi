const paneles = [
    {
        palabra: "koala",
        contenido: "Busca la siguiente pista cerca del agua"
    },
    {
        palabra: "diamantes-comodín-corazones-picas-tréboles",
        contenido: "La torre más alta te espera"
    },
    {
        palabra: "banderín",
        contenido: "Ya casi estáis"
    },
    {
        palabra: "107",
        contenido: "Los corsarios conocían este lugar"
    },
    {
        palabra: "cuarenta y tres",
        contenido: "Escuchad las olas"
    }
]

const contenedor = document.getElementById("paneles")

function render() {
    contenedor.innerHTML = ""

    let desbloqueados = 0

    paneles.forEach((panel, index) => {
        const abierto = localStorage.getItem(`panel_${index}`) === "true"

        if (abierto) desbloqueados++

        const div = document.createElement("div")
        div.className = "panel"

        if (abierto) {
            div.innerHTML = `
        <h2>Localización ${index + 1} ✅</h2>
        <p>${panel.contenido}</p>
      `
        } else {
            div.innerHTML = `
        <h2>Localización ${index + 1} 🔒</h2>
        <input type="text" id="input_${index}" placeholder="Palabra clave">
        <button onclick="desbloquear(${index})">Desbloquear</button>
      `
        }

        contenedor.appendChild(div)
    })

    if (desbloqueados === paneles.length) {
        document.getElementById("final").classList.remove("hidden")
    }
}

function desbloquear(index) {
    const input = document
        .getElementById(`input_${index}`)
        .value
        .toLowerCase()
        .trim()

    if (input === paneles[index].palabra) {
        localStorage.setItem(`panel_${index}`, "true")
        render()
    } else {
        alert("Palabra incorrecta")
    }
}

render()