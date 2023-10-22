import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../pages/FormRow";
import { useCreateCabin } from "./useCreateCabin";



function CreateCabinForm({ cabinToEdit = {} }) {

  const { id: editId, ...editValue } = cabinToEdit;

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValue : {}
  });
  const { errors } = formState;

  const { isCreating, createCabin } = useCreateCabin();


  const onSubmit = (data) => {
    createCabin({ ...data }, {
      onSuccess: (data) => {
        console.log(data);
        reset();
      }
    });
  }

  const onError = (errors) => {
    // 
  }


  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>

      <FormRow label="Name" error={errors?.Name?.message}>
        <Input type="text" id="Name" {...register('Name', {
          required: 'This field is required'
        })} />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" {...register('maxCapacity', {
          required: 'This field is required',
          min: {
            value: 1,
            message: 'Capacity should be atlease 1'
          }
        })} />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input type="number" id="regularPrice" {...register('regularPrice', {
          required: 'This field is required',
          min: {
            value: 1,
            message: 'Regular Price should be atlease 1'
          }
        })} />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>

        <Input type="number" id="discount" defaultValue={0} {...register('discount', {
          required: 'This field is required',
          validate: (value) => value <= getValues().regularPrice || 'Discount should be less than regular price'
        })} />
      </FormRow>

      <FormRow label="Description for website" error={errors?.discount?.description}>
        <Textarea type="number" id="description" defaultValue="" {...register('description', {
          required: 'This field is required'
        })} />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.discount?.description}>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>{isEditSession ? 'Edit Cabin' : 'Create New Cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
