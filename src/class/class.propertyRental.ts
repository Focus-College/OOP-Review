import { Property} from './class.property'

export class PropertyRental extends Property{

    _termStart: Date
    _termEnd: Date
    _lengthOfTerm: number // duration of days between termStart and termEnd


    constructor( termStart: Date,termEnd: Date) {
        super();

        if (compareDate(termStart, termEnd) === -1) {
            this._termStart = termStart;
            this._termEnd = termEnd;
            this._lengthOfTerm = this.rentLength()
        }
        else console.log("Error !!! pls, try again")

    }

    rentLength () :number{

        // var millisecondsPerDay = 24 * 60 * 60 * 1000;
        // return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;

        const termStart = this._termStart.getTime();
        const termEnd =this._termEnd.getTime();

        console.log(termStart , termEnd)


        return (termEnd - termStart) / (1000 * 60 * 60 * 24);
    }


    

    // determines if the term is over on date or now if Date is not provided
    isTermOver( on?:Date ): boolean {

        
        let date: Date = new Date();  
        
        if (!on) {

            return false

        }
        else{
            switch(compareDate(date,on)){

                case 0  : return true; break
                case 1  : return true; break
                case -1 : return false; break
                default : return false;break
    
            }

        }
        
    }

    // number of days left in term from date or now if Date is not provided 
    leftInTerm( on?:Date ): number{

        let date: Date = new Date();  

        return (date.getDay() - on.getDay()) / (1000 * 60 * 60 * 24);
    }

   

}

function compareDate(today: Date, end: Date): number
{
  // With Date object we can compare dates them using the >, <, <= or >=.
  // The ==, !=, ===, and !== operators require to use date.getTime(),
  // so we need to create a new instance of Date with 'new Date()'
  const _today = new Date(today); 
  const _end = new Date(end);

  // Check if the dates are equal
  const same = _today.getTime() === _end.getTime();
  if (same) return 0;

  // Check if the first is greater than second
  if (_today > _end) return 1;
 
  // Check if the first is less than second
  if (_today < _end) return -1;
}