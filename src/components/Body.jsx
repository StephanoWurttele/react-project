import React, { Fragment, useState, useEffect } from 'react'
import { Bio } from './User/Bio/Bio'
import { NewBio } from './User/Bio/NewBio'

const BIO = "retoLuiseBios"

export function Body({usuario}) {
    // displayEdit = () => {
    //     var x = document.getElementById("myDIV");
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }
    //   }
    const [bios, setBios] = useState({})
    const updateBio = (content) => {
        // if(usuario in bios)
        let newBios = {...bios}
        newBios[usuario.username] = content
        setBios(newBios)
    }
    
    useEffect(() => {
        const storedBios = JSON.parse(localStorage.getItem(BIO))
        if(storedBios){
            setBios(storedBios)
        }
    }, [])

    useEffect(() => {
        if(bios)
            localStorage.setItem(BIO, JSON.stringify(bios))
    }, [bios])


    if(usuario){
        if(!(usuario.username in bios)){
            return(<NewBio currentBio={""} submitBio={updateBio}/>)
        }
        const bio = bios[usuario.username]
        return (
            <Fragment>
                <Bio bio={bio}/>
                <NewBio currentBio={bio} submitBio={updateBio}/>
            </Fragment>
        )
    }
}
