export default function Calendar() {
    const getDaysInMonth = (date = new Date()) => {
        const days = new Array(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()).fill(0).map((_, i) => i + 1);
        // get last days of the past month
        const firstDayOfTheMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const lastDayOfThePastMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        const lastMonthDays = new Array(firstDayOfTheMonth).fill(0).map((_, i) => lastDayOfThePastMonth - i).reverse();
        // get next days of the next month
        const lastDayOfTheMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        const nextMonthDays = new Array(6 - lastDayOfTheMonth).fill(0).map((_, i) => i + 1);
        return {
            last: lastMonthDays,
            actual: days,
            next: nextMonthDays,
        };
    };

    const days = getDaysInMonth();
    return (
        <main className="grid grid-rows-5 grid-cols-7 flex-1">
            {days.last.map((day) => {
                return (
                    <div key={day} className="flex justify-center items-center">
                        {day}
                    </div>
                );
            })}
            {days.actual.map((day) => {
                return (
                    <div key={day} className="flex justify-center items-center">
                        {day}
                    </div>
                );
            })}
            {days.next.map((day) => {
                return (
                    <div key={day} className="flex justify-center items-center">
                        {day}
                    </div>
                );
            })}
        </main>
    );
}
