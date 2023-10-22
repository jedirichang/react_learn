import styled from "styled-components";
import { formatCurrency } from '../../utils/helpers'
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiOutlinePencil, HiTrash, HiSquare3Stack3D } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {

  const { image, Name, maxCapacity, regularPrice, discount, id: cabinId } = cabin;
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin()

  const duplicateCabin = () => {
    createCabin({ Name, maxCapacity, regularPrice, discount, image });
  }

  return <>
    <TableRow role='row'>
      <Img src={image} />
      <Cabin>{Name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <div>
        <button style={{ width: '25px' }} onClick={() => setShowForm(show => !show)}> <HiOutlinePencil /> </button>
        <button style={{ width: '25px' }} onClick={() => deleteCabin(cabinId)} disabled={isDeleting}><HiTrash /></button>
        <button style={{ width: '25px' }} onClick={duplicateCabin} disabled={isCreating}><HiSquare3Stack3D /></button>
      </div>
    </TableRow>
    {showForm && <CreateCabinForm cabinToEdit={cabin} />}
  </>
}

export default CabinRow;

