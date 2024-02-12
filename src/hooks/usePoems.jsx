import { useContext } from "react";
import PoemContext from "../context/PoemPorivider";

const usePoems = () => {
    return useContext(PoemContext);
}

export default usePoems;