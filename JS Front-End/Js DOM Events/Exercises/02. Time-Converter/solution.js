function attachEventsListeners() {
    const inputButtonElements = document.querySelectorAll('input[type=button]');
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    
    let total = 0;

    for (const button of inputButtonElements) {
        const parentElement = button.parentElement;
        const nameOfLabel = parentElement.querySelector('label').textContent;

        button.addEventListener('click', (e) => {
            switch(nameOfLabel) {
                case "Days: ":
                    hoursInput.value = Number(daysInput.value) * 24;
                    minutesInput.value = Number(daysInput.value) * 1440;
                    secondsInput.value = Number(daysInput.value) * 86400;
                    break;
                case "Hours: ":
                    daysInput.value = Number(hoursInput.value) / 24;
                    minutesInput.value = Number(hoursInput.value) * 60;
                    secondsInput.value = Number(hoursInput.value) * 3600;
                    break;
                case "Minutes: ":
                    daysInput.value = Number(minutesInput.value) / 1440;
                    hoursInput.value = Number(minutesInput.value) / 60;
                    secondsInput.value = Number(minutesInput.value) * 60;
                    break;
                case "Seconds: ":
                    daysInput.value = Number(secondsInput.value) / 86400;
                    hoursInput.value = Number(secondsInput.value) / 3600;
                    minutesInput.value = Number(secondsInput.value) / 60;
                    break;
            }
        });
    }
}