import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function SelectBox() {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={newSelection}
        getOptionLabel={(option) => option.country}
        defaultValue={[newSelection[1]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Country"
            placeholder="Country"
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-outlined"
        options={newSelection}
        getOptionLabel={(option) => option.category}
        defaultValue={[newSelection[1]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="categories"
            placeholder="Categories"
          />
        )}
      />
       <Autocomplete
        multiple
        id="tags-outlined"
        options={newSelection}
        getOptionLabel={(option) => option.language}
        defaultValue={[newSelection[1]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="language"
            placeholder="Language"
          />
        )}
      />
    </Stack>
  );
}

// newsdata Categories
const newSelection = [
    {category: "business"},
    {category: "entertainment"},
    {category: "health"},
    {category: "politics"},
    {category: "science"},
    {category: "sports"},
    {category: "technology"},
    {category: "top"},
    {category: "world"},
    {country: "Argentina"},
    {country: "Australia"},
    {country: "Austria"},
    {country: "Belgium"},
    {country: "Brazil"},
    {country: "Bulgaria"},
    {country: "Canada"},
    {country: "China"},
    {country: "Colombia"},
    {country: "Cuba"},
    {country: "Czech Republic"},
    {country: "Egypt"},
    {country: "France"},
    {country: "Germany"},
    {country: "Greece"},
    {country: "Hong Kong"},
    {country: "Hungary"},
    {country: "India"},
    {country: "Indonesia"},
    {country: "Ireland"},
    {country: "Israel"},
    {country: "Italy"},
    {country: "Japan"},
    {country: "Latvia"},
    {country: "Lebanon"},
    {country: "Lithuania"},
    {country: "Malaysia"},
    {country: "France"},
    {country: "Germany"},
    {country: "Greece"},
    {country: "Hong Kong"},
    {country: "Hungary"},
    {country: "India"},
    {country: "Indonesia"},
    {country: "Ireland"},
    {country: "Israel"},
    {country: "Italy"},
    {country: "Japan"},
    {country: "Latvia"},
    {country: "Lebanon"},
    {country: "Lithuania"},
    {country: "Malaysia"},
    {country: "Mexico"},
    {country: "Morocco"},
    {country: "Netherland"},
    {country: "New Zealand"},
    {country: "Nigeria"},
    {country: "North Korea"},
    {country: "Norway"},
    {country: "Pakistan"},
    {country: "Philippines"},
    {country: "Poland"},
    {country: "Portugal"},
    {country: "Romania"},
    {country: "Russia"},
    {country: "Saudi arabia"},
    {country: "Serbia"},
    {country: "Singapore"},
    {country: "Slovakia"},
    {country: "Slovenia"},
    {country: "South Africa"},
    {country: "South Korea"},
    {country: "Spain"},
    {country: "Sweden"},
    {country: "Switzerland"},
    {country: "Taiwan"},
    {country: "Thailand"},
    {country: "Turkey"},
    {country: "United arab emirates"},
    {country: "United kingdom"},
    {country: "United states of america"},
    {country: "Venezuela"},
    {language: "Arabic"},
    {language: "Bosnian"},
    {language: "Bulgarian"},
    {language: "Chinese"},
    {language: "Croatian"},
    {language: "Czech"},
    {language: "Dutch"}, 
    {language: "English"},
    {language: "French"},
    {language: "German"},
    {language: "Greek"}, 
    {language: "Hebrew"},
    {language: "Hindi"},
    {language: "Hungarian"},
    {language: "Indonesian"},
    {language: "Italian"},
    {language: "Japanese"}, 
    {language: "Korean"},
    {language: "Latvian"},
    {language: "Lithuanian"},
    {language: "Malay"}, 
    {language: "Norwegian"},
    {language: "Polish"},
    {language: "Portuguese"},
    {language: "Romanian"},
    {language: "Russian"},
    {language: "Serbian"},
    {language: "Slovak"}, 
    {language: "Slovenian"},
    {language: "Spanish"},
    {language: "Swedish"},
    {language: "Thai"},
    {language: "Turkish"},
    {language: "Ukrainian"},  
]

