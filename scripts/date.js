const DAYS = 5;

function formatDate(date) {

  const dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  const mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  const yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return formatDate(dateCopy);
}

const dateAgo = getDateAgo(dateToday, DAYS);

document.getElementById("days-ago").innerHTML = dateAgo + "";
