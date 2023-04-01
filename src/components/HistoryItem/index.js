import './index.css'

const HistoryItem = props => {
  const {historySuggestion, deleteHistory} = props
  const {id, title, logoUrl, domainUrl, timeAccessed} = historySuggestion

  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-item">
      <p className="timeAccessed">{timeAccessed}</p>
      <div className="history-container">
        <div className="logo-domain-container">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <div>
          <button
            className="delete-button"
            onClick={onDelete}
            type="button"
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default HistoryItem
