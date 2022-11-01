function getNumberofDays (start, end) {
     const date1= new Date(start);
     const date2 = new Date(end);
    
 const oneDay = 1000 * 60 * 60 * 24;
    
 const diffInTime = date2.getTime() - date1.getTime();
 const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
    }
    console.log(getNumberofDays("12/29/2018", "1/1/2019"));