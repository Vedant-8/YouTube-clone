import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from "../utils/constants";
import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{ position:'sticky', top:0, justifyContent:'space-between'}}>
        <Link to="/" style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <img src={logo} alt='logo' height={45} />
            <h1 style={{ color:'white', fontWeight:'bold', fontFamily:'sans-serif'}}> YouTube by Vedant Kulkarni</h1>
        </Link>
        <SearchBar />
    </Stack>
)
export default Navbar