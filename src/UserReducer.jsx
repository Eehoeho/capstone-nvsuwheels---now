import { createSlice } from "@reduxjs/toolkit";
import { personList} from "./db";

const personSlice = createSlice({
    name: "person",
    initialState: personList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        editUser: (state, action) => {
            const {pid, fullname, idnumber, applicant, position, courseandyear, address, mobilenumber, driverslicense, dateissued, expiry,vehiclewheels, platenumber, make, yearmodel, color, officialreceiptnumber, ORnumberdateissued, ORnumberexpirydate, authorizeperson1, authorizeperson2, authorizeperson3, authorizeperson4, authorizeperson5, authorizeperson6, authorizeperson7, authorizeperson8, authorizeperson9, authorizeperson10,} = action.payload;
            const uu = state.find(user => user.pid === pid);
            if (uu){
                uu.fullname = fullname;
                uu.idnumber = idnumber;
                uu.applicant = applicant;
                uu.position = position;
                uu.courseandyear = courseandyear;
                uu.address = address;
                uu.mobilenumber = mobilenumber;
                uu.driverslicense = driverslicense;
                uu.dateissued = dateissued;
                uu.expiry = expiry;
                uu.vehiclewheels = vehiclewheels;
                uu.platenumber = platenumber;
                uu.make = make;
                uu.yearmodel = yearmodel;
                uu.color = color;
                uu.officialreceiptnumber = officialreceiptnumber;
                uu.ORnumberdateissued = ORnumberdateissued;
                uu.ORnumberexpirydate = ORnumberexpirydate;
                uu.authorizeperson1 = authorizeperson1;
                uu.authorizeperson2 = authorizeperson2;
                uu.authorizeperson3 = authorizeperson3;
                uu.authorizeperson4 = authorizeperson4;
                uu.authorizeperson5 = authorizeperson5;
                uu.authorizeperson6 = authorizeperson6;
                uu.authorizeperson7 = authorizeperson7;
                uu.authorizeperson8 = authorizeperson8;
                uu.authorizeperson9 = authorizeperson9;
                uu.authorizeperson10 = authorizeperson10;
            }
        },
        deleteUser: (state, action) => {
            const {pid} = action.payload;
            const uu = state.find(user => user.pid === pid);
            if(uu) {
                return state.filter(f => f.pid !== pid);
            } 
        }
    }
})
export const {addUser, editUser, deleteUser} = personSlice.actions;
export default personSlice.reducer;