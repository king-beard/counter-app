import { Fragment } from "react"
import propTypes from 'prop-types';

export const FirstApp = ({title, subTitle}) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </Fragment>
  )
}

FirstApp.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string,
}

FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "No hay subtitulo"
}