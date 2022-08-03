import './AutoCompleteInput.css'
import usePlacesAutocomplete, {
  getGeocode, getLatLng
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { getAddressObject } from '../utils';

const PlacesAutocomplete = ({ setLocation }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  const getLocationDetails = async (location) => {
    const results = getGeocode({ address: location }).then((results) => {
      const res = getAddressObject(results[0])
      const { lat, lng } = getLatLng(results[0])
      res['coordinates'] = { lat, lng }
      setLocation(res)
      return res
    });
  }

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
      () => {
        setValue(description, false);
        clearSuggestions();
        getLocationDetails(description)
      };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)} className='autocomplete__suggestion'>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div
      ref={ref}
      style={{ width: '100%' }}
      className='autocomplete__container'
    >
      <input
        value={value}
        className='listing-form__input'
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul className='location-suggestion__dropdown'>{renderSuggestions()}</ul>}
    </div>
  );
};















// const PlacesAutocomplete = ({ setLocation }) => {

// const getLocationDetails = async (location) => {
//   const results = getGeocode({ address: location }).then((results) => {
//     const res = getAddressObject(results[0])
//     setLocation(res)
//     return res
//   });
// }

//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//   } = usePlacesAutocomplete();

//   const handleInput = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSelect = (val) => {
//     setValue(val, false);
//     return getLocationDetails(val)
//   };

//   return (
//     <>
//       <Combobox
//     onSelect={handleSelect}
//     aria-labelledby="demo"
//     style={{width: '100%'}}
//     >
//       <ComboboxInput
//         value={value}
//         onChange={handleInput}
//         disabled={!ready}
//         className='listing-form__input'
//         placeholder='Address'
//         required
//       />
//       <ComboboxPopover>
//         <ComboboxList>
//           {status === "OK" &&
//             data.map(({ place_id, description }) => (
//               <ComboboxOption key={place_id} value={description} className='combobox__dropdown-text'/>
//             ))}
//         </ComboboxList>
//       </ComboboxPopover>
//     </Combobox>
//     </>
//   );
// };

export default PlacesAutocomplete