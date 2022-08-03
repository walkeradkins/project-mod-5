import './AutoCompleteInput.css'
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { getAddressObject } from '../utils';


const PlacesAutocomplete = ({ setLocation }) => {

  const getLocationDetails = async (location) => {
    const results = getGeocode({ address: location }).then((results) => {
      const res = getAddressObject(results[0])
      setLocation(res)
      return res
    });
  }

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (val) => {
    setValue(val, false);
    return getLocationDetails(val)
  };

  return (
    <Combobox
    onSelect={handleSelect}
    aria-labelledby="demo"
    style={{width: '100%'}}
    >
      <ComboboxInput
        value={value}
        onChange={handleInput}
        disabled={!ready}
        className='listing-form__input'
        placeholder='Address'
        required
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} className='combobox__dropdown-text'/>
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default PlacesAutocomplete