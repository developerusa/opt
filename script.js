document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('completionDate').value = today;
});

document.getElementById('optForm').addEventListener('submit', function(event) {
    event.preventDefault();
    

    const completionDate = new Date(document.getElementById('completionDate').value);
    const earlyDate = new Date(completionDate);
    const lastDate = new Date(completionDate);
    const earliestStartDate = new Date(completionDate);
    const latestStartDate = new Date(completionDate);

    earlyDate.setDate(completionDate.getDate() - 90);
    lastDate.setDate(completionDate.getDate() + 60);
    earliestStartDate.setDate(completionDate.getDate() + 1);
    latestStartDate.setDate(completionDate.getDate() + 60);

    document.getElementById('earlyDateText').innerText = earlyDate.toDateString();
    document.getElementById('completionDateText').innerText = completionDate.toDateString();
    document.getElementById('lastDateText').innerText = lastDate.toDateString();
    document.getElementById('earliestStartDate').innerText = earliestStartDate.toDateString();
    document.getElementById('latestStartDate').innerText = latestStartDate.toDateString();

    document.getElementById('earlyDateLabel').innerHTML = `<div class="date">${earlyDate.toDateString()}</div><div class="label">Earliest date</div>`;
    document.getElementById('completionDateLabel').innerHTML = `<div class="date">${completionDate.toDateString()}</div><div class="label">Program end date</div>`;
    document.getElementById('lastDateLabel').innerHTML = `<div class="date">${lastDate.toDateString()}</div><div class="label">Last date</div>`;

    document.getElementById('result').classList.remove('hidden');
});
