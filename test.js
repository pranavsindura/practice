let grades = [34,13,65,78,77,98,43,81];

let newGrades = [];
    
    grades.forEach((e)=>{
        if(e<38)
            {
                newGrades.push(e);
            }
        else
            {
                /*
                43, 43%5=3 43/5=8
                */
                let next = (Math.trunc(e/5)+1)*5;
                if(next - e < 3)
                    newGrades.push(next);
                else
                {
                    newGrades.push(e);
                }
                
            }
        
    });

    console.log(newGrades);