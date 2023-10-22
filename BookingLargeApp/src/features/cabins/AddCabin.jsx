import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
    return <Modal>
        <Modal.Open opens='cabin-form'>
            <Button>
                Add new cabin
            </Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
            <CreateCabinForm />
        </Modal.Window>

        {/* <Modal.Open opens='table'>
            <Button>
                Show the table
            </Button>
        </Modal.Open>
        <Modal.Window name='table'>
            <CreateCabinForm />
        </Modal.Window> */}
    </Modal>
    // const [isOpenModal, setIsOpenModal] = useState(false);
    // return (<div>
    //     <Button onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}>Add New Cabin</Button>
    //     {isOpenModal && <Modal onClose={() => setIsOpenModal(false)}>
    //         <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
    //     </Modal>}
    // </div>);
}

export default AddCabin;