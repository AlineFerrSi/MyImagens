import { LuAlignJustify } from "react-icons/lu";
import { useState } from "react";
import ModalMainDropDown from "../ModalMainDropDown";


const MainDropDown = () => {

    const [openModal, setOpenModal] = useState(false)

    function HandleopenModal() {
        console.log(openModal)
        setOpenModal(true)
    }



    return (
        <>
            <div style={{ position: "relative", display: "inline-block" }}>
                {/* Botão de Três Pontinhos */}
                <button onClick={() => { HandleopenModal() }} style={{ fontSize: "40px", cursor: "pointer", background: "none", border: "none", color: "#fff" }}>
                    <LuAlignJustify />
                </button>
            </div>
            {openModal && <ModalMainDropDown openModal={setOpenModal}  />}
        </>
    )
}

export default MainDropDown;
