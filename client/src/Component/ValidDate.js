export const ValidDate = (DateString) => {
    const date = new Date(DateString);
    const CurrentDate = new Date();
    const Dates = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    if (CurrentDate.getFullYear() < year) {
        window.alert("Enter Correct year");
        return false;
    }
    if (month > 12) {
        window.alert("Enter Correct month");
        return false;
    }

    if (Dates > 31) {
        window.alert("Enter Correct date");
        return false;
    }
    return true;
};