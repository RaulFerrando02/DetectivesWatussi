const paneles = [
    {
        palabra: "linterna",
        contenido: "Busca la siguiente pista cerca del agua"
    },
    {
        palabra: "brujula",
        contenido: "La torre más alta te espera"
    },
    {
        palabra: "cadiz",
        contenido: "Ya casi estáis"
    },
    {
        palabra: "pirata",
        contenido: "Los corsarios conocían este lugar"
    },
    {
        palabra: "oceano",
        contenido: "Escuchad las olas"
    },
    {
        palabra: "explora",
        contenido: "Seguid avanzando"
    },
    {
        palabra: "campamento",
        contenido: "Última prueba"
    },
    {
        palabra: "victoria",
        contenido: "Mapa final desbloqueado"
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
        <h2>Panel ${index + 1} ✅</h2>
        <p>${panel.contenido}</p>
      `
        } else {
            div.innerHTML = `
        <h2>Panel ${index + 1} 🔒</h2>
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