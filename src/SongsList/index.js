import './index.css'

const SongsList = props => {
  const {detailsSong, onButtonClick} = props
  const {id, imageUrl, name, genre, duration} = detailsSong

  const onButton = () => {
    onButtonClick(id)
  }

  return (
    <li className="row-space">
      <div className="merged-flex">
        <img src={imageUrl} alt="track" className="img-height-width" />
        <div>
          <p className="p-color1">{name}</p>
          <p className="p-color2">{genre}</p>
        </div>
      </div>
      <div className="merged-flex">
        <p className="p-color1 pp">{duration}</p>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="track"
            testid="delete"
            className="img1"
            onClick={onButton}
          />
        </button>
      </div>
    </li>
  )
}

export default SongsList
