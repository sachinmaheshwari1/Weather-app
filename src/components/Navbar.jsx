import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";


const Navbar = ({ onSearch }) => {

    const [searchCity, setSearchCity] = useState("")
    
  const handleSearchClick = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
    }
  };
  return (
    <nav
    style={{
      justifyContent: "space-between",
      display: "flex",
      alignItems: "center",
      marginTop: "10px",
      padding: "10px",
      paddingLeft: "30px",
      paddingRight: "30px",
      background: "linear-gradient(90deg, rgba(255, 0, 150, 1) 0%, rgba(0, 204, 255, 1) 100%)",
      borderRadius: "8px"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
        <FilterDramaIcon />
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Weather</p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <TextField
          variant="outlined"
          placeholder="Search city "
          size="small"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          style={{
            backgroundColor: "white",
            borderRadius: "0.4rem",
            width: "22rem",
          }}
        />
        <Button
          variant="contained"
           onClick={handleSearchClick}
          style={{ borderRadius: "6px", backgroundColor: "#4B5550" }}
        >
          Search
        </Button>
      </div>

      <div
        style={{
          marginTop: "1rem",
          fontSize: "16px",
          fontWeight: "700",
          
          height: "35px",
          width: "150px",
          color: "white",
          gap: "2px",
          borderRadius: "6px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
       
      </div>
    </nav>
  );
};

export default Navbar;
