import Form from '../../ui/Form';
import FormRow from '../../pages/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';
import Spinner from '../../ui/Spinner'
import { useUpdateSettings } from './useUpdateSettings';

function UpdateSettingsForm() {

  const { isLoading, settings: {
    minBookingLength,
    maxBookingLength,
    maxGuestPerBooking,
    breakfastPrice,
  } = {} } = useSettings();

  const { updatingSettings, updateSettings } = useUpdateSettings();

  const handleSettingsUpdate = (event, key) => {
    const { value } = event.target;
    updateSettings({ [key]: value });
  }

  if (isLoading)
    return <Spinner />

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' disabled={updatingSettings} onBlur={(e) => { handleSettingsUpdate(e, 'minBookingLength'); }} defaultValue={minBookingLength} />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' disabled={updatingSettings} onBlur={(e) => { handleSettingsUpdate(e, 'maxBookingLength'); }} defaultValue={maxBookingLength} />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' disabled={updatingSettings} onBlur={(e) => { handleSettingsUpdate(e, 'maxGuestPerBooking'); }} defaultValue={maxGuestPerBooking} />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' disabled={updatingSettings} onBlur={(e) => { handleSettingsUpdate(e, 'breakfastPrice'); }} id='breakfast-price' defaultValue={breakfastPrice} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
