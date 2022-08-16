import React from 'react'

export default function Post({ post }) {
    const { nombre, apellido, comentario } = post;
    return (
        <div className="post">
            <div className="postHeader">
            <div className="decoration">
          <span className="material-icons md-60"> account_circle </span>
        </div>
            <div className="datos">
          <p>
           {nombre} {apellido}
          </p>

         </div>

            </div>
            <div className="postContent">
                <p>{comentario}</p>
            </div>
        </div>
  )
}



