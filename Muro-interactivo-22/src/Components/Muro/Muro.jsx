import React from 'react'
import Publicacion from '../Post/Post'

export default function Muro() {
    const posts=
        [{
            nombre:"Arian",
            apellido: "Tary",
            comentario:"Hey, espero que nos veamos pronto o que que por lo menos nos sentemos a conversar"
        }, {
            nombre:"Ester",
            apellido: "Rodriguez",
            comentario:"Bendecida"
        },
        {
            nombre:"Maximo",
            apellido: "Mendez",
            comentario:"Vamos para La Romana"
        }, 
        {
            nombre:"Helena",
            apellido: "Reyez",
            comentario:"Yei"
        },
        {
            nombre:"Helena",
            apellido: "Reyez",
            comentario:"Yei"
        }
        ]
    
    return (
        <div  className="muro">
            
        {posts?.map((Post) => (
        <Publicacion
          post={Post}
          key={Post.comentario + Math.random(1000)}
        />
      ))}
        </div>
    )
}
