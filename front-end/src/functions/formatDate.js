const formatDate = (date) => {
  const newDate = (date).split("T")
  const formatDate = newDate[0].split("-")
  const brFormatDate = `${formatDate[2]}/${formatDate[1]}/${formatDate[0]}`
  return brFormatDate
}

export default formatDate;